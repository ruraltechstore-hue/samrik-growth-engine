import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";

export const Route = createFileRoute("/services/educational-services")({
  head: () => ({
    meta: [
      { title: "Educational Services | Samrik Solutions" },
      { name: "description", content: "Build practical digital, sales, entrepreneurship, and business-growth skills with Samrik Solutions' Educational Services." },
      { property: "og:title", content: "Educational Services | Samrik Solutions" },
      { property: "og:description", content: "Practical digital skills for career and business growth — e-commerce, AI, marketing, sales, freelancing, and entrepreneurship." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/educational-services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/educational-services" }],
  }),
  component: () => <ServiceDetailPage slug="educational-services" />,
});
