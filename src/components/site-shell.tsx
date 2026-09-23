import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
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
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="whitespace-nowrap text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground xl:text-sm" activeProps={{ className: "text-foreground" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-4 hidden min-[900px]:block xl:ml-6">
            <Button asChild variant="accent" size="icon">
              <a href="https://wa.me/919392207839" target="_blank" rel="noreferrer" aria-label="Chat with Samrik Solutions on WhatsApp" title="WhatsApp">
                <WhatsAppIcon />
              </a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="ml-auto min-[900px]:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-[88vw] border-border bg-background p-0">
              <SheetHeader className="border-b border-border p-6 text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription>Sales and business-development solutions.</SheetDescription></SheetHeader>
              <nav className="flex flex-col p-4" aria-label="Mobile navigation">
                {navigation.map((item) => <SheetClose asChild key={item.to}><Link to={item.to} className="border-b border-border px-3 py-4 font-semibold text-foreground">{item.label}</Link></SheetClose>)}
              </nav>
              <div className="p-4"><SheetClose asChild><Button asChild variant="accent" size="lg" className="w-full"><a href="https://wa.me/919392207839" target="_blank" rel="noreferrer" aria-label="Chat with Samrik Solutions on WhatsApp"><WhatsAppIcon /><span className="sr-only">WhatsApp</span></a></Button></SheetClose></div>
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.53 14.75L2 22l5.38-1.41A9.96 9.96 0 1 0 12.04 2Zm0 17.82a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-3.19.84.85-3.11-.19-.31a7.81 7.81 0 1 1 6.8 3.84Zm4.29-5.85c-.24-.12-1.39-.69-1.61-.77-.21-.08-.37-.12-.53.12-.15.24-.61.77-.75.93-.14.16-.27.18-.51.06-.23-.12-.99-.36-1.88-1.16a7.04 7.04 0 0 1-1.3-1.62c-.14-.24-.01-.36.1-.48.11-.11.24-.28.35-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.72-1.75-.19-.46-.38-.4-.53-.4h-.45c-.16 0-.41.06-.63.3-.21.24-.82.81-.82 1.97s.84 2.28.96 2.44c.12.16 1.66 2.54 4.02 3.56.56.24 1 .39 1.34.5.56.18 1.07.15 1.48.09.45-.07 1.39-.57 1.59-1.12.19-.55.19-1.02.13-1.12-.07-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function FooterList({ title, items }: { title: string; items: ReadonlyArray<{ label: string; to: string }> }) {
  return <div><h2 className="font-display text-sm font-bold uppercase tracking-wider">{title}</h2><ul className="mt-5 space-y-3">{items.map((item) => <li key={`${title}-${item.label}`}><Link to={item.to} className="text-sm text-hero-foreground/70 transition-colors hover:text-hero-foreground">{item.label}</Link></li>)}</ul></div>;
}
