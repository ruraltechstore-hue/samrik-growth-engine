export const siteConfig = {
  name: "Samrik Solutions",
  tagline: "Driving growth through smarter sales solutions.",
  email: "info@samrik.co.in",
  phone: "9392207839",
  whatsappUrl: "https://wa.me/919392207839",
  address: "Bahadurpally, Hyderabad",
  hours: ["Monday – Friday", "9:00 AM – 6:00 PM"],
  socials: {
    linkedin: "#",
    other: "#",
  },
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Career", to: "https://forms-samrik.vercel.app/" },
  { label: "Partner With Us", to: "/partner" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const companyFooterNavigation = [
  ...navigation,
  { label: "Customer Support", to: "/services/customer-support" },
  { label: "Mail Support", to: "/services/mail-support" },
  { label: "Data Entry", to: "/services/data-entry" },
] as const;

export const legalNavigation = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Refunds & Cancellations", to: "/refunds-cancellations" },
  { label: "Cookies Policy", to: "/cookies-policy" },
] as const;

export const services = [
  {
    slug: "saas-sales",
    title: "SaaS Services",
    description: "Help SaaS businesses generate leads, acquire customers, and expand their sales reach.",
  },
  {
    slug: "logistics-sales",
    title: "Logistic Services",
    description: "Support logistics businesses with customer acquisition, sales outreach, and business development.",
  },
  {
    slug: "educational-services",
    title: "Educational Services",
    subtitle: "Practical Digital Skills for Career & Business Growth",
    description: "Develop practical, industry-relevant skills across digital marketing, artificial intelligence, e-commerce, sales, entrepreneurship, freelancing, and business growth.",
  },
  {
    slug: "rural-tech-store",
    title: "Rural Tech Store Services",
    description: "Empowering rural and semi-urban communities through digital services and local entrepreneurship opportunities.",
  },
] as const;
