import { Hero } from "@/components/sections/home/Hero";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { CasesCarousel } from "@/components/sections/home/CasesCarousel";
import { GuaranteesTable } from "@/components/sections/home/GuaranteesTable";
import { OrderContact } from "@/components/sections/home/OrderContact";
import { FaqAccordion } from "@/components/sections/home/FaqAccordion";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessTimeline />
      <CasesCarousel />
      <GuaranteesTable />
      <OrderContact />
      <FaqAccordion />
      <Footer legalHref="#contacts" />
    </>
  );
}
