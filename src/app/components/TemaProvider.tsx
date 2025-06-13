"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const TemaContext = createContext<any>(null);

export const TemaProvider = ({ children }: { children: React.ReactNode }) => {
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

export const useTema = () => useContext(TemaContext);
