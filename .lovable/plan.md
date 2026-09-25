# Add BPO & Outsourcing Services Section

## Scope
- Keep the existing Services page structure and content unchanged.
- Insert one new BPO section between “Solutions Designed for Business Growth” and “Flexible Sales Capabilities.”
- Keep BPO within the Services page; do not add navigation or a separate route.

## Implementation
1. Add the 14 supplied BPO services as structured page data, preserving every title, description, and capability point exactly under its correct card.
2. Build the new section with the existing Samrik design system:
   - Existing section heading, semantic colors, typography, spacing, borders, shadows, and restrained rise/hover motion.
   - Relevant Lucide icons.
   - One-column mobile, two-column tablet, and four-column wide-desktop grid.
   - Stable card structure with readable descriptions and two check-marked capability points.
3. Add the BPO enquiry block at the bottom of this section with the supplied heading, description, and button linking to the existing Contact Us page.
4. Add “BPO & Outsourcing Services” to the existing service-selection dropdown used by the partnership form. The Contact Us form has no service dropdown, so the CTA will open Contact Us without changing that form.
5. Preserve all existing service cards, Flexible Sales Capabilities, CTA, routes, and navigation.

## Verification
- Confirm the exact Services page order and all 14 cards.
- Check the BPO CTA opens Contact Us and the partnership dropdown includes the new service option.
- Verify desktop, tablet, and mobile layouts for overflow and navigation regressions.
- Confirm the preview build finishes without errors.
