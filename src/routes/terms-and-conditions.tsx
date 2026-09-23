import { createFileRoute } from "@tanstack/react-router";
import { LegalContact, LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Samrik Solutions" },
      { name: "description", content: "Terms and conditions governing access to and use of the Samrik Solutions website." },
      { property: "og:title", content: "Terms & Conditions | Samrik Solutions" },
      { property: "og:description", content: "Terms governing the use of the Samrik Solutions website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-and-conditions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return <LegalPage title="Terms & Conditions" description="Terms governing access to and use of the Samrik Solutions website.">
    <LegalSection title="Acceptance of Terms"><p>By accessing or using this website, visitors agree to these Terms & Conditions. Visitors who do not agree should discontinue use of the website.</p></LegalSection>
    <LegalSection title="Website Use"><p>Users should use the website only for lawful purposes. Users must not misuse, disrupt, damage, or attempt to compromise the website, its security, or its availability.</p></LegalSection>
    <LegalSection title="Services Information"><p>Information about SaaS Sales, Logistics Sales, Educational Services, Rural Tech Store, and other services is provided for general informational and business purposes. The scope, pricing, deliverables, and obligations for a specific engagement are established separately where applicable.</p></LegalSection>
    <LegalSection title="No Guarantee"><p>Unless specifically agreed in a separate written agreement, Samrik Solutions does not guarantee employment, income, business results, sales performance, educational outcomes, or financial returns.</p></LegalSection>
    <LegalSection title="Intellectual Property"><p>Website content, including text, graphics, logos, design elements, and other materials, may belong to Samrik Solutions or their respective owners. Such content should not be copied, reproduced, modified, distributed, or used without appropriate permission.</p></LegalSection>
    <LegalSection title="Third-Party Services and Links"><p>Third-party services or links may be provided for convenience. Their availability, content, and use may be subject to the third party's own terms and policies.</p></LegalSection>
    <LegalSection title="Limitation of Liability"><p>To the extent permitted by applicable law, Samrik Solutions will not be liable for indirect, incidental, special, or consequential loss arising from use of, or inability to use, this website. Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited.</p></LegalSection>
    <LegalSection title="Changes to Terms"><p>Samrik Solutions may update these Terms & Conditions from time to time. Updated terms will be posted on this page with a revised last-updated date.</p></LegalSection>
    <LegalSection title="Contact"><p>For questions about these terms, contact <LegalContact />.</p></LegalSection>
  </LegalPage>;
}