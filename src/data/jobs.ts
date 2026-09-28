import {
  BadgeCheck,
  BrainCircuit,
  Globe2,
  HeartHandshake,
  Laptop,
  TrendingUp,
} from "lucide-react";

export const applicationUrl = "https://forms-samrik.vercel.app/";

export const careerStats = [
  { value: "12K+", label: "Team Members" },
  { value: "25+", label: "Delivery Centres" },
  { value: "30+", label: "Industries" },
  { value: "98%", label: "Retention Rate" },
] as const;

export const careerBenefits = [
  { title: "Learning & Development", description: "Continuous learning, professional development, and opportunities to build new skills.", icon: BrainCircuit },
  { title: "Career Growth", description: "Opportunities to take on greater responsibilities and progress within your career.", icon: TrendingUp },
  { title: "Global Exposure", description: "Gain experience working with diverse clients, industries, and business environments.", icon: Globe2 },
  { title: "Supportive Culture", description: "Work in a collaborative environment where ideas, teamwork, and individual contributions are valued.", icon: HeartHandshake },
  { title: "Technology-Enabled Workplace", description: "Work with modern tools, technology, and digital processes across different business functions.", icon: Laptop },
  { title: "Employee Wellbeing", description: "A workplace that values employee wellbeing, collaboration, and a healthy work environment.", icon: BadgeCheck },
] as const;

export const jobCategories = [
  "All",
  "BPO",
  "Customer Support",
  "Sales & Business Development",
  "HR",
  "Data & Back Office",
  "Technical",
  "Healthcare",
  "Finance",
] as const;

export type JobCategory = (typeof jobCategories)[number];

export type Job = {
  title: string;
  department: string;
  categories: Exclude<JobCategory, "All">[];
  location: string;
  employmentType: string;
  description: string;
  skills: string[];
  applicationUrl: string;
};

export const jobs: Job[] = [
  {
    title: "Customer Support Executive",
    department: "Customer Experience / BPO",
    categories: ["BPO", "Customer Support"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Handle customer queries through voice, chat, and email while providing timely, professional, and effective support.",
    skills: ["Communication skills", "Customer handling", "Problem-solving", "Basic computer knowledge", "Willingness to work in shifts"],
    applicationUrl,
  },
  {
    title: "Data Entry & Processing Executive",
    department: "Data Entry / Back Office",
    categories: ["BPO", "Data & Back Office"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Perform accurate data entry, verification, processing, and documentation while maintaining quality and productivity standards.",
    skills: ["Basic computer skills", "MS Office / Google Workspace", "Typing and data accuracy", "Attention to detail", "Basic documentation skills"],
    applicationUrl,
  },
  {
    title: "HR Operations Executive",
    department: "Human Resources",
    categories: ["HR"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Support recruitment coordination, employee documentation, onboarding activities, HR operations, and day-to-day people management processes.",
    skills: ["Communication", "Coordination", "Documentation", "Organizational skills", "Basic HR knowledge"],
    applicationUrl,
  },
  {
    title: "Business Development Executive",
    department: "Business Development / Sales",
    categories: ["Sales & Business Development"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Identify new business opportunities, connect with prospective clients, understand their requirements, and support the growth of Samrik Solutions' services.",
    skills: ["Communication and interpersonal skills", "Lead generation", "Client relationship management", "Business development", "Presentation skills", "Willingness to work with targets"],
    applicationUrl,
  },
  {
    title: "Inside Sales Executive",
    department: "Sales / Business Development",
    categories: ["Sales & Business Development"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Engage with prospective customers, understand their requirements, explain relevant solutions, follow up with leads, and support the sales process.",
    skills: ["Communication skills", "Lead follow-up", "Customer interaction", "Negotiation", "Basic sales knowledge"],
    applicationUrl,
  },
  {
    title: "Technical Support Executive",
    department: "IT / Technical Support",
    categories: ["Customer Support", "Technical"],
    location: "Hyderabad / Remote",
    employmentType: "Full-time",
    description: "Assist customers and users with technical issues, troubleshoot common problems, and provide timely technical support.",
    skills: ["Basic troubleshooting", "Windows / computer fundamentals", "Networking basics", "Problem-solving", "Customer communication"],
    applicationUrl,
  },
  {
    title: "Healthcare BPO Executive",
    department: "Healthcare BPO",
    categories: ["BPO", "Healthcare"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Support healthcare-related business processes including patient services, documentation, eligibility verification, and operational support.",
    skills: ["Communication", "Documentation", "Attention to detail", "Basic computer knowledge", "Willingness to learn healthcare processes"],
    applicationUrl,
  },
  {
    title: "Medical Billing Executive",
    department: "Healthcare BPO",
    categories: ["BPO", "Healthcare"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Support medical billing and revenue cycle processes including documentation, claims processing, payment follow-up, and related back-office activities.",
    skills: ["Attention to detail", "Basic computer knowledge", "Documentation", "Communication", "Willingness to learn medical billing processes"],
    applicationUrl,
  },
  {
    title: "Finance & Accounts Executive",
    department: "Finance & Accounting",
    categories: ["Finance"],
    location: "Hyderabad, India",
    employmentType: "Full-time",
    description: "Support routine finance and accounting activities, documentation, data management, reconciliation, and business reporting.",
    skills: ["Basic accounting knowledge", "Excel / spreadsheets", "Documentation", "Attention to detail", "Analytical skills"],
    applicationUrl,
  },
];

export const hiringSteps = [
  { number: "01", title: "Apply Online", description: "Find a suitable opportunity and submit your application through our online application form." },
  { number: "02", title: "Application Review", description: "Our team reviews your application and contacts shortlisted candidates for the next stage." },
  { number: "03", title: "Interview", description: "Participate in interviews or role-specific assessments based on the position you applied for." },
  { number: "04", title: "Selection & Onboarding", description: "Selected candidates receive further communication about the offer and onboarding process." },
] as const;