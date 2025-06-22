"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Square, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { detailedSkillsData, DetailedSkillItem } from "@/app/skill-completo/texto_skill_completo";
import { TemaProvider } from "@/app/components/TemaProvider";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import "@/app/backgrounds/backgrounds.css";

const audioMap = {
  "SEGURANÇA_1": "/media/audios/profissional/i-trust-in-jesus.mp3",
  "SEGURANÇA_2": "/media/audios/profissional/if-i-got-jesus.mp3",
  "SEGURANÇA_3": "/media/audios/profissional/livin-on-love.mp3",
  "INFRA_1": "/media/audios/profissional/gods-country.mp3",
  "INFRA_2": "/media/audios/profissional/just-breathe.mp3",
  "INFRA_3": "/media/audios/profissional/city-of-god.mp3",
  "TELECOM_1": "/media/audios/profissional/youve-lost-that-lovin-feelin.mp3",
  "TELECOM_2": "/media/audios/profissional/hallelujah.mp3",
  "TELECOM_3": "/media/audios/profissional/hes-my-brother.mp3",
};

const SkillDisplay: React.FC = () => {
  const [temaSkillCompleto, setTemaSkillCompleto] = useState("TELECOM_3");
  const [selectedData, setSelectedData] = useState<DetailedSkillItem | null>(null);
  const { idioma } = useIdioma();
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);


  // 🔥 Atualiza dados da skill selecionada
  useEffect(() => {
    const data = detailedSkillsData.find((item) => item.ano === temaSkillCompleto);
    setSelectedData(data || null);
  }, [temaSkillCompleto]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
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
    setTemaSkillCompleto(ano);
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

  // 🔥 Saudação bilíngue
  useEffect(() => {
    const saudacaoExecutada = sessionStorage.getItem("saudacaoSkillCompletoExecutada");
    const storedFirstName = sessionStorage.getItem("firstName");

    if ("speechSynthesis" in window && !saudacaoExecutada) {
      const hora = new Date().getHours();
      const nome = storedFirstName?.split("@")[0];
      const nomeFormatado = nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "visitante";

      let saudacaoPt = `Esta é a página de habilidades completa. Aqui você terá uma visão aprofundada das experiências que André Pereira acumulou ao longo de mais de 15 anos de trajetória profissional. Explore as seções de Segurança, Infraestrutura e Telecom clicando em cada uma delas. Boa leitura e muito obrigado pela visita, ${nomeFormatado}!`;

      let saudacaoEn = `This is the complete skills page. Here, you'll find an in-depth overview of the experiences André Pereira has accumulated over more than 15 years of professional work. Explore the sections on Security, Infrastructure, and Telecom by clicking on each one. Enjoy the read, and thank you for your visit, ${nomeFormatado}!`;

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

      const utter = new SpeechSynthesisUtterance(`${saudacaoPt} ${saudacaoEn}`);
      utter.lang = "pt-BR";
      utter.rate = 0.95;
      utter.pitch = 1.1;

      window.speechSynthesis.speak(utter);
      sessionStorage.setItem("saudacaoSkillCompletoExecutada", "true");
    }
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
            <Image src="/media/photos/icone-security.webp"
            alt="Logo da Segurança"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
            style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />

            <h1 className="text-xl text-theme-primary font-bold">Carregando Skill Completo...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <TemaProvider>
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mx-auto mt-14">
           <div className="absolute left-58 col-span-2 flex justify-center items-start mt-28">
                <Image src="/media/photos/andrade-pereira.webp"
                alt="Foto de André Pereira"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-[80px] md:w-[160px] lg:w-[240px] rounded-lg shadow-xl"/>
           </div>
     </div>

     <div className="col-span-8 space-y-4">
          <div className="relative flex justify-center items-center">
            <div className="absolute top-0 -translate-y-1/2 w-[90%] h-1 bg-theme-primary neon-line z-0"></div>
            {detailedSkillsData.map((item) => (
              <div key={item.ano} className="relative z-10 flex flex-col items-center">
                <div className="w-1 h-8 bg-theme-primary"></div>
                <button
                  onClick={() => handleYearClick(item.ano)}
                  className={`timeline-ano text-theme-accent focus:outline-none ${temaSkillCompleto === item.ano ? "font-bold" : ""}`}>
                  <h3 className="text-gl text-theme-accent font-bold text-center">{item.ano}</h3>
                </button>
              </div>
            ))}
          </div>

          <div className="col-span-2 space-y-4">
            <AnimatePresence mode="wait">
              {selectedData && (
                <motion.div
                  key={selectedData.ano}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                    className="text-theme-accent px-8 py-6 max-w-2xl mx-auto text-left space-y-6 max-h-[65vh] overflow-y-auto custom-scroll"
                >
              <h2 className="text-2xl font-bold text-theme-accent text-center">
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

export default SkillDisplay;
