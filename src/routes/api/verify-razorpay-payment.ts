import { createHmac, timingSafeEqual } from "crypto";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  razorpay_order_id: z.string().trim().min(5).max(120),
  razorpay_payment_id: z.string().trim().min(5).max(120),
  razorpay_signature: z.string().trim().min(10).max(256),
});

export const Route = createFileRoute("/api/verify-razorpay-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keySecret = process.env["RAZORPAY_KEY_SECRET"];
        if (!keySecret) {
          return Response.json({ verified: false, error: "Payments are not configured yet." }, { status: 503 });
        }

        const result = bodySchema.safeParse(await request.json().catch(() => null));
        if (!result.success) {
          return Response.json({ verified: false, error: "Invalid payment details." }, { status: 400 });
        }

        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        const record = await ruralOrderStore.get(result.data.razorpay_order_id);
        if (!record) {
          return Response.json({ verified: false, error: "Order not found." }, { status: 404 });
        }

        const expected = createHmac("sha256", keySecret)
          .update(`${result.data.razorpay_order_id}|${result.data.razorpay_payment_id}`)
          .digest("hex");
        const received = Buffer.from(result.data.razorpay_signature, "utf8");
        const expectedBuffer = Buffer.from(expected, "utf8");
        const valid = received.length === expectedBuffer.length && timingSafeEqual(received, expectedBuffer);

        await ruralOrderStore.updateStatus(
          result.data.razorpay_order_id,
          valid ? "Paid" : "Failed",
          result.data.razorpay_payment_id,
        );
        if (!valid) {
          return Response.json({ verified: false, error: "Payment verification failed." }, { status: 400 });
        }

        const { notifyRegistration } = await import("@/lib/registration-email.server");
        await notifyRegistration({
          formType: "Payment Received — Registration Confirmed",
          customerName: record.customerName,
          customerEmail: record.customerEmail,
          customerPhone: record.customerPhone,
          ...(record.college ? { college: record.college } : {}),
          ...(record.course ? { course: record.course } : {}),
          ...(record.internshipStage ? { internshipStage: record.internshipStage } : {}),
          plan: record.plan,
          priceLabel: `₹${(record.amountPaise / 100).toLocaleString("en-IN")}`,
          reference: record.razorpayOrderId,
          referenceLabel: "Razorpay Order ID",
          paymentId: result.data.razorpay_payment_id,
          status: "Paid",
        });

        return Response.json({
          verified: true,
          paymentId: result.data.razorpay_payment_id,
          plan: record.plan,
          status: "Paid",
        });
      },
    },
  },
});