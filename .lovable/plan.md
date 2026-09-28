# Add the Samrik Solutions Careers page

## What will be built
- Add a new `/careers` page using the site's existing header, footer, typography, colors, buttons, cards, spacing, and subtle entrance animation.
- Replace the current external Career navigation item with an internal Careers link, in this order: Home, About Us, Services, Careers, FAQ, Contact Us. The active state and mobile menu behavior will use the existing navigation system.
- Keep Careers in the footer Company list while preserving all other footer links and contact details.

## Page content
- Build the requested Careers hero with a smooth-scroll “View Open Roles” action and external “Apply Now” action.
- Add editable career statistics, six workplace benefit cards, nine editable job listings, category filters, an open-application callout, four-step hiring process, and final careers call-to-action.
- Store jobs, categories, statistics, benefits, and hiring steps in a dedicated frontend data module so they can be updated without changing the page layout.
- Every application action will open `https://forms-samrik.vercel.app/` in a new tab. No form, login, database, or backend will be added.

## Responsive and accessible behavior
- Use semantic headings with one page H1 and section H2s.
- Make filters keyboard-accessible and expose their selected state.
- Use responsive grids for statistics, benefits, and job cards; switch the hiring process from horizontal to vertical on mobile.
- Prevent horizontal page overflow and keep touch targets usable on small screens.

## SEO and verification
- Add the requested title, description, Open Graph metadata, Twitter card, and canonical URL to `/careers`.
- Verify `/careers`, desktop and mobile navigation, active highlighting, smooth scrolling, all category filters, all external application links, footer link, console state, and mobile/tablet/desktop layouts.
- Confirm the current build remains healthy and existing routes continue to load.
