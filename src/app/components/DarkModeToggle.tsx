// File: components/DarkModeToggle.tsx

"use client";

import React from 'react'; // Importar React é uma boa prática, mesmo que não seja explicitamente usado no JSX
import { useTema } from "@/app/components/TemaContext";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { tema, toggleTema } = useTema();

  return (
    <button
      onClick={toggleTema}
      // Use a classe que você preferir. Mantendo a segunda opção como exemplo.
      className={`fixed top-4 right-4 p-2 rounded-full transition-colors duration-300 ${tema === 'dark' ? 'bg-purple-800 text-white' : 'bg-white text-black'}`}
      title="Alternar tema"
    >
      {tema === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}