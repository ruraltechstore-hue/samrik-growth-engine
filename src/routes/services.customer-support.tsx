import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";

export const Route = createFileRoute("/services/customer-support")({
  head: () => ({
    meta: [
      { title: "Customer Support Services | Samrik Solutions" },
      {
        name: "description",
        content:
          "Customer care across voice, chat, and email handled by trained teams following structured support processes designed around your customer experience requirements.",
      },
      { property: "og:title", content: "Customer Support Services | Samrik Solutions" },
      {
        property: "og:description",
        content:
          "Customer care across voice, chat, and email handled by trained teams following structured support processes designed around your customer experience requirements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", path: "/services/customer-support" }],
  }),
  component: CustomerSupportPage,
});

function CustomerSupportPage() {
  return <ServiceDetailPage slug="customer-support" />;
}
