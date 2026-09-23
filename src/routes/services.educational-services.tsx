import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";
import { InternshipPlansSection } from "@/components/internship-plans";

export const Route = createFileRoute("/services/educational-services")({
  head: () => ({
    meta: [
      { title: "Educational Services & Internship Programs | Samrik Solutions" },
      { name: "description", content: "Explore Educational Services and internship programs designed for students, colleges, professionals, and organizations, with flexible program options and custom pricing." },
      { property: "og:title", content: "Educational Services & Internship Programs | Samrik Solutions" },
      { property: "og:description", content: "Explore practical Educational Services and three internship program options for students, colleges, professionals, and organizations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/educational-services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/educational-services" }],
  }),
  component: () => <ServiceDetailPage slug="educational-services" extra={<InternshipPlansSection />} />,
});
