'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Idioma = 'pt' | 'en';

interface IdiomaContextType {
  idioma: Idioma;
  setIdioma: (idioma: Idioma) => void;
}

const IdiomaContext = createContext<IdiomaContextType | undefined>(undefined);

export const IdiomaProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>('pt');

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

export const useIdioma = (): IdiomaContextType => {
  const context = useContext(IdiomaContext);
  if (!context) {
    throw new Error('useIdioma deve ser usado dentro de um IdiomaProvider');
  }
  return context;
};
