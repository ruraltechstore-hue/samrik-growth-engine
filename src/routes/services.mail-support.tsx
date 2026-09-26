import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";

export const Route = createFileRoute("/services/mail-support")({
  head: () => ({
    meta: [
      { title: "Mail Support Services | Samrik Solutions" },
      {
        name: "description",
        content:
          "Professional email response management designed to maintain consistent communication, accuracy, and a reliable customer experience.",
      },
      { property: "og:title", content: "Mail Support Services | Samrik Solutions" },
      {
        property: "og:description",
        content:
          "Professional email response management designed to maintain consistent communication, accuracy, and a reliable customer experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", path: "/services/mail-support" }],
  }),
  component: MailSupportPage,
});

function MailSupportPage() {
  return <ServiceDetailPage slug="mail-support" />;
}
