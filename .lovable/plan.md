# Samrik Solutions Corporate Website

## Goal
Build a polished six-page B2B website that presents Samrik Solutions as a credible sales and business-development partner for SaaS, logistics, and education organizations.

## Site structure
- Add shared sticky desktop/mobile navigation, text-based brand, “Let’s Talk” action, and four-column footer.
- Create separate pages for Home, About Us, Services, Partner With Us, FAQ, and Contact Us.
- Keep the existing branded 404 experience and update it to match the new site.
- Store company name, contact placeholders, social links, navigation, and service links in one editable configuration.

## Visual direction
- Use the specified deep navy, blue, teal/cyan, white, and light-gray palette through reusable design tokens.
- Pair a strong corporate display typeface with a highly readable body typeface.
- Use disciplined spacing, restrained borders and corner radii, subtle depth, and minimal motion.
- Create a distinctive sales-growth visual for the home page and supporting business illustrations/icons for SaaS, logistics, education, partnerships, and customer relationships.
- Ensure every section remains legible and balanced across desktop, tablet, and mobile layouts.

## Page implementation
- **Home:** immersive opening section, value pillars, three services, four-step process, industries, and final action section.
- **About:** company overview, mission, vision, beliefs, and two-column reasons to choose Samrik Solutions.
- **Services:** detailed SaaS, logistics, and education offerings plus additional sales support.
- **Partner:** audience and benefit sections plus the complete partnership request form.
- **FAQ:** accessible accordion containing all supplied questions and answers.
- **Contact:** editable company placeholders, business hours, and complete contact form.

## Interactions and forms
- Build keyboard-accessible navigation, mobile menu, links, buttons, and FAQ accordion.
- Add client-side schema validation, field-level errors, sensible input limits, and safe select options.
- Show the requested success confirmation after valid form submission; submissions remain presentation-only because no persistence or delivery service was requested.
- Add subtle viewport-entry transitions that respect reduced-motion preferences.

## Content and discoverability
- Preserve the supplied copy without adding testimonials, statistics, client logos, or unsupported claims.
- Add unique titles, descriptions, Open Graph fields, Twitter card metadata, canonical paths, semantic landmarks, correct heading hierarchy, and descriptive image text for every public page.
- Keep all routes shareable and navigable through the site-wide header and footer.

## Technical details
- Use the existing TanStack Start route structure, shared React components, Tailwind v4 design tokens, shadcn controls, React Hook Form, Zod, Radix accordion, and Lucide icons.
- Keep static company details in a central config module and repeated content in typed data structures.
- Generate and bundle original visual assets locally rather than hotlinking placeholders.
- Validate the finished site through the development build plus browser checks at desktop and mobile widths, including menu, accordion, navigation, validation, and success states.
