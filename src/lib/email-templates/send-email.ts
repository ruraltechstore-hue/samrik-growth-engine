import * as React from 'react'
import { render } from '@react-email/render'
import { TEMPLATES } from './registry'

// Server-only: reads Resend credentials from environment variables.
// Never import from client components.

const SITE_NAME = "Samrik Solutions"

export type SendTemplateEmailResult =
  | { sent: true; id?: string }
  | { sent: false; reason: 'recipient_suppressed' | 'missing_api_key' }

export interface SendTemplateEmailOptions {
  templateData?: Record<string, any>
  /** Dedupes retries of the same logical send; defaults to a random UUID (no dedupe). */
  idempotencyKey?: string
  replyTo?: string
}

/**
 * Renders a registered React Email template and sends it through Resend.
 * Requires RESEND_API_KEY and RESEND_FROM_EMAIL to be set.
 */
export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {}
): Promise<SendTemplateEmailResult> {
  const apiKey = process.env['RESEND_API_KEY']
  if (!apiKey || apiKey === 'your_resend_api_key_here') {
    throw new Error('RESEND_API_KEY is not configured. Add it to your .env file.')
  }

  const from = process.env['RESEND_FROM_EMAIL'] || `Samrik Solutions <info@samrik.co.in>`

  const template = TEMPLATES[templateName]
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`
    )
  }

  // Template-level `to` takes precedence — notification templates always
  // send to their fixed address.
  const recipient = template.to || to
  if (!recipient) {
    throw new Error('Recipient is required (the template defines no fixed recipient)')
  }

  const templateData = options.templateData ?? {}
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  const body: Record<string, any> = {
    from,
    to: [recipient],
    subject,
    html,
    text,
    headers: {
      'X-Idempotency-Key': options.idempotencyKey || crypto.randomUUID(),
    },
  }
  if (options.replyTo) {
    body['reply_to'] = options.replyTo
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    let message = `Resend request failed (${response.status}): ${errorText}`
    try {
      const parsed = JSON.parse(errorText)
      if (parsed?.message) {
        message = parsed.message
      }
    } catch {
      // keep raw text
    }
    throw new Error(message)
  }

  const result = await response.json() as { id?: string }
  const id = result.id
  return id ? { sent: true, id } : { sent: true }
}
