import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  razorpay_order_id: z.string().trim().min(5).max(120),
  status: z.enum(["Cancelled", "Failed"]),
});

export const Route = createFileRoute("/api/cancel-razorpay-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const result = bodySchema.safeParse(await request.json().catch(() => null));
        if (!result.success) return Response.json({ ok: false }, { status: 400 });
        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        const record = await ruralOrderStore.get(result.data.razorpay_order_id);
        if (!record) return Response.json({ ok: false }, { status: 404 });
        if (record.status !== "Paid") {
          await ruralOrderStore.updateStatus(result.data.razorpay_order_id, result.data.status);
        }
        return Response.json({ ok: true });
      },
    },
  },
});