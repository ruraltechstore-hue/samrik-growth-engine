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
    description: "Help SaaS businesses generate qualified leads, engage potential customers, and accelerate software sales.",
  },
  {
    title: "Logistics Sales",
    description: "Help logistics and supply-chain businesses connect with potential clients and expand their customer network.",
  },
  {
    title: "Educational Sales",
    description: "Support education and learning organizations with customer acquisition and enrollment-focused sales solutions.",
  },
] as const;
