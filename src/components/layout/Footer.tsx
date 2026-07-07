import Link from "next/link";
import { FOOTER, NAV_LINKS, WORDMARK } from "@/lib/content";
import { TelegramIcon, WhatsappIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const SECTION_LABELS: Record<(typeof NAV_LINKS)[number]["href"], string> = {
  "/order": "Заказ автомобиля",
  "/process": "Процесс заказа",
  "/guarantees": "Гарантии и документы",
  "/contacts": "Контакты компании",
};

/** Identical on every page. `legalHref` differs: home points at its own
 * anchor (documents aren't live yet), subpages point at Гарантии. */
export function Footer({ legalHref }: { legalHref: string }) {
  return (
    <footer
      id="contacts"
      className="bg-ink text-bg px-[6vw] pt-[70px] pb-8 md:px-[5vw] md:pt-[110px] md:pb-10"
    >
      <Reveal className="pb-20 font-display text-[clamp(22px,7vw,44px)] leading-none font-semibold tracking-[0.01em] md:pb-20 md:text-[clamp(40px,5.6vw,86px)]">
        {WORDMARK}
      </Reveal>

      <StaggerGroup className="flex flex-col gap-10 pb-14 md:grid md:grid-cols-[repeat(2,minmax(0,280px))] md:gap-30 md:pb-20">
        <StaggerItem className="flex flex-col gap-4.5">
          <div className="text-xs tracking-[0.2em] text-bg/45">
            РАЗДЕЛЫ САЙТА
          </div>
          <nav className="flex flex-col gap-3.5 text-[17px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-bg/65 no-underline transition-colors duration-250 ease-luxury hover:text-bg"
              >
                {SECTION_LABELS[link.href]}
              </Link>
            ))}
          </nav>
        </StaggerItem>

        <StaggerItem className="flex flex-col gap-4.5">
          <div className="text-xs tracking-[0.2em] text-bg/45">
            АКТУАЛЬНЫЕ КОНТАКТЫ
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={FOOTER.phoneHref}
              className="font-display text-[28px] font-medium text-bg no-underline transition-colors duration-250 ease-luxury hover:text-accent"
            >
              {FOOTER.phone}
            </a>
            <div className="text-[13px] text-bg/55">{FOOTER.supportHours}</div>
          </div>
          <div className="flex gap-7 pt-2">
            <a
              href={FOOTER.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-bg/75 no-underline transition-colors duration-250 ease-luxury hover:text-accent"
            >
              <TelegramIcon />
              <span className="text-[15px]">Telegram</span>
            </a>
            <a
              href={FOOTER.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-bg/75 no-underline transition-colors duration-250 ease-luxury hover:text-accent"
            >
              <WhatsappIcon />
              <span className="text-[15px]">WhatsApp</span>
            </a>
          </div>
        </StaggerItem>
      </StaggerGroup>

      <div className="flex flex-wrap justify-between gap-6 border-t border-bg/14 pt-7 text-xs tracking-[0.06em] text-bg/45">
        <div>{FOOTER.copyright}</div>
        <div className="flex gap-5">
          <Link
            href={legalHref}
            className="text-bg/45 no-underline transition-colors duration-250 ease-luxury hover:text-bg"
          >
            Публичная оферта
          </Link>
          <Link
            href={legalHref}
            className="text-bg/45 no-underline transition-colors duration-250 ease-luxury hover:text-bg"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
