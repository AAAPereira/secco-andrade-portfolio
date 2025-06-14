// File: components/TemaContext.tsx
"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TemaContextProps {
  tema: string;
  toggleTema: () => void;
}

const TemaContext = createContext<TemaContextProps | null>(null);

export const TemaProvider = ({ children }: { children: ReactNode }) => {
  const [tema, setTema] = useState<string>("light");

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema") || "light";
    setTema(temaSalvo);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(temaSalvo);
  }, []);

  const toggleTema = () => {
    const novoTema = tema === "light" ? "dark" : "light";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(novoTema);
  };

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error("useTema must be used within a TemaProvider");
  }
  return context;
};




