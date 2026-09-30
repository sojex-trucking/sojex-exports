import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/Sections";

export const metadata = { title: "Request a Quote" };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const params = await searchParams;
  const selectedProduct = typeof params.product === "string" ? params.product : "";
  return (
    <>
      <PageHero
        eyebrow="Project enquiry"
        title="REQUEST A CUSTOM QUOTATION"
        copy="Tell us what you want to make. The more precise the brief, the more useful the first quotation discussion."
      />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="display text-3xl">Before you begin</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
            <li>• Flexible quantities; product-specific minimums apply.</li>
            <li>• Samples typically take 5–7 days.</li>
            <li>• Production typically takes 10–12 days.</li>
            <li>• Estimates depend on specifications and approval.</li>
            <li>• Send artwork through WhatsApp after submitting.</li>
          </ul>
        </div>
        <QuoteForm initialProduct={selectedProduct} />
      </section>
    </>
  );
}
