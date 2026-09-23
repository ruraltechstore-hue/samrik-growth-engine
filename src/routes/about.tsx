import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  Eye,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageSquare,
  Network,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Store,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IconCard, SectionHeading } from "@/components/marketing";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Samrik Solutions | Business Growth Solutions" },
      {
        name: "description",
        content: "Learn how Samrik Solutions supports businesses, institutions, professionals, and entrepreneurs across sales, logistics, education, digital opportunities, and business development.",
      },
      { property: "og:title", content: "About Samrik Solutions | Business Growth Solutions" },
      {
        property: "og:description",
        content: "Discover who Samrik Solutions is, what we do, who we work with, and our practical approach to business and market opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const services: Array<{ title: string; description: string; icon: LucideIcon; to: string }> = [
  { title: "SaaS Sales", description: "Support businesses with prospect identification, lead generation, outreach, qualification, appointment setting, follow-up, and sales pipeline support.", icon: Boxes, to: "/services/saas-sales" },
  { title: "Logistics Sales", description: "Support logistics and related businesses with B2B prospecting, client outreach, lead generation, business development, follow-up, and market expansion activities.", icon: Building2, to: "/services/logistics-sales" },
  { title: "Educational Services", description: "Provide practical learning and internship-oriented programs covering digital marketing, e-commerce, artificial intelligence, sales, lead generation, business development, freelancing, entrepreneurship, and digital business.", icon: GraduationCap, to: "/services/educational-services" },
  { title: "Rural Tech Store Services", description: "Provide access to digital and technology-enabled business opportunities designed around different participation models.", icon: Store, to: "/services/rural-tech-store" },
  { title: "Lead Generation", description: "Help businesses identify and connect with potential customers through structured prospecting, outreach, and lead-generation activities.", icon: Search, to: "/services" },
  { title: "Business Development", description: "Support organizations in identifying business opportunities, developing relationships, exploring markets, and creating potential growth channels.", icon: TrendingUp, to: "/services" },
];

const approach = [
  { index: "01", title: "Understand", description: "We begin by understanding the client's requirement, business objective, target audience, and current challenges.", icon: Users },
  { index: "02", title: "Identify", description: "We identify the relevant service, opportunity, or business approach that aligns with the requirement.", icon: Search },
  { index: "03", title: "Plan", description: "We structure the next steps based on the specific requirement and expected outcome.", icon: Workflow },
  { index: "04", title: "Execute", description: "We focus on organized execution, communication, follow-up, and continuous coordination.", icon: Settings2 },
  { index: "05", title: "Improve", description: "We use feedback and observations to refine the approach and improve the overall experience.", icon: RefreshCw },
];

const values = [
  { title: "Customer Focus", description: "We prioritize understanding customer requirements and delivering solutions relevant to their needs.", icon: Target },
  { title: "Transparency", description: "We believe clear communication and transparent processes are essential for building trust.", icon: MessageSquare },
  { title: "Practicality", description: "We focus on practical solutions that can be understood, implemented, and adapted to real requirements.", icon: Lightbulb },
  { title: "Performance", description: "We emphasize structured execution, consistency, follow-up, and continuous improvement.", icon: TrendingUp },
  { title: "Partnership", description: "We aim to build long-term relationships rather than focusing only on individual transactions.", icon: Handshake },
  { title: "Adaptability", description: "Business requirements change continuously. We remain open to adapting our approach based on changing needs and opportunities.", icon: RefreshCw },
];

const audiences = [
  { title: "Businesses", description: "Organizations looking for sales support, lead generation, logistics sales, or business development assistance.", icon: Building2 },
  { title: "Startups", description: "Growing businesses looking for structured sales support, customer acquisition activities, or business development opportunities.", icon: TrendingUp },
  { title: "Educational Institutions", description: "Colleges, universities, training institutes, and other educational organizations looking for relevant educational and internship programs.", icon: GraduationCap },
  { title: "Entrepreneurs", description: "Individuals and business owners looking for digital business opportunities, education, sales support, or growth-oriented solutions.", icon: BriefcaseBusiness },
  { title: "Professionals", description: "Working professionals and individuals looking to develop practical digital and business skills.", icon: UserRound },
  { title: "Partners", description: "Organizations interested in collaborating with Samrik Solutions to explore mutually relevant business opportunities.", icon: Handshake },
];

const industries = ["Technology & SaaS", "Logistics & Transportation", "Education & Training", "E-Commerce", "Digital Business", "Startups & Entrepreneurship", "Small & Medium Businesses", "Professional Services", "Rural & Digital Business Opportunities"];

