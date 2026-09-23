import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "@/components/marketing";
import { Button } from "@/components/ui/button";

export function LegalPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <section className="py-16 md:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="ghost" className="mb-10 -ml-4">
              <Link to="/"><ArrowLeft /> Back to Home</Link>
            </Button>
            <article className="space-y-10 text-base leading-8 text-muted-foreground">
              {children}
            </article>
            <div className="mt-14 border-t border-border pt-6 text-sm leading-7 text-muted-foreground">
              <p>This page provides general website information. Specific services may also be governed by a separate written agreement.</p>
              <p className="mt-2 font-semibold text-foreground">Last Updated: [Insert Date]</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item) => <li key={item} className="list-disc pl-1 marker:text-accent-strong">{item}</li>)}
    </ul>
  );
}

export function LegalContact() {
  return <a className="font-semibold text-secondary underline underline-offset-4 hover:text-foreground" href="mailto:info@samrik.co.in">info@samrik.co.in</a>;
}

export function EditablePlaceholder({ children }: { children: ReactNode }) {
  return <strong className="inline-block border border-accent-strong/40 bg-accent px-2 py-1 text-accent-foreground">{children}</strong>;
}