"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    title: "CUSTOM GARMENTS",
    copy: "T-shirts, hoodies, tracksuits, jackets and teamwear customized for your brand.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85",
    href: "/custom-garments",
    product: "Custom garments",
  },
  {
    title: "FOOTBALL & TEAMWEAR",
    copy: "Custom footballs, team kits, goalkeeper wear and training gear.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1800&q=85",
    href: "/sports-equipment",
    product: "Football & teamwear",
  },
  {
    title: "CRICKET EQUIPMENT",
    copy: "Bats, balls, batting gloves, pads, protective gear, kits and bags.",
    image: "https://images.pexels.com/photos/4770720/pexels-photo-4770720.jpeg?auto=compress&cs=tinysrgb&w=1800",
    fallback: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1800&q=85",
    href: "/sports-equipment",
    product: "Cricket equipment",
  },
  {
    title: "FIELD HOCKEY EQUIPMENT",
    copy: "Sticks, balls, protective gear, uniforms and accessories for field hockey.",
    image: "https://images.unsplash.com/photo-1752401978234-d2aff41b65c9?auto=format&fit=crop&w=1800&q=85",
    href: "/sports-equipment",
    product: "Field hockey equipment",
  },
  {
    title: "BASKETBALL & TEAMWEAR",
    copy: "Basketballs, custom jerseys, shorts and training gear.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=85",
    href: "/sports-equipment",
    product: "Basketball & teamwear",
  },
  {
    title: "BOXING & FITNESS",
    copy: "Boxing gloves, protective gear, training equipment and gymwear.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=85",
    href: "/sports-equipment",
    product: "Boxing & fitness gear",
  },
  {
    title: "PRIVATE LABEL",
    copy: "Custom logos, labels, colors, materials and packaging for your brand.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=85",
    href: "/private-label",
    product: "Private label",
  },
] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % slides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (next: number) =>
    setIndex((next + slides.length) % slides.length);
  const slide = slides[index];

  const backgrounds = "fallback" in slide
    ? `url("${slide.image}"), url("${slide.fallback}")`
    : `url("${slide.image}")`;

  return (
    <section
      className="relative isolate h-[calc(100svh-4rem)] min-h-[540px] max-h-[760px] overflow-hidden bg-navy text-white sm:h-[calc(100svh-5rem)] sm:min-h-[620px] sm:max-h-[820px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      aria-roledescription="carousel"
      aria-label="Product capabilities"
    >
      <div
        key={slide.image}
        className="absolute inset-0 bg-cover bg-center motion-safe:animate-[fadeIn_.7s_ease-out]"
        style={{ backgroundImage: backgrounds }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/25"
        aria-hidden="true"
      />

      <div className="container-x relative flex h-full items-center pb-24 pt-6 sm:pb-32 sm:pt-10">
        <div className="max-w-3xl" aria-live="polite" aria-atomic="true">
          <p className="eyebrow max-w-[18rem] text-[10px] leading-5 sm:max-w-none sm:text-[.72rem]">
            Made to your specification · Exported worldwide
          </p>
          <h1 className="display mt-3 text-[clamp(2.5rem,12vw,4.2rem)] leading-[.92] sm:mt-4 sm:text-7xl lg:text-8xl">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
            {slide.copy}
          </p>
          <p className="mt-3 text-[10px] font-bold tracking-[.11em] sm:mt-4 sm:text-sm sm:tracking-[.16em]">
            YOUR DESIGN. YOUR QUANTITY. YOUR PRICE.
          </p>
          <div className="mt-6 grid gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            <Link
              className="btn btn-orange w-full sm:w-auto"
              href={`/request-quote?product=${encodeURIComponent(slide.product)}`}
            >
              Request a quote
            </Link>
            <Link className="btn btn-outline w-full sm:w-auto" href={slide.href}>
              Explore products
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-navy/80 px-2 py-2 backdrop-blur-sm sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-0.5 sm:gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="carousel-control"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex min-w-0 flex-1 items-center justify-center">
            {slides.map((item, n) => (
              <button
                key={item.title}
                type="button"
                onClick={() => go(n)}
                aria-label={`Go to slide ${n + 1}: ${item.title}`}
                aria-current={index === n ? "true" : undefined}
                className="grid h-9 min-w-0 flex-1 place-items-center sm:h-11"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    index === n ? "w-4 bg-orange sm:w-8" : "w-1.5 bg-white/45 sm:w-2"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            className="carousel-control"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>

          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="carousel-control border-0"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            aria-pressed={paused}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
