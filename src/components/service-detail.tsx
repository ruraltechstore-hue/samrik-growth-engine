import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckList, CTASection, PageHero } from "@/components/marketing";
import { serviceDetails, type ServiceSlug } from "@/lib/services-data";

interface ServiceDetailPageProps {
  slug: ServiceSlug;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = serviceDetails[slug];
  const Icon = service.icon;

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.description} />
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-8">
            <Button asChild variant="link" className="h-auto px-0">
              <Link to="/services">
                <ArrowLeft className="mr-2 size-4" /> Back to All Services
              </Link>
            </Button>
          </div>
          <article className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rise-in">
              <span className="grid size-14 place-items-center rounded-md bg-primary text-primary-foreground">
                <Icon />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">{service.eyebrow}</p>
              <h1 className="mt-3 font-display text-3xl font-bold md:text-4xl">{service.title}</h1>
              {service.subheading && (
                <p className="mt-5 text-lg font-semibold text-foreground">{service.subheading}</p>
              )}
              {service.paragraphs.map((paragraph, index) => (
                <p key={index} className="mt-5 leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaButton to={service.ctaPrimary.to} variant="accent" icon>
                  {service.ctaPrimary.label}
                </CtaButton>
                {service.ctaSecondary && (
                  <CtaButton to={service.ctaSecondary.to} variant="outline">
                    {service.ctaSecondary.label}
                  </CtaButton>
                )}
              </div>
            </div>
            <div className="bg-surface p-7 md:p-9">
              {service.right.type === "checklist" && (
                <>
                  <h3 className="mb-6 font-display text-lg font-bold">{service.right.title}</h3>
                  <CheckList items={service.right.items} />
                </>
              )}
              {service.right.type === "grid" && (
                <>
                  <h3 className="mb-6 font-display text-lg font-bold">{service.right.title}</h3>
                  <ServiceItemGrid items={service.right.items} />
                </>
              )}
              {service.right.type === "educational" && (
                <div className="space-y-12">
                  <div id="educational-learning-areas" className="scroll-mt-24">
                    <h3 className="mb-6 font-display text-lg font-bold">Areas of Learning</h3>
                    <ServiceItemGrid items={service.right.learningAreas} />
                  </div>
                  <div>
                    <h3 className="mb-6 font-display text-lg font-bold">Who We Serve</h3>
                    <ServiceItemGrid items={service.right.audiences} />
                  </div>
                  <div className="border-l-4 border-accent-strong bg-surface p-7 md:p-9">
                    <Workflow className="size-8 text-secondary" />
                    <h3 className="mt-5 font-display text-2xl font-bold">{service.right.objective.title}</h3>
                    <p className="mt-3 leading-8 text-muted-foreground">{service.right.objective.text}</p>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function ServiceItemGrid({ items }: { items: ReadonlyArray<{ icon: LucideIcon; title: string }> }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rise-in flex items-start gap-4 rounded-lg border border-border bg-card p-4 shadow-sm"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <p className="font-semibold text-foreground">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

function CtaButton({
  to,
  variant,
  children,
  icon,
}: {
  to: string;
  variant: "accent" | "outline";
  children: React.ReactNode;
  icon?: boolean;
}) {
  if (to.startsWith("#")) {
    return (
      <Button asChild variant={variant} size="lg">
        <a href={to}>
          {children}
          {icon && <ArrowRight />}
        </a>
      </Button>
    );
  }
  return (
    <Button asChild variant={variant} size="lg">
      <Link to={to as any}>
        {children}
        {icon && <ArrowRight />}
      </Link>
    </Button>
  );
}
