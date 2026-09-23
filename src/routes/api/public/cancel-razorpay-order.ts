import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const bodySchema = z.object({
  razorpay_order_id: z.string().trim().min(5).max(120),
  status: z.enum(["Cancelled", "Failed"]),
});

export const Route = createFileRoute("/api/public/cancel-razorpay-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed: z.infer<typeof bodySchema>;
        try {
          parsed = bodySchema.parse(await request.json());
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }
        const { ruralOrderStore } = await import("@/lib/rural-orders.server");
        await ruralOrderStore.updateStatus(parsed.razorpay_order_id, parsed.status);
        return Response.json({ ok: true });
      },
    },
  },
});
