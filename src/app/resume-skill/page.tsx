// src/app/resume-skill/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textoResumoSkill } from "@/app/resume-skill/texto_resumo_skill";
import "@/app/backgrounds/backgrounds.css";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const audioMap = {
  pt: "/media/audios/pessoal/Stand By Me.mp3",
  en: "/media/audios/pessoal/A Thousand Years.mp3",
};

export default function ResumeSkillPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [idioma, setIdioma] = useState<"pt" | "en">("pt");
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🎧 Controle do áudio
  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.warn);
      setIsPlaying(true);
    }
  };

  // 🎧 Troca de idioma troca também a música
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = audioMap[idioma];
      audio.load();
      audio.play().catch(console.warn);
      setIsPlaying(true);
    }
  }, [idioma]);

  // ⏳ Carregamento simulado
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  // 👋 Saudação com voz bilíngue
  useEffect(() => {
    const saudacaoExecutada = sessionStorage.getItem("saudacaoResumeSkillExecutada");
    const storedFirstName = sessionStorage.getItem("firstName");

    if (typeof window !== "undefined" && "speechSynthesis" in window && !saudacaoExecutada) {
      const hora = new Date().getHours();
      const nome = storedFirstName?.split("@")[0]?.replace(/^./, (c) => c.toUpperCase()) || "visitante";

      let saudacaoPt = `Você chegou na página de resumo das minhas habilidades. Aqui você verá de forma compacta toda a trajetória técnica de André Pereira. Explore com atenção, ${nome}.`;
      let saudacaoEn = `Welcome to the summary page of my skills. Here you will quickly understand the technical journey of André Pereira. Explore carefully, ${nome}.`;

      if (hora >= 5 && hora < 12) {
        saudacaoPt = `Bom dia! ${saudacaoPt}`;
        saudacaoEn = `Good morning! ${saudacaoEn}`;
      } else if (hora >= 12 && hora < 18) {
        saudacaoPt = `Boa tarde! ${saudacaoPt}`;
        saudacaoEn = `Good afternoon! ${saudacaoEn}`;
      } else {
        saudacaoPt = `Boa noite! ${saudacaoPt}`;
        saudacaoEn = `Good evening! ${saudacaoEn}`;
      }

      const utterPt = new SpeechSynthesisUtterance(saudacaoPt);
      utterPt.lang = "pt-BR";
      utterPt.rate = 0.95;
      utterPt.pitch = 1.1;

      const utterEn = new SpeechSynthesisUtterance(saudacaoEn);
      utterEn.lang = "en-US";
      utterEn.rate = 1.0;
      utterEn.pitch = 1.0;

      window.speechSynthesis.speak(utterPt);
      window.speechSynthesis.speak(utterEn);
      sessionStorage.setItem("saudacaoResumeSkillExecutada", "true");
    }
  }, []);

  // 🔥 Nome do usuário
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-12 max-w-screen-xl w-full mx-auto py-30">
        <div className="col-span-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Image
              src="/media/photos/icone_security.png"
              alt="Logo"
              width={400}
              height={400}
              priority
              className="mx-auto mb-4 animate-pulse logo-neon"
              style={{ filter: "drop-shadow(var(--logo-glow))" }}
            />
            <h1 className="text-xl text-green-400 font-bold">Carregando Resumo Skill...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] w-full px-4">

      {/* 📸 Coluna da Imagem */}
      <div className="col-span-3 flex justify-center items-start mt-24">
      <div className="absolute left-85">
        <Image
          src="/media/photos/andre_pereira_a.png"
          alt="Foto de André Pereira"
          width={170}
          height={598}
          className="rounded-lg shadow-xl"
        />
      </div>
      </div>

      {/* 📝 Coluna do Texto */}
      <div className="col-span-7 flex items-start justify-center">
        <div
          className="mt-20 max-w-2xl max-h-[65vh] overflow-y-auto p-4 text-white text-justify leading-relaxed custom-scroll"
          dangerouslySetInnerHTML={{ __html: textoResumoSkill[idioma] }}
        />
      </div>

      {/* 🎧 Controle de áudio e idioma */}
      <audio ref={audioRef} />
      <div className="fixed top-32 right-8 z-50 flex gap-4">
        <button className="toggle-mode border-theme-primary" onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>
          {idioma === "pt" ? "EN" : "PT"}
        </button>
        <button className="toggle-mode border-theme-primary" onClick={handlePlay} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
          {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}
        </button>
      </div>

      {/* 🔀 Navegação */}
      <div className="fixed top-4 right-24 z-50 flex gap-4">
        <button className="toggle-mode border-theme-primary" onClick={() => router.push('/profissional')}>
          <ArrowLeft className="w-8 h-8" />
        </button>
        <button className="toggle-mode border-theme-primary" onClick={() => router.push('/skill-completo')}>
          <ArrowRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
