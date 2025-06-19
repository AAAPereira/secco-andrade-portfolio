"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Square, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { detailedSkillsData, DetailedSkillItem } from "@/app/skill-completo/texto_skill_completo";
import { TemaProvider } from "@/app/components/TemaProvider";
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
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);

  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  // 🔥 Carrega idioma
  useEffect(() => {
    const idiomaSalvo = localStorage.getItem("idioma") || "pt";
    setLanguage(idiomaSalvo as "pt" | "en");
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    localStorage.setItem("idioma", newLang);
  };

  // 🔥 Atualiza dados da skill selecionada
  useEffect(() => {
    const data = detailedSkillsData.find((item) => item.ano === temaSkillCompleto);
    setSelectedData(data || null);
  }, [temaSkillCompleto]);

  // 🔥 Controle de áudio
  useEffect(() => {
    if (audioRef.current && temaSkillCompleto) {
      audioRef.current.pause();
      const audioEl = audioRef.current;
      audioEl.src = audioMap[temaSkillCompleto as keyof typeof audioMap] || "";
      audioEl.play();
      setIsPlaying(true);
    }
  }, [temaSkillCompleto]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      if (audio.readyState >= 2) {
        audio.play().then(() => setIsPlaying(true));
      } else {
        const onCanPlay = () => {
          audio.removeEventListener("canplaythrough", onCanPlay);
          audio.play().then(() => setIsPlaying(true));
        };
        audio.addEventListener("canplaythrough", onCanPlay);
        audio.load();
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);

  const renderList = (text: string) => {
    return text.split("✔️").filter(Boolean).map((item, index) => (
      <li key={index} className="mb-1 text-green-300">{item.trim()}</li>
    ));
  };

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
            <Image src="/media/photos/icone-security.webp" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />
            <h1 className="text-xl text-theme-primary font-bold">Carregando Skill Completo...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <TemaProvider>
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mx-auto">
           <div className="absolute left-40 col-span-2 flex justify-center items-start mt-32">
                <Image src="/media/photos/andrade-pereira.webp" alt="Foto de André Pereira" width={240} height={660}  className="rounded-lg shadow-xl"/>
           </div>
     </div>

        <div className="col-span-10 space-y-4 mt-6">
          <div className="relative flex justify-center items-center">
            <div className="absolute top-0 -translate-y-1/2 w-[105%] h-1 bg-theme-primary neon-line z-0"></div>
            {detailedSkillsData.map((item) => (
              <div key={item.ano} className="relative z-10 flex flex-col items-center">
                <div className="w-1 h-8 bg-theme-primary"></div>
                <button
                  onClick={() => setTemaSkillCompleto(item.ano)}
                  className={`timeline-ano text-theme-accent focus:outline-none mt-[-14px] ${temaSkillCompleto === item.ano ? "font-bold" : ""}`}>
                  <h3 className="text-gl text-theme-accent font-bold text-center">{item.ano}</h3>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <AnimatePresence mode="wait">
              {selectedData && (
                <motion.div
                  key={selectedData.ano}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                    className="text-theme-accent px-4 py-2 max-w-2xl mx-auto z-50 text-left space-y-6 max-h-[65vh] overflow-y-auto custom-scroll"
                >
                  <h3 className="text-xl text-theme-accent font-bold text-center">
                    {language === "pt" ? selectedData.titulo : selectedData.translations.EN.titulo}
                  </h3>

            <div>
                <p className="text-red-400 font-bold">{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</p>
                <ul className="list-disc list-inside text-white">
                  {(language === 'pt' ? selectedData.tecnologias : selectedData.translations.EN.tecnologias)
                    .split('✔️')
                    .filter(Boolean)
                    .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                </ul>
            </div>

            <div>
                <p className="text-yellow-400 font-bold">{language === 'pt' ? 'Habilidades:' : 'Skills:'}</p>
                <ul className="list-disc list-inside text-white">
                  {(language === 'pt' ? selectedData.habilidades : selectedData.translations.EN.habilidades)
                    .split('✔️')
                    .filter(Boolean)
                    .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                </ul>
            </div>

            <div>
                <p className="text-purple-400 font-bold">{language === 'pt' ? 'Impacto:' : 'Impact:'}</p>
                <ul className="list-disc list-inside text-white">
                  {(language === 'pt' ? selectedData.impacto : selectedData.translations.EN.impacto)
                    .split('✔️')
                    .filter(Boolean)
                    .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                </ul>
            </div>
            </motion.div>
            )}
          </AnimatePresence>
          </div>

          <audio ref={audioRef} hidden />

          <div className="fixed top-32 right-22 z-50 flex gap-4">
            <button className="toggle-mode" onClick={toggleLanguage}>
              {language === "pt" ? "EN" : "PT"}
            </button>
          </div>

          <div className="fixed top-32 right-8 z-50 flex gap-4">
            <button className="toggle-mode" onClick={handlePlay} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
              {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}
            </button>
          </div>
        </div>

        <div className="fixed top-4 right-22 z-20 flex gap-2">
          <button className="toggle-mode" onClick={() => router.push("/profissional")}>
            <ArrowLeft className="w-8 h-8" />
          </button>
        </div>


    </TemaProvider>
  );
};

export default SkillDisplay;
