"use client";

import { useRouter, usePathname } from "next/navigation";
import { useAudio } from "@/app/contexts/AudioProvider";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import "@/app/backgrounds/backgrounds.css";
import { Music, VolumeX, ArrowLeft, ArrowRight } from "lucide-react";

const audioMap = {
  pt: "/media/audios/profissional/stand-by-me.mp3",
  en: "/media/audios/profissional/a-thousand-years.mp3",
};

interface NavigationControlsProps {
  showAudio?: boolean;
  showLanguage?: boolean;
  next: string;
  prev: string;
}

export default function NavigationControls({
  showAudio = false,
  showLanguage = false,
  next,
  prev,
}: NavigationControlsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { idioma, setIdioma } = useIdioma();
  const { isPlaying, toggleAudio, updateAudioSource } = useAudio();

  const handleIdiomaChange = () => {
    const novoIdioma = idioma === "pt" ? "en" : "pt";
    setIdioma(novoIdioma);

    const trilha = audioMap[novoIdioma];
    if (trilha) {
      updateAudioSource(trilha);
      toggleAudio();
    }
  };

  const showPrev = [
    "/timeline",
    "/profissional",
    "/resume-skill",
    "/skill-completo",
    "/certificados",
    "/estatisticas",
    "/visao-macro",
    "/sobre",
  ].includes(pathname);

  const showNext = [
    "/timeline",
    "/sobre",
    "/profissional",
    "/resume-skill",
    "/skill-completo",
    "/certificados",
    "/estatisticas",
    "/visao-macro",
    "/sobre",
  ].includes(pathname);

  return (
    <>
      {/* ← Voltar */}
      {showPrev && (
        <div className="fixed top-34 left-8 z-50">
          <button
            className="toggle-mode bg-theme-primary rounded-full px-4 p-2 hover:scale-105 transition"
            onClick={() => router.push(prev)}
          >
            <ArrowLeft className="w-7 h-7" />
          </button>
        </div>
      )}

      {/* → Avançar */}
      {showNext && (
        <div className="fixed top-34 right-8 z-50 ">
          <button
            className="toggle-mode bg-theme-primary rounded-full px-4 p-2 hover:scale-105 transition"
            onClick={() => router.push(next)}
          >
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      )}

      {/* 🌐 Botão PT/EN */}
      {showLanguage && (
        <div className="fixed top-56 right-24 z-50">
          <button
            onClick={handleIdiomaChange}
            className="toggle-mode bg-theme-primary rounded-full px-4 py-2 hover:scale-105 transition"
          >
            {idioma === "pt" ? "EN" : "PT"}
          </button>
        </div>
      )}

      {/* 🔊 Botão Áudio Manual */}
      {showAudio && (
        <div className="fixed top-56 right-8 z-50">
          <button
            onClick={toggleAudio}
            className=" toggle-mode bg-theme-primary rounded-full px-4 p-2 hover:scale-105 transition"
          >
            {isPlaying ? (
              <VolumeX className="w-8 h-8" />
            ) : (
              <Music className="w-8 h-8" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
