# Add Educational Internship Programs

## Scope
- Add exactly three internship cards beneath Educational Services, preserving the existing plan-card styling and responsive three-column layout.
- Keep each stage’s supplied title, pricing, benefits, audience, and coverage separate; Stage 3 remains custom pricing with no automatic charge.
- Update the Educational Services call-to-action and page metadata so visitors can reach the internship section without adding navigation items.

## Registration and enquiry flows
- Stage 1 and Stage 2 open a student registration dialog with name, email, mobile, college/university, course/program, locked stage, and locked INR price.
- Reuse the existing Razorpay order, cancellation, and server-side signature-verification endpoints; add the two fixed internship plans to the server-owned price catalogue.
- Extend the existing server-side order record shape to retain internship registration details while remaining compatible with Rural Tech Store and Logistics orders.
- Show verified success details including student, stage, amount, payment ID, confirmation, and next steps; show retry and Educational Services return actions for cancellation or failure.
- Stage 3 opens a validated pricing-enquiry dialog, sends the request through the existing Resend-backed enquiry infrastructure, and displays the supplied success confirmation without opening Razorpay.

## Technical details
- Define internship content and prices in a dedicated typed data module: ₹1,000 / 100000 paise and ₹2,500 / 250000 paise; no client-supplied amount is trusted.
- Add client-side Zod validation and matching server-side schemas for all registration and enquiry fields.
- Preserve server-only Razorpay secrets, prevent repeat submissions while requests are active, and avoid local storage or Supabase.
- Use the project’s existing in-memory/audit-backed record seam because no permanent database is connected; keep it ready for later database replacement.

## Verification
- Check Educational Services on desktop and mobile for all three cards, exact content, prices, CTA labels, and accessible dialogs.
- Validate Stage 1/2 required fields, selected-stage locking, expected missing-payment-configuration behavior, and Stage 3 validation/success handling.
- Confirm existing service pages, payment plans, navigation, and metadata remain intact.
