import Image from "next/image";
import orderPhoto from "@/assets/images/order-contact.jpg";
import { Reveal } from "@/components/motion/Reveal";

const linkBase = "no-underline transition-all duration-[250ms] ease-[var(--ease-luxury)] box-border";

export function OrderContact() {
  return (
    <section className="bg-bg px-[6vw] py-22.5 md:px-[5vw] md:py-42.5">
      <div
        id="order"
        className="flex flex-col gap-9 md:grid md:grid-cols-2 md:items-center md:gap-22"
      >
        <Reveal id="order-art" className="relative aspect-[4/5] w-full overflow-hidden bg-[oklch(90%_0.006_240)]">
          <Image
            src={orderPhoto}
            alt="Mercedes-AMG — обсудить ваш автомобиль"
            fill
            sizes="(min-width: 760px) 50vw, 100vw"
            loading="lazy"
            className="object-cover"
          />
        </Reveal>

        <div
          id="order-actions"
          className="flex max-w-[480px] flex-col items-start gap-7"
        >
          <div className="text-xs font-medium tracking-[0.24em] text-accent">
            &nbsp;СВЯЗЬ ЧЕРЕЗ МЕССЕНДЖЕРЫ
          </div>
          <h2 className="m-0 text-balance font-display text-[clamp(34px,3.4vw,54px)] leading-[1.04] font-bold text-ink">
            ОБСУДИТЬ ВАШ АВТОМОБИЛЬ.
          </h2>
          <p className="m-0 text-[16px] leading-[1.65] tracking-[0.01em] text-ink-45">
            Закрепленный за вами менеджер ответит в течение 5 минут. Напишите,
            какой автомобиль вас интересует, или опишите критерии поиска.
          </p>

          <div className="flex w-full flex-col gap-9 pt-3">
            <div className="flex w-full flex-col gap-3">
              <a
                href="https://t.me/signature_import"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkBase} group flex w-full items-center justify-center gap-2.5 border border-ink bg-ink px-7 py-5 font-medium text-[16px] tracking-[0.03em] text-bg hover:bg-[oklch(28%_0.02_250)] hover:border-[oklch(28%_0.02_250)]`}
              >
                <span>Написать в Telegram</span>
                <span className="inline-block transition-transform duration-[250ms] ease-[var(--ease-luxury)] group-hover:translate-x-1">
                  →
                </span>
              </a>
              <div className="text-[13px] text-ink-55">
                Основной и самый быстрый канал связи. Эксперт уже на линии.
              </div>
            </div>

            <a
              href="https://wa.me/79990000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} flex w-full items-center justify-center border border-ink bg-transparent px-7 py-5 font-medium text-[16px] tracking-[0.03em] text-ink hover:bg-ink hover:text-bg`}
            >
              Перейти в WhatsApp
            </a>

            <a
              href="tel:+79990000000"
              className="pt-1 font-display text-[clamp(24px,2vw,32px)] font-semibold tracking-[0.05em] text-ink no-underline transition-colors duration-[250ms] ease-[var(--ease-luxury)] hover:text-accent"
            >
              +7 (999) 000-00-00
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
