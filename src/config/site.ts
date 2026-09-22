export const siteConfig = {
  name: "Samrik Solutions",
  tagline: "Driving growth through smarter sales solutions.",
  email: "info@samrik.co.in",
  phone: "9392207839",
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
  { label: "Partner With Us", to: "/partner" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
] as const;

export const services = [
  {
    title: "SaaS Sales",
    description: "Help SaaS businesses generate leads, acquire customers, and expand their sales reach.",
  },
  {
    title: "Logistics Sales",
    description: "Support logistics businesses with customer acquisition, sales outreach, and business development.",
  },
  {
    title: "Educational Services",
    description: "Provide practical digital and business learning across e-commerce, digital marketing, AI, sales, freelancing, entrepreneurship, and business growth.",
  },
  {
    title: "Rural Tech Store",
    description: "Empowering rural and semi-urban communities through digital services and local entrepreneurship opportunities.",
  },
] as const;
