import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { ChannelsGrid } from "@/components/sections/contacts/ChannelsGrid";
import { OfficeMap } from "@/components/sections/contacts/OfficeMap";
import { RequisitesGrid } from "@/components/sections/contacts/RequisitesGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Контакты — SIGNATURE // IMPORT",
};

export default function ContactsPage() {
  return (
    <>
      <Header variant="solid" ctaLabel="Получить расчет" ctaHref="/order" />
      <PageHero
        eyebrow="КОНТАКТЫ"
        title="Мы на связи каждый день"
        description="Отвечаем в течение 5 минут в рабочее время — по телефону, в WhatsApp или Telegram. Как вам удобнее."
      />
      <ChannelsGrid />
      <OfficeMap />
      <RequisitesGrid />
      <Footer legalHref="/guarantees" />
    </>
  );
}
