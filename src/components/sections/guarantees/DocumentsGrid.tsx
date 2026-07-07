import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

const DOCS = [
  { tag: "PDF · 12 СТР.", title: "Публичная оферта" },
  { tag: "PDF · 18 СТР.", title: "Образец договора импорта" },
  { tag: "PDF · 6 СТР.", title: "Политика конфиденциальности" },
];

export function DocumentsGrid() {
  return (
    <section className="px-[6vw] pb-22.5 md:px-[5vw] md:pb-32.5">
      <Reveal className="pb-9 text-xs font-medium tracking-[0.24em] text-accent">
        ДОКУМЕНТЫ ДЛЯ ОЗНАКОМЛЕНИЯ
      </Reveal>
      <StaggerGroup className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5">
        {DOCS.map((doc) => (
          <StaggerItem
            key={doc.title}
            className="flex cursor-pointer flex-col gap-10 border border-border bg-white p-8 transition-colors duration-[250ms] hover:border-ink"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
                {doc.tag}
              </span>
              <span className="text-base text-accent">↓</span>
            </div>
            <div className="font-display text-[22px] font-medium text-ink">
              {doc.title}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
