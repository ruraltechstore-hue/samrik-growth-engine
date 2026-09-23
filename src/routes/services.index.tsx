import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Building2, GraduationCap, Megaphone, Search, Store, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, IconCard, PageHero, SectionHeading } from "@/components/marketing";
import { services } from "@/config/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Sales, Educational & Rural Tech Services | Samrik Solutions" },
      { name: "description", content: "Explore Samrik Solutions services for SaaS and logistics sales, practical digital learning, and accessible rural digital services through Rural Tech Store." },
      { property: "og:title", content: "Sales, Educational & Rural Tech Services | Samrik Solutions" },
      { property: "og:description", content: "Business-focused sales solutions, practical learning, and rural digital service centers for entrepreneurs and communities." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

const serviceIcons = [Boxes, Building2, GraduationCap, Store];

function ServicesIndex() {
  return (
    <>
      <PageHero eyebrow="All Services" title="Our Sales, Educational & Rural Tech Services" description="Explore business-focused sales solutions, practical learning, and accessible rural digital services designed for careers, entrepreneurship, and community growth." />
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Services" title="Solutions Designed for Business Growth" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Boxes;
              return (
                <article key={service.slug} className="rise-in flex h-full flex-col border border-border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid size-12 place-items-center rounded-md bg-primary text-primary-foreground"><Icon /></span>
                  <h3 className="mt-8 font-display text-2xl font-bold">{service.title}</h3>
                  <div className="mt-3 min-h-12">
                    {"subtitle" in service && <p className="text-sm font-semibold leading-6 text-muted-foreground">{service.subtitle}</p>}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="mt-auto h-auto justify-start px-0 pt-6">
                    <Link to={`/services/${service.slug}`}>Learn More <ArrowRight /></Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Additional Sales Support" title="Flexible Sales Capabilities" description="Targeted support that strengthens your existing sales and business-development efforts." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><IconCard icon={Search} title="Lead Generation">Identify and connect businesses with relevant prospects.</IconCard><IconCard icon={TrendingUp} title="Business Development">Support organizations in identifying new opportunities and markets.</IconCard><IconCard icon={Target} title="Customer Acquisition">Help businesses create structured customer acquisition processes.</IconCard><IconCard icon={Megaphone} title="Sales Outreach">Professional communication and engagement with potential customers.</IconCard></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
