# SOJEX EXPORTS

Production-ready quotation website for SOJEX EXPORTS, covering custom garments, private-label apparel and sporting goods. Built as a separate Next.js App Router project.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production check:

```bash
npm run build
npm start
```

## Configuration

- Company name, location, WhatsApp number, future email and social URLs: `lib/config.ts`
- Product/category content and FAQs: `lib/data.ts`
- Remote image sources: `next.config.ts`
- Theme tokens: `tailwind.config.ts`

The email field is deliberately blank and social links are not rendered until real URLs are configured. The quote form validates required fields, formats the enquiry and opens WhatsApp. It does not upload artwork or pretend to send email. For production, connect a secure server-side form handler and file storage provider before adding uploads.

## Deployment

Deploy to any Node-compatible Next.js host. Run `npm run build`, configure the real canonical domain in `app/layout.tsx`, and review the Privacy Policy and Terms with qualified counsel before launch. No secrets are required for the current WhatsApp workflow.

## Content operations

Replace or license photography as required. Add reviews only with customer authorization. Confirm all product claims, shipping terms, compliance documents and order-specific estimates in writing.
