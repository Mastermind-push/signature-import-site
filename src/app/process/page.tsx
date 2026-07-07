import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { ProcessHero, ProcessStepsList } from "@/components/sections/process/ProcessSteps";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Процесс заказа — SIGNATURE // IMPORT",
};

export default function ProcessPage() {
  return (
    <>
      <Header variant="solid" ctaLabel="Связаться с нами" ctaHref="/contacts" />
      <ProcessHero />
      <ProcessStepsList />
      <Footer legalHref="/guarantees" />
    </>
  );
}
