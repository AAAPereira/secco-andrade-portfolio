"use client";

import { createContext, useContext, useRef, useState, ReactNode } from "react";

type AudioContextType = {
  isPlaying: boolean;
  toggleAudio: () => void;
  updateAudioSource: (src: string) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSource, setAudioSource] = useState<string>("");

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const updateAudioSource = (src: string) => {
    setAudioSource(src);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = src;
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, updateAudioSource }}>
      {children}
      {audioSource && (
        <audio
          ref={audioRef}
          src={audioSource}
          hidden
          onError={(e) => console.error("Erro ao carregar áudio:", e)}
        />
      )}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio deve ser usado dentro de um AudioProvider");
  }
  return context;
};
