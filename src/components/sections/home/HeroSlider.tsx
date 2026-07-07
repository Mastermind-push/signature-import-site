"use client";

import { getImageProps } from "next/image";
import heroDesktop1 from "@/assets/images/hero-desktop-1-garage.jpg";
import heroMobile1 from "@/assets/images/hero-mobile-1-garage.jpg";
import heroDesktop2 from "@/assets/images/hero-desktop-2-porsche-seoul.jpg";
import heroMobile2 from "@/assets/images/hero-mobile-2-amg-gtr.jpg";
import heroDesktop3 from "@/assets/images/hero-desktop-3-monaco.jpg";
import heroMobile3 from "@/assets/images/hero-mobile-3-monaco.jpg";
import { MOBILE_BREAKPOINT } from "@/lib/viewport";

export const SLIDES = [
  { label: "01", desktop: heroDesktop1, mobile: heroMobile1 },
  { label: "02", desktop: heroDesktop2, mobile: heroMobile2 },
  { label: "03", desktop: heroDesktop3, mobile: heroMobile3 },
];

export const SLIDE_SECONDS = 5;

function ArtDirectedSlide({
  desktop,
  mobile,
  active,
  eager,
}: {
  desktop: (typeof SLIDES)[number]["desktop"];
  mobile: (typeof SLIDES)[number]["mobile"];
  active: boolean;
  eager: boolean;
}) {
  const common = {
    alt: "",
    sizes: "100vw",
    loading: eager ? ("eager" as const) : ("lazy" as const),
    fetchPriority: eager ? ("high" as const) : ("auto" as const),
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktop });
  const {
    props: { srcSet: mobileSrcSet, ...mobileRest },
  } = getImageProps({ ...common, src: mobile });

  return (
    <picture className="absolute inset-0 block h-full w-full">
      <source
        media={`(min-width: ${MOBILE_BREAKPOINT}px)`}
        srcSet={desktopSrcSet}
      />
      <source srcSet={mobileSrcSet} />
      <img
        {...mobileRest}
        alt=""
        className="h-full w-full object-cover transition-opacity duration-[1.6s] ease-linear"
        style={{ opacity: active ? 1 : 0 }}
      />
    </picture>
  );
}

/** Background photo stack + darkening gradient. `slide` state lives in the
 * parent Hero section so the bottom label/dots can share it. */
export function HeroSlider({ slide }: { slide: number }) {
  return (
    <div className="absolute inset-0">
      {SLIDES.map((s, i) => (
        <ArtDirectedSlide
          key={s.label}
          desktop={s.desktop}
          mobile={s.mobile}
          active={i === slide}
          eager={i === 0}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(oklch(10%_0.01_240_/_0.38),oklch(10%_0.01_240_/_0.15)_40%,oklch(10%_0.01_240_/_0.5))]" />
    </div>
  );
}
