// src/app/resume-skill/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textoResumoSkill } from "@/app/resume-skill/texto_resumo_skill";
import "@/app/backgrounds/backgrounds.css";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import { useRouter } from "next/navigation";

const audioMap = {
  pt: "/media/audios/pessoal/Stand By Me.mp3",
  en: "/media/audios/pessoal/A Thousand Years.mp3",
};

export default function ResumeSkillPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const { idioma } = useIdioma();
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);


  // ⏳ Carregamento simulado
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  // 👋 Saudação com voz bilíngue
  useEffect(() => {
    const saudacaoExecutada = sessionStorage.getItem("saudacaoResumeSkillExecutada");
    const storedFirstName = sessionStorage.getItem("firstName");

    if ("speechSynthesis" in window && !saudacaoExecutada) {
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
            <Image src="/media/photos/icone-security.webp"
            alt="Logo da Segurança"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
            style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />

            <h1 className="text-xl text-theme-primary font-bold">Carregando Resumo Skill...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full mx-auto">

      {/* 📸 Coluna da Imagem */}
      <div className="col-span-12 lg:col-span-4 flex justify-end items-start mt-20">
        <Image
          src="/media/photos/andre-pereira-a.webp"
          alt="Foto de André Pereira"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-16 md:w-24 lg:w-40 h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* 📝 Coluna do Texto */}
      <div className="col-span-12 lg:col-span-4 flex items-start justify-center mt-12">
        <div
          className="max-w-3xl max-h-[65vh] overflow-y-auto p-4 text-white text-justify leading-relaxed custom-scroll"
          dangerouslySetInnerHTML={{ __html: textoResumoSkill[idioma] }}
        />
      </div>
    </div>
  );
}