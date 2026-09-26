import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";

export const Route = createFileRoute("/services/data-entry")({
  head: () => ({
    meta: [
      { title: "Data Entry Services | Samrik Solutions" },
      {
        name: "description",
        content:
          "Accurate data entry and processing support that keeps your business information organized, up to date, and ready to use.",
      },
      { property: "og:title", content: "Data Entry Services | Samrik Solutions" },
      {
        property: "og:description",
        content:
          "Accurate data entry and processing support that keeps your business information organized, up to date, and ready to use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", path: "/services/data-entry" }],
  }),
  component: DataEntryPage,
});

function DataEntryPage() {
  return <ServiceDetailPage slug="data-entry" />;
}
