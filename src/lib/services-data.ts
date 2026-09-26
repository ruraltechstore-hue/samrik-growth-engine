import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Boxes,
  Building2,
  CircleDollarSign,
  Cpu,
  Database,
  GraduationCap,
  Handshake,
  Headset,
  Landmark,
  Lightbulb,
  Mail,
  Megaphone,
  Monitor,
  Plane,
  Receipt,
  Settings2,
  ShoppingCart,
  Store,
  TrendingUp,
  UserRoundSearch,
  Users,
} from "lucide-react";

export type ServiceRight =
  | { type: "checklist"; title: string; items: readonly string[] }
  | { type: "grid"; title: string; items: readonly { icon: LucideIcon; title: string }[] }
  | {
      type: "educational";
      learningAreas: readonly { icon: LucideIcon; title: string }[];
      audiences: readonly { icon: LucideIcon; title: string }[];
      objective: { title: string; text: string };
    };

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  description: string;
  subheading: string | undefined;
  paragraphs: readonly string[];
  ctaPrimary: { label: string; to: string };
  ctaSecondary: { label: string; to: string } | undefined;
  right: ServiceRight;
}

const learningAreas: ServiceRight & { type: "grid" } = {
  type: "grid",
  title: "Areas of Learning",
  items: [
    { icon: ShoppingCart, title: "E-Commerce" },
    { icon: Megaphone, title: "Digital Marketing" },
    { icon: Cpu, title: "Artificial Intelligence" },
    { icon: CircleDollarSign, title: "Sales" },
    { icon: UserRoundSearch, title: "Lead Generation" },
    { icon: Handshake, title: "Business Development" },
    { icon: GraduationCap, title: "Freelancing" },
    { icon: Lightbulb, title: "Entrepreneurship" },
    { icon: TrendingUp, title: "Business Growth" },
    { icon: Settings2, title: "Digital Business Automation" },
  ],
};

const audiences: ServiceRight & { type: "grid" } = {
  type: "grid",
  title: "Who We Serve",
  items: [
    { icon: GraduationCap, title: "Students" },
    { icon: BadgeCheck, title: "Freshers" },
    { icon: UserRoundSearch, title: "Job Seekers" },
    { icon: Building2, title: "Working Professionals" },
    { icon: Monitor, title: "Freelancers" },
    { icon: TrendingUp, title: "Startup Founders" },
    { icon: Lightbulb, title: "Entrepreneurs" },
    { icon: Building2, title: "Existing Business Owners" },
    { icon: Boxes, title: "Product-Oriented Businesses" },
    { icon: Users, title: "Service-Oriented Businesses" },
  ],
};

export const serviceDetails = {
  "saas-sales": {
    slug: "saas-sales",
    icon: Boxes,
    title: "SaaS Services",
    eyebrow: "Sales service 01",
    description:
      "Samrik Solutions supports SaaS businesses in reaching potential customers and creating new sales opportunities.",
    subheading: undefined,
    paragraphs: [
      "Our SaaS services support helps software companies identify prospects, communicate value, and move opportunities through the sales pipeline. We focus on understanding your product and ideal customer profile so outreach is relevant and professional.",
      "Whether you need lead generation, appointment setting, or sales pipeline support, we work as an extension of your team to help you grow your customer base.",
    ],
    ctaPrimary: { label: "Discuss Your SaaS Services Needs", to: "/partner" },
    ctaSecondary: undefined,
    right: {
      type: "checklist",
      title: "What we can support",
      items: [
        "Lead generation",
        "Prospect identification",
        "Customer outreach",
        "Sales qualification",
        "Appointment setting",
        "Product/service communication",
        "Customer follow-up",
        "Sales pipeline support",
        "Customer relationship development",
      ],
    },
  },
  "logistics-sales": {
    slug: "logistics-sales",
    icon: Building2,
    title: "Logistic Services",
    eyebrow: "Sales service 02",
    description:
      "We help logistics and supply-chain businesses connect with potential customers and identify new business opportunities.",
    subheading: undefined,
    paragraphs: [
      "Our logistic services support is built around B2B relationship building. We help you identify the right prospects, initiate conversations, and support your business-development process.",
      "From customer prospecting to follow-up and market expansion, our approach is designed to help logistics companies build a consistent pipeline of opportunities.",
    ],
    ctaPrimary: { label: "View Franchise Plans", to: "#franchise-plans" },
    ctaSecondary: { label: "Partner With Us", to: "/partner" },
    right: {
      type: "checklist",
      title: "What we can support",
      items: [
        "B2B lead generation",
        "Customer prospecting",
        "Client outreach",
        "Business development",
        "Sales follow-up",
        "Client relationship management",
        "Market expansion support",
        "Opportunity identification",
      ],
    },
  },
  "educational-services": {
    slug: "educational-services",
    icon: GraduationCap,
    title: "Educational Services",
    eyebrow: "Service 03",
    description:
      "Practical digital and business learning across e-commerce, digital marketing, AI, sales, freelancing, entrepreneurship, and business growth.",
    subheading: "Building Practical Skills for the Digital Economy",
    paragraphs: [
      "Samrik Solutions' Educational Services are designed to help individuals and businesses develop practical, industry-relevant skills in digital technologies, sales, entrepreneurship, and business growth.",
      "Our programs focus on connecting knowledge with practical application, enabling participants to develop skills that can be applied across careers, freelancing, startups, and existing businesses.",
    ],
    ctaPrimary: { label: "View Internship Programs", to: "#internship-programs" },
    ctaSecondary: { label: "Contact Us", to: "/contact" },
    right: {
      type: "educational",
      learningAreas: learningAreas.items,
      audiences: audiences.items,
      objective: {
        title: "From Learning to Practical Application",
        text: "Our objective is to bridge the gap between learning digital skills and applying them to real-world careers, freelancing, startups, and existing businesses.",
      },
    },
  },
  "rural-tech-store": {
    slug: "rural-tech-store",
    icon: Store,
    title: "Rural Tech Store Services",
    eyebrow: "Sales service 04",
    description:
      "Digital services and rural entrepreneurship opportunities for rural and semi-urban communities.",
    subheading: "Digital Services & Rural Entrepreneurship",
    paragraphs: [
      "Rural Tech Store Services focuses on enabling access to essential digital services in rural and semi-urban communities while creating opportunities for local entrepreneurs to establish and operate digital service centers.",
      "The service model brings multiple digital services together through a single platform, helping individuals and communities access services conveniently while supporting local digital entrepreneurship.",
    ],
    ctaPrimary: { label: "View Plans & Opportunities", to: "#plans" },
    ctaSecondary: undefined,
    right: {
      type: "grid",
      title: "Key Service Areas",
      items: [
        { icon: Receipt, title: "Utility & Bill Payment Services" },
        { icon: Landmark, title: "Financial Services" },
        { icon: Building2, title: "Government & Digital Services" },
        { icon: Plane, title: "Travel Services" },
        { icon: ShoppingCart, title: "E-Commerce Services" },
        { icon: BookOpen, title: "Online Learning Services" },
        { icon: Monitor, title: "Digital Service Center Support" },
        { icon: Lightbulb, title: "Rural Entrepreneurship" },
      ],
    },
  },
} as const satisfies Record<string, ServiceDetail>;

export type ServiceSlug = keyof typeof serviceDetails;

