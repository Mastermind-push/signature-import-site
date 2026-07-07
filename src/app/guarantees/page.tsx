import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PageHero } from "@/components/layout/PageHero";
import { ThreeGuarantees } from "@/components/sections/guarantees/ThreeGuarantees";
import { ContractClauses } from "@/components/sections/guarantees/ContractClauses";
import { DocumentsGrid } from "@/components/sections/guarantees/DocumentsGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Гарантии — SIGNATURE // IMPORT",
};

export default function GuaranteesPage() {
  return (
    <>
      <Header variant="solid" ctaLabel="Связаться с нами" ctaHref="/contacts" />
      <PageHero
        eyebrow="ГАРАНТИИ"
        title="Бескомпромиссные условия"
        description={
          <>
            Никаких «мы лучшие». Только обязательства, зафиксированные в
            договоре, — юридическим языком, понятным без юриста.
          </>
        }
      />
      <ThreeGuarantees />
      <ContractClauses />
      <DocumentsGrid />
      <Footer legalHref="/guarantees" />
    </>
  );
}
