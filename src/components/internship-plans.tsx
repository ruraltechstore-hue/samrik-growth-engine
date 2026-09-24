import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { AlertTriangle, Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SectionHeading } from "@/components/marketing";
import { QrPaymentDone, QrPaymentView, postJson } from "@/components/qr-payment";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  internshipPricingSchema,
  submitInternshipPricingRequest,
  type InternshipPricingData,
} from "@/lib/forms.functions";
import { internshipPlans, type InternshipPlan, type PaidInternshipPlan } from "@/lib/internship-plans";

type PricingInternshipPlan = Extract<InternshipPlan, { payment: false }>;

const registrationSchema = z.object({
  customerName: z.string().trim().min(2, "Enter your full name").max(100),
  customerEmail: z.string().trim().email("Enter a valid email address").max(255),
  customerPhone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid mobile number"),
  college: z.string().trim().min(2, "Enter your college or university name").max(180),
  course: z.string().trim().min(2, "Enter your course or program").max(150),
});
type RegistrationData = z.infer<typeof registrationSchema>;

type PaymentStage =
  | { kind: "form" }
  | { kind: "processing" }
  | { kind: "success"; student: string; plan: string; priceLabel: string; paymentId: string }
  | { kind: "failed" }
  | { kind: "cancelled" }
  | { kind: "qr"; referenceId: string; student: string }
  | { kind: "qr-done"; referenceId: string };



export function InternshipPlansSection() {
  const [activePlan, setActivePlan] = useState<InternshipPlan | null>(null);
  const [paymentStage, setPaymentStage] = useState<PaymentStage>({ kind: "form" });

  function openPlan(plan: InternshipPlan) {
    setActivePlan(plan);
    setPaymentStage({ kind: "form" });
  }

  return (
    <section id="internship-programs" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Educational Services"
          title="Internship Programs"
          description="Choose the internship program that best matches your academic, technical, and career development requirements."
        />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {internshipPlans.map((plan) => (
            <article key={plan.id} className="rise-in flex h-full flex-col rounded-lg border border-border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">{plan.stage}</p>
              <h3 className="mt-3 font-display text-xl font-bold leading-7 text-card-foreground">{plan.name}</h3>
              <p className="mt-5 font-display text-4xl font-bold text-foreground">{plan.priceLabel}</p>
              {plan.priceSuffix && <p className="mt-1 text-sm font-semibold text-muted-foreground">{plan.priceSuffix}</p>}
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{plan.description}</p>
              {"coverage" in plan && (
                <div className="mt-5 border-l-4 border-accent-strong bg-surface p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary">Program Coverage</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{plan.coverage}</p>
                </div>
              )}
              <div className="mt-6 grid gap-6">
                {plan.sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="font-display text-sm font-bold text-foreground">{section.title}</h4>
                    <ul className="mt-3 grid gap-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3" /></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <Button variant={plan.payment ? "accent" : "outline"} size="lg" className="w-full" onClick={() => openPlan(plan)}>
                  {plan.payment ? "Register Now" : "Request Pricing"}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={activePlan !== null} onOpenChange={(open) => !open && setActivePlan(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          {activePlan?.payment ? (
            <PaymentRegistration plan={activePlan} stage={paymentStage} setStage={setPaymentStage} onClose={() => setActivePlan(null)} />
          ) : activePlan ? (
            <PricingRequest plan={activePlan as PricingInternshipPlan} />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function PaymentRegistration({ plan, stage, setStage, onClose }: { plan: PaidInternshipPlan; stage: PaymentStage; setStage: (stage: PaymentStage) => void; onClose: () => void }) {
  const [error, setError] = useState<string>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegistrationData>({ resolver: zodResolver(registrationSchema) });

  async function startQrPayment(values: RegistrationData) {
    setError(undefined);
    try {
      const result = await postJson("/api/public/register-qr-payment", { plan: plan.id, ...values });
      setStage({ kind: "qr", referenceId: result["referenceId"] as string, student: values.customerName });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not save your details. Please try again.");
    }
  }


  if (stage.kind === "success") return <PaymentSuccess stage={stage} />;
  if (stage.kind === "qr") {
    return (
      <QrPaymentView
        planLabel={plan.registrationLabel}
        priceLabel={`${plan.priceLabel} per student`}
        customerName={stage.student}
        referenceId={stage.referenceId}
        onBack={() => setStage({ kind: "form" })}
        onDone={() => setStage({ kind: "qr-done", referenceId: stage.referenceId })}
      />
    );
  }
  if (stage.kind === "qr-done") {
    return <QrPaymentDone planLabel={plan.registrationLabel} priceLabel={`${plan.priceLabel} per student`} referenceId={stage.referenceId} />;
  }
  if (stage.kind === "failed" || stage.kind === "cancelled") {
    return <PaymentIncomplete cancelled={stage.kind === "cancelled"} retry={() => setStage({ kind: "form" })} onClose={onClose} />;
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Student Registration</DialogTitle>
        <DialogDescription>Complete your details before continuing to secure payment.</DialogDescription>
      </DialogHeader>
      <form className="mt-5 grid gap-4" noValidate onSubmit={handleSubmit(startQrPayment)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" error={errors.customerName?.message}><Input {...register("customerName")} autoComplete="name" placeholder="Your full name" /></Field>
          <Field label="Email Address" error={errors.customerEmail?.message}><Input {...register("customerEmail")} type="email" autoComplete="email" placeholder="name@example.com" /></Field>
          <Field label="Mobile Number" error={errors.customerPhone?.message}><Input {...register("customerPhone")} type="tel" autoComplete="tel" placeholder="Mobile number" /></Field>
          <Field label="College/University Name" error={errors.college?.message}><Input {...register("college")} placeholder="College or university" /></Field>
        </div>
        <Field label="Course/Program" error={errors.course?.message}><Input {...register("course")} placeholder="Your course or program" /></Field>
        <Field label="Selected Internship Stage" error={undefined}><Input value={plan.registrationLabel} readOnly className="bg-muted" /></Field>
        <Field label="Price" error={undefined}><Input value={`${plan.priceLabel} per student`} readOnly className="bg-muted font-semibold" /></Field>
        {error && <p className="border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">{error}</p>}
        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="w-full"
          disabled={isSubmitting || stage.kind === "processing"}
        >
          {isSubmitting || stage.kind === "processing" ? "Saving registration…" : "Pay via QR Code (UPI)"}
        </Button>
      </form>
    </div>
  );
}

function PricingRequest({ plan }: { plan: PricingInternshipPlan }) {
  const submit = useServerFn(submitInternshipPricingRequest);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<InternshipPricingData>({
    resolver: zodResolver(internshipPricingSchema),
    defaultValues: { internshipStage: plan.registrationLabel, studentCount: 1 },
  });

  if (sent) {
    return (
      <div className="py-8 text-center" role="status">
        <CheckCircle2 className="mx-auto size-10 text-accent-foreground" />
        <DialogHeader className="mt-4"><DialogTitle className="text-center font-display text-2xl">Enquiry Submitted</DialogTitle></DialogHeader>
        <p className="mt-4 leading-7 text-muted-foreground">Thank you. Your pricing request has been submitted successfully. Our team will contact you regarding the applicable pricing and enrollment details.</p>
        <Button asChild variant="accent" size="lg" className="mt-6 w-full"><a href="#internship-programs">Back to Educational Services</a></Button>
      </div>
    );
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Request Custom Pricing</DialogTitle>
        <DialogDescription>No payment will be taken. Our team will contact you with applicable pricing and enrollment details.</DialogDescription>
      </DialogHeader>
      <form className="mt-5 grid gap-4" noValidate onSubmit={handleSubmit(async (values) => {
        setSubmitError(undefined);
        try { await submit({ data: values }); setSent(true); }
        catch { setSubmitError("Your request could not be sent. Please try again or email info@samrik.co.in."); }
      })}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" error={errors.name?.message}><Input {...register("name")} autoComplete="name" placeholder="Your full name" /></Field>
          <Field label="Email Address" error={errors.email?.message}><Input {...register("email")} type="email" autoComplete="email" placeholder="name@example.com" /></Field>
          <Field label="Mobile Number" error={errors.phone?.message}><Input {...register("phone")} type="tel" autoComplete="tel" placeholder="Mobile number" /></Field>
          <Field label="College/University Name" error={errors.college?.message}><Input {...register("college")} placeholder="College or university" /></Field>
          <Field label="Student Category" error={errors.studentCategory?.message}><Input {...register("studentCategory")} placeholder="Student category" /></Field>
          <Field label="Number of Students" error={errors.studentCount?.message}><Input {...register("studentCount")} type="number" min={1} inputMode="numeric" /></Field>
        </div>
        <Field label="Preferred Internship Stage" error={undefined}><Input {...register("internshipStage")} readOnly className="bg-muted" /></Field>
        <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} className="min-h-28 bg-card" placeholder="Tell us about your requirements" /></Field>
        {submitError && <p className="border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">{submitError}</p>}
        <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Submitting…" : "Submit Pricing Request"}</Button>
      </form>
    </div>
  );
}

function PaymentSuccess({ stage }: { stage: Extract<PaymentStage, { kind: "success" }> }) {
  return (
    <div className="text-center">
      <CheckCircle2 className="mx-auto size-10 text-accent-foreground" />
      <DialogHeader className="mt-4"><DialogTitle className="text-center font-display text-2xl">Payment Successful</DialogTitle><DialogDescription className="text-center">Your internship registration is confirmed.</DialogDescription></DialogHeader>
      <dl className="mt-6 grid gap-2 border border-border bg-surface p-5 text-left text-sm">
        <Row label="Student Name" value={stage.student} /><Row label="Internship Stage" value={stage.plan} /><Row label="Amount Paid" value={stage.priceLabel} /><Row label="Payment ID" value={stage.paymentId} /><Row label="Registration" value="Confirmed" />
      </dl>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">Our team will contact you with the next-step information for your internship program.</p>
      <Button asChild variant="accent" size="lg" className="mt-6 w-full"><Link to="/services/educational-services" hash="internship-programs">Back to Educational Services</Link></Button>
    </div>
  );
}

function PaymentIncomplete({ cancelled, retry, onClose }: { cancelled: boolean; retry: () => void; onClose: () => void }) {
  return (
    <div className="text-center">
      <AlertTriangle className="mx-auto size-10 text-destructive" />
      <DialogHeader className="mt-4"><DialogTitle className="text-center font-display text-2xl">{cancelled ? "Payment Cancelled" : "Payment Failed"}</DialogTitle><DialogDescription className="text-center">Payment was not completed. Your registration has not been marked as paid.</DialogDescription></DialogHeader>
      <Button variant="accent" size="lg" className="mt-6 w-full" onClick={retry}>Try Again</Button>
      <Button variant="link" className="mt-2 w-full" onClick={onClose}>Back to Educational Services</Button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4"><dt className="text-muted-foreground">{label}</dt><dd className="text-right font-semibold text-foreground">{value}</dd></div>;
}

function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return <div><label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>{children}{error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}</div>;
}