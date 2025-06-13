// File: components/RootLayout.tsx

import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV DIGITAL - André Pereira",
  description: "Currículo digital interativo de André Pereira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="dark light">
      <body className={`font-[var(--font-inter)] ${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
