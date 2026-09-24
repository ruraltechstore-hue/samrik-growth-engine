import { CheckCircle2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import qrAsset from "@/assets/payment-qr.jpeg.asset.json";

export const razorpayPaymentPageUrl = "https://razorpay.me/@samriksolutionsprivatelimited";

export async function postJson(path: string, body: unknown) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) throw new Error(typeof data["error"] === "string" ? data["error"] : "Request failed");
  return data;
}

/** Screen shown after a visitor chooses to pay by scanning the QR code. */
export function QrPaymentView({
  planLabel,
  priceLabel,
  customerName,
  referenceId,
  onBack,
  onDone,
}: {
  planLabel: string;
  priceLabel: string;
  customerName: string;
  referenceId: string;
  onBack: () => void;
  onDone: () => void;
}) {
  return (
    <div className="text-center">
      <QrCode className="mx-auto size-10 text-secondary" />
      <DialogHeader className="mt-4">
        <DialogTitle className="text-center font-display text-2xl">Scan &amp; Pay with any UPI App</DialogTitle>
        <DialogDescription className="text-center">
          Registration details saved for {customerName}. Complete your payment using the QR code below.
        </DialogDescription>
      </DialogHeader>

      <dl className="mt-6 grid gap-2 border border-border bg-surface p-5 text-left text-sm">
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Plan</dt>
          <dd className="text-right font-semibold text-foreground">{planLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Amount to Pay</dt>
          <dd className="text-right font-semibold text-foreground">{priceLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Reference ID</dt>
          <dd className="text-right font-semibold text-foreground">{referenceId}</dd>
        </div>
      </dl>

      <div className="mx-auto mt-6 max-w-xs overflow-hidden rounded-lg border border-border shadow-sm">
        <img src={qrAsset.url} alt="Samrik Solutions UPI payment QR code — powered by Razorpay" className="w-full" />
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        Scan the QR code with GPay, PhonePe, Paytm, or any UPI app and pay the exact amount of{" "}
        <span className="font-semibold text-foreground">{priceLabel}</span> — no need to enter it yourself.
        Please mention your name and Reference ID{" "}
        <span className="font-semibold text-foreground">{referenceId}</span> in the payment note so our
        team can verify and confirm your registration.
      </p>

      <Button variant="accent" size="lg" className="mt-5 w-full" onClick={onDone}>
        I Have Completed the Payment
      </Button>
      <Button variant="link" className="mt-2 w-full" onClick={onBack}>
        Back to payment options
      </Button>
    </div>
  );
}

/** Confirmation shown when the visitor says they have paid via QR. */
export function QrPaymentDone({ planLabel, priceLabel, referenceId }: { planLabel: string; priceLabel: string; referenceId: string }) {
  return (
    <div className="text-center">
      <CheckCircle2 className="mx-auto size-10 text-accent-foreground" />
      <DialogHeader className="mt-4">
        <DialogTitle className="text-center font-display text-2xl">Thank You</DialogTitle>
        <DialogDescription className="text-center">Your registration details have been received.</DialogDescription>
      </DialogHeader>
      <dl className="mt-6 grid gap-2 border border-border bg-surface p-5 text-left text-sm">
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Plan</dt>
          <dd className="text-right font-semibold text-foreground">{planLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Amount</dt>
          <dd className="text-right font-semibold text-foreground">{priceLabel}</dd>
        </div>
        <div className="flex items-start justify-between gap-4">
          <dt className="text-muted-foreground">Reference ID</dt>
          <dd className="text-right font-semibold text-foreground">{referenceId}</dd>
        </div>
      </dl>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        Once your payment is verified by our team, your registration will be confirmed and we will contact
        you with the next steps. If you have already paid, you can also share the payment screenshot on
        WhatsApp for faster confirmation.
      </p>
      <Button asChild variant="accent" size="lg" className="mt-6 w-full">
        <a href="https://wa.me/919392207839" target="_blank" rel="noreferrer">
          Share Payment Proof on WhatsApp
        </a>
      </Button>
    </div>
  );
}
