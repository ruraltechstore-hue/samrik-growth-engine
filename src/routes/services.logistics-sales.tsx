import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";

export const Route = createFileRoute("/services/logistics-sales")({
  head: () => ({
    meta: [
      { title: "Logistics Sales Solutions | Samrik Solutions" },
      { name: "description", content: "Samrik Solutions helps logistics and supply-chain businesses connect with potential customers and identify new B2B opportunities." },
      { property: "og:title", content: "Logistics Sales Solutions | Samrik Solutions" },
      { property: "og:description", content: "B2B sales and business-development support built for logistics companies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/logistics-sales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/logistics-sales" }],
  }),
  component: () => <ServiceDetailPage slug="logistics-sales" />,
});
