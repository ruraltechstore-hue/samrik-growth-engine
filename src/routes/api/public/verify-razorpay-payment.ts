import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";
import { z } from "zod";

const bodySchema = z.object({
  razorpay_order_id: z.string().trim().min(5).max(120),
  razorpay_payment_id: z.string().trim().min(5).max(120),
  razorpay_signature: z.string().trim().min(10).max(256),
});

export const Route = createFileRoute("/api/public/verify-razorpay-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keySecret = process.env["RAZORPAY_KEY_SECRET"];
        if (!keySecret) {
          return Response.json({ verified: false, error: "Payments are not configured yet." }, { status: 503 });
        }

        let parsed: z.infer<typeof bodySchema>;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return Response.json({ verified: false, error: "Invalid payment details." }, { status: 400 });
        }

        const expected = createHmac("sha256", keySecret)
          .update(`${parsed.razorpay_order_id}|${parsed.razorpay_payment_id}`)
          .digest("hex");

        const received = Buffer.from(parsed.razorpay_signature, "utf8");
        const expectedBuffer = Buffer.from(expected, "utf8");
        const valid = received.length === expectedBuffer.length && timingSafeEqual(received, expectedBuffer);

        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        await ruralOrderStore.updateStatus(parsed.razorpay_order_id, valid ? "Paid" : "Failed", parsed.razorpay_payment_id);

        if (!valid) {
          return Response.json({ verified: false, error: "Payment verification failed." }, { status: 400 });
        }

        const record = await ruralOrderStore.get(parsed.razorpay_order_id);
        return Response.json({
          verified: true,
          paymentId: parsed.razorpay_payment_id,
          plan: record?.plan ?? null,
          status: "Paid",
        });
      },
    },
  },
});
