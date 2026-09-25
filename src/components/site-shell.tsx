import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { legalNavigation, navigation, services, siteConfig } from "@/config/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="section-shell flex h-18 items-center">
          <div className="shrink-0"><Brand /></div>
          <nav className="ml-auto hidden items-center gap-4 min-[900px]:flex xl:gap-6" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink key={item.to} label={item.label} to={item.to} />
            ))}
          </nav>
          <div className="ml-4 hidden min-[900px]:block xl:ml-6">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Samrik Solutions on WhatsApp" className="transition-transform hover:scale-105"><WhatsAppIcon className="size-7" /></a>
          </div>
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="ml-auto min-[900px]:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-[88vw] border-border bg-background p-0">
              <SheetHeader className="border-b border-border p-6 text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription>Sales and business-development solutions.</SheetDescription></SheetHeader>
              <nav className="flex flex-col p-4" aria-label="Mobile navigation">
                {navigation.map((item) => <SheetClose asChild key={item.to}><Link to={item.to} className="border-b border-border px-3 py-4 font-semibold text-foreground">{item.label}</Link></SheetClose>)}
              </nav>
              <div className="p-4"><SheetClose asChild><Button asChild variant="outline" size="lg" className="w-full bg-card"><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-5" /> Chat on WhatsApp</a></Button></SheetClose></div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-hero text-hero-foreground">
        <div className="section-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <FooterList title="Company" items={navigation.map((item) => ({ label: item.label, to: item.to }))} />
          <FooterList title="Services" items={[...services.map((item) => ({ label: item.title, to: `/services/${item.slug}` })), { label: "Lead Generation", to: "/services" }, { label: "Business Development", to: "/services" }]} />
          <FooterList title="Legal" items={legalNavigation} />
          <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h2><dl className="mt-5 space-y-4 text-sm text-hero-foreground/70"><div><dt className="font-semibold text-hero-foreground">Email</dt><dd className="mt-1"><a className="transition-colors hover:text-hero-foreground" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd></div><div><dt className="font-semibold text-hero-foreground">Phone</dt><dd className="mt-1"><a className="transition-colors hover:text-hero-foreground" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></dd></div><div><dt className="font-semibold text-hero-foreground">Address</dt><dd className="mt-1">{siteConfig.address}</dd></div></dl></div>
        </div>
        <div className="border-t border-hero-foreground/15"><div className="section-shell flex flex-col gap-4 py-5 text-xs text-hero-foreground/60 lg:flex-row lg:items-center lg:justify-between"><p>© 2026 Samrik Solutions. All rights reserved.</p><nav aria-label="Legal navigation"><ul className="flex flex-wrap gap-x-3 gap-y-2">{legalNavigation.map((item, index) => <li key={`bottom-${item.to}`} className="flex items-center gap-3">{index > 0 && <span aria-hidden="true">|</span>}<Link to={item.to} className="transition-colors hover:text-hero-foreground">{item.label}</Link></li>)}</ul></nav></div></div>
      </footer>
    </div>
  );
}

function FooterList({ title, items }: { title: string; items: ReadonlyArray<{ label: string; to: string }> }) {
  return <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h2><ul className="mt-5 space-y-3">{items.map((item) => <li key={`${title}-${item.label}`}><Link to={item.to} className="text-sm text-hero-foreground/70 transition-colors hover:text-hero-foreground">{item.label}</Link></li>)}</ul></div>;
}
