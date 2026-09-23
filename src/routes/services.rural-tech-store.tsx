import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";
import { RuralPlansSection } from "@/components/rural-plans";

export const Route = createFileRoute("/services/rural-tech-store")({
  head: () => ({
    meta: [
      { title: "Rural Tech Store | Samrik Solutions" },
      { name: "description", content: "Rural Tech Store enables access to digital services in rural and semi-urban communities and supports local digital entrepreneurship." },
      { property: "og:title", content: "Rural Tech Store | Samrik Solutions" },
      { property: "og:description", content: "Digital services and rural entrepreneurship opportunities for communities and local entrepreneurs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/rural-tech-store" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/rural-tech-store" }],
  }),
  component: () => <ServiceDetailPage slug="rural-tech-store" />,
});
