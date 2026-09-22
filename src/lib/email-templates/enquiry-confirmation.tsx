import { Body, Container, Head, Heading, Hr, Html, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface EnquiryConfirmationProps {
  name?: string
  formType?: string
}

function EnquiryConfirmation({ name = 'there', formType = 'enquiry' }: EnquiryConfirmationProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f4f6f8', fontFamily: 'Arial, sans-serif', margin: 0, padding: '24px 0' }}>
        <Container style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', maxWidth: '560px', margin: '0 auto', padding: '32px' }}>
          <Heading style={{ color: '#0b1f3a', fontSize: '20px', margin: '0 0 16px' }}>
            Thank you for contacting Samrik Solutions
          </Heading>
          <Text style={{ color: '#33445c', fontSize: '14px', lineHeight: '22px', margin: '0 0 12px' }}>
            Hi {name},
          </Text>
          <Text style={{ color: '#33445c', fontSize: '14px', lineHeight: '22px', margin: '0 0 12px' }}>
            We have received your {formType} and our team will get back to you soon.
          </Text>
          <Text style={{ color: '#33445c', fontSize: '14px', lineHeight: '22px', margin: 0 }}>
            Best regards,
            <br />
            Samrik Solutions
          </Text>
          <Hr style={{ borderColor: '#e2e8f0', margin: '24px 0 16px' }} />
          <Text style={{ color: '#8a97a8', fontSize: '12px', margin: 0 }}>
            Samrik Solutions · Bahadurpally, Hyderabad · info@samrik.co.in
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: EnquiryConfirmation,
  subject: 'Thank you for contacting Samrik Solutions',
  displayName: 'Confirmation (to the sender)',
  previewData: { name: 'Priya', formType: 'enquiry' },
} satisfies TemplateEntry
