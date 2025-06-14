// src/app/profissional/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AutoPlayAudio } from "@/app/components/audio/AutoPlayAudio";
import textos from "@/app/profissional/texto_profissional";
import { IdiomaProvider, useIdioma } from "@/app/components/idioma/IdiomaContext";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import "@/app/backgrounds/backgrounds.css";

const audioMap = {
  "azzatelecom2024": "/media/audios/profissional/Amazing Grace.mp3",
  "cti2022": "/media/audios/profissional/If I Got Jesus.mp3",
  "embratel2014": "/media/audios/profissional/Home.mp3",
  "tivit2011": "/media/audios/profissional/Gods Country.mp3",
  "interchange2006": "/media/audios/profissional/When I Get Where Im Going.mp3",
  "telecom2004": "/media/audios/profissional/Relaxing Country.mp3",
  "multinacional2003": "/media/audios/profissional/Baby What You Want Me To Do.mp3",
  "Manutencao2002": "/media/audios/profissional/Hallelujah.mp3",
  "suporte2001": "/media/audios/profissional/Sing Me Back Home.mp3",
  "porteiro2001": "/media/audios/profissional/Hungry Eyes.mp3",
  "balaoinformatica2000": "/media/audios/profissional/Riding home to you.mp3",
  "clt1997": "/media/audios/profissional/Kenny Rogers.mp3",
  "ensinar1995": "/media/audios/profissional/This Body of Mine.mp3",
  "tecnologia1993": "/media/audios/profissional/Always On My Mind.mp3",
  "onibus1990": "/media/audios/profissional/Just Breathe.mp3",
  "samelo1989": "/media/audios/profissional/Livin On Love.mp3",
  "quartel1988": "/media/audios/profissional/Hes My Brother.mp3",
  "futebol1985": "/media/audios/profissional/I Trust in Jesus.mp3",
  "placidio1984": "/media/audios/profissional/Youve Lost That Lovin Feelin.mp3",
  "fixotec1982": "/media/audios/profissional/Sweet Caroline.mp3"
};

function ConteudoTexto() {
  const { idioma, setIdioma } = useIdioma();
  const [temaProfissional, setTemaProfissional] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [emailAutorizado, setEmailAutorizado] = useState(false);
  const router = useRouter();

  const temas = textos[idioma];

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current && temaProfissional) {
      audioRef.current.pause();
      const audioEl = audioRef.current;
      audioEl.src = audioMap[temaProfissional as keyof typeof audioMap] || "";
      audioEl.play();
      setIsPlaying(true);
    }
  }, [temaProfissional]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email === "fernandre6973@gmail.com") {
      setEmailAutorizado(true);
    }
  }, []);

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
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
            <Image src="/media/photos/icone_security.png" alt="Logo Segurança" width={400} height={400} className="animate-pulse logo-neon mx-auto mb-4" />
            <h1 className="text-xl text-green-400 font-bold">Carregando Página Profissional...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] w-full px-4">

      {/* Coluna da Esquerda - Imagens */}
      <div className="col-span-3 space-y-4 mt-10">
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
                    <Image src={img} alt={`${temaSelecionado.titulo} ${index + 1}`} width={400} height={200} className="rounded-xl object-contain" />
                  </div>
                ))}
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>

      {/* Coluna Central - Texto */}
      <div className="col-span-5 space-y-4 mt-4">
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
                  <div className="text-base text-justify leading-relaxed overflow-y-auto max-h-[60vh] px-2 custom-scroll">
                    {t.texto}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Coluna Direita - Cards */}
      <div className="col-span-4 space-y-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-1">
          {temas.map((t) => (
            <motion.div
              key={t.id}
              onClick={() => setTemaProfissional(t.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" bg-gray-800 rounded-xl shadow-md p-2 text-center cursor-pointer hover:shadow-green-500/30"
            >
              <Image
                src={t.imagemCard}
                alt={t.tituloCard}
                width={128}
                height={128}
                className="rounded-xl w-full h-24 object-contain border border-theme-primary bg-white shadow-inner"
              />
              <h2 className="text-theme-accent font-bold text-sm">{t.tituloCard}</h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Botões de Navegação */}
      <div className="fixed top-4 right-23 flex gap-2 z-20">
        <button className="toggle-mode" onClick={() => router.push("/sobre")}><ArrowLeft className="w-8 h-8" /></button>
        <button className="toggle-mode" onClick={() => router.push("/timeline")}><ArrowRight className="w-8 h-8" /></button>
      </div>

      {/* Controles de Idioma e Música */}
      <audio ref={audioRef} />
      <div className="fixed top-32 right-8 flex gap-2 z-20">
        <button className="toggle-mode" onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>{idioma === "pt" ? "EN" : "PT"}</button>
        <button className="toggle-mode" onClick={handlePlay}>{isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}</button>
      </div>

      {/* Botões Extras */}
      <div className="fixed top-64 right-8 flex flex-col gap-4 z-20">
        <button className="button-acessar-neon button-theme rounded text-sm text-white" onClick={() => router.push("/timeline")}>Timeline</button>
        {emailAutorizado && (
          <button className="button-acessar-neon button-theme rounded text-sm text-white" onClick={() => router.push("/estatisticas")}>Gráficos</button>
        )}
        <button className="button-acessar-neon button-theme rounded text-sm text-white" onClick={() => router.push("/certificados")}>Certificados</button>
      </div>
    </div>
  );
}

export default function Profissional() {
  return (
    <IdiomaProvider>
      <ConteudoTexto />
    </IdiomaProvider>
  );
}
