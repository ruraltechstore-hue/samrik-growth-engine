import { createFileRoute } from "@tanstack/react-router";
import { LegalContact, LegalList, LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Samrik Solutions" },
      { name: "description", content: "Learn how Samrik Solutions collects, uses, stores, and protects information submitted through this website." },
      { property: "og:title", content: "Privacy Policy | Samrik Solutions" },
      { property: "og:description", content: "How Samrik Solutions handles information submitted through its website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" description="How Samrik Solutions may collect, use, store, and protect information submitted through this website.">
    <LegalSection title="Information We Collect"><p>Visitors may voluntarily provide personal or business information through contact forms, partnership forms, enquiries, and other website interactions.</p><LegalList items={["Name", "Email address", "Phone number", "Company name", "Message or enquiry details", "Other information submitted through forms"]} /></LegalSection>
    <LegalSection title="How We Use Information"><p>Submitted information may be used to:</p><LegalList items={["Respond to enquiries", "Communicate with users", "Process partnership requests", "Provide requested information or services", "Improve website functionality and user experience", "Maintain website security"]} /></LegalSection>
    <LegalSection title="Information Sharing"><p>Samrik Solutions does not sell or rent personal information to third parties. Information may be shared with service providers only when reasonably necessary to operate the website or provide requested services, subject to applicable legal and contractual requirements.</p></LegalSection>
    <LegalSection title="Data Security"><p>Samrik Solutions uses reasonable administrative and technical measures intended to protect information submitted through the website. No method of electronic transmission or storage can be guaranteed to be completely secure.</p></LegalSection>
    <LegalSection title="Data Retention"><p>Information may be retained for as long as reasonably necessary for legitimate business, legal, or operational purposes, and may then be deleted or anonymized as appropriate.</p></LegalSection>
    <LegalSection title="User Rights"><p>Users may contact Samrik Solutions regarding their personal information or request appropriate corrections or deletion, subject to applicable law and legitimate retention requirements.</p></LegalSection>
    <LegalSection title="Third-Party Links"><p>The website may contain links to third-party websites. Samrik Solutions is not responsible for the content, security, or privacy practices of those external websites.</p></LegalSection>
    <LegalSection title="Changes to This Policy"><p>This Privacy Policy may be updated periodically. Any changes will be posted on this page with a revised last-updated date.</p></LegalSection>
    <LegalSection title="Contact"><p>For privacy-related questions, contact <LegalContact />.</p></LegalSection>
  </LegalPage>;
}