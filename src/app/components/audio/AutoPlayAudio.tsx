"use client";

import { useEffect } from "react";
import { useAudio } from "@/app/contexts/AudioProvider";

interface AutoPlayAudioProps {
  src: string;
}

export const AutoPlayAudio = ({ src }: AutoPlayAudioProps) => {
  const { updateAudioSource } = useAudio();

  useEffect(() => {
    if (src) {
      updateAudioSource(src);
    }
  }, [src, updateAudioSource]);

  return null; // Nada visual, só controla o som
};

export default AutoPlayAudio;
