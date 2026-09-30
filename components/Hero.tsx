"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  { title: "PRIVATE-LABEL APPAREL", copy: "Tees, hoodies and coordinated garments—developed with your labels, trims and packaging.", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85", href: "/custom-garments", product: "Private-label apparel" },
  { title: "FOOTBALL / SOCCER", copy: "Custom footballs, match teamwear and training equipment supplied as one program.", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1800&q=85", href: "/sports-equipment", product: "Football / soccer program" },
  { title: "CRICKET FULL KIT", copy: "Bats, balls, batting gloves, pads, helmets and team uniforms built to your brief.", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1800&q=85", href: "/sports-equipment", product: "Complete cricket kit" },
  { title: "FIELD HOCKEY", copy: "Field hockey sticks, balls, protective gear and custom team uniforms—not ice hockey.", image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1800&q=85", href: "/sports-equipment", product: "Field hockey equipment" },
  { title: "PREMIUM HOODIES", copy: "Custom weights, fits, trims and finishing for private-label wholesale orders.", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1800&q=85", href: "/custom-garments", product: "Premium hoodies" },
  { title: "BOXING & FITNESS", copy: "Boxing gloves, pads, training accessories and technical apparel for your range.", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=85", href: "/sports-equipment", product: "Boxing & fitness equipment" },
  { title: "BASKETBALL", copy: "Custom balls, uniforms and practice equipment prepared for clubs and distributors.", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=85", href: "/sports-equipment", product: "Basketball program" },
] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section
      className="relative isolate min-h-[620px] overflow-hidden bg-navy text-white h-[calc(100svh-5rem)] max-h-[820px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      aria-roledescription="carousel"
      aria-label="Product capabilities"
    >
      <div key={slide.image} className="absolute inset-0 bg-cover bg-center motion-safe:animate-[fadeIn_.7s_ease-out]" style={{ backgroundImage: `url("${slide.image}")` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/15" aria-hidden="true" />
      <div className="container-x relative flex h-full items-center pb-28 pt-10 sm:pb-32">
        <div className="max-w-3xl" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">Made to your specification · Exported worldwide</p>
          <h1 className="display mt-4 text-5xl leading-[.95] sm:text-7xl lg:text-8xl">{slide.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{slide.copy}</p>
          <p className="mt-4 text-xs font-bold tracking-[.14em] sm:text-sm sm:tracking-[.16em]">YOUR DESIGN. YOUR QUANTITY. YOUR PRICE.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-orange" href={`/request-quote?product=${encodeURIComponent(slide.product)}`}>Request a quote</Link>
            <Link className="btn btn-outline" href={slide.href}>Explore products</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-navy/75 px-3 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-1 sm:gap-2">
          <button type="button" onClick={() => go(index - 1)} className="carousel-control" aria-label="Previous slide"><ChevronLeft /></button>
          <div className="flex flex-1 items-center justify-center" aria-label={`Slide ${index + 1} of ${slides.length}`}>
            {slides.map((item, n) => (
              <button key={item.title} type="button" onClick={() => go(n)} aria-label={`Go to slide ${n + 1}: ${item.title}`} aria-current={index === n ? "true" : undefined} className="grid h-11 flex-1 place-items-center">
                <span className={`block h-1.5 rounded-full transition-all ${index === n ? "w-6 bg-orange sm:w-8" : "w-2 bg-white/45"}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => go(index + 1)} className="carousel-control" aria-label="Next slide"><ChevronRight /></button>
          <button type="button" onClick={() => setPaused((value) => !value)} className="carousel-control border-0" aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused}>{paused ? <Play size={18} /> : <Pause size={18} />}</button>
        </div>
      </div>
    </section>
  );
}
