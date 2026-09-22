import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  CodeXml,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Megaphone,
  Monitor,
  Network,
  Plane,
  Receipt,
  Rocket,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  UserRoundSearch,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import educationalImage from "@/assets/educational-services.jpg";
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
  { icon: Boxes, title: "SaaS Sales Solutions", text: "Samrik Solutions supports SaaS businesses in reaching potential customers and creating new sales opportunities.", items: ["Lead generation", "Prospect identification", "Customer outreach", "Sales qualification", "Appointment setting", "Product/service communication", "Customer follow-up", "Sales pipeline support", "Customer relationship development"], cta: "Discuss Your SaaS Sales Needs" },
  { icon: Building2, title: "Logistics Sales Solutions", text: "We help logistics and supply-chain businesses connect with potential customers and identify new business opportunities.", items: ["B2B lead generation", "Customer prospecting", "Client outreach", "Business development", "Sales follow-up", "Client relationship management", "Market expansion support", "Opportunity identification"], cta: "Grow Your Logistics Business" },
] as const;

const learningAreas: ReadonlyArray<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShoppingCart, title: "E-Commerce", text: "Understand digital commerce, online business models, customer acquisition, and the fundamentals of building and managing an online business." },
  { icon: Megaphone, title: "Digital Marketing", text: "Develop practical knowledge of digital marketing strategies, online customer engagement, content, and digital growth." },
  { icon: Cpu, title: "Artificial Intelligence", text: "Explore the practical applications of AI and emerging technologies in modern careers and businesses." },
  { icon: CircleDollarSign, title: "Sales", text: "Build essential sales knowledge, customer communication skills, prospect engagement, and sales fundamentals." },
  { icon: UserRoundSearch, title: "Lead Generation", text: "Learn approaches for identifying, attracting, and engaging potential customers and business opportunities." },
  { icon: Handshake, title: "Business Development", text: "Develop an understanding of market opportunities, customer relationships, partnerships, and business expansion." },
  { icon: BriefcaseBusiness, title: "Freelancing", text: "Understand the fundamentals of building freelance capabilities, finding opportunities, presenting services, and developing professional client relationships." },
  { icon: Lightbulb, title: "Entrepreneurship", text: "Develop entrepreneurial thinking and understand the fundamentals involved in starting and developing a business." },
  { icon: TrendingUp, title: "Business Growth", text: "Learn practical approaches to customer acquisition, market expansion, operational improvement, and sustainable business growth." },
  { icon: Settings2, title: "Digital Business Automation", text: "Explore how digital tools and automation can streamline business processes, improve efficiency, and support scalable operations." },
];

const audiences: ReadonlyArray<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: GraduationCap, title: "Students", text: "Build practical skills alongside academic learning." },
  { icon: Sparkles, title: "Freshers", text: "Develop industry-relevant capabilities for starting a career." },
  { icon: UserRoundSearch, title: "Job Seekers", text: "Strengthen practical and professional skills for today's job market." },
  { icon: BriefcaseBusiness, title: "Working Professionals", text: "Expand existing capabilities and adapt to evolving digital technologies." },
  { icon: CodeXml, title: "Freelancers", text: "Develop skills and knowledge to build and grow independent professional opportunities." },
  { icon: Rocket, title: "Startup Founders", text: "Gain practical knowledge to support early-stage business development." },
  { icon: Lightbulb, title: "Entrepreneurs", text: "Develop digital, sales, and business capabilities for growth." },
  { icon: Building2, title: "Existing Business Owners", text: "Explore digital strategies and tools to improve and expand their businesses." },
  { icon: Boxes, title: "Product-Oriented Businesses", text: "Develop capabilities around digital sales, marketing, customer acquisition, and growth." },
  { icon: Users, title: "Service-Oriented Businesses", text: "Strengthen customer acquisition, sales, business development, and digital operations." },
];

const applications = ["Career development", "Employment opportunities", "Freelancing", "Entrepreneurship", "Startup development", "Existing business growth", "Digital transformation"] as const;

const focusSteps = [
  { icon: GraduationCap, label: "Learn", detail: "Build relevant knowledge" },
  { icon: Wrench, label: "Apply", detail: "Put skills into practice" },
  { icon: Blocks, label: "Build", detail: "Create real capability" },
  { icon: ChartNoAxesCombined, label: "Grow", detail: "Pursue new opportunities" },
] as const;

