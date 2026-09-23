import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marketing";
import { pricingNotice, ruralPlans, type RuralPlan } from "@/lib/rural-plans";
import { cn } from "@/lib/utils";

const customerSchema = z.object({
  customerName: z.string().trim().min(2, "Enter your full name").max(100),
  customerEmail: z.string().trim().email("Enter a valid email address").max(255),
  customerPhone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid mobile number"),
});
type CustomerData = z.infer<typeof customerSchema>;

type Stage =
  | { kind: "form" }
  | { kind: "processing" }
  | { kind: "success"; plan: string; priceLabel: string; paymentId: string }
  | { kind: "failed" }
  | { kind: "cancelled" };

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpayScript(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

async function postJson(path: string, body: unknown) {
  const response = await fetch(path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) throw new Error(typeof data["error"] === "string" ? (data["error"] as string) : "Request failed");
  return data;
}

export function RuralPlansSection() {
  const [activePlan, setActivePlan] = useState<RuralPlan | null>(null);
  const [stage, setStage] = useState<Stage>({ kind: "form" });

  function openPlan(plan: RuralPlan) {
    setActivePlan(plan);
    setStage({ kind: "form" });
  }

  return (
    <section id="plans" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Plans & Opportunities"
          title="Choose your Rural Tech Store role"
          description="Register as an Agent, Distributor, or Super Distributor and start operating digital services in your community."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ruralPlans.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "rise-in relative flex h-full flex-col border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1",
                plan.popular ? "border-accent-strong shadow-md" : "border-border",
              )}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 bg-accent-strong px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                  Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-card-foreground">{plan.name}</h3>
              <p className="mt-3 font-display text-4xl font-bold text-foreground">{plan.priceLabel}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">One-time registration</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "accent" : "outline"} size="lg" className="mt-8 w-full" onClick={() => openPlan(plan)}>
                Register Now
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-4xl border-l-4 border-accent-strong bg-card p-5 text-sm leading-7 text-muted-foreground">{pricingNotice}</p>
      </div>

      <Dialog open={activePlan !== null} onOpenChange={(open) => !open && setActivePlan(null)}>
        <DialogContent className="sm:max-w-lg">
          {activePlan && (
            <PlanCheckout plan={activePlan} stage={stage} setStage={setStage} onClose={() => setActivePlan(null)} />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function PlanCheckout({
  plan,
  stage,
  setStage,
  onClose,
}: {
  plan: RuralPlan;
  stage: Stage;
  setStage: (stage: Stage) => void;
  onClose: () => void;
}) {
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomerData>({ resolver: zodResolver(customerSchema) });

  async function startPayment(values: CustomerData) {
    setError(undefined);
    const ready = await loadRazorpayScript();
    if (!ready || !window.Razorpay) {
      setError("Could not load the secure payment window. Please check your connection and try again.");
      return;
    }

    let order: Record<string, unknown>;
    try {
      order = await postJson("/api/public/create-razorpay-order", { plan: plan.id, ...values });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not start the payment. Please try again.");
      return;
    }

    setStage({ kind: "processing" });
    const orderId = order["orderId"] as string;

    const checkout = new window.Razorpay({
      key: order["keyId"],
      order_id: orderId,
      amount: order["amount"],
      currency: "INR",
      name: "Samrik Solutions",
      description: `${plan.name} Registration — ${plan.priceLabel}`,
      prefill: { name: values.customerName, email: values.customerEmail, contact: values.customerPhone },
      notes: { plan: plan.name },
      theme: { color: "#0f2f5b" },
      modal: {
        ondismiss: () => {
          void postJson("/api/public/cancel-razorpay-order", { razorpay_order_id: orderId, status: "Cancelled" }).catch(() => {});
          setStage({ kind: "cancelled" });
        },
      },
      handler: (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
        void (async () => {
          try {
            const verified = await postJson("/api/public/verify-razorpay-payment", response);
            if (verified["verified"] === true) {
              setStage({ kind: "success", plan: plan.name, priceLabel: plan.priceLabel, paymentId: response.razorpay_payment_id });
            } else {
              setStage({ kind: "failed" });
            }
          } catch {
            setStage({ kind: "failed" });
          }
        })();
      },
    });

    checkout.open();
  }

  if (stage.kind === "success") {
    return (
      <div className="text-center">
        <CheckCircle2 className="mx-auto size-10 text-accent-foreground" />
        <DialogHeader className="mt-4">
          <DialogTitle className="text-center font-display text-2xl">Payment Successful</DialogTitle>
          <DialogDescription className="text-center">Thank you for registering with Samrik Solutions.</DialogDescription>
        </DialogHeader>
        <dl className="mt-6 grid gap-2 border border-border bg-surface p-5 text-left text-sm">
          <Row label="Plan" value={stage.plan} />
          <Row label="Amount Paid" value={stage.priceLabel} />
          <Row label="Payment ID" value={stage.paymentId} />
        </dl>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">
          Your payment has been successfully received. Our team will contact you regarding the next steps.
        </p>
        <Button asChild variant="accent" size="lg" className="mt-6 w-full">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  if (stage.kind === "failed" || stage.kind === "cancelled") {
    const cancelled = stage.kind === "cancelled";
    return (
      <div className="text-center">
        <AlertTriangle className="mx-auto size-10 text-destructive" />
        <DialogHeader className="mt-4">
          <DialogTitle className="text-center font-display text-2xl">{cancelled ? "Payment Cancelled" : "Payment Failed"}</DialogTitle>
          <DialogDescription className="text-center">
            {cancelled ? "Your payment was not completed." : "Your payment could not be completed. Please try again."}
          </DialogDescription>
        </DialogHeader>
        <Button variant="accent" size="lg" className="mt-6 w-full" onClick={() => setStage({ kind: "form" })}>
          Try Again
        </Button>
        <Button variant="link" className="mt-2 w-full" onClick={onClose}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">
          {plan.name} — {plan.priceLabel}
        </DialogTitle>
        <DialogDescription>Enter your details to continue to secure payment.</DialogDescription>
      </DialogHeader>
      <form className="mt-5 grid gap-4" noValidate onSubmit={handleSubmit(startPayment)}>
        <Field label="Full Name" error={errors.customerName?.message}>
          <Input {...register("customerName")} className="h-11 bg-card" placeholder="Your full name" />
        </Field>
        <Field label="Email Address" error={errors.customerEmail?.message}>
          <Input {...register("customerEmail")} type="email" className="h-11 bg-card" placeholder="name@example.com" />
        </Field>
        <Field label="Mobile Number" error={errors.customerPhone?.message}>
          <Input {...register("customerPhone")} type="tel" className="h-11 bg-card" placeholder="Mobile number" />
        </Field>
        {error && (
          <p className="border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting || stage.kind === "processing"}>
          {isSubmitting || stage.kind === "processing" ? "Opening secure payment…" : `Pay ${plan.priceLabel}`}
        </Button>
      </form>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
