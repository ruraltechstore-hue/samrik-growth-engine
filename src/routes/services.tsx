import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  Building2,
  CircleDollarSign,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Monitor,
  Plane,
  Receipt,
  Search,
  Settings2,
  ShoppingCart,
  Store,
  Target,
  TrendingUp,
  UserRoundSearch,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, CheckList, IconCard, PageHero, SectionHeading } from "@/components/marketing";

export const Route = createFileRoute("/services")({
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
  component: Services,
});

const salesServices = [
  { id: "saas-sales", icon: Boxes, title: "SaaS Sales Solutions", text: "Samrik Solutions supports SaaS businesses in reaching potential customers and creating new sales opportunities.", items: ["Lead generation", "Prospect identification", "Customer outreach", "Sales qualification", "Appointment setting", "Product/service communication", "Customer follow-up", "Sales pipeline support", "Customer relationship development"], cta: "Discuss Your SaaS Sales Needs" },
  { id: "logistics-sales", icon: Building2, title: "Logistics Sales Solutions", text: "We help logistics and supply-chain businesses connect with potential customers and identify new business opportunities.", items: ["B2B lead generation", "Customer prospecting", "Client outreach", "Business development", "Sales follow-up", "Client relationship management", "Market expansion support", "Opportunity identification"], cta: "Grow Your Logistics Business" },
] as const;

const learningAreas: ReadonlyArray<{ icon: LucideIcon; title: string }> = [
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: Megaphone, title: "Digital Marketing" },
  { icon: Cpu, title: "Artificial Intelligence" },
  { icon: CircleDollarSign, title: "Sales" },
  { icon: UserRoundSearch, title: "Lead Generation" },
  { icon: Handshake, title: "Business Development" },
  { icon: GraduationCap, title: "Freelancing" },
  { icon: Lightbulb, title: "Entrepreneurship" },
  { icon: TrendingUp, title: "Business Growth" },
  { icon: Settings2, title: "Digital Business Automation" },
];

const audiences: ReadonlyArray<{ icon: LucideIcon; title: string }> = [
  { icon: GraduationCap, title: "Students" },
  { icon: BadgeCheck, title: "Freshers" },
  { icon: UserRoundSearch, title: "Job Seekers" },
  { icon: Building2, title: "Working Professionals" },
  { icon: Monitor, title: "Freelancers" },
  { icon: TrendingUp, title: "Startup Founders" },
  { icon: Lightbulb, title: "Entrepreneurs" },
  { icon: Building2, title: "Existing Business Owners" },
  { icon: Boxes, title: "Product-Oriented Businesses" },
  { icon: Users, title: "Service-Oriented Businesses" },
];

