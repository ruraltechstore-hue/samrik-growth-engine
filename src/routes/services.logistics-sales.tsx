import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";
import { LogisticsPlansSection } from "@/components/logistics-plans";

export const Route = createFileRoute("/services/logistics-sales")({
  head: () => ({
    meta: [
      { title: "Logistic Services Solutions | Samrik Solutions" },
      { name: "description", content: "Samrik Solutions helps logistics and supply-chain businesses connect with potential customers and identify new B2B opportunities." },
      { property: "og:title", content: "Logistic Services Solutions | Samrik Solutions" },
      { property: "og:description", content: "B2B sales and business-development support built for logistics companies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/logistics-sales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/logistics-sales" }],
  }),
  component: () => <ServiceDetailPage slug="logistics-sales" extra={<LogisticsPlansSection />} />,
});
