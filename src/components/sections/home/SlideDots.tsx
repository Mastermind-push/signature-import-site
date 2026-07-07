"use client";

import { SLIDES } from "./HeroSlider";

export function SlideDots({
  slide,
  onSelect,
}: {
  slide: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="font-mono text-[11px] tracking-[0.08em] text-bg/50">
        {SLIDES[slide].label} / 03
      </div>
      <div className="flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            onClick={() => onSelect(i)}
            aria-label={`Слайд ${s.label}`}
            className={`h-0.5 cursor-pointer border-0 p-0 transition-all duration-[400ms] ${
              i === slide ? "w-9 bg-bg" : "w-4 bg-bg/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
