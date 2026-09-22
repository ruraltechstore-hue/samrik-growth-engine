import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendTemplateEmail } from "@/lib/email-templates/send-email";

const base = { name: z.string().trim().min(2, "Enter your full name").max(100), company: z.string().trim().min(2, "Enter your company name").max(120), phone: z.string().trim().min(7, "Enter a valid phone number").max(30), message: z.string().trim().min(10, "Please add a little more detail").max(1200), email: z.string().trim().email("Enter a valid email address").max(255) };
export const contactSchema = z.object({ ...base, subject: z.string().trim().min(3, "Enter a subject").max(150) });
export const partnerSchema = z.object({ ...base, industry: z.string().trim().min(2, "Enter your industry").max(100), website: z.union([z.literal(""), z.string().trim().url("Enter a complete website URL")]), service: z.enum(["SaaS Sales", "Logistics Sales", "Educational Services", "Rural Tech Store", "Lead Generation", "Business Development", "Other"], { required_error: "Select a service" }), requirement: z.string().trim().min(5, "Describe your expected requirement").max(300) });

export type ContactData = z.infer<typeof contactSchema>;
export type PartnerData = z.infer<typeof partnerSchema>;

async function deliverEnquiry(formType: string, senderName: string, senderEmail: string, rows: Array<{ label: string; value: string }>) {
  const idempotencyKey = `${formType.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}-${crypto.randomUUID()}`;
  try {
    // Notify the Samrik Solutions inbox; replies go straight to the sender.
    await sendTemplateEmail("enquiry-notification", "info@samrik.co.in", {
      templateData: { formType, name: senderName, rows },
      idempotencyKey: `${idempotencyKey}-notify`,
      replyTo: senderEmail,
    });
    // Confirm receipt to the sender. A suppressed sender is an expected no-op.
    await sendTemplateEmail("enquiry-confirmation", senderEmail, {
      templateData: { name: senderName.split(" ")[0] ?? senderName, formType: formType.toLowerCase() },
      idempotencyKey: `${idempotencyKey}-confirm`,
    });
  } catch (error) {
    console.error("email send failed", error instanceof Error ? { name: error.name, message: error.message, code: (error as { code?: string }).code } : error);
    throw error;
  }
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    await deliverEnquiry("Contact Form", data.name, data.email, [
      { label: "Full Name", value: data.name },
      { label: "Company", value: data.company },
      { label: "Email", value: data.email },
      { label: "Phone", value: data.phone },
      { label: "Subject", value: data.subject },
      { label: "Message", value: data.message },
    ]);
    return { ok: true };
  });

export const submitPartnershipForm = createServerFn({ method: "POST" })
  .inputValidator((data) => partnerSchema.parse(data))
  .handler(async ({ data }) => {
    await deliverEnquiry("Partnership Request", data.name, data.email, [
      { label: "Full Name", value: data.name },
      { label: "Company", value: data.company },
      { label: "Work Email", value: data.email },
      { label: "Phone", value: data.phone },
      { label: "Industry", value: data.industry },
      { label: "Website", value: data.website || "—" },
      { label: "Service Required", value: data.service },
      { label: "Expected Requirement", value: data.requirement },
      { label: "Message", value: data.message },
    ]);
    return { ok: true };
  });