const reasons = [
  { title: "One Business Ecosystem", description: "Our services bring sales, business development, education, logistics, and digital opportunities together within one business ecosystem." },
  { title: "Requirement-Focused Solutions", description: "We first understand the requirement before identifying the most relevant service or approach." },
  { title: "Practical Execution", description: "We focus on practical processes, structured communication, and consistent execution." },
  { title: "Flexible Engagement", description: "Our services can be adapted according to business requirements, target markets, and project needs." },
  { title: "Relationship Driven", description: "We value long-term professional relationships built through communication, transparency, and reliability." },
  { title: "Multiple Areas of Expertise", description: "Our service portfolio covers sales, lead generation, logistics, education, digital business, and business development." },
];

const aboutFaqs = [
  { q: "What does Samrik Solutions do?", a: "Samrik Solutions provides services across SaaS sales, logistics sales, educational services, rural digital business opportunities, lead generation, and business development." },
  { q: "Who can work with Samrik Solutions?", a: "Businesses, startups, educational institutions, entrepreneurs, professionals, and potential business partners can contact Samrik Solutions depending on their specific requirements." },
  { q: "Does Samrik Solutions offer customized solutions?", a: "Service requirements can vary depending on the organization, industry, target audience, and business objective. Contact the team to discuss the specific requirement." },
  { q: "How can I partner with Samrik Solutions?", a: "You can use the Partner With Us page to submit your requirement and provide your business details." },
  { q: "How can I contact Samrik Solutions?", a: "Use the Contact Us page to submit an enquiry or contact the company using the available contact information." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-hero-foreground md:py-28">
        <div className="subtle-grid absolute inset-0 opacity-25" />
        <div className="section-shell relative">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">About Us</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">About Samrik Solutions</h1>
          <p className="mt-6 max-w-4xl font-display text-xl font-semibold leading-8 text-hero-foreground md:text-2xl">Building Business Growth Through Sales, Technology, Education and Market Opportunities</p>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-hero-foreground/75 md:text-lg">
            <p>Samrik Solutions is a business-focused organization providing practical solutions across sales, logistics, educational services, digital opportunities, lead generation, and business development.</p>
            <p>Our approach is centered on understanding business requirements, connecting the right opportunities, and supporting organizations through structured and practical solutions.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading eyebrow="Company Profile" title="Who We Are" description="A practical, customer-focused platform connecting business needs with relevant services and opportunities." />
          <div className="space-y-5 border-l-2 border-accent-strong pl-6 text-base leading-8 text-muted-foreground md:pl-10">
            <p>Samrik Solutions is focused on helping businesses, organizations, educational institutions, professionals, and individuals access practical business and growth-oriented solutions.</p>
            <p>Our services bring together sales support, lead generation, logistics opportunities, educational programs, digital business services, and business development under one platform.</p>
            <p>We believe businesses need more than individual services. They need reliable processes, relevant opportunities, consistent communication, and solutions that can adapt to their requirements.</p>
            <p>Samrik Solutions works with a customer-focused approach, understanding the requirement first and then identifying the appropriate service or business solution.</p>
            <p className="font-semibold text-foreground">Our objective is to create meaningful business connections and provide practical support that helps our clients and partners move forward.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Capabilities" title="What We Do" description="Our services are designed around different business, sales, education, and market-development requirements." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon: Icon, to }) => (
              <article key={title} className="rise-in flex h-full flex-col border border-border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <span className="grid size-12 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="size-6" /></span>
                <h3 className="mt-7 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                <Button asChild variant="link" className="mt-auto h-auto justify-start px-0 pt-6"><Link to={to}>Learn More <ArrowRight /></Link></Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <article className="border-t-4 border-secondary bg-card p-8 shadow-sm md:p-10">
            <Target className="size-9 text-secondary" />
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Our Mission</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Making Business Growth More Practical and Accessible</h2>
            <div className="mt-5 space-y-4 leading-8 text-muted-foreground"><p>Our mission is to provide practical business, sales, educational, and market-development solutions that help organizations and individuals identify opportunities and take meaningful next steps.</p><p>We aim to build long-term relationships through transparency, consistent communication, customer understanding, and service-oriented execution.</p><p>Rather than following a one-size-fits-all approach, we focus on understanding the specific requirement and delivering a solution aligned with that requirement.</p></div>
          </article>
          <article className="border-t-4 border-accent-strong bg-card p-8 shadow-sm md:p-10">
            <Eye className="size-9 text-accent-strong" />
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Our Vision</p>
            <h2 className="mt-3 font-display text-3xl font-bold">To Build a Connected Ecosystem for Business and Opportunity</h2>
            <div className="mt-5 space-y-4 leading-8 text-muted-foreground"><p>Our vision is to develop a trusted ecosystem where businesses, educational institutions, professionals, entrepreneurs, and individuals can discover relevant services, opportunities, and partnerships.</p><p>We want Samrik Solutions to become a platform that connects sales, education, technology, business development, and market opportunities in a practical and accessible way.</p></div>
          </article>
        </div>
      </section>

      <section className="bg-hero py-20 text-hero-foreground md:py-28">
        <div className="section-shell">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Our Approach</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">A structured path from requirement to refinement.</h2></div>
          <div className="mt-12 grid gap-px overflow-hidden border border-hero-foreground/15 bg-hero-foreground/15 md:grid-cols-2 lg:grid-cols-5">
            {approach.map(({ index, title, description, icon: Icon }) => <article key={title} className="bg-hero p-6"><div className="flex items-center justify-between"><Icon className="size-6 text-accent-strong" /><span className="font-display text-sm font-bold text-accent-strong">{index}</span></div><h3 className="mt-6 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-hero-foreground/70">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="What Guides Us" title="Our Core Values" align="center" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{values.map(({ title, description, icon }) => <IconCard key={title} icon={icon} title={title}>{description}</IconCard>)}</div></div></section>

      <section className="bg-surface py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="Our Community" title="Who We Work With" description="Samrik Solutions can work with different types of organizations and individuals depending on the service requirement. The applicable services depend on each specific requirement." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{audiences.map(({ title, description, icon }) => <IconCard key={title} icon={icon} title={title}>{description}</IconCard>)}</div></div></section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Industry Context" title="Industries & Areas We Support" description="Our solutions can be adapted to different business environments based on the specific requirement, target market, and service involved." />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{industries.map((industry, index) => <div key={industry} className="flex min-h-28 items-start gap-4 bg-card p-5"><span className="font-display text-xs font-bold text-secondary">{String(index + 1).padStart(2, "0")}</span><p className="font-display font-bold leading-6">{industry}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28"><div className="section-shell"><SectionHeading eyebrow="Why Samrik Solutions" title="Why Work With Samrik Solutions?" align="center" /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{reasons.map(({ title, description }) => <article key={title} className="border-l-4 border-secondary bg-card p-7 shadow-sm"><CheckCircle2 className="size-6 text-accent-strong" /><h3 className="mt-5 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p></article>)}</div></div></section>

      <section className="py-20 md:py-28"><div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div className="grid size-20 place-items-center rounded-md bg-accent text-accent-foreground"><Compass className="size-9" /></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Our Service Philosophy</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Listen. Understand. Connect. Execute. Improve.</h2><div className="mt-5 space-y-4 leading-8 text-muted-foreground"><p>At Samrik Solutions, we believe effective service begins with understanding.</p><p>Every business has different requirements, audiences, challenges, and objectives. Our role is to understand those differences and work toward solutions that are relevant to the specific situation.</p><p>We focus on clear communication, practical execution, continuous coordination, and building relationships that can develop over time.</p></div></div></div></section>

      <section className="bg-secondary py-20 text-secondary-foreground md:py-24"><div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground/70">Partnership</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Let's Build Opportunities Together</h2><p className="mt-5 leading-8 text-secondary-foreground/80">Whether you are a business looking for sales and lead-generation support, an organization exploring business development opportunities, an educational institution seeking relevant programs, or a potential partner interested in collaboration, Samrik Solutions provides a platform to start the conversation.</p><p className="mt-3 font-semibold">Tell us what you are looking for, and let's explore how we can work together.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="accent" size="lg"><Link to="/partner">Partner With Us <ArrowRight /></Link></Button><Button asChild variant="inverse" size="lg"><Link to="/contact">Let's Talk</Link></Button></div></div></section>

      <section className="py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="About Us FAQ" title="Common Questions" description="Helpful information about working with Samrik Solutions." /><Accordion type="single" collapsible className="border-t border-border">{aboutFaqs.map((faq, index) => <AccordionItem key={faq.q} value={`about-${index}`}><AccordionTrigger className="py-6 text-left font-display text-base font-bold no-underline hover:no-underline">{faq.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="bg-hero py-16 text-hero-foreground md:py-20"><div className="section-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Start a Conversation</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Have a Business Requirement?</h2><p className="mt-3 text-hero-foreground/75">Let's discuss your requirement and explore a practical way forward.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="accent" size="lg"><Link to="/contact">Contact Us <ArrowRight /></Link></Button><Button asChild variant="inverse" size="lg"><Link to="/partner">Partner With Us</Link></Button></div></div></section>
    </>
  );
}