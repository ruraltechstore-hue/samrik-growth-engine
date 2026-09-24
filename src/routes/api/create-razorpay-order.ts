import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPaymentPlan } from "@/lib/payment-plans";

const bodySchema = z.object({
  plan: z.string().trim().min(2).max(80),
  customerName: z.string().trim().min(2).max(100),
  customerEmail: z.string().trim().email().max(255),
  customerPhone: z.string().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Invalid phone number"),
  college: z.string().trim().min(2).max(180).optional(),
  course: z.string().trim().min(2).max(150).optional(),
});

export const Route = createFileRoute("/api/create-razorpay-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keyId = process.env["RAZORPAY_KEY_ID"];
        const keySecret = process.env["RAZORPAY_KEY_SECRET"];
        if (!keyId || !keySecret) {
          return Response.json({ error: "Payments are not configured yet." }, { status: 503 });
        }

        const result = bodySchema.safeParse(await request.json().catch(() => null));
        if (!result.success) {
          return Response.json({ error: "Please check the details entered." }, { status: 400 });
        }

        const plan = getPaymentPlan(result.data.plan);
        if (!plan) {
          return Response.json({ error: "The selected plan is not available." }, { status: 400 });
        }
        const isInternship = plan.id === "internship-stage-1" || plan.id === "internship-stage-2";
        if (isInternship && (!result.data.college || !result.data.course)) {
          return Response.json({ error: "Please enter your college and course details." }, { status: 400 });
        }

        const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: {
            authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount: plan.amountPaise,
            currency: "INR",
            receipt: `samrik-${Date.now()}`,
            notes: {
              plan: plan.name,
              customerName: result.data.customerName,
              customerEmail: result.data.customerEmail,
              customerPhone: result.data.customerPhone,
              ...(result.data.college ? { college: result.data.college } : {}),
              ...(result.data.course ? { course: result.data.course } : {}),
            },
          }),
        });

        if (!razorpayResponse.ok) {
          console.error("Razorpay order creation failed", razorpayResponse.status);
          return Response.json({ error: "Could not start the payment. Please try again." }, { status: 502 });
        }

        const order = (await razorpayResponse.json()) as { id: string; amount: number };
        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        const now = new Date().toISOString();
        await ruralOrderStore.create({
          customerName: result.data.customerName,
          customerEmail: result.data.customerEmail,
          customerPhone: result.data.customerPhone,
          ...(result.data.college ? { college: result.data.college } : {}),
          ...(result.data.course ? { course: result.data.course } : {}),
          ...(isInternship && "registrationLabel" in plan ? { internshipStage: plan.registrationLabel } : {}),
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
          formType: isInternship ? "Internship Registration" : "Logistics Franchise Registration",
          customerName: result.data.customerName,
          customerEmail: result.data.customerEmail,
          customerPhone: result.data.customerPhone,
          ...(result.data.college ? { college: result.data.college } : {}),
          ...(result.data.course ? { course: result.data.course } : {}),
          ...(isInternship && "registrationLabel" in plan ? { internshipStage: plan.registrationLabel } : {}),
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