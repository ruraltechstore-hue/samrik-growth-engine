# Add Legal Pages and Rebuild the Footer

## What will change

- Rebuild the shared footer used on every page as four columns in this order: Company, Services, Legal, Contact.
- Keep all existing company and service links, add the four requested legal links, and make contact details clickable where appropriate.
- Add the bottom bar with the 2026 copyright on one side and all four legal links on the other, stacking cleanly on mobile.
- Create four separate legal pages:
  - `/privacy-policy`
  - `/terms-and-conditions`
  - `/refunds-cancellations`
  - `/cookies-policy`
- Use the supplied legal content and preserve editable placeholders for the governing jurisdiction, non-refundable services, and last-updated date.
- Add a simple Back to Home link and maintain the existing header and footer on every legal page.

## Page design

- Use one shared legal-page layout so headings, reading width, spacing, lists, contact links, and placeholder styling stay consistent.
- Match the existing Samrik Solutions navy, blue, teal, typography, borders, and responsive spacing.
- Keep the pages restrained and readable rather than card-heavy or visually complicated.

## Technical details

- Add the four route files with unique title, description, Open Graph metadata, canonical URL, and Twitter card metadata.
- Store shared legal-page presentation in a focused reusable component while keeping each page’s content easy to edit.
- Use TanStack Router links for every internal footer and legal-page link.
- Update the project roadmap and verify all new routes, footer links, desktop layout, and vertically stacked mobile layout.
