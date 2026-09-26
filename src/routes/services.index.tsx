import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownUp,
  ArrowRight,
  BadgeDollarSign,
  Boxes,
  Building2,
  Check,
  ClipboardList,
  Database,
  FileCog,
  GraduationCap,
  Headphones,
  HeartPulse,
  Laptop,
  Mail,
  Megaphone,
  MessageSquareText,
  PhoneCall,
  Search,
  ShieldCheck,
  Store,
  Target,
  TrendingUp,
  UsersRound,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, IconCard, PageHero, SectionHeading } from "@/components/marketing";
import { services } from "@/config/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Sales, Educational & Rural Tech Services | Samrik Solutions" },
      { name: "description", content: "Explore Samrik Solutions services for SaaS and logistics sales, practical digital learning, and accessible rural digital services through Rural Tech Store Services." },
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

const bpoServices = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "24/7 customer care across voice, chat, and email with structured support processes designed around your customer experience requirements.",
    capabilities: ["Dedicated, domain-trained teams", "Multichannel customer support"],
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Tiered technical assistance designed to help businesses manage product, application, and technical support requirements.",
    capabilities: ["Dedicated, domain-trained teams", "Structured technical support processes"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare BPO",
    description: "Healthcare business process support covering patient services, eligibility-related processes, coordination, and other operational requirements.",
    capabilities: ["Dedicated, domain-trained teams", "Structured healthcare support processes"],
  },
  {
    icon: ClipboardList,
    title: "Medical Billing",
    description: "Revenue-cycle and medical billing support covering coding-related processes, claims support, accounts receivable follow-up, and denial management.",
    capabilities: ["Dedicated, domain-trained teams", "Structured billing workflows"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance Processing",
    description: "Operational support for insurance processes including policy servicing, claims support, documentation, and underwriting assistance.",
    capabilities: ["Dedicated, domain-trained teams", "Structured insurance processing workflows"],
  },
  {
    icon: Database,
    title: "Data Entry & Processing",
    description: "Data capture, cleansing, digitization, and processing services supported by structured quality-control workflows.",
    capabilities: ["Dedicated, domain-trained teams", "Quality-control processes"],
  },
  {
    icon: FileCog,
    title: "Back Office Support",
    description: "Operational support covering document handling, administrative activities, workflow coordination, and routine business processes.",
    capabilities: ["Dedicated, domain-trained teams", "Structured operational workflows"],
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Professional email response management designed to maintain consistent communication, accuracy, and customer experience.",
    capabilities: ["Dedicated, domain-trained teams", "Structured email support workflows"],
  },
  {
    icon: MessageSquareText,
    title: "Live Chat Support",
    description: "Real-time chat support handled by trained teams working with your product information, customer processes, and CRM workflows.",
    capabilities: ["Dedicated, domain-trained teams", "Real-time customer interaction"],
  },
  {
    icon: BadgeDollarSign,
    title: "Finance & Accounting",
    description: "Finance and accounting process support covering AP/AR, reconciliations, payroll-related processes, and financial reporting support.",
    capabilities: ["Dedicated, domain-trained teams", "Structured finance workflows"],
  },
  {
    icon: UsersRound,
    title: "HR Outsourcing",
    description: "HR operational support covering recruitment coordination, onboarding, benefits administration, and HR helpdesk activities.",
    capabilities: ["Dedicated, domain-trained teams", "Structured HR processes"],
  },
  {
    icon: Laptop,
    title: "IT Help Desk",
    description: "IT help desk support covering technical requests, ticket management, incident handling, asset-related processes, and user assistance.",
    capabilities: ["Dedicated, domain-trained teams", "Structured ticket and incident workflows"],
  },
  {
    icon: PhoneCall,
    title: "Inbound Process",
    description: "Inbound process support for customer enquiries, order taking, reservations, customer assistance, and inbound sales activities.",
    capabilities: ["Dedicated, domain-trained teams", "Structured inbound workflows"],
  },
  {
    icon: ArrowDownUp,
    title: "Outbound Process",
    description: "Outbound process support including lead generation, appointment setting, customer outreach, surveys, and other business campaigns.",
    capabilities: ["Dedicated, domain-trained teams", "Structured outbound workflows"],
  },
] as const;

const supportServices = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Customer care across voice, chat, and email handled by trained teams following structured support processes designed around your customer experience requirements.",
    capabilities: ["Voice, chat, and email support", "Structured customer support processes"],
  },
  {
    icon: Mail,
    title: "Mail Support",
    description: "Professional email response management designed to maintain consistent communication, accuracy, and a reliable customer experience.",
    capabilities: ["Email response management", "Structured email support workflows"],
  },
  {
    icon: Database,
    title: "Data Entry Services",
    description: "Data capture, cleansing, digitization, and processing services supported by structured quality-control workflows.",
    capabilities: ["Data capture & digitization", "Quality-control processes"],
  },
] as const;

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
      <section className="bg-surface pb-10 pt-20 md:pb-12 md:pt-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="BPO & Outsourcing Services"
            title="One Partner. Every BPO Capability."
            description="From customer support and technical assistance to healthcare, finance, data processing, and back-office operations, Samrik Solutions provides flexible outsourcing capabilities designed around your business requirements."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {bpoServices.map(({ icon: Icon, title, description, capabilities }) => (
              <article key={title} className="rise-in flex min-w-0 flex-col border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="size-5" /></span>
                <h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                <ul className="mt-auto grid gap-3 pt-6">
                  {capabilities.map((capability) => (
                    <li key={capability} className="flex min-w-0 items-start gap-3 text-sm leading-6 text-foreground">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3" /></span>
                      <span className="min-w-0">{capability}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12 border border-border bg-card px-6 py-8 shadow-sm md:px-9 md:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-bold text-card-foreground md:text-3xl">Looking to Outsource a Business Process?</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">Tell us about your business process and operational requirements. Our team can discuss the appropriate BPO solution for your organization.</p>
            </div>
            <Button asChild variant="accent" size="lg" className="mt-6 w-full shrink-0 sm:w-auto lg:mt-0">
              <Link to="/contact">Enquire About BPO Services <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-surface pb-20 pt-10 md:pb-28 md:pt-12">
        <div className="section-shell">
          <SectionHeading eyebrow="Additional Sales Support" title="Flexible Sales Capabilities" description="Targeted support that strengthens your existing sales and business-development efforts." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><IconCard icon={Search} title="Lead Generation">Identify and connect businesses with relevant prospects.</IconCard><IconCard icon={TrendingUp} title="Business Development">Support organizations in identifying new opportunities and markets.</IconCard><IconCard icon={Target} title="Customer Acquisition">Help businesses create structured customer acquisition processes.</IconCard><IconCard icon={Megaphone} title="Sales Outreach">Professional communication and engagement with potential customers.</IconCard></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
