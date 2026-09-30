import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/data";
import { waLink } from "@/lib/config";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card group flex h-full min-w-0 flex-col overflow-hidden">
      <div className="relative h-52 overflow-hidden bg-soft sm:h-64">
        <Image
          src={p.image}
          alt={p.name}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow break-words">{p.category}</p>
        <h3 className="display mt-2 break-words text-2xl">{p.name}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">{p.detail}</p>
        <div className="mt-auto grid grid-cols-[1fr_3rem] gap-2 pt-5">
          <Link
            className="btn btn-orange min-w-0 px-3"
            href={`/request-quote?product=${encodeURIComponent(p.name)}`}
          >
            Request quote
          </Link>
          <a
            aria-label={`WhatsApp about ${p.name}`}
            className="grid h-full min-h-11 place-items-center border border-navy"
            target="_blank"
            rel="noopener noreferrer"
            href={waLink(
              `Hello SOJEX EXPORTS, I would like a quote for ${p.name}.`,
            )}
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
