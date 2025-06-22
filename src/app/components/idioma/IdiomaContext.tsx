"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Idioma = "pt" | "en";

interface IdiomaContextProps {
  idioma: Idioma;
  setIdioma: (idioma: Idioma) => void;
}

const IdiomaContext = createContext<IdiomaContextProps | undefined>(undefined);

export const IdiomaProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdiomaState] = useState<Idioma>("pt");

  useEffect(() => {
    const storedIdioma = localStorage.getItem("idioma") as Idioma;
    if (storedIdioma) {
      setIdiomaState(storedIdioma);
    }
  }, []);

  const setIdioma = (novoIdioma: Idioma) => {
    setIdiomaState(novoIdioma);
    localStorage.setItem("idioma", novoIdioma);
  };

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = (): IdiomaContextProps => {
  const context = useContext(IdiomaContext);
  if (!context) {
    throw new Error("useIdioma deve ser usado dentro de um IdiomaProvider");
  }
  return context;
};
