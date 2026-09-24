import { sendTemplateEmail } from "@/lib/email-templates/send-email";

// Server-only helper: emails plan registration details to the Samrik Solutions
// inbox via Resend. Email failures are logged but never break the payment flow.

const TEAM_INBOX = "info@samrik.co.in";

export interface RegistrationEmailDetails {
  formType: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  plan: string;
  priceLabel: string;
  reference: string;
  referenceLabel: string;
  status: string;
  paymentId?: string | null;
  college?: string;
  course?: string;
  internshipStage?: string;
}

export async function notifyRegistration(details: RegistrationEmailDetails): Promise<void> {
  const rows: Array<{ label: string; value: string }> = [
    { label: "Full Name", value: details.customerName },
    { label: "Email", value: details.customerEmail },
    { label: "Mobile Number", value: details.customerPhone },
    ...(details.college ? [{ label: "College/University", value: details.college }] : []),
    ...(details.course ? [{ label: "Course/Program", value: details.course }] : []),
    ...(details.internshipStage ? [{ label: "Internship Stage", value: details.internshipStage }] : []),
    { label: "Selected Plan", value: details.plan },
    { label: "Amount", value: details.priceLabel },
    { label: details.referenceLabel, value: details.reference },
    ...(details.paymentId ? [{ label: "Razorpay Payment ID", value: details.paymentId }] : []),
    { label: "Payment Status", value: details.status },
    { label: "Registration Date", value: new Date().toISOString() },
  ];

  try {
    await sendTemplateEmail("enquiry-notification", TEAM_INBOX, {
      templateData: { formType: details.formType, name: details.customerName, rows },
      idempotencyKey: `${details.reference}-${details.status.toLowerCase().replace(/\s+/g, "-")}`,
      replyTo: details.customerEmail,
    });
  } catch (error) {
    console.error(
      "registration email failed",
      error instanceof Error ? { name: error.name, message: error.message } : error,
    );
  }
}
