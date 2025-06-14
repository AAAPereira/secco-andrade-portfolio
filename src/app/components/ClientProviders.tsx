// File: components/ClientProviders.tsx

"use client";

import { TemaProvider } from "@/app/components/TemaContext";
import dynamic from "next/dynamic";
import React from "react"; // Adicione esta importação para garantir que React.ReactNode seja reconhecido se não for o caso

// A importação dinâmica está correta aqui, o problema está no componente DarkModeToggle em si
const DarkModeToggle = dynamic(() => import("@/app/components/DarkModeToggle"), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TemaProvider>
      <DarkModeToggle />
      {children}
    </TemaProvider>
  );
}