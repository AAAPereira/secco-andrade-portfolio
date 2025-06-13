//Page AutoPlayAudio.tsx

"use client";

import React, { createContext, useContext, useRef, useState, ReactNode } from "react";
import { Music, Square } from "lucide-react"; // Ícones

// Contexto de Áudio
type AudioContextType = {
  isPlaying: boolean;
  toggleAudio: () => void;
  updateAudioSource: (src: string) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSource, setAudioSourceState] = useState<string>("");

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
      setIsPlaying(false);
    } else {
      if (audioSource) {
        audioRef.current?.play().catch(() => setIsPlaying(false));
        setIsPlaying(true);
      }
    }
  };

  const updateAudioSource = (src: string) => {
    setAudioSourceState(src);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (src) audioRef.current.src = src;
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, updateAudioSource }}>
      {children}
      {audioSource ? <audio ref={audioRef} src={audioSource} hidden onError={(e) => console.error("Erro ao carregar áudio", e)} /> : null}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

// Componente de Controle
export const AutoPlayAudio = ({ src }: { src: string }) => {
  const { isPlaying, toggleAudio, updateAudioSource } = useAudio();

  React.useEffect(() => {
    if (src) updateAudioSource(src);
  }, [src]);

  return (
    <div className="fixed top-32 right-4 z-50 flex items-center gap-4 bg-gray-800 bg-opacity-80 px-3 py-2 rounded-lg shadow-md">
      <button className="toggle-mode" onClick={toggleAudio} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
        {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}
      </button>
    </div>
  );
}; // 👈 FECHA A FUNÇÃO AQUI

export default AutoPlayAudio;