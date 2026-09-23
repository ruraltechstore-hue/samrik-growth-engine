import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Building2, GraduationCap, Handshake, HeartHandshake, Route as RouteIcon, Store, Target, Users, Workflow } from "lucide-react";
import heroImage from "@/assets/samrik-growth-hero.jpg";
import { Button } from "@/components/ui/button";
import { CTASection, IconCard, SectionHeading } from "@/components/marketing";
import { services } from "@/config/site";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samrik Solutions | Sales & Business Growth Solutions" },
      { name: "description", content: "Samrik Solutions provides SaaS, logistics, educational sales, lead generation, and business development solutions to help businesses grow." },
      { property: "og:title", content: "Samrik Solutions | Sales & Business Growth Solutions" },
      { property: "og:description", content: "Industry-focused sales and business development support for sustainable growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const serviceLinks = ["/services/saas-sales", "/services/logistics-sales", "/services/educational-services", "/services/rural-tech-store"] as const;

  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-hero text-hero-foreground lg:min-h-[760px]">
        <img src={heroImage} alt="Business professionals collaborating on a sales growth strategy" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-center lg:object-right" fetchPriority="high" />
        <div className="absolute inset-0 bg-hero/82 lg:bg-transparent lg:bg-gradient-to-r lg:from-hero lg:via-hero/92 lg:to-hero/15" />
        <div className="section-shell relative flex min-h-[680px] items-center py-20 lg:min-h-[760px]"><div className="rise-in max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Sales & Business Development</p><h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] md:text-6xl lg:text-7xl">Driving Growth Through Smarter Sales Solutions</h1><p className="mt-6 max-w-2xl text-base leading-8 text-hero-foreground/80 md:text-lg">Samrik Solutions helps SaaS companies, logistics businesses, and educational organizations accelerate customer acquisition, expand their market reach, and build sustainable growth through effective sales solutions.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="accent" size="lg"><Link to="/partner">Partner With Us <ArrowRight /></Link></Button><Button asChild variant="inverse" size="lg"><Link to="/services">Explore Our Services</Link></Button></div></div></div>
      </section>

      <section className="py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="Why Samrik Solutions" title="Your Growth. Our Sales Expertise." description="From generating qualified opportunities to building meaningful customer relationships, we work alongside businesses to create scalable and effective sales strategies." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><IconCard icon={Target} title="Industry-Focused Expertise">Specialized sales solutions across SaaS, logistics, and education.</IconCard><IconCard icon={Users} title="Customer-Centric Approach">We focus on understanding customer needs and creating meaningful connections.</IconCard><IconCard icon={RouteIcon} title="Growth-Oriented Strategy">Our approach helps businesses expand their customer base and market presence.</IconCard><IconCard icon={Handshake} title="Long-Term Partnerships">We aim to build lasting relationships with businesses and their customers.</IconCard></div></div></section>

      <section className="bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Services" title="Solutions Designed for Business Growth" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const icons = [Boxes, Building2, GraduationCap, Store];
              const Icon = icons[index] ?? Boxes;
              return (
                <article key={service.title} className="rise-in flex h-full flex-col border border-border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid size-12 place-items-center rounded-md bg-primary text-primary-foreground"><Icon /></span>
                  <h3 className="mt-8 font-display text-2xl font-bold">{service.title}</h3>
                  <div className="mt-3 min-h-12">
                    {"subtitle" in service && <p className="text-sm font-semibold leading-6 text-secondary">{service.subtitle}</p>}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="mt-auto h-auto justify-start px-0 pt-6"><Link to={serviceLinks[index] as typeof serviceLinks[number]}>Learn More <ArrowRight /></Link></Button>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Button asChild variant="outline" size="lg"><Link to="/services">View All Services <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="How We Work" title="A Simple Approach to Better Sales" /><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4"><IconCard icon={Users} index="01" title="Understand">Understand your business, target market, products, and sales objectives.</IconCard><IconCard icon={Workflow} index="02" title="Strategize">Develop a sales approach aligned with your business goals.</IconCard><IconCard icon={HeartHandshake} index="03" title="Connect">Engage potential customers and create meaningful business opportunities.</IconCard><IconCard icon={Target} index="04" title="Grow">Build sustainable customer relationships and support long-term growth.</IconCard></div></div></section>

      <section className="bg-hero py-20 text-hero-foreground md:py-24"><div className="section-shell"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Industries We Serve</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Focused expertise where sales relationships matter.</h2></div><div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"><Industry icon={Boxes} title="SaaS">Helping technology companies reach and convert potential customers.</Industry><Industry icon={Building2} title="Logistics">Connecting logistics businesses with potential clients and business opportunities.</Industry><Industry icon={GraduationCap} title="Education">Supporting educational and training organizations in reaching learners and customers.</Industry><Industry icon={Store} title="Rural Tech Store">Bringing essential digital services and entrepreneurship opportunities to rural and semi-urban communities.</Industry></div></div></section>
      <CTASection />
    </>
  );
}

function Industry({ icon: Icon, title, children }: { icon: typeof Boxes; title: string; children: React.ReactNode }) { return <article className="border-l-2 border-accent-strong pl-6"><Icon className="size-7 text-accent-strong" /><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-hero-foreground/70">{children}</p></article>; }
