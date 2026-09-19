import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
    {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary">{eyebrow}</p>}
    <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p>}
  </div>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="relative overflow-hidden bg-hero py-20 text-hero-foreground md:py-28"><div className="subtle-grid absolute inset-0 opacity-25" /><div className="section-shell relative"><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-strong">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-hero-foreground/75">{description}</p></div></section>;
}

export function IconCard({ icon: Icon, title, children, index }: { icon: LucideIcon; title: string; children: ReactNode; index?: string }) {
  return <article className="rise-in border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="size-5" /></span>{index && <span className="font-display text-sm font-bold text-secondary">{index}</span>}</div><h3 className="mt-6 font-display text-xl font-bold text-card-foreground">{title}</h3><div className="mt-3 text-sm leading-7 text-muted-foreground">{children}</div></article>;
}

export function CheckList({ items }: { items: readonly string[] }) {
  return <ul className="grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-foreground"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3" /></span>{item}</li>)}</ul>;
}

export function CTASection() {
  return <section className="bg-secondary py-16 text-secondary-foreground md:py-20"><div className="section-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><h2 className="font-display text-3xl font-bold md:text-4xl">Ready to Accelerate Your Sales?</h2><p className="mt-3 text-secondary-foreground/80">Let's discuss how Samrik Solutions can support your business growth.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="accent" size="lg"><Link to="/partner">Partner With Us <ArrowRight /></Link></Button><Button asChild variant="inverse" size="lg"><Link to="/contact">Contact Us</Link></Button></div></div></section>;
}
