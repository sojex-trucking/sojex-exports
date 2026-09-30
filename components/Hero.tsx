"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  ["CUSTOM GARMENTS", "Hoodies, T-shirts, jackets, tracksuits, jerseys and gymwear.", "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=85"],
  ["FOOTBALL / SOCCER", "Custom footballs, match kits and training equipment.", "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1800&q=85"],
  ["CRICKET", "Bats, balls, batting gloves, pads and complete team kits.", "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1800&q=85"],
  ["HOCKEY", "Sticks, balls, uniforms and protective equipment.", "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1800&q=85"],
  ["BASKETBALL", "Custom balls, jerseys and performance equipment.", "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=85"],
  ["BOXING & FITNESS", "Boxing gloves, training equipment and technical apparel.", "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=85"],
  ["PRIVATE LABEL", "One partner for custom garments and sporting goods.", "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1800&q=85"],
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
  return (
    <section
      className="relative min-h-[580px] overflow-hidden bg-navy text-white h-[72vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      aria-roledescription="carousel"
      aria-label="Product capabilities"
    >
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url("${slides[index][2]}")` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/10" aria-hidden="true" />
      <div className="container-x relative flex h-full items-center">
        <div className="max-w-3xl" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">Made to your specification · Exported worldwide</p>
          <h1 className="display mt-4 text-5xl leading-[.95] sm:text-7xl lg:text-8xl">{slides[index][0]}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">{slides[index][1]}</p>
          <p className="mt-4 text-sm font-bold tracking-[.16em]">YOUR DESIGN. YOUR QUANTITY. YOUR PRICE.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-orange" href="/request-quote">Request a quote</Link>
            <Link className="btn btn-outline" href={index === 0 || index === 6 ? "/custom-garments" : "/sports-equipment"}>Explore products</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-center gap-2 sm:bottom-8">
        <button type="button" onClick={() => go(index - 1)} className="grid h-11 w-11 place-items-center border border-white/50" aria-label="Previous slide"><ChevronLeft /></button>
        {slides.map((slide, n) => (
          <button
            key={slide[0]}
            type="button"
            onClick={() => go(n)}
            aria-label={`Go to slide ${n + 1}: ${slide[0]}`}
            aria-current={index === n ? "true" : undefined}
            className={`grid h-11 w-7 place-items-center sm:w-9`}
          ><span className={`block h-2 rounded-full transition-all ${index === n ? "w-6 bg-orange" : "w-2 bg-white/50"}`} /></button>
        ))}
        <button type="button" onClick={() => go(index + 1)} className="grid h-11 w-11 place-items-center border border-white/50" aria-label="Next slide"><ChevronRight /></button>
        <button type="button" onClick={() => setPaused((value) => !value)} className="grid h-11 w-11 place-items-center" aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused}>{paused ? <Play size={18} /> : <Pause size={18} />}</button>
      </div>
    </section>
  );
}
