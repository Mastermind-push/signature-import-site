import { PageHero } from "@/components/layout/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const STEPS = [
  {
    num: "01",
    t: "Конфигурация и подбор",
    days: "1–5 дней",
    d: "Находим автомобиль через доверенных партнеров в Европе, Азии и США. Предоставляем детальный видеоотчет и технический отчет из автосалона за рубежом — решение принимаете вы.",
    note: "Смотрим только проверенные площадки: официальные дилеры, аукционы с историей, партнерские салоны. Никаких «серых» лотов.",
    docs: ["Спецификация и смета", "Видеоотчет из салона", "Технический отчет эксперта"],
  },
  {
    num: "02",
    t: "Юридическая фиксация",
    days: "1 день",
    d: "Официальный договор с четко прописанной финальной стоимостью в рублях. Никаких скрытых доплат за логистику в процессе.",
    note: "Если таможенные пошлины изменятся в пути — издержки на нашей стороне. Это пункт договора, а не обещание.",
    docs: ["Договор с финальной ценой в ₽", "График этапов и платежей"],
  },
  {
    num: "03",
    t: "Безопасная оплата",
    days: "1–2 дня",
    d: "Оплата через аккредитив или партнерские банки. Ваши деньги защищены банком до момента прохождения границы.",
    note: "Банк раскрывает аккредитив только при подтверждении выкупа и отгрузки автомобиля. Мы не касаемся денег раньше.",
    docs: ["Аккредитив банка-партнера", "Подтверждение выкупа автомобиля"],
  },
  {
    num: "04",
    t: "Спец-логистика и таможня",
    days: "14–30 дней",
    d: "Транспортировка в закрытых автовозах. Полная таможенная очистка «под ключ» с получением ЭПТС.",
    note: "На каждом этапе пути — статус в Telegram: выкуп, порт, граница, СВХ, выпуск. Вы всегда знаете, где машина.",
    docs: ["Трек-статусы в Telegram", "ЭПТС и таможенные документы"],
  },
  {
    num: "05",
    t: "Выдача",
    days: "1–5 дней",
    d: "Доставка автомобиля к вашему дому — в любую точку России.",
    note: "Перед передачей — финальная проверка и подготовка. Принимаете машину по акту, со всеми документами.",
    docs: ["Доставка до двери", "Акт приема-передачи"],
  },
];

export function ProcessHero() {
  return (
    <PageHero
      title="От идеи до выдачи ключей"
      description={
        <>
          Пять шагов, каждый закреплен в договоре — со сроком и документами,
          которые вы получаете на руки. Средний срок от заявки до выдачи:{" "}
          <span className="font-medium text-ink">25–40 дней</span>.
        </>
      }
    />
  );
}

export function ProcessStepsList() {
  return (
    <section className="px-[6vw] pb-20 md:px-[5vw] md:pb-32.5">
      <StaggerGroup className="border-b border-ink/25">
        {STEPS.map((s) => (
          <StaggerItem
            key={s.num}
            className="flex flex-col gap-5 border-t border-ink/25 px-0.5 py-8 transition-colors duration-[250ms] hover:bg-[oklch(96.5%_0.004_70)] md:grid md:grid-cols-[110px_1fr_340px] md:items-start md:gap-11 md:px-2 md:py-13"
          >
            <div className="font-display text-[56px] leading-none font-semibold text-accent">
              {s.num}
            </div>
            <div className="flex flex-col gap-3.5">
              <h2 className="m-0 font-display text-[clamp(24px,2.2vw,34px)] leading-[1.1] font-medium text-ink">
                {s.t}
              </h2>
              <p className="m-0 max-w-[560px] text-base leading-[1.7] text-ink-38">
                {s.d}
              </p>
              <div className="max-w-[560px] text-sm leading-[1.6] text-ink-55">
                {s.note}
              </div>
            </div>
            <div className="flex flex-col gap-5 border-t border-border pt-5 md:gap-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <div className="flex flex-col gap-1">
                <div className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
                  СРОК
                </div>
                <div className="font-display text-[22px] font-medium text-ink">
                  {s.days}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
                  ВЫ ПОЛУЧАЕТЕ
                </div>
                {s.docs.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-baseline gap-2.5 text-sm leading-[1.5] text-ink-30"
                  >
                    <span className="text-accent">—</span>
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
