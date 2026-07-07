import { Reveal } from "@/components/motion/Reveal";

const START_TEXT =
  "Здравствуйте! Хочу проконсультироваться по поводу заказа автомобиля...";
const TELEGRAM_URL = `https://t.me/signature_import?text=${encodeURIComponent(START_TEXT)}`;

export function OrderConsultation() {
  return (
    <section className="flex flex-1 flex-col justify-between px-[6vw] pt-14 pb-7 md:px-[5vw] md:pt-25 md:pb-10">
      <Reveal className="flex max-w-[680px] flex-col items-start gap-5.5 md:gap-7">
        <div className="text-xs font-medium tracking-[0.24em] text-accent">
          КОНСУЛЬТАЦИЯ И РАСЧЕТ
        </div>
        <h1 className="m-0 max-w-[14em] text-balance font-display text-[clamp(38px,4.6vw,74px)] leading-[1.04] font-bold text-ink">
          ОБСУДИТЬ ДОСТАВКУ АВТОМОБИЛЯ.
        </h1>
        <p className="m-0 max-w-[640px] text-lg leading-[1.65] tracking-[0.01em] text-ink-45">
          Назовите интересующую марку, пришлите ссылку на готовое объявление или
          просто опишите задачу. Наш эксперт сразу подключится к диалогу,
          сориентирует по ценам, возможностям доставки, срокам и условиям.
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 flex w-full items-center justify-center gap-3 border border-ink bg-ink px-6 py-5 font-medium text-[17px] tracking-[0.02em] text-bg no-underline transition-colors duration-[250ms] ease-[var(--ease-luxury)] hover:bg-[oklch(28%_0.02_250)] md:px-9 md:py-6.5 md:text-[19px]"
        >
          <span>Начать диалог с менеджером</span>
          <span className="inline-block transition-transform duration-[250ms] ease-[var(--ease-luxury)] group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>

      <div className="pt-9 text-[13px] leading-[1.6] text-ink-55 md:pt-6 md:text-sm">
        Предпочитаете другие форматы? Напишите в{" "}
        <a
          href="https://wa.me/74950000000"
          className="text-ink underline underline-offset-3 transition-colors duration-[250ms] hover:text-accent"
        >
          WhatsApp
        </a>{" "}
        или позвоните нам:{" "}
        <a
          href="tel:+74950000000"
          className="text-ink underline underline-offset-3 transition-colors duration-[250ms] hover:text-accent"
        >
          +7 495 000-00-00
        </a>
      </div>
    </section>
  );
}
