import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const COLUMNS = [
  {
    label: "ЮРИДИЧЕСКОЕ ЛИЦО",
    lines: ["ООО «СИГНАТЮР ИМПОРТ»", "119019, г. Москва,", "Гоголевский бульвар, 11, офис 305"],
  },
  {
    label: "РЕГИСТРАЦИОННЫЕ ДАННЫЕ",
    lines: ["ИНН 7700000000", "КПП 770001001", "ОГРН 1257700000000"],
  },
  {
    label: "БАНКОВСКИЕ РЕКВИЗИТЫ",
    lines: ["р/с 40702810000000000000", "АО «Банк-Партнер», г. Москва", "БИК 044525000"],
  },
];

export function RequisitesGrid() {
  return (
    <section className="px-[6vw] pb-22.5 md:px-[5vw] md:pb-32.5">
      <Reveal className="pb-9 text-xs font-medium tracking-[0.24em] text-accent">
        РЕКВИЗИТЫ
      </Reveal>
      <StaggerGroup className="flex flex-col gap-7 border-t border-b border-ink/25 px-0.5 py-8 md:grid md:grid-cols-3 md:gap-10 md:px-2 md:py-10">
        {COLUMNS.map((col) => (
          <StaggerItem key={col.label} className="flex flex-col gap-2">
            <div className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
              {col.label}
            </div>
            <div className="text-[15px] leading-[1.7] text-ink-25">
              {col.lines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < col.lines.length - 1 && <br />}
                </span>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
