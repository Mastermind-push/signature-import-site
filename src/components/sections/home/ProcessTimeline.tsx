"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    t: "Конфигурация и подбор",
    d: "Находим автомобиль через доверенных партнеров в Европе, Азии и США. Предоставляем детальный видеоотчет и технический отчет из автосалона за рубежом — решение принимаете вы.",
  },
  {
    t: "Юридическая фиксация",
    d: "Официальный договор с четко прописанной финальной стоимостью в рублях. Никаких скрытых доплат за логистику в процессе.",
  },
  {
    t: "Безопасная оплата",
    d: "Оплата через аккредитив или партнерские банки. Ваши деньги защищены банком до момента прохождения границы.",
  },
  {
    t: "Спец-логистика и таможня",
    d: "Транспортировка в закрытых автовозах. Полная таможенная очистка «под ключ» с получением ЭПТС.",
  },
  { t: "Выдача", d: "Доставка автомобиля к вашему дому — в любую точку России." },
];

const RADIUS = 62;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ProcessTimeline() {
  const [step, setStep] = useState(0);
  const dash = ((step + 1) / STEPS.length) * CIRCUMFERENCE;

  return (
    <section
      id="process"
      className="flex flex-col gap-11 bg-bg px-[6vw] py-20 md:grid md:grid-cols-[1fr_1.1fr] md:gap-18 md:px-[5vw] md:py-35 md:items-start"
    >
      <Reveal className="static flex flex-col gap-6 md:sticky md:top-27.5 md:gap-9">
        <div className="text-xs font-medium tracking-[0.24em] text-accent">
          ПРОЦЕСС
        </div>
        <h2 className="m-0 max-w-[11em] text-balance font-display text-[clamp(36px,3.6vw,58px)] leading-[1.05] font-semibold text-ink">
          От идеи до выдачи ключей
        </h2>
        <div className="flex items-center gap-7">
          <div className="relative h-[150px] w-[150px]">
            <svg width="150" height="150" viewBox="0 0 150 150" className="block">
              <circle
                cx="75"
                cy="75"
                r={RADIUS}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1.5"
              />
              <circle
                cx="75"
                cy="75"
                r={RADIUS}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2.5"
                strokeDasharray={`${dash.toFixed(1)} ${CIRCUMFERENCE.toFixed(1)}`}
                strokeLinecap="butt"
                transform="rotate(-90 75 75)"
                className="transition-[stroke-dasharray] duration-500 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-display text-[34px] font-semibold text-ink">
              0{step + 1}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="font-mono text-[11px] tracking-[0.1em] text-ink-55">
              ШАГ 0{step + 1} / 05
            </div>
            <div className="font-sans text-[17px] font-medium text-ink">
              {STEPS[step].t}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col border-b border-border">
        {STEPS.map((s, i) => {
          const active = i === step;
          return (
            <div
              key={s.t}
              onClick={() => setStep(i)}
              className="flex cursor-pointer items-start gap-7 border-t border-border px-2 py-7.5 transition-colors duration-[250ms] hover:bg-[oklch(96.5%_0.004_70)]"
            >
              <div
                className={`w-12 flex-none pt-1 font-display text-xl font-semibold transition-colors duration-300 ${
                  active ? "text-accent" : "text-[oklch(75%_0.006_240)]"
                }`}
              >
                0{i + 1}
              </div>
              <div className="flex flex-1 flex-col">
                <div className="font-display text-[26px] leading-[1.15] font-medium text-ink">
                  {s.t}
                </div>
                <div
                  className="max-w-[560px] overflow-hidden font-sans text-base leading-[1.65] text-ink-40 transition-[max-height,opacity,margin-top] duration-[450ms] ease-in-out"
                  style={
                    active
                      ? { maxHeight: 220, opacity: 1, marginTop: 12 }
                      : { maxHeight: 0, opacity: 0, marginTop: 0 }
                  }
                >
                  {s.d}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
