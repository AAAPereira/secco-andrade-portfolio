// src/app/timeline/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { timelineData, textoHabilidadesItem } from "@/app/timeline/texto_habilidades";
import { TemaProvider } from "@/app/components/TemaProvider";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";


const audioMap = {
  "1993": "/media/audios/profissional/sweet-caroline.mp3",
  "1995": "/media/audios/profissional/if-i-got-jesus.mp3",
  "1997": "/media/audios/profissional/always-on-my-mind.mp3",
  "2000": "/media/audios/profissional/gods-country.mp3",
  "2001": "/media/audios/profissional/just-breathe.mp3",
  "2002": "/media/audios/profissional/kenny-rogers.mp3",
  "2003": "/media/audios/profissional/baby-what-you-want-me-to-do.mp3",
  "2004": "/media/audios/profissional/hallelujah.mp3",
  "2006": "/media/audios/profissional/sing-me-back-home.mp3",
  "2011": "/media/audios/profissional/hungry-eyes.mp3",
  "2014": "/media/audios/profissional/riding-home-to-you.mp3",
  "2022": "/media/audios/profissional/hes-my-brother.mp3",
  "2024": "/media/audios/profissional/this-body-of-mine.mp3",
};

const TimelineDisplay = () => {
  const [TemaHabilidades, setTemaHabilidades] = useState("2024");
  const [selectedData, setSelectedData] = useState<textoHabilidadesItem | null>(null);
  const [loading, setLoading] = useState(true);
  const { idioma } = useIdioma();
  const router = useRouter();

  useEffect(() => {
    const data = timelineData.find(item => item.ano === TemaHabilidades);
    setSelectedData(data || null);
  }, [TemaHabilidades]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const renderList = (texto: string) => {
    return texto
      .split("✔️")
      .filter(Boolean)
      .map((item, idx) => (
        <li key={idx} className="mb-1 text-green-300">
          {item.trim()}
        </li>
      ));
  };

  // 🎧 Controle de áudio
  const handleYearClick = (ano: string) => {
    setTemaHabilidades(ano);
    const trilha = audioMap[ano as keyof typeof audioMap];

    if (trilha) {
      const audio = document.querySelector("audio") as HTMLAudioElement | null;
      if (audio) {
        audio.pause();
        audio.src = trilha;
        setTimeout(() => {
          if (audio.paused) {
            audio.play().catch((e) => {
              console.error("🚨 Erro ao tentar tocar o áudio:", e);
            });
          }
        }, 100);
      }
    }
  };

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
              src="/media/photos/icone-security.webp"
              alt="Logo da Segurança"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
              style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }}
            />
            <h1 className="text-xl text-green-400 font-bold text-theme-primary">Carregando Página Timeline...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <TemaProvider>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mx-auto mt-12">
        <div className="absolute col-span-2 left-80 mt-26 flex justify-center items-start">
          <Image
            src="/media/photos/andre-pereira-b.webp"
            alt="Foto de André Pereira"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[60px] md:w-[120px] lg:w-[180px] rounded-lg shadow-xl"
          />
        </div>
      </div>

        <div className="col-span-8 space-y-6">
        {/* 🎯 Linha da Timeline */}
        <div className="relative flex justify-center items-center">
          <div className="absolute top-0 -translate-y-1/2 w-[90%] h-1 bg-theme-primary neon-line z-0"></div>
          {timelineData.map((item) => (
            <div key={item.ano} className="relative z-10 flex flex-col items-center">
              <div className="w-1 h-8 bg-theme-primary" />
              <button
                onClick={() => handleYearClick(item.ano)}
                className={`timeline-ano ${
                  TemaHabilidades === item.ano ? "font-bold" : ""
                }`}
              >
                <h3 className="text-xl text-theme-accent font-bold">{item.ano}</h3>
              </button>
            </div>
          ))}
        </div>

       {/* 🎯 Conteúdo do Ano Selecionado */}
        <div className="col-span-2 space-y-6 mt-8">
          <AnimatePresence mode="wait">
            {selectedData && (
              <motion.div
                key={selectedData.ano}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative text-theme-accent px-14 max-w-2xl mx-auto z-50 text-left space-y-6 max-h-[65vh] overflow-y-auto custom-scroll"
              >
              <h2 className="text-2xl font-bold text-theme-accent text-center mb-4">
                {idioma === "pt"
                  ? `${selectedData.ano} - ${selectedData.titulo}`
                  : `${selectedData.ano} - ${selectedData.translations.EN.titulo}`}
              </h2>

                <div>
                  <p className="text-red-400 font-bold">{idioma === 'pt' ? 'Tecnologias:' : 'Technologies:'}</p>
                  <ul className="list-disc list-inside text-white">
                    {(idioma === 'pt' ? selectedData.tecnologias : selectedData.translations.EN.tecnologias)
                      .split('✔️')
                      .filter(Boolean)
                      .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                  </ul>
                </div>

                <div>
                  <p className="text-yellow-400 font-bold">{idioma === 'pt' ? 'Habilidades:' : 'Skills:'}</p>
                  <ul className="list-disc list-inside text-white">
                    {(idioma === 'pt' ? selectedData.habilidades : selectedData.translations.EN.habilidades)
                      .split('✔️')
                      .filter(Boolean)
                      .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                  </ul>
                </div>

                <div>
                  <p className="text-purple-400 font-bold">{idioma === 'pt' ? 'Impacto:' : 'Impact:'}</p>
                  <ul className="list-disc list-inside text-white">
                    {(idioma === 'pt' ? selectedData.impacto : selectedData.translations.EN.impacto)
                      .split('✔️')
                      .filter(Boolean)
                      .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </TemaProvider>
  );
};

export default TimelineDisplay;