const ruralTechAreas: ReadonlyArray<{ icon: LucideIcon; title: string }> = [
  { icon: Receipt, title: "Utility & Bill Payment Services" },
  { icon: Landmark, title: "Financial Services" },
  { icon: Building2, title: "Government & Digital Services" },
  { icon: Plane, title: "Travel Services" },
  { icon: ShoppingCart, title: "E-Commerce Services" },
  { icon: BookOpen, title: "Online Learning Services" },
  { icon: Monitor, title: "Digital Service Center Support" },
  { icon: Lightbulb, title: "Rural Entrepreneurship" },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="All Services" title="Our Sales, Educational & Rural Tech Services" description="Explore business-focused sales solutions, practical learning, and accessible rural digital services designed for careers, entrepreneurship, and community growth." />

      <section className="py-20 md:py-28">
        <div className="section-shell space-y-16">
          {salesServices.map((service, index) => (
            <article id={service.id} key={service.title} className="scroll-mt-24 grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <span className="grid size-14 place-items-center rounded-md bg-primary text-primary-foreground"><service.icon /></span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Sales service 0{index + 1}</p>
                <h2 className="mt-3 font-display text-3xl font-bold">{service.title}</h2>
                <p className="mt-5 leading-8 text-muted-foreground">{service.text}</p>
                <Button asChild variant="accent" size="lg" className="mt-7"><Link to="/partner">{service.cta} <ArrowRight /></Link></Button>
              </div>
              <div className="bg-surface p-7 md:p-9">
                <h3 className="mb-6 font-display text-lg font-bold">What we can support</h3>
                <CheckList items={service.items} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="educational-services" className="scroll-mt-24 py-20 md:py-28">
        <div className="section-shell">
          <article className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rise-in">
              <span className="grid size-14 place-items-center rounded-md bg-primary text-primary-foreground"><GraduationCap /></span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Service 03</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Educational Services</h2>
              <p className="mt-5 text-lg font-semibold text-foreground">Building Practical Skills for the Digital Economy</p>
              <p className="mt-5 leading-8 text-muted-foreground">Samrik Solutions' Educational Services are designed to help individuals and businesses develop practical, industry-relevant skills in digital technologies, sales, entrepreneurship, and business growth.</p>
              <p className="mt-4 leading-8 text-muted-foreground">Our programs focus on connecting knowledge with practical application, enabling participants to develop skills that can be applied across careers, freelancing, startups, and existing businesses.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg"><a href="#educational-learning-areas">Explore Educational Services <ArrowRight /></a></Button>
                <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Us</Link></Button>
              </div>
            </div>
            <div id="educational-learning-areas" className="scroll-mt-24 bg-surface p-7 md:p-9">
              <h3 className="mb-6 font-display text-lg font-bold">Areas of Learning</h3>
              <ServiceItemGrid items={learningAreas} />
            </div>
          </article>

          <div className="grid gap-10 border-b border-border py-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Who We Serve</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Learning for career and business goals</h3>
            </div>
            <ServiceItemGrid items={audiences} />
          </div>

          <div className="grid gap-10 pt-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Our Objective</p>
              <h3 className="mt-3 font-display text-2xl font-bold">From Learning to Practical Application</h3>
            </div>
            <div className="border-l-4 border-accent-strong bg-surface p-7 md:p-9">
              <Workflow className="size-8 text-secondary" />
              <p className="mt-5 leading-8 text-muted-foreground">Our objective is to bridge the gap between learning digital skills and applying them to real-world careers, freelancing, startups, and existing businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rural-tech-store" className="scroll-mt-24 py-20 md:py-28">
        <div className="section-shell">
          <article className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rise-in">
              <span className="grid size-14 place-items-center rounded-md bg-primary text-primary-foreground"><Store /></span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Sales service 04</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Rural Tech Store</h2>
              <p className="mt-5 text-lg font-semibold text-foreground">Digital Services & Rural Entrepreneurship</p>
              <p className="mt-5 leading-8 text-muted-foreground">Rural Tech Store focuses on enabling access to essential digital services in rural and semi-urban communities while creating opportunities for local entrepreneurs to establish and operate digital service centers.</p>
              <p className="mt-4 leading-8 text-muted-foreground">The service model brings multiple digital services together through a single platform, helping individuals and communities access services conveniently while supporting local digital entrepreneurship.</p>
              <Button asChild variant="accent" size="lg" className="mt-7"><Link to="/partner">Explore Rural Tech Store <ArrowRight /></Link></Button>
            </div>
            <div className="bg-surface p-7 md:p-9">
              <h3 className="mb-6 font-display text-lg font-bold">Key Service Areas</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {ruralTechAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 shadow-sm">
                      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="size-5" /></span>
                      <p className="font-semibold text-foreground">{area.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
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

function ServiceItemGrid({ items }: { items: ReadonlyArray<{ icon: LucideIcon; title: string }> }) {
  return <div className="grid gap-5 sm:grid-cols-2">{items.map((item) => { const Icon = item.icon; return <div key={item.title} className="rise-in flex items-start gap-4 rounded-lg border border-border bg-card p-4 shadow-sm"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="size-5" /></span><p className="font-semibold text-foreground">{item.title}</p></div>; })}</div>;
}