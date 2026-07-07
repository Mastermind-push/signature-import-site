"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Faq = {
  t: string;
  text: string;
  bullets: { label: string; rest: string }[];
};

const FAQS: Faq[] = [
  {
    t: "Какая минимальная стоимость автомобиля для заказа?",
    text: "Мы работаем с автомобилями стоимостью от 3 млн рублей. На основе анализа рынка мы определили этот порог как экономически целесообразный для клиента: именно с этой отметки импорт под заказ начинает приносить ощутимую выгоду в цене и качестве по сравнению с покупкой аналогичной машины внутри РФ.",
    bullets: [],
  },
  {
    t: "Из каких стран вы доставляете автомобили?",
    text: "Наша партнерская сеть дилеров и закрытых площадок охватывает ключевые автомобильные рынки мира. Мы осуществляем прямые поставки из Германии и других стран Европы, Китая, Южной Кореи, Японии и США. Маршрут логистики подбирается индивидуально под каждый запрос, чтобы оптимизировать сроки и пошлины.",
    bullets: [],
  },
  {
    t: "Какие средние сроки доставки?",
    text: "В среднем транспортировка занимает от 21 до 40 дней. Точный срок зависит от удаленности региона покупки, выбранного типа транспорта (морские контейнеры, закрытые автовозы) и загруженности таможенных пунктов. Финальные сроки доставки фиксируются после согласования автомобиля.",
    bullets: [],
  },
  {
    t: "В чем главные преимущества импорта под заказ?",
    text: "",
    bullets: [
      {
        label: "Финансовая выгода: ",
        rest: "экономия может достигать до 30% от стоимости аналогичного автомобиля на внутреннем рынке России.",
      },
      {
        label: "Неограниченный выбор: ",
        rest: "доступ к уникальным заводским комплектациям, редким цветам кузова и опциям, которые никогда не поставлялись в РФ официально.",
      },
      {
        label: "Идеальное техническое состояние: ",
        rest: "автомобили за рубежом эксплуатировались в мягком климате, заправлялись качественным топливом и проходили строгое регламентное обслуживание у официальных дилеров, поэтому их ресурс существенно выше.",
      },
    ],
  },
  {
    t: "Почему покупка через вашу компанию абсолютно безопасна?",
    text: "Мы полностью исключаем риски для клиента на каждом этапе сделки:",
    bullets: [
      {
        label: "Многоэтапный аудит: ",
        rest: "наш эксперт на месте проводит детальную проверку автомобиля по множеству пунктов (проверка кузова, компьютерная диагностика, сверка оригинальности пробега). Вы получаете подробный видеоотчет и лично утверждаете автомобиль перед покупкой.",
      },
      {
        label: "100% Страхование: ",
        rest: "на протяжении всего пути — с момента выкупа за границей до передачи ключей в России — автомобиль застрахован на полную рыночную стоимость от любых повреждений.",
      },
      {
        label: "Юридическая чистота: ",
        rest: "все платежи прозрачны, а таможенная очистка проводится строго в соответствии с законодательством РФ. Вы получаете полностью готовый к постановке на учет автомобиль с полным пакетом документов.",
      },
    ],
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState(-1);
  const [hover, setHover] = useState(-1);

  return (
    <section className="bg-bg px-[6vw] pb-22.5 md:px-[5vw] md:pb-37.5">
      <Reveal className="mx-auto flex max-w-[900px] flex-col gap-5 pb-14 text-center">
        <div className="text-xs font-medium tracking-[0.24em] text-accent">
          FAQ
        </div>
        <h2 className="m-0 font-display text-[clamp(32px,3.2vw,52px)] leading-[1.08] font-semibold text-ink">
          Часто задаваемые вопросы
        </h2>
      </Reveal>

      <div className="mx-auto max-w-[900px] border-b border-border">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          const isHover = hover === i;
          const darken = isOpen || isHover;
          return (
            <div
              key={f.t}
              onClick={() => setOpen((s) => (s === i ? -1 : i))}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover((s) => (s === i ? -1 : s))}
              className="cursor-pointer border-t border-border px-1 py-7"
            >
              <div className="flex items-baseline justify-between gap-6">
                <div className="flex items-baseline gap-5">
                  <span
                    className={`w-5.5 flex-none font-mono text-xs tracking-[0.06em] transition-colors duration-300 md:w-8.5 ${
                      darken ? "text-accent" : "text-ink-60"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`font-display text-[clamp(17px,1.6vw,22px)] font-medium transition-colors duration-300 ${
                      darken ? "text-ink" : "text-ink-34"
                    }`}
                  >
                    {f.t}
                  </span>
                </div>
                <span
                  className={`flex-none font-sans text-2xl leading-none font-normal text-accent transition-transform duration-[250ms] ${
                    isHover ? "-translate-y-0.75" : "translate-y-0"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              <div
                className="ml-8 max-w-[720px] overflow-hidden transition-[max-height,opacity,margin-top] duration-[450ms] ease-in-out md:ml-13.5"
                style={
                  isOpen
                    ? { maxHeight: 900, opacity: 1, marginTop: 16 }
                    : { maxHeight: 0, opacity: 0, marginTop: 0 }
                }
              >
                {f.text && (
                  <p className="m-0 mb-3 text-base leading-[1.7] text-ink-38">
                    {f.text}
                  </p>
                )}
                {f.bullets.map((b) => (
                  <div
                    key={b.label}
                    className="flex gap-2.5 items-baseline py-1 text-base leading-[1.65] text-ink-38"
                  >
                    <span className="flex-none text-accent">—</span>
                    <span>
                      <strong className="font-semibold text-ink-25">
                        {b.label}
                      </strong>
                      {b.rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
