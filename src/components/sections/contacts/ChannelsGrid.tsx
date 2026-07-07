import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const linkBase =
  "no-underline transition-all duration-[250ms] ease-[var(--ease-luxury)] box-border";

export function ChannelsGrid() {
  return (
    <section className="px-[6vw] pb-20 md:px-[5vw] md:pb-27.5">
      <StaggerGroup className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
        <StaggerItem className="flex flex-col gap-7 border border-border bg-white p-9">
          <div className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
            КЛИЕНТСКАЯ ПОДДЕРЖКА
          </div>
          <a
            href="tel:+74950000000"
            className={`${linkBase} font-display text-[clamp(22px,1.8vw,28px)] font-medium text-ink hover:text-accent`}
          >
            +7 495 000-00-00
          </a>
          <div className="text-sm leading-[1.6] text-ink-55">
            Ежедневно 9:00–21:00 (МСК).
            <br />
            Статус заказа, документы, расчеты.
          </div>
        </StaggerItem>

        <StaggerItem className="flex flex-col gap-7 border border-border bg-white p-9">
          <div className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
            МЕССЕНДЖЕРЫ И ПОЧТА
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/79160000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} border border-ink/35 px-5.5 py-3 text-sm tracking-[0.06em] text-ink hover:border-ink hover:bg-ink hover:text-bg`}
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/signature_import"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} border border-ink/35 px-5.5 py-3 text-sm tracking-[0.06em] text-ink hover:border-ink hover:bg-ink hover:text-bg`}
            >
              Telegram
            </a>
          </div>
          <a
            href="mailto:hello@signature-import.ru"
            className="self-start border-b border-border pb-0.5 text-[15px] text-ink-38 no-underline transition-colors duration-[250ms] hover:border-accent hover:text-ink"
          >
            hello@signature-import.ru
          </a>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
