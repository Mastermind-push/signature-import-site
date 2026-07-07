import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** Shared eyebrow + H1 + subtitle block used at the top of every subpage. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4.5 px-[6vw] pt-20 pb-12.5 md:gap-5.5 md:px-[5vw] md:pt-25 md:pb-17.5">
      {eyebrow && (
        <Reveal className="text-xs font-medium tracking-[0.24em] text-accent">
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={eyebrow ? 0.05 : 0}>
        <h1 className="m-0 max-w-[12em] text-balance font-display text-[clamp(44px,5.4vw,88px)] leading-[1.02] font-semibold text-ink">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={eyebrow ? 0.1 : 0.05} className="max-w-[640px] text-lg leading-[1.6] tracking-[0.02em] text-ink-45">
        {description}
      </Reveal>
    </section>
  );
}
