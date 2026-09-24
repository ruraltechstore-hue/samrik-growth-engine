import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getRuralPlan, ruralPlanIds } from "@/lib/rural-plans";

const bodySchema = z.object({
  plan: z.enum(ruralPlanIds),
  customerName: z.string().trim().min(2).max(100),
  customerEmail: z.string().trim().email().max(255),
  customerPhone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Invalid phone number"),
});

export const Route = createFileRoute("/api/public/create-razorpay-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keyId = process.env["RAZORPAY_KEY_ID"];
        const keySecret = process.env["RAZORPAY_KEY_SECRET"];
        if (!keyId || !keySecret) {
          return Response.json({ error: "Payments are not configured yet." }, { status: 503 });
        }

        let parsed: z.infer<typeof bodySchema>;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return Response.json({ error: "Please check the details entered." }, { status: 400 });
        }

        // The amount is resolved server-side from the plan — never from the client.
        const plan = getRuralPlan(parsed.plan)!;

        const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: {
            authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount: plan.amountPaise,
            currency: "INR",
            receipt: `rts-${plan.id}-${Date.now()}`,
            notes: {
              plan: plan.name,
              customerName: parsed.customerName,
              customerEmail: parsed.customerEmail,
              customerPhone: parsed.customerPhone,
            },
          }),
        });

        if (!razorpayResponse.ok) {
          console.error("razorpay order creation failed", razorpayResponse.status, await razorpayResponse.text());
          return Response.json({ error: "Could not start the payment. Please try again." }, { status: 502 });
        }

        const order = (await razorpayResponse.json()) as { id: string; amount: number; currency: string };

        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        const now = new Date().toISOString();
        await ruralOrderStore.create({
          customerName: parsed.customerName,
          customerEmail: parsed.customerEmail,
          customerPhone: parsed.customerPhone,
          plan: plan.name,
          amountPaise: plan.amountPaise,
          currency: "INR",
          razorpayOrderId: order.id,
          razorpayPaymentId: null,
          status: "Created",
          createdAt: now,
          updatedAt: now,
        });

        const { notifyRegistration } = await import("@/lib/registration-email.server");
        await notifyRegistration({
          formType: "Rural Tech Store Services Registration",
          customerName: parsed.customerName,
          customerEmail: parsed.customerEmail,
          customerPhone: parsed.customerPhone,
          plan: plan.name,
          priceLabel: plan.priceLabel,
          reference: order.id,
          referenceLabel: "Razorpay Order ID",
          status: "Payment Initiated",
        });

        return Response.json({
          orderId: order.id,
          amount: order.amount,
          currency: "INR",
          keyId,
          plan: plan.name,
          priceLabel: plan.priceLabel,
        });
      },
    },
  },
});
