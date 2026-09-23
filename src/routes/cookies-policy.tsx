import { createFileRoute } from "@tanstack/react-router";
import { LegalContact, LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/cookies-policy")({
  head: () => ({
    meta: [
      { title: "Cookies Policy | Samrik Solutions" },
      { name: "description", content: "Learn how cookies and similar technologies may be used on the Samrik Solutions website." },
      { property: "og:title", content: "Cookies Policy | Samrik Solutions" },
      { property: "og:description", content: "How cookies and similar technologies may be used on the Samrik Solutions website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookies-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cookies-policy" }],
  }),
  component: CookiesPolicy,
});

function CookiesPolicy() {
  return <LegalPage title="Cookies Policy" description="How cookies and similar technologies may be used on the Samrik Solutions website.">
    <LegalSection title="What Are Cookies?"><p>Cookies are small data files stored on a user's device. They can help websites remember information, support website functions, and understand how a website is used.</p></LegalSection>
    <LegalSection title="Types of Cookies"><h3 className="font-display text-lg font-bold text-foreground">Essential Cookies</h3><p>These cookies are required for basic website functionality, security, and navigation.</p><h3 className="pt-3 font-display text-lg font-bold text-foreground">Analytics Cookies</h3><p>Where enabled, these cookies may be used to understand website traffic and improve website performance. This statement does not indicate that a specific analytics service is currently in use.</p><h3 className="pt-3 font-display text-lg font-bold text-foreground">Functional Cookies</h3><p>These cookies may be used to remember certain preferences or improve website functionality.</p><h3 className="pt-3 font-display text-lg font-bold text-foreground">Marketing Cookies</h3><p>If marketing or advertising technologies are added in the future, related cookies may be used for relevant marketing purposes, subject to applicable consent requirements.</p></LegalSection>
    <LegalSection title="Managing Cookies"><p>Users can manage or disable cookies through their browser settings and, where applicable, through cookie preferences provided on the website. Disabling certain cookies may affect some website functions.</p></LegalSection>
    <LegalSection title="Changes to This Policy"><p>This Cookies Policy may be updated periodically. Any changes will be posted on this page with a revised last-updated date.</p></LegalSection>
    <LegalSection title="Contact"><p>For questions about this Cookies Policy, contact <LegalContact />.</p></LegalSection>
  </LegalPage>;
}