import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { OrderConsultation } from "@/components/sections/order/OrderConsultation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Заказ автомобиля — SIGNATURE // IMPORT",
};

export default function OrderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="solid" ctaLabel="Связаться с нами" ctaHref="/contacts" />
      <OrderConsultation />
      <Footer legalHref="/guarantees" />
    </div>
  );
}