function Services() {
  return (
    <>
      <PageHero eyebrow="All Services" title="Our Sales & Educational Services" description="Explore business-focused sales solutions and practical learning designed for careers, entrepreneurship, and growth in the digital economy." />

      <section className="py-20 md:py-28">
        <div className="section-shell space-y-16">
          {salesServices.map((service, index) => (
            <article key={service.title} className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.85fr_1.15fr]">
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

      <section className="relative overflow-hidden bg-hero py-20 text-hero-foreground md:py-28">
        <div className="subtle-grid absolute inset-0 opacity-20" />
        <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rise-in">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Educational Services</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">Building Practical Skills for the Digital Economy</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-hero-foreground/80">Samrik Solutions' Educational Services are designed to help individuals and businesses develop practical, industry-relevant skills in digital technologies, sales, entrepreneurship, and business growth.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-hero-foreground/70">Our learning programs focus on connecting knowledge with practical application, enabling participants to develop skills that can be applied across careers, freelancing, startups, and existing businesses.</p>
          </div>
          <div className="relative overflow-hidden border border-hero-foreground/15 bg-hero-foreground/5 p-2 shadow-2xl">
            <img src={educationalImage} alt="Professionals exploring digital commerce, artificial intelligence, sales, and business automation" width={1600} height={900} loading="lazy" className="aspect-[16/9] w-full object-cover" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-hero/90 px-4 py-3 backdrop-blur-sm">
              <Network className="size-5 text-accent-strong" />
              <span className="text-sm font-bold">Digital skills connected to business outcomes</span>
            </div>
          </div>
        </div>
      </section>

      <section id="learning-areas" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Areas of Learning" title="Practical capabilities for a digital-first economy" description="Explore complementary disciplines that connect technology, customer engagement, entrepreneurship, and sustainable business development." />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {learningAreas.map((area, index) => <LearningCard key={area.title} {...area} index={index + 1} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Who We Serve" title="Learning Designed for Different Career and Business Goals" description="Our programs are designed to support individuals at different stages of their professional and entrepreneurial journey." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => <AudienceCard key={audience.title} {...audience} />)}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Our Approach" title="From Learning to Practical Application" description="At Samrik Solutions, we believe that learning becomes more valuable when it can be applied in real-world situations." />
              <p className="mt-6 leading-8 text-muted-foreground">Our educational approach focuses on helping participants understand digital skills and explore how they can apply those skills to:</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {applications.map((application) => <li key={application} className="flex items-center gap-3 border-b border-border pb-3 text-sm font-semibold"><BadgeCheck className="size-5 shrink-0 text-secondary" />{application}</li>)}
              </ul>
            </div>
            <aside className="border-l-4 border-accent-strong bg-card p-8 shadow-sm md:p-10">
              <Workflow className="size-9 text-secondary" />
              <h3 className="mt-6 font-display text-2xl font-bold">Bridging skills and real environments</h3>
              <p className="mt-4 leading-8 text-muted-foreground">The objective is to help bridge the gap between learning digital skills and applying them in practical career and business environments.</p>
              <div className="my-8 h-px bg-border" />
              <h3 className="font-display text-2xl font-bold">Learning for a Changing Digital World</h3>
              <p className="mt-4 leading-8 text-muted-foreground">Technology and business are continuously evolving. Our educational services are designed around relevant digital skills that can help individuals and businesses understand emerging opportunities and adapt to the changing digital economy.</p>
            </aside>
          </div>

          <div className="mt-16 border border-border bg-card p-6 shadow-sm md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Key Focus</p>
            <div className="mt-7 grid gap-3 md:grid-cols-4">
              {focusSteps.map((step, index) => (
                <div key={step.label} className="relative flex items-center gap-4 bg-surface p-5 md:block md:min-h-44">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><step.icon className="size-5" /></span>
                  <div className="md:mt-6"><p className="font-display text-xl font-bold">{step.label}</p><p className="mt-1 text-sm text-muted-foreground">{step.detail}</p></div>
                  {index < focusSteps.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden size-7 -translate-y-1/2 rounded-full bg-accent p-1 text-accent-foreground md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="section-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Educational Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Build Skills. Create Opportunities. Grow.</h2>
            <p className="mt-4 leading-8 text-secondary-foreground/80">Whether you are beginning your career, exploring freelancing, building a startup, or looking to strengthen an existing business, Samrik Solutions provides learning opportunities focused on practical digital and business skills.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg"><a href="#learning-areas">Explore Educational Services <ArrowRight /></a></Button>
            <Button asChild variant="inverse" size="lg"><Link to="/contact">Contact Us</Link></Button>
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

function LearningCard({ icon: Icon, title, text, index }: { icon: LucideIcon; title: string; text: string; index: number }) {
  return <article className="rise-in min-h-72 bg-card p-6 transition-colors duration-300 hover:bg-accent"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground"><Icon className="size-5" /></span><span className="text-xs font-bold text-muted-foreground">{String(index).padStart(2, "0")}</span></div><h3 className="mt-7 font-display text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>;
}

function AudienceCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <article className="rise-in border-t-2 border-secondary bg-card p-5 shadow-sm"><Icon className="size-6 text-secondary" /><h3 className="mt-5 font-display text-base font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>;
}