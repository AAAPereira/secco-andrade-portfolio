//app/resume-skill/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AutoPlayAudio } from "@/app/components/audio/AutoPlayAudio";
import { textoResumoSkill } from "@/app/resume-skill/texto_resumo_skill";
import "@/app/backgrounds/backgrounds.css";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation'; // Importe o useRouter

const audioMap = {
  "pt": "/media/audios/pessoal/Stand By Me.mp3",
  "en": "/media/audios/pessoal/A Thousand Years.mp3",
};

export default function ResumeSkillPage() {
  const [temaSkill, setTemaSkill] = useState<string | null>(null);
  const [mode, setMode] = useState("default");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [idioma, setIdioma] = useState<"pt" | "en">("pt");
  const [firstName, setFirstName] = useState<string | null>(null); // Adicione o estado firstName
  const router = useRouter(); // Inicialize o router


  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause(); // Para a música anterior
      audio.src = audioMap[idioma];
      audio.load();
      audio.play();
      setIsPlaying(true);
    }
  }, [idioma]);
  
  

  useEffect(() => {
    // Simula um carregamento de 2 segundos
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milissegundos = 2 segundos

    // Limpa o timeout ao sair do componente
    return () => clearTimeout(timeout);
  }, []);


  // Adicione o useEffect para buscar o nome do usuário
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);


   if (loading) {
    return (
      <div className="grid grid-cols-12 max-w-screen-xl w-full mx-auto md:px-16 py-30">
      <div className="col-span-12 md:col-span-12 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Image src="/media/photos/icone_security.png" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto" }}style={{ filter: "drop-shadow(var(--logo-glow))" }}/>

          <h1 className="text-xl text-green-400 font-bold text-theme-primary">Carregando Resumo Skill...</h1>
        </motion.div>
      </div>
      </div>
    );
  }

  return (
    <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] w-full px-4">

        <div className="col-span-8 space-y-4 mt-18">

        {/* Coluna da Imagem (esquerda do texto) */}
        <div className="w-auto flex justify-center">
          <Image
            src="/media/photos/andre_pereira_a.png"
            alt="Foto de André Pereira"
            width={170}
            height={598}
            className="rounded-lg shadow-xl"
          />
        </div>

      <div className="fixed top-4 right-23 z-20 flex gap-2">
        <button className="toggle-mode border-theme-primary" onClick={() => window.location.href = '/profissional'}><ArrowLeft className="w-8 h-8" /></button>
        <button className="toggle-mode border-theme-primary" onClick={() => window.location.href = '/skill-completo'}><ArrowRight className="w-8 h-8" /></button>
      </div>

      <audio ref={audioRef} />
      <div className="fixed top-32 right-8 z-20 flex gap-2">
        <button className="toggle-mode border-theme-primary" onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>{idioma === "pt" ? "EN" : "PT"}</button>
        <button className="toggle-mode border-theme-primary" onClick={handlePlay}>{isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}</button>
      </div>

      <div
        className="fixed right-130 top-34  max-w-2xl max-h-[70vh] text-white overflow-y-auto p-24 custom-scroll"
        dangerouslySetInnerHTML={{ __html: textoResumoSkill[idioma] }}
      />

      </div>
    </div>
  );
}

