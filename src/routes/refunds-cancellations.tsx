import { createFileRoute } from "@tanstack/react-router";
import { EditablePlaceholder, LegalContact, LegalList, LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/refunds-cancellations")({
  head: () => ({
    meta: [
      { title: "Refunds & Cancellations Policy | Samrik Solutions" },
      { name: "description", content: "General information about cancellation requests and refund eligibility for Samrik Solutions services." },
      { property: "og:title", content: "Refunds & Cancellations Policy | Samrik Solutions" },
      { property: "og:description", content: "General cancellation and refund information for Samrik Solutions services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refunds-cancellations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refunds-cancellations" }],
  }),
  component: RefundsAndCancellations,
});

function RefundsAndCancellations() {
  return <LegalPage title="Refunds & Cancellations Policy" description="General information about cancellation requests and refund eligibility for Samrik Solutions services.">
    <LegalSection title="Cancellation Policy"><p>Cancellation requests may be subject to the terms applicable to the specific service or engagement. Any service proposal, order, or written agreement should be reviewed for conditions that apply to that engagement.</p></LegalSection>
    <LegalSection title="Refund Eligibility"><p>Refund eligibility depends on the nature of the service, the applicable agreement, and the terms communicated to the customer before purchase or engagement.</p></LegalSection>
    <LegalSection title="Non-Refundable Services"><p><EditablePlaceholder>[Specify applicable non-refundable services here]</EditablePlaceholder></p></LegalSection>
    <LegalSection title="Refund Processing"><p>Approved refunds will be processed using the applicable payment method and within the timeframe communicated by Samrik Solutions. No specific processing period is promised unless confirmed for the relevant request.</p></LegalSection>
    <LegalSection title="Service-Specific Terms"><p>Where applicable, a separate service agreement, proposal, order, or engagement document may contain additional cancellation and refund conditions. Those specific written terms will apply to the relevant service.</p></LegalSection>
    <LegalSection title="How to Request a Cancellation or Refund"><p>Send a request to <LegalContact /> with the following information:</p><LegalList items={["Name", "Email", "Service", "Transaction or order reference, if applicable", "Reason for request"]} /></LegalSection>
    <LegalSection title="Policy Updates"><p>Samrik Solutions may update this policy when required. Changes will be posted on this page with a revised last-updated date.</p></LegalSection>
  </LegalPage>;
}