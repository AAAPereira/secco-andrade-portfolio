"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAudio } from "@/app/contexts/AudioProvider";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import textos from "@/app/profissional/texto_profissional";
import "@/app/backgrounds/backgrounds.css";

const audioMap = {
  azzatelecom2024: "/media/audios/profissional/amazing-grace.mp3",
  cti2022: "/media/audios/profissional/if-i-got-jesus.mp3",
  embratel2014: "/media/audios/profissional/home.mp3",
  tivit2011: "/media/audios/profissional/gods-country.mp3",
  interchange2006: "/media/audios/profissional/when-i-get-where-im-going.mp3",
  telecom2004: "/media/audios/profissional/relaxing-country.mp3",
  multinacional2003: "/media/audios/profissional/baby-what-you-want-me-to-do.mp3",
  Manutencao2002: "/media/audios/profissional/hallelujah.mp3",
  suporte2001: "/media/audios/profissional/sing-me-back-home.mp3",
  porteiro2001: "/media/audios/profissional/hungry-eyes.mp3",
  balaoinformatica2000: "/media/audios/profissional/riding-home-to-you.mp3",
  clt1997: "/media/audios/profissional/kenny-rogers.mp3",
  ensinar1995: "/media/audios/profissional/this-body-of-mine.mp3",
  tecnologia1993: "/media/audios/profissional/always-on-my-mind.mp3",
  onibus1990: "/media/audios/profissional/just-breathe.mp3",
  samelo1989: "/media/audios/profissional/livin-on-love.mp3",
  quartel1988: "/media/audios/profissional/hes-my-brother.mp3",
  futebol1985: "/media/audios/profissional/i-trust-in-jesus.mp3",
  placidio1984: "/media/audios/profissional/youve-lost-that-lovin-feelin.mp3",
  fixotec1982: "/media/audios/profissional/sweet-caroline.mp3",
};

export default function ProfissionalPage() {
  const { idioma } = useIdioma();
  const { updateAudioSource, toggleAudio } = useAudio();
  const [temaProfissional, setTemaProfissional] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailAutorizado, setEmailAutorizado] = useState(false);
  const router = useRouter();

  const temas = textos[idioma];

  // 👉 QUANDO CLICAR NO CARD → TOCA A MÚSICA
  const handleCardClick = (id: string) => {
      setTemaProfissional(id);
      const trilha = audioMap[id as keyof typeof audioMap];

      if (trilha) {
        updateAudioSource(trilha);

        setTimeout(() => {
          const audio = document.querySelector("audio");
          if (audio && audio.paused) {
            audio.play().catch((e) => {
              console.error("🚨 Erro ao tentar tocar o áudio:", e);
            });
          }
        }, 100);
      }
  };


  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email === "fernandre6973@gmail.com") {
      setEmailAutorizado(true);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
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
              src="/media/photos/icone-security.webp"
              alt="Logo da Segurança"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
              style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }}
            />
            <h1 className="text-xl text-theme-primary font-bold">
              Carregando Página Profissional...
            </h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full px-4 mt-12">

      {/* 🖼️ Coluna da Esquerda - Imagens */}
      <div className="col-span-3 space-y-4 mt-12">
        <AnimatePresence mode="wait">
          {temaProfissional && (() => {
            const temaSelecionado = temas.find(t => t.id === temaProfissional);
            if (!temaSelecionado) return null;
            return (
              <motion.div
                key={temaProfissional + "-imagens"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {temaSelecionado.imagens.map((img, index) => (
                  <div key={img} className="rounded-xl border border-theme-primary shadow-md">
                    <Image
                      src={img}
                      alt={`${temaSelecionado.titulo} ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      priority
                      className="w-[133px] md:w-[266px] lg:w-[400px] rounded-xl object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>

      {/* 📝 Coluna Central - Texto */}
      <div className="col-span-5 space-y-4">
        <AnimatePresence mode="wait">
          {temaProfissional && (
            <motion.div
              key={temaProfissional + "-texto"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {temas.filter(t => t.id === temaProfissional).map(t => (
                <div key={t.id} className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-theme-accent text-center">{t.titulo}</h2>
                  <div className="text-base text-justify leading-relaxed overflow-y-auto max-h-[65vh] px-2 custom-scroll">
                    {t.texto}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔥 Coluna Direita - Cards */}
      <div className="col-span-4 space-y-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-1">
          {temas.map((t) => (
            <motion.div
              key={t.id}
              onClick={() => handleCardClick(t.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gray-800 rounded-xl shadow-md p-2 text-center cursor-pointer hover:shadow-green-500/30 ${
                temaProfissional === t.id ? "border border-theme-primary" : ""
              }`}
            >
              <Image
                src={t.imagemCard}
                alt={t.tituloCard}
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-[42px] md:w-[84px] lg:w-[128px] rounded-xl w-full h-26 object-contain border border-theme-primary bg-white shadow-inner"
              />
              <h2 className="text-theme-accent font-bold text-sm">{t.tituloCard}</h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🎯 Botões Extras */}
      <div className="fixed top-78 right-8 flex flex-col gap-4 z-20">
        <button
          className="button-acessar-neon button-theme rounded text-sm text-white"
          onClick={() => router.push("/timeline")}
        >
          Timeline
        </button>
        {emailAutorizado && (
          <button
            className="button-acessar-neon button-theme rounded text-sm text-white"
            onClick={() => router.push("/estatisticas")}
          >
            Gráficos
          </button>
        )}
        <button
          className="button-acessar-neon button-theme rounded text-sm text-white"
          onClick={() => router.push("/certificados")}
        >
          Certificados
        </button>
      </div>
    </div>
  );
}
