export const WORDMARK = "SIGNATURE // IMPORT";

export const NAV_LINKS = [
  { label: "Заказ", href: "/order" },
  { label: "Процесс", href: "/process" },
  { label: "Гарантии", href: "/guarantees" },
  { label: "Контакты", href: "/contacts" },
] as const;

/** Footer is identical, byte for byte, on every page. */
export const FOOTER = {
  phone: "+7 495 000-00-00",
  phoneHref: "tel:+74950000000",
  supportHours: "Поддержка клиентов · ежедневно 9:00–21:00 (МСК)",
  telegramUrl: "https://t.me/signature_import",
  whatsappUrl: "https://wa.me/79990000000",
  copyright: "© 2026 SIGNATURE // IMPORT — импорт автомобилей под заказ",
};
