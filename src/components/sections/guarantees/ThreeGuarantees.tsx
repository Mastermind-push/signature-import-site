import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const ROWS = [
  {
    big: "100 %",
    tag: "ФИНАНСОВАЯ ОТВЕТСТВЕННОСТЬ",
    title: "Страхование 100%",
    text: "Мы несем полную финансовую ответственность за автомобиль с момента его выкупа за границей. Любая царапина в пути — зона нашей ответственности, прописанная в договоре.",
    ref: "→ раздел 5 договора «Ответственность сторон»",
  },
  {
    big: "0 ₽",
    tag: "СКРЫТЫХ ДОПЛАТ",
    title: "Фиксированный чек",
    text: "Цена в договоре окончательная. Если таможенные пошлины изменятся в процессе доставки — мы берем эти издержки на себя.",
    ref: "→ раздел 3 договора «Стоимость и порядок расчетов»",
  },
  {
    big: "140",
    tag: "ПУНКТОВ ПРОВЕРКИ",
    title: "Технический аудит",
    text: "Каждый автомобиль проходит 140 пунктов проверки независимым экспертом перед покупкой. Если находится скрытый дефект — мы отказываемся от лота и ищем следующий.",
    ref: "→ приложение 2 к договору «Регламент проверки»",
  },
];

export function ThreeGuarantees() {
  return (
    <section className="px-[6vw] pb-20 md:px-[5vw] md:pb-30">
      <StaggerGroup className="border-b border-ink/25">
        {ROWS.map((r) => (
          <StaggerItem
            key={r.tag}
            className="flex flex-col items-start gap-4 border-t border-ink/25 px-0.5 py-8 md:grid md:grid-cols-[220px_280px_1fr] md:items-start md:gap-10 md:px-2 md:py-11"
          >
            <div className="flex flex-col gap-1.5">
              <div className="font-display text-[64px] leading-none font-semibold text-ink">
                {r.big}
              </div>
              <div className="font-mono text-[11px] tracking-[0.08em] text-ink-55">
                {r.tag}
              </div>
            </div>
            <div className="pt-2 font-display text-2xl font-medium text-ink">
              {r.title}
            </div>
            <div className="flex max-w-[620px] flex-col gap-3 pt-2">
              <p className="m-0 text-[17px] leading-[1.65] text-ink-38">
                {r.text}
              </p>
              <div className="font-mono text-xs tracking-[0.06em] text-accent">
                {r.ref}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
