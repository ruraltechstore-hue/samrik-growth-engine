import { Link } from "@tanstack/react-router";
import { Linkedin, Menu, MoveUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation, services, siteConfig } from "@/config/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="section-shell flex h-18 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild variant="accent" size="lg"><Link to="/contact">Let's Talk <MoveUpRight /></Link></Button>
          </div>
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-[88vw] border-border bg-background p-0">
              <SheetHeader className="border-b border-border p-6 text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription>Sales and business-development solutions.</SheetDescription></SheetHeader>
              <nav className="flex flex-col p-4" aria-label="Mobile navigation">
                {navigation.map((item) => <SheetClose asChild key={item.to}><Link to={item.to} className="border-b border-border px-3 py-4 font-semibold text-foreground">{item.label}</Link></SheetClose>)}
              </nav>
              <div className="p-4"><SheetClose asChild><Button asChild variant="accent" size="lg" className="w-full"><Link to="/contact">Let's Talk <MoveUpRight /></Link></Button></SheetClose></div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-hero text-hero-foreground">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div><Brand inverse /><p className="mt-5 max-w-xs text-sm leading-7 text-hero-foreground/70">{siteConfig.tagline}</p></div>
          <FooterList title="Company" items={navigation.map((item) => ({ label: item.label, to: item.to }))} />
          <FooterList title="Services" items={[...services.map((item) => ({ label: item.title, to: "/services" as const })), { label: "Lead Generation", to: "/services" as const }, { label: "Business Development", to: "/services" as const }]} />
          <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h2><div className="mt-5 space-y-3 text-sm text-hero-foreground/70"><p>{siteConfig.email}</p><p>{siteConfig.phone}</p><p>{siteConfig.address}</p></div><div className="mt-6 flex gap-2"><Button variant="inverse" size="icon" aria-label="LinkedIn placeholder"><Linkedin /></Button><Button variant="inverse" size="icon" aria-label="Other social profile placeholder"><MoveUpRight /></Button></div></div>
        </div>
        <div className="border-t border-hero-foreground/15"><div className="section-shell py-5 text-xs text-hero-foreground/60">© 2026 Samrik Solutions. All rights reserved.</div></div>
      </footer>
    </div>
  );
}

function FooterList({ title, items }: { title: string; items: ReadonlyArray<{ label: string; to: "/" | "/about" | "/services" | "/partner" | "/faq" | "/contact" }> }) {
  return <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h2><ul className="mt-5 space-y-3">{items.map((item) => <li key={`${title}-${item.label}`}><Link to={item.to} className="text-sm text-hero-foreground/70 transition-colors hover:text-hero-foreground">{item.label}</Link></li>)}</ul></div>;
}
