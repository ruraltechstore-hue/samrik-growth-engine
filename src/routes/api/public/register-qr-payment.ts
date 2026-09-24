import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPaymentPlan } from "@/lib/payment-plans";

const bodySchema = z.object({
  plan: z.string().trim().min(1).max(80),
  customerName: z.string().trim().min(2).max(100),
  customerEmail: z.string().trim().email().max(255),
  customerPhone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Invalid phone number"),
  college: z.string().trim().min(2).max(180).optional(),
  course: z.string().trim().min(2).max(150).optional(),
});

export const Route = createFileRoute("/api/public/register-qr-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed: z.infer<typeof bodySchema>;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return Response.json({ error: "Please check the details entered." }, { status: 400 });
        }

        // Amount and plan validity are resolved server-side — never from the client.
        const plan = getPaymentPlan(parsed.plan);
        if (!plan) {
          return Response.json({ error: "Unknown plan selected." }, { status: 400 });
        }

        const referenceId = `QR-${Date.now().toString(36).toUpperCase()}`;
        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        const now = new Date().toISOString();
        await ruralOrderStore.create({
          customerName: parsed.customerName,
          customerEmail: parsed.customerEmail,
          customerPhone: parsed.customerPhone,
          ...(parsed.college ? { college: parsed.college } : {}),
          ...(parsed.course ? { course: parsed.course } : {}),
          plan: plan.name,
          amountPaise: plan.amountPaise,
          currency: "INR",
          razorpayOrderId: referenceId,
          razorpayPaymentId: null,
          status: "AwaitingPayment",
          createdAt: now,
          updatedAt: now,
        });

        return Response.json({ referenceId, plan: plan.name, priceLabel: plan.priceLabel });
      },
    },
  },
});
