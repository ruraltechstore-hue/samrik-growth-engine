import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, partnerSchema, submitContactForm, submitPartnershipForm, type ContactData, type PartnerData } from "@/lib/forms.functions";

const fieldClass = "h-11 bg-card";

function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return <div><label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>{children}{error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}</div>;
}

function Success({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-72 flex-col items-center justify-center border border-border bg-accent p-8 text-center" role="status"><CheckCircle2 className="size-10 text-accent-foreground" /><p className="mt-4 max-w-md font-display text-xl font-bold text-accent-foreground">{children}</p></div>;
}

function SubmitError({ message }: { message: string }) {
  return <p className="border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">{message}</p>;
}

export function ContactForm() {
  const submit = useServerFn(submitContactForm);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });
  if (sent) return <Success>Thank you for contacting Samrik Solutions. Our team will get back to you soon.</Success>;
  return <form onSubmit={handleSubmit(async (values) => { setSubmitError(undefined); try { await submit({ data: values }); setSent(true); } catch { setSubmitError("Something went wrong while sending your message. Please try again or email us directly at info@samrik.co.in."); } })} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" error={errors.name?.message}><Input {...register("name")} className={fieldClass} placeholder="Your name" /></Field><Field label="Company Name" error={errors.company?.message}><Input {...register("company")} className={fieldClass} placeholder="Company name" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Email" error={errors.email?.message}><Input {...register("email")} className={fieldClass} type="email" placeholder="name@company.com" /></Field><Field label="Phone Number" error={errors.phone?.message}><Input {...register("phone")} className={fieldClass} type="tel" placeholder="Phone number" /></Field></div>
    <Field label="Subject" error={errors.subject?.message}><Input {...register("subject")} className={fieldClass} placeholder="How can we help?" /></Field>
    <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} className="min-h-36 bg-card" placeholder="Tell us about your requirement" /></Field>
    {submitError && <SubmitError message={submitError} />}
    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send Message"}</Button>
  </form>;
}

export function PartnershipForm() {
  const submit = useServerFn(submitPartnershipForm);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PartnerData>({ resolver: zodResolver(partnerSchema) });
  if (sent) return <Success>Your partnership request has been submitted. Our team will be in touch soon.</Success>;
  return <form onSubmit={handleSubmit(async (values) => { setSubmitError(undefined); try { await submit({ data: values }); setSent(true); } catch { setSubmitError("Something went wrong while sending your request. Please try again or email us directly at info@samrik.co.in."); } })} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" error={errors.name?.message}><Input {...register("name")} className={fieldClass} placeholder="Your name" /></Field><Field label="Company Name" error={errors.company?.message}><Input {...register("company")} className={fieldClass} placeholder="Company name" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Work Email" error={errors.email?.message}><Input {...register("email")} className={fieldClass} type="email" placeholder="name@company.com" /></Field><Field label="Phone Number" error={errors.phone?.message}><Input {...register("phone")} className={fieldClass} type="tel" placeholder="Phone number" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Industry" error={errors.industry?.message}><Input {...register("industry")} className={fieldClass} placeholder="Your industry" /></Field><Field label="Website" error={errors.website?.message}><Input {...register("website")} className={fieldClass} type="url" placeholder="https://company.com" /></Field></div>
    <Field label="Service Required" error={errors.service?.message}><select {...register("service")} defaultValue="" className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"><option value="" disabled>Select a service</option><option>SaaS Sales</option><option>Logistics Sales</option><option>Educational Services</option><option>Rural Tech Store Services</option><option>Lead Generation</option><option>Business Development</option><option>Other</option></select></Field>
    <Field label="Expected Requirement" error={errors.requirement?.message}><Input {...register("requirement")} className={fieldClass} placeholder="What outcome are you looking for?" /></Field>
    <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} className="min-h-36 bg-card" placeholder="Tell us more about your goals" /></Field>
    {submitError && <SubmitError message={submitError} />}
    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Submit Partnership Request"}</Button>
  </form>;
}
