import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircleQuestion, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Samrik Solutions" },
      {
        name: "description",
        content:
          "Find answers about Samrik Solutions services, engagement process, educational programs, internship plans, Rural Tech Store, Logistics franchise, payments, and partnerships.",
      },
      {
        property: "og:title",
        content: "Frequently Asked Questions | Samrik Solutions",
      },
      {
        property: "og:description",
        content:
          "Explore detailed answers about our sales, education, logistics, digital business, and partnership services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const faqCategories: Array<{
  category: string;
  items: Array<{ q: string; a: string }>;
}> = [
  {
    category: "General Questions",
    items: [
      {
        q: "What is Samrik Solutions?",
        a: "Samrik Solutions is a business-focused organization providing services across sales, logistics, educational services, digital business opportunities, lead generation, and business development.",
      },
      {
        q: "What services does Samrik Solutions provide?",
        a: "Samrik Solutions currently provides SaaS Sales, Logistics Sales, Educational Services, Rural Tech Store opportunities, Lead Generation, and Business Development services.",
      },
      {
        q: "Who can work with Samrik Solutions?",
        a: "Businesses, startups, educational institutions, entrepreneurs, professionals, and organizations can contact Samrik Solutions based on their specific requirements and the applicable service.",
      },
      {
        q: "Can I request a customized solution?",
        a: "Yes. Requirements can differ based on the organization, industry, target audience, and business objective. You can contact Samrik Solutions to discuss your specific requirement.",
      },
      {
        q: "How can I contact Samrik Solutions?",
        a: "You can use the Contact Us page to submit your enquiry or use the contact details provided on the website.",
      },
    ],
  },
  {
    category: "SaaS Sales",
    items: [
      {
        q: "What does SaaS Sales support include?",
        a: "SaaS Sales support can include lead generation, prospect identification, outreach, lead qualification, appointment setting, customer follow-up, and sales pipeline support.",
      },
      {
        q: "Can SaaS companies use Samrik Solutions for lead generation?",
        a: "Yes. SaaS businesses can discuss their target market and lead-generation requirements with Samrik Solutions to determine the appropriate service approach.",
      },
      {
        q: "Do you support B2B SaaS businesses?",
        a: "Samrik Solutions can support B2B-focused sales and business development requirements depending on the specific project and target market.",
      },
      {
        q: "Can the sales process be customized?",
        a: "Yes. Sales activities can be structured according to the business requirement, target audience, sales process, and engagement scope.",
      },
    ],
  },
  {
    category: "Logistics Sales",
    items: [
      {
        q: "What does Logistics Sales support include?",
        a: "Logistics Sales services can include B2B lead generation, prospecting, client outreach, business development, follow-up, relationship development, and market expansion activities.",
      },
      {
        q: "Who can use your Logistics Sales services?",
        a: "Logistics companies and businesses with relevant B2B sales or business development requirements can contact Samrik Solutions to discuss their needs.",
      },
      {
        q: "Can you help logistics businesses find potential clients?",
        a: "Lead generation and prospecting are part of the Logistics Sales service offering. The exact approach depends on the target market and business requirement.",
      },
      {
        q: "Are franchise plans available under Logistics Services?",
        a: "Yes. Logistics Services includes franchise participation plans. You can view the available plans under Services → Logistics Services → Franchise Plans & Opportunities.",
      },
      {
        q: "Can Logistics Sales services be customized?",
        a: "Yes. The scope can be discussed based on the company's target customers, market, service offering, and business objectives.",
      },
    ],
  },
  {
    category: "Educational Services",
    items: [
      {
        q: "What does Educational Services cover?",
        a: "Educational Services can include practical learning programs covering areas such as e-commerce, digital marketing, artificial intelligence, sales, lead generation, business development, freelancing, entrepreneurship, and digital business automation.",
      },
      {
        q: "Who are the Educational Services designed for?",
        a: "Programs may be relevant to students, freshers, job seekers, working professionals, freelancers, startup founders, entrepreneurs, existing business owners, and other learners depending on the specific program.",
      },
      {
        q: "Are internship programs available?",
        a: "Yes. Samrik Solutions offers internship program options under Educational Services. These include Basic Internship, Internship with AI Certification, and Advanced Internship programs.",
      },
      {
        q: "How are the learning programs structured?",
        a: "Programs are structured around practical learning, assignments, project work, and real-world application based on the selected course or internship stage.",
      },
      {
        q: "Do the programs include certificates?",
        a: "Certificate inclusions depend on the selected program or internship stage. Details are listed on the Educational Services page and within each internship plan.",
      },
    ],
  },
  {
    category: "Internship Programs",
    items: [
      {
        q: "What internship plans are available?",
        a: "There are three internship plans: Internship Stage 1 – Basic Internship Program (Certificate Only), Internship Stage 2 – Internship Program with AI Certification, and Internship Stage 3 – Advanced Internship Program (All Courses Except AI) with custom pricing.",
      },
      {
        q: "What is included in Internship Stage 1?",
        a: "Stage 1 includes a participation certificate, internship duration proof, limited LMS access, and academic submission support. The fee is ₹1,000 per student.",
      },
      {
        q: "What is included in Internship Stage 2?",
        a: "Stage 2 includes an Internship Certificate, AI Foundation Certification, LMS access to AI learning modules, practical assignments and assessments, and project submission support. The fee is ₹2,500 per student.",
      },
      {
        q: "What is included in Internship Stage 3?",
        a: "Stage 3 provides internship access to all Technical and Non-Technical courses except AI. It includes an Internship Certificate, LMS access to technical courses, non-technical and professional skills content, e-commerce and digital marketing programs, assignments, practical learning, and career guidance support. Pricing is custom and depends on the student category and college base.",
      },
      {
        q: "How do I register for Stage 1 or Stage 2?",
        a: "You can register directly through the Educational Services page by selecting the plan and completing the registration and payment process via Razorpay.",
      },
      {
        q: "How do I request pricing for Stage 3?",
        a: "Select Internship Stage 3 and click Request Pricing. Fill in the enquiry form with your details, student category, and number of students. Our team will contact you with applicable pricing and enrollment details.",
      },
    ],
  },
  {
    category: "Rural Tech Store Services",
    items: [
      {
        q: "What is Rural Tech Store Services?",
        a: "Rural Tech Store Services is a digital services and rural entrepreneurship initiative that enables access to essential digital services in rural and semi-urban communities while creating opportunities for local entrepreneurs to establish and operate digital service centers.",
      },
      {
        q: "Who can join Rural Tech Store Services?",
        a: "Entrepreneurs, local business owners, and individuals interested in operating digital service centers in rural or semi-urban areas can explore the available plans.",
      },
      {
        q: "What plans are available under Rural Tech Store Services?",
        a: "Rural Tech Store Services offers Agent, Distributor, and Super Distributor participation plans. Plan details and fees are available under Services → Rural Tech Store Services.",
      },
      {
        q: "What kind of support is provided to Rural Tech Store Services partners?",
        a: "Support can include setup guidance, operational information, training resources, marketing assistance, and ongoing coordination depending on the selected plan.",
      },
    ],
  },
  {
    category: "Lead Generation",
    items: [
      {
        q: "What is included in Lead Generation services?",
        a: "Lead Generation services can include prospect identification, outreach, qualification, database building, and initial engagement activities based on the target market.",
      },
      {
        q: "Which businesses can use Lead Generation services?",
        a: "B2B businesses, SaaS companies, logistics providers, service providers, and other organizations looking to identify potential customers can discuss their requirements.",
      },
      {
        q: "Is Lead Generation a standalone service?",
        a: "Yes. Lead Generation can be availed as a standalone service or as part of a broader sales or business development engagement.",
      },
      {
        q: "Can the lead generation approach be customized?",
        a: "Yes. The approach can be adapted based on industry, target audience, geography, and the client's sales objectives.",
      },
    ],
  },
  {
    category: "Business Development",
    items: [
      {
        q: "What does Business Development support include?",
        a: "Business Development support can include opportunity identification, market exploration, relationship building, partnership discussions, and growth strategy support.",
      },
      {
        q: "Who can benefit from Business Development services?",
        a: "Startups, growing businesses, and organizations exploring new markets, partnerships, or channels can benefit from business development support.",
      },
      {
        q: "Can Business Development be combined with other services?",
        a: "Yes. Business Development can be combined with sales support, lead generation, or other services depending on the client's requirements.",
      },
    ],
  },
  {
    category: "Partnerships",
    items: [
      {
        q: "How can I partner with Samrik Solutions?",
        a: "You can submit the Partner With Us form with your business details, service requirement, and expected engagement scope. Our team will review your request and get in touch.",
      },
      {
        q: "What information is required in the Partner With Us form?",
        a: "The form asks for your full name, company name, work email, phone number, industry, website, service required, expected requirement, and a message.",
      },
      {
        q: "Who can become a partner?",
        a: "Businesses, institutions, entrepreneurs, and organizations interested in exploring collaboration opportunities can submit a partnership enquiry.",
      },
      {
        q: "What happens after I submit the Partner With Us form?",
        a: "Our team reviews the submission and contacts you to discuss the requirement, suitable services, and next steps.",
      },
    ],
  },
  {
    category: "Payments",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "Payments for applicable plans and programs are processed through Razorpay, which supports UPI, cards, net banking, wallets, and other standard Indian payment methods.",
      },
      {
        q: "Are the payment amounts secure?",
        a: "Yes. Payment requests are created on the server, and the actual amount is determined and verified server-side. The frontend only displays the amount. Signatures are verified before any payment is marked successful.",
      },
      {
        q: "Will I receive a confirmation after payment?",
        a: "Upon successful payment verification, a confirmation is displayed on the screen with the payment ID and registration details. A confirmation email is also sent where email communication is configured.",
      },
      {
        q: "What happens if a payment fails or is cancelled?",
        a: "If a payment fails or is cancelled, the status is recorded and you are shown options to try again or return to the service page. The payment is not marked as successful until verification is completed.",
      },
      {
        q: "Is GST included in the listed prices?",
        a: "Please refer to the plan details or contact our team for clarification on taxes and final payable amounts.",
      },
    ],
  },
  {
    category: "General Enquiries",
    items: [
      {
        q: "How do I submit a general enquiry?",
        a: "You can submit your enquiry through the Contact Us page by filling in your name, email, phone, subject, and message.",
      },
      {
        q: "How soon will I receive a response?",
        a: "Our team aims to respond to enquiries within standard business hours, Monday to Friday, 9:00 AM to 6:00 PM.",
      },
      {
        q: "Where are your contact details listed?",
        a: "Contact details including email, phone, and address are listed on the Contact Us page and in the website footer.",
      },
      {
        q: "Can I visit the Samrik Solutions office?",
        a: "Visits can be arranged by prior appointment. Please contact us through the available channels to schedule a discussion.",
      },
    ],
  },
];

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Clear answers about our sales support, industry focus, educational programs, partnership options, payments, and more."
      />

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_2.5fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircleQuestion className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold">
                Need more information?
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Our team can discuss your specific industry, audience, sales
                goals, or program requirements.
              </p>
              <div className="mt-6 space-y-3">
                <Button asChild variant="accent" className="w-full">
                  <Link to="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/partner">Partner With Us</Link>
                </Button>
              </div>
              <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category}>
                <h2 className="mb-6 font-display text-xl font-bold md:text-2xl">
                  {catIndex + 1}. {category.category}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="border-t border-border"
                >
                  {category.items.map((faq, index) => (
                    <AccordionItem
                      key={faq.q}
                      value={`${category.category}-item-${index}`}
                    >
                      <AccordionTrigger className="py-5 text-left font-display text-base font-bold no-underline hover:no-underline md:py-6 md:text-lg">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="max-w-3xl pb-6 text-base leading-7 text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
