// src/app/layout.tsx


import "./globals.css";
import type { Metadata } from "next";
import "@/app/backgrounds/backgrounds.css";
import LayoutWrapper from "./layout/LayoutWrapper";
import { logoutAndGoToRating } from "@/app/lib/logout";

export const metadata: Metadata = {
  title: "CV DIGITAL",
  description: "Sistema CV Digital Secco & Andrade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>
      <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
