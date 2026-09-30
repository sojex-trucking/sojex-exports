import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import { CTA, FeatureGrid, Heading } from "@/components/Sections";
import { equipment, garments, process, products } from "@/lib/data";
import { ArrowRight, Box, Palette, Ruler, Tag } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b bg-white">
        <div className="container-x grid grid-cols-2 divide-x py-5 text-center text-[10px] font-black uppercase tracking-widest md:grid-cols-4">
          {[
            "Flexible quantities",
            "5–7 day typical samples",
            "10–12 day typical production",
            "Worldwide export support",
          ].map((item) => (
            <div className="px-2" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Heading
          eyebrow="Two capabilities. One partner."
          title="Garments and equipment receive equal focus."
          copy="Develop custom apparel, sporting goods, or a coordinated range under your own brand."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Pillar
            title="Custom garments"
            list={garments.slice(0, 7)}
            href="/custom-garments"
          />
          <Pillar
            title="Sporting goods"
            list={equipment.slice(0, 7)}
            href="/sports-equipment"
            dark
          />
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="container-x">
          <Heading
            eyebrow="Custom products"
            title="Built for brands, teams and distributors."
            copy="Choose a category, send your design or reference, and tell us the quantity and destination. We will quote around your specifications."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} p={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading
            eyebrow="Private label development"
            title="Your brand, built into the product."
            copy="Customize materials, colors, sizing, logos, labels and packaging across apparel and sporting goods."
          />
          <Link href="/private-label" className="btn btn-orange mt-7">
            Explore private label
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            [Palette, "Colors & artwork"],
            [Ruler, "Fit & specifications"],
            [Tag, "Labels & branding"],
            [Box, "Custom packaging"],
          ].map(([Icon, title]: any) => (
            <div className="card p-7" key={title}>
              <Icon className="text-orange" />
              <b className="mt-8 block text-sm">{title}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="container-x">
          <Heading
            eyebrow="Why SOJEX"
            title="A clear route from idea to export."
          />
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <Heading eyebrow="How it works" title="Six clear stages." />
        <div className="mt-10 grid gap-px bg-gray-200 md:grid-cols-3 lg:grid-cols-6">
          {process.map((item, index) => (
            <div className="bg-warm p-5" key={item}>
              <span className="display text-4xl text-orange">
                0{index + 1}
              </span>
              <p className="mt-6 text-sm font-bold">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Times are estimates and depend on order specifications, approvals and
          logistics.
        </p>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <Heading
            center
            eyebrow="Buyer feedback"
            title="Real reviews only."
            copy="Customer feedback will be published here as genuine orders are completed and reviews are authorized."
          />
          <div className="mt-8 text-center">
            <Link className="btn btn-outline" href="/reviews">
              Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Heading center eyebrow="Questions, answered" title="Plan with clarity." />
        <div className="mt-8">
          <FAQ limit={5} />
        </div>
      </section>

      <CTA />
    </>
  );
}

function Pillar({
  title,
  list,
  href,
  dark = false,
}: {
  title: string;
  list: string[];
  href: string;
  dark?: boolean;
}) {
  return (
    <article
      className={`p-8 sm:p-10 ${
        dark ? "bg-navy text-white" : "border bg-white"
      }`}
    >
      <p className="eyebrow">Main product pillar</p>
      <h3 className="display mt-3 text-4xl">{title}</h3>
      <ul
        className={`my-7 grid grid-cols-2 gap-3 text-sm ${
          dark ? "text-white/60" : "text-gray-600"
        }`}
      >
        {list.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
      <Link
        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange"
        href={href}
      >
        Explore products <ArrowRight size={15} />
      </Link>
    </article>
  );
}
