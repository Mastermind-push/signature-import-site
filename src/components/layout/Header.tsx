"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, WORDMARK } from "@/lib/content";
import { scrollToOrder } from "@/lib/scrollTo";

const linkBase =
  "no-underline transition-colors duration-[250ms] ease-[var(--ease-luxury)]";

type HeaderProps =
  | {
      /** Absolute, transparent, over the hero photo — home page only. */
      variant: "overlay";
    }
  | {
      /** Static, bordered, white — every other page. */
      variant: "solid";
      ctaLabel: string;
      ctaHref: string;
    };

export function Header(props: HeaderProps) {
  const pathname = usePathname();

  if (props.variant === "overlay") {
    return (
      <header className="absolute inset-x-0 top-0 z-[5] flex items-center justify-between gap-3 px-[6vw] py-5 md:gap-6 md:px-[5vw] md:py-7">
        <div className="font-sans text-[11px] font-medium tracking-[0.18em] whitespace-nowrap text-bg md:text-sm">
          {WORDMARK}
        </div>
        <nav className="hidden gap-9 text-[13px] tracking-[0.12em] uppercase md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkBase} text-bg/75 hover:text-bg`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href="#order"
          onClick={(e) => {
            e.preventDefault();
            scrollToOrder();
          }}
          className={`${linkBase} flex-none border border-bg/45 px-3.5 py-[9px] text-[11px] tracking-[0.08em] whitespace-nowrap text-bg hover:border-bg hover:bg-bg/8 md:px-5.5 md:py-2.75 md:text-[13px]`}
        >
          Связаться с нами
        </a>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between gap-3 border-b border-border px-[6vw] py-5 md:gap-6 md:px-[5vw] md:py-6.5">
      <Link
        href="/"
        className="font-sans text-[11px] font-medium tracking-[0.18em] whitespace-nowrap text-ink no-underline md:text-sm"
      >
        {WORDMARK}
      </Link>
      <nav className="hidden gap-9 text-[13px] tracking-[0.12em] uppercase md:flex">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                active
                  ? `${linkBase} border-b border-accent pb-0.75 text-ink`
                  : `${linkBase} text-ink-45 hover:text-ink`
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link
        href={props.ctaHref}
        className={`${linkBase} flex-none border border-ink/35 px-3.5 py-[9px] text-[11px] tracking-[0.08em] whitespace-nowrap text-ink hover:border-ink md:px-5.5 md:py-2.75 md:text-[13px]`}
      >
        {props.ctaLabel}
      </Link>
    </header>
  );
}
