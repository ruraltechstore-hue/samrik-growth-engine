import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCard, SectionHeading } from "@/components/marketing";
import {
  applicationUrl,
  careerBenefits,
  careerStats,
  hiringSteps,
  jobCategories,
  jobs,
  type Job,
  type JobCategory,
} from "@/data/jobs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Samrik Solutions" },
      {
        name: "description",
        content: "Explore career opportunities at Samrik Solutions across customer support, BPO, sales, business development, HR, data processing, healthcare, technology, and finance.",
      },
      { property: "og:title", content: "Careers | Samrik Solutions" },
      {
        property: "og:description",
        content: "Explore career opportunities at Samrik Solutions across customer support, BPO, sales, business development, HR, data processing, healthcare, technology, and finance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<JobCategory>("All");
  const visibleJobs = useMemo(
    () => activeCategory === "All" ? jobs : jobs.filter((job) => job.categories.includes(activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <section className="relative overflow-hidden bg-hero py-20 text-hero-foreground md:py-28">
        <div className="subtle-grid absolute inset-0 opacity-25" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">Careers</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">Build Your Career With Samrik Solutions</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-hero-foreground/75 md:text-lg">
              Join a growing team delivering customer experience, technology, healthcare, finance, sales, and business support solutions. At Samrik Solutions, we create opportunities for people to learn, grow, and build meaningful careers.
            </p>
            <div className="mt-9">
              <Button asChild variant="accent" size="lg"><a href="#open-positions">View Open Roles <ArrowRight /></a></Button>
            </div>
          </div>
          <div aria-label="Career statistics" className="grid grid-cols-2 border border-hero-foreground/15 bg-hero-foreground/5 backdrop-blur-sm lg:w-90">
            {careerStats.map((stat, index) => (
              <div key={stat.label} className={cn("px-5 py-7 text-center", index % 2 !== 0 && "border-l border-hero-foreground/15", index >= 2 && "border-t border-hero-foreground/15")}>
                <p className="font-display text-3xl font-bold text-accent-strong md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-hero-foreground/75 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why Work With Us"
            title="More Than a Job — A Place to Grow"
            description="We believe great businesses are built by great people. At Samrik Solutions, we provide a supportive environment where employees can develop their skills, take on new challenges, and grow their careers."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerBenefits.map((benefit) => <IconCard key={benefit.title} icon={benefit.icon} title={benefit.title}>{benefit.description}</IconCard>)}
          </div>
        </div>
      </section>

      <section id="open-positions" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Open Positions"
            title="Find Your Opportunity"
            description="Explore our current opportunities and find a role that matches your skills, interests, and career goals."
          />

          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter open positions by category">
            {jobCategories.map((category) => (
              <Button
                key={category}
                type="button"
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
            Showing {visibleJobs.length} {visibleJobs.length === 1 ? "role" : "roles"}
          </p>
          <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-2">
            {visibleJobs.map((job) => <JobCard key={job.title} job={job} />)}
          </div>

          <div className="mt-12 border-l-4 border-accent-strong bg-card p-7 shadow-sm md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Don't See the Right Role?</h2>
              <p className="mt-3 leading-7 text-muted-foreground">We are always interested in meeting talented and motivated people. Submit your application and tell us how you can contribute to Samrik Solutions.</p>
            </div>
            <Button asChild size="lg" className="mt-6 shrink-0 md:mt-0"><a href={applicationUrl} target="_blank" rel="noopener noreferrer">Submit Your Application <ArrowRight /></a></Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Hiring Process" title="A Clear Path to Joining Our Team" description="Our hiring process is designed to help us understand your experience, interests, and suitability for the role." align="center" />
          <ol className="relative mt-14 grid gap-0 md:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <li key={step.number} className="relative grid grid-cols-[auto_1fr] gap-5 pb-10 last:pb-0 md:block md:px-5 md:pb-0 md:text-center">
                {index < hiringSteps.length - 1 && <span aria-hidden="true" className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border md:left-1/2 md:top-5 md:h-px md:w-full" />}
                <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground md:mx-auto">{step.number}</span>
                <div>
                  <h3 className="font-display text-lg font-bold md:mt-6">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="section-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to Grow With Samrik Solutions?</h2>
            <p className="mt-3 leading-7 text-secondary-foreground/80">Explore our opportunities and take the next step toward building your career with Samrik Solutions.</p>
          </div>
          <Button asChild variant="accent" size="lg" className="shrink-0"><a href={applicationUrl} target="_blank" rel="noopener noreferrer">Apply Now <ArrowRight /></a></Button>
        </div>
      </section>
    </>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <article className="rise-in flex h-full flex-col border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><BriefcaseBusiness className="size-5" /></span>
        <span className="rounded-md bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground">{job.employmentType}</span>
      </div>
      <h3 className="mt-6 font-display text-xl font-bold md:text-2xl">{job.title}</h3>
      <dl className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
        <div className="flex min-w-0 items-start gap-2"><Building2 className="mt-0.5 size-4 shrink-0 text-secondary" /><div><dt className="sr-only">Department</dt><dd>{job.department}</dd></div></div>
        <div className="flex min-w-0 items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-secondary" /><div><dt className="sr-only">Location</dt><dd>{job.location}</dd></div></div>
        <div className="flex min-w-0 items-start gap-2"><Clock3 className="mt-0.5 size-4 shrink-0 text-secondary" /><div><dt className="sr-only">Employment type</dt><dd>{job.employmentType}</dd></div></div>
      </dl>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">{job.description}</p>
      <div className="mt-6 border-t border-border pt-5">
        <h4 className="text-sm font-bold text-foreground">Skills</h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {job.skills.map((skill) => <li key={skill} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-3.5 shrink-0 text-accent-strong" />{skill}</li>)}
        </ul>
      </div>
      <Button asChild className="mt-7 w-full sm:w-fit"><a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">Apply Now <ArrowRight /></a></Button>
    </article>
  );
}