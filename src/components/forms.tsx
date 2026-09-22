import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const base = { name: z.string().trim().min(2, "Enter your full name").max(100), company: z.string().trim().min(2, "Enter your company name").max(120), phone: z.string().trim().min(7, "Enter a valid phone number").max(30), message: z.string().trim().min(10, "Please add a little more detail").max(1200), email: z.string().trim().email("Enter a valid email address").max(255) };
const contactSchema = z.object({ ...base, subject: z.string().trim().min(3, "Enter a subject").max(150) });
const partnerSchema = z.object({ ...base, industry: z.string().trim().min(2, "Enter your industry").max(100), website: z.union([z.literal(""), z.string().trim().url("Enter a complete website URL")]), service: z.enum(["SaaS Sales", "Logistics Sales", "Educational Services", "Rural Tech Store", "Lead Generation", "Business Development", "Other"], { required_error: "Select a service" }), requirement: z.string().trim().min(5, "Describe your expected requirement").max(300) });

type ContactData = z.infer<typeof contactSchema>;
type PartnerData = z.infer<typeof partnerSchema>;

const fieldClass = "h-11 bg-card";

function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return <div><label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>{children}{error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}</div>;
}

function Success({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-72 flex-col items-center justify-center border border-border bg-accent p-8 text-center" role="status"><CheckCircle2 className="size-10 text-accent-foreground" /><p className="mt-4 max-w-md font-display text-xl font-bold text-accent-foreground">{children}</p></div>;
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });
  if (isSubmitSuccessful) return <Success>Thank you for contacting Samrik Solutions. Our team will get back to you soon.</Success>;
  return <form onSubmit={handleSubmit(() => undefined)} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" error={errors.name?.message}><Input {...register("name")} className={fieldClass} placeholder="Your name" /></Field><Field label="Company Name" error={errors.company?.message}><Input {...register("company")} className={fieldClass} placeholder="Company name" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Email" error={errors.email?.message}><Input {...register("email")} className={fieldClass} type="email" placeholder="name@company.com" /></Field><Field label="Phone Number" error={errors.phone?.message}><Input {...register("phone")} className={fieldClass} type="tel" placeholder="Phone number" /></Field></div>
    <Field label="Subject" error={errors.subject?.message}><Input {...register("subject")} className={fieldClass} placeholder="How can we help?" /></Field>
    <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} className="min-h-36 bg-card" placeholder="Tell us about your requirement" /></Field>
    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">Send Message</Button>
  </form>;
}

export function PartnershipForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<PartnerData>({ resolver: zodResolver(partnerSchema) });
  if (isSubmitSuccessful) return <Success>Your partnership request has been submitted. Our team will be in touch soon.</Success>;
  return <form onSubmit={handleSubmit(() => undefined)} className="grid gap-5" noValidate>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" error={errors.name?.message}><Input {...register("name")} className={fieldClass} placeholder="Your name" /></Field><Field label="Company Name" error={errors.company?.message}><Input {...register("company")} className={fieldClass} placeholder="Company name" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Work Email" error={errors.email?.message}><Input {...register("email")} className={fieldClass} type="email" placeholder="name@company.com" /></Field><Field label="Phone Number" error={errors.phone?.message}><Input {...register("phone")} className={fieldClass} type="tel" placeholder="Phone number" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Industry" error={errors.industry?.message}><Input {...register("industry")} className={fieldClass} placeholder="Your industry" /></Field><Field label="Website" error={errors.website?.message}><Input {...register("website")} className={fieldClass} type="url" placeholder="https://company.com" /></Field></div>
    <Field label="Service Required" error={errors.service?.message}><select {...register("service")} defaultValue="" className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"><option value="" disabled>Select a service</option><option>SaaS Sales</option><option>Logistics Sales</option><option>Educational Sales</option><option>Lead Generation</option><option>Business Development</option><option>Other</option></select></Field>
    <Field label="Expected Requirement" error={errors.requirement?.message}><Input {...register("requirement")} className={fieldClass} placeholder="What outcome are you looking for?" /></Field>
    <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} className="min-h-36 bg-card" placeholder="Tell us more about your goals" /></Field>
    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">Submit Partnership Request</Button>
  </form>;
}