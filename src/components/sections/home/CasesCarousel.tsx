import Image from "next/image";
import casePhoto from "@/assets/images/case-photo.jpg";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const CASES = [
  {
    model: "Porsche Cayenne Coupe Turbo E-Hybrid (2025)",
    from: "Штутгарт, Германия",
    days: "24 дня",
    profit: "~4,2 млн ₽",
  },
  {
    model: "Zeekr 009 Grand (2025)",
    from: "Ханчжоу, Китай",
    days: "31 день",
    profit: "~2,8 млн ₽",
  },
  {
    model: "BMW X7 M60i (2024)",
    from: "Майами, США",
    days: "38 дней",
    profit: "~3,5 млн ₽",
  },
  {
    model: "Hyundai Palisade Calligraphy (2025)",
    from: "Сеул, Корея",
    days: "19 дней",
    profit: "~1,6 млн ₽",
  },
];

export function CasesCarousel() {
  return (
    <section className="bg-bg pt-0 pb-22.5 md:pb-35">
      <Reveal className="flex flex-col items-start gap-3.5 px-[6vw] pb-7 md:flex-row md:items-end md:justify-between md:px-[5vw] md:pb-11">
        <div className="flex flex-col gap-5">
          <div className="text-xs font-medium tracking-[0.24em] text-accent">
            ВЫПОЛНЕННЫЕ ЗАКАЗЫ
          </div>
          <h2 className="m-0 font-display text-[clamp(36px,3.6vw,58px)] leading-[1.05] font-semibold text-ink">
            Уже в гаражах клиентов
          </h2>
        </div>
        <div className="pb-2 font-mono text-[11px] tracking-[0.08em] text-ink-55">
          СКРОЛЛ&nbsp;→
        </div>
      </Reveal>

      <StaggerGroup
        staggerChildren={0.08}
        className="flex gap-7 overflow-x-auto px-[5vw] pb-6 [scroll-snap-type:x_mandatory] [scrollbar-width:thin]"
      >
        {CASES.map((c) => (
          <StaggerItem
            key={c.model}
            className="flex w-[min(560px,82vw)] flex-none flex-col border border-border bg-white [scroll-snap-align:start]"
          >
            <div className="relative h-[340px]">
              <Image
                src={casePhoto}
                alt={c.model}
                fill
                sizes="(min-width: 1024px) 560px, 82vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="px-7 pt-7 pb-2 font-display text-2xl leading-[1.15] font-medium text-ink">
              {c.model}
            </div>
            <div className="flex flex-col px-7 pt-4 pb-7">
              <div className="flex justify-between gap-4 border-t border-border py-3">
                <span className="text-xs tracking-[0.12em] text-ink-55 uppercase">
                  Откуда
                </span>
                <span className="text-[15px] font-medium text-ink">{c.from}</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-border py-3">
                <span className="text-xs tracking-[0.12em] text-ink-55 uppercase">
                  Срок доставки
                </span>
                <span className="text-[15px] font-medium text-ink">{c.days}</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-border py-3">
                <span className="text-xs tracking-[0.12em] text-ink-55 uppercase">
                  Выгода клиента
                </span>
                <span className="text-[15px] font-semibold text-accent">
                  {c.profit}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
