"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSlider, SLIDES, SLIDE_SECONDS } from "./HeroSlider";
import { SlideDots } from "./SlideDots";
import { scrollToOrder, scrollToProcess } from "@/lib/scrollTo";

const linkBase =
  "no-underline transition-all duration-[250ms] ease-[var(--ease-luxury)] box-border";

export function Hero() {
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, SLIDE_SECONDS * 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-ink">
      <HeroSlider slide={slide} />

      <Header variant="overlay" />

      <div className="absolute inset-0 z-[4] flex flex-col items-center justify-center px-[6vw] text-center">
        <h1 className="m-0 text-balance font-display text-[clamp(44px,6.4vw,104px)] leading-[1.02] font-semibold tracking-[0.005em] text-bg">
          МАСШТАБ ВАШЕГО ГАРАЖА — ВЕСЬ МИР.
        </h1>
        <p className="mt-7 font-sans text-[clamp(15px,1.3vw,20px)] tracking-[0.08em] text-bg/80">
          Прямой импорт автомобилей из Европы, США и Азии с гарантией.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[5] flex flex-col items-stretch gap-4.5 px-[6vw] pb-7 md:flex-row md:items-end md:justify-between md:gap-6 md:px-[5vw] md:pb-10">
        <SlideDots slide={slide} onSelect={setSlide} />

        <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:justify-end md:gap-3.5">
          <a
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              scrollToOrder();
            }}
            className={`${linkBase} w-full text-center font-medium text-[14px] tracking-[0.06em] text-bg bg-ink border border-ink px-7.5 py-4 hover:bg-accent hover:border-accent md:w-auto`}
          >
            Связаться с менеджером
          </a>
          <button
            onClick={scrollToProcess}
            className={`${linkBase} w-full cursor-pointer text-center font-normal text-[14px] tracking-[0.06em] text-bg bg-transparent border border-bg/45 px-7.5 py-4 hover:border-bg md:w-auto`}
          >
            Как устроена доставка&nbsp;&nbsp;↓
          </button>
        </div>
      </div>
    </section>
  );
}
