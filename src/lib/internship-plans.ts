export const internshipPlans = [
  {
    id: "internship-stage-1",
    stage: "Internship Stage 1",
    name: "Basic Internship Program (Certificate Only)",
    registrationLabel: "Internship Stage 1 – Basic Internship Program",
    priceLabel: "₹1,000",
    priceSuffix: "per student",
    amountPaise: 100000,
    payment: true,
    description: "A basic internship option designed for academic submission and credit requirements.",
    sections: [
      {
        title: "Includes",
        items: [
          "Internship participation certificate from IIECM",
          "Internship duration proof",
          "LMS access (limited)",
          "Suitable for academic submission & credit requirements",
        ],
      },
      {
        title: "Best For",
        items: [
          "Students needing mandatory internship certificate",
          "Colleges requiring short-term internships",
        ],
      },
    ],
  },
  {
    id: "internship-stage-2",
    stage: "Internship Stage 2",
    name: "Internship Program with AI Certification",
    registrationLabel: "Internship Stage 2 – Internship Program with AI Certification",
    priceLabel: "₹2,500",
    priceSuffix: "per student",
    amountPaise: 250000,
    payment: true,
    description: "An internship program combining practical assignments with foundational AI learning.",
    sections: [
      {
        title: "Includes",
        items: [
          "Internship Certificate",
          "AI Foundation Certification",
          "LMS access to AI learning modules",
          "Practical assignments & assessments",
          "Project submission support",
        ],
      },
      {
        title: "AI Coverage",
        items: [
          "AI fundamentals",
          "Generative AI basics",
          "AI tools for productivity & business",
          "ChatGPT & AI automation basics",
        ],
      },
      {
        title: "Best For",
        items: [
          "Students interested in AI exposure",
          "Beginners entering future-tech domains",
        ],
      },
    ],
  },
  {
    id: "internship-stage-3",
    stage: "Internship Stage 3",
    name: "Advanced Internship Program (All Courses Except AI)",
    registrationLabel: "Internship Stage 3 – Advanced Internship Program",
    priceLabel: "Custom Pricing",
    priceSuffix: undefined,
    amountPaise: undefined,
    payment: false,
    description:
      "Price depends on student category and college base. Special discounts available for colleges, universities, and bulk enrollments.",
    coverage: "Internship + access to ALL Technical & Non-Technical courses, excluding AI programs.",
    sections: [
      {
        title: "Includes",
        items: [
          "Internship Certificate",
          "LMS access to Technical courses",
          "Non-technical & professional skills",
          "E-commerce & digital marketing programs",
          "Assignments & practical learning",
          "Career guidance support",
        ],
      },
      {
        title: "Special Discounts Available For",
        items: [
          "Colleges & universities",
          "Training institutes",
          "Skill development centers",
          "CSR & government programs",
        ],
      },
    ],
  },
] as const;

export type InternshipPlan = (typeof internshipPlans)[number];
export type PaidInternshipPlan = Extract<InternshipPlan, { payment: true }>;

export const paidInternshipPlans = internshipPlans.filter(
  (plan): plan is PaidInternshipPlan => plan.payment,
);