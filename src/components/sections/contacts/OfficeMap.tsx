import { Reveal } from "@/components/motion/Reveal";

export function OfficeMap() {
  return (
    <section className="flex flex-col gap-4 px-[6vw] pb-20 md:grid md:grid-cols-[0.9fr_1.1fr] md:items-stretch md:gap-5 md:px-[5vw] md:pb-30">
      <Reveal className="flex flex-col justify-between gap-12 border border-ink bg-ink p-11 text-bg">
        <div className="flex flex-col gap-5">
          <div className="font-mono text-[11px] tracking-[0.1em] text-bg/50">
            ОФИС
          </div>
          <div className="font-display text-[clamp(24px,2vw,32px)] leading-[1.2] font-medium">
            Гоголевский бульвар, 11
            <br />
            офис 305, Москва
          </div>
          <div className="text-[15px] leading-[1.7] text-bg/65">
            Встречи — по записи: покажем текущие заказы, отчеты по выкупленным
            автомобилям и подпишем договор лично.
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="font-mono text-[11px] tracking-[0.1em] text-bg/50">
            ЧАСЫ РАБОТЫ
          </div>
          <div className="font-sans text-[17px] font-medium">
            Пн–Пт 10:00–20:00 · Сб 11:00–18:00
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className="relative min-h-[260px] overflow-hidden border border-border bg-[oklch(94%_0.004_240)] md:min-h-[420px]"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(0,0,0,0.028)_0_2px,transparent_2px_26px)]" />
        <div className="absolute top-1/2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_8px_oklch(58%_0.22_255_/_0.18)]" />
        <div className="absolute bottom-5 left-6 font-mono text-[11px] tracking-[0.08em] text-ink-40">
          [ карта-слот ] Гоголевский бульвар, 11 — м. Кропоткинская, 4 мин пешком
        </div>
      </Reveal>
    </section>
  );
}
