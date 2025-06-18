// app/timeline/page.tsx

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Square, ArrowLeft, ArrowRight } from 'lucide-react';
import { TemaProvider } from "@/app/components/TemaProvider";
import Head from "next/head";
import Image from "next/image";
import { AutoPlayAudio } from "@/app/components/audio/AutoPlayAudio";
import { useRouter } from 'next/navigation'; // Importe o useRouter
import { timelineData, textoHabilidadesItem } from "@/app/timeline/texto_habilidades";

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

// Definição da interface TimelineDisplayProps
// Se o componente não recebe props, pode ser uma interface vazia
interface TimelineDisplayProps {}

const TimelineDisplay: React.FC<TimelineDisplayProps> = () => {
  const [TemaHabilidades, setTemaHabilidades] = useState("2024");
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState<textoHabilidadesItem | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null); // Adicione o estado firstName
  const [mode, setMode] = useState("default");
  const [idioma, setIdioma] = useState<"pt" | "en">("pt");
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const router = useRouter(); // Inicialize o router

  const modeAudioRef = useRef<HTMLAudioElement>(null); // sons neon/classic
  const audioRef = useRef<HTMLAudioElement>(null); // God's Country

  useEffect(() => {
    const idiomaSalvo = localStorage.getItem('idioma') || 'pt';
    setLanguage(idiomaSalvo as 'pt' | 'en');
  }, []);

  useEffect(() => {
    const data = timelineData.find(item => item.ano === TemaHabilidades);
    setSelectedData(data || null);
  }, [TemaHabilidades]);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('idioma', newLanguage);
  };

const handlePlay = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  } else {
    if (audio.readyState >= 2) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Erro ao tentar tocar áudio:", error);
        setIsPlaying(false);
      });
    } else {
      const onCanPlay = () => {
        audio.removeEventListener("canplaythrough", onCanPlay);
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error("Erro ao tocar após carregamento:", error);
          setIsPlaying(false);
        });
      };
      audio.addEventListener("canplaythrough", onCanPlay);
    }
  }
};


  useEffect(() => {
    if (audioRef.current && TemaHabilidades) {
      audioRef.current.pause();
      const audioEl = audioRef.current;
      audioEl.src = audioMap[TemaHabilidades as keyof typeof audioMap] || "";
      audioEl.play();
      setIsPlaying(true);
    }
  }, [TemaHabilidades]);


   // Adicione o useEffect para buscar o nome do usuário
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);


  useEffect(() => {
    const saudacaoExecutada = sessionStorage.getItem("saudacaoTimelineExecutada");
    if ("speechSynthesis" in window && !saudacaoExecutada) {
      const hora = new Date().getHours();
      let saudacaoPt = "Olá! Esta é a página timeline, aqui você terá de forma resumida todo o trabalho realizado pelo André Pereira. Clique em cada ano e voce verá as tecnologias, habilidades e impactos positivos para as empresas. Obrigado.";
      let saudacaoEn = "Hello! This is the timeline page. Here you'll find a summarized overview of all the work done by André Pereira. Click on each year, and you'll see the technologies, skills, and positive impacts for the companies. Thank you.";

      if (hora >= 5 && hora < 12) {
        saudacaoPt = "Bom dia! Esta é a página timeline, aqui você terá de forma resumida todo o trabalho realizado pelo André Pereira. Clique em cada ano e voce verá as tecnologias, habilidades e impactos positivos para as empresas. Obrigado.";
        saudacaoEn = "Good morning! This is the timeline page. Here you'll find a summarized overview of all the work done by André Pereira. Click on each year, and you'll see the technologies, skills, and positive impacts for the companies. Thank you.";
      } else if (hora >= 12 && hora < 18) {
        saudacaoPt = "Boa tarde! Esta é a página timeline, aqui você terá de forma resumida todo o trabalho realizado pelo André Pereira. Clique em cada ano e voce verá as tecnologias, habilidades e impactos positivos para as empresas. Obrigado.";
        saudacaoEn = "Good afternoon! This is the timeline page. Here you'll find a summarized overview of all the work done by André Pereira. Click on each year, and you'll see the technologies, skills, and positive impacts for the companies. Thank you.";
      } else {
        saudacaoPt = "Boa noite! Esta é a página timeline, aqui você terá de forma resumida todo o trabalho realizado pelo André Pereira. Clique em cada ano e voce verá as tecnologias, habilidades e impactos positivos para as empresas. Obrigado.";
        saudacaoEn = "Good evening! This is the timeline page. Here you'll find a summarized overview of all the work done by André Pereira. Click on each year, and you'll see the technologies, skills, and positive impacts for the companies. Thank you.";
      }

      const utter = new SpeechSynthesisUtterance(idioma === "pt" ? saudacaoPt : saudacaoEn);
      utter.lang = idioma === "pt" ? "pt-BR" : "en-US";
      utter.rate = 0.98;
      utter.pitch = 1.1;
      window.speechSynthesis.speak(utter);
      sessionStorage.setItem("saudacaoTimelineExecutada", "true");
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

  const renderTimelineItem = (item: textoHabilidadesItem) => {
    const renderList = (text: string) => {
      const items = text.split('✔️').filter(Boolean).map(s => s.trim());
      return (
        <ul className="list-disc list-inside">
          {items.map((listItem, index) => (
            <li key={index} className="mb-1 text-green-300">{listItem}</li>
          ))}
        </ul>
      );
    };

    const currentLanguageKey = language.toUpperCase() as 'PT' | 'EN';

    return (
      <motion.div
        key={item.ano}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 mt-44 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-green-400">
          {item.translations[currentLanguageKey].ano} - {item.translations[currentLanguageKey].titulo}
        </h2>
        <div className="mb-8 text-1xl text-justify leading-relaxed px-10 overflow-auto max-h-[520px] custom-scroll">
          <p className="mb-4">
            <strong className="text-red-400">
              {currentLanguageKey === 'PT' ? 'Tecnologias:' : 'Technologies:'}
            </strong>
          </p>
          {renderList(item.translations[currentLanguageKey].tecnologias)}
          <p className="mb-4">
            <strong className="text-yellow-400">
              {currentLanguageKey === 'PT' ? 'Habilidades:' : 'Skills:'}
            </strong>
          </p>
          {renderList(item.translations[currentLanguageKey].habilidades)}
          <p>
            <strong className="text-purple-400">
              {currentLanguageKey === 'PT' ? 'Impacto:' : 'Impact:'}
            </strong>
          </p>
          {renderList(item.translations[currentLanguageKey].impacto)}
        </div>
      </motion.div>
    );
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
          <Image src="/media/photos/icone-security.webp" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto" , filter: "drop-shadow(var(--logo-glow))" }}/>

          <h1 className="text-xl text-green-400 font-bold text-theme-primary">Carregando Pagina Timeline...</h1>
        </motion.div>
      </div>
      </div>
    );
  }

  return (

  <TemaProvider>

     <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] w-full px-4">

        <div className="col-span-2 space-y-4">
             <div className="relative left-95 z-0 w-full mt-30">
                <Image src="/media/photos/andre-pereira-b.webp" alt="Foto de André Pereira" width={183} height={624}  className="rounded-lg shadow-xl"/>
             </div>
        </div>

     <div className="col-span-10 space-y-4 mt-6"> {/* Reduzido de mt-12 para aproximar mais o conteúdo */}
      <div className="relative flex justify-center items-center">
        <div className="absolute top-0 -translate-y-1/2 w-full h-1 bg-theme-primary neon-line z-0"></div>
        {timelineData.map((item) => (
          <div key={item.ano} className="relative z-10 flex flex-col items-center">
            <div className="w-1 h-8 bg-theme-primary"></div>
            <button
              onClick={() => setTemaHabilidades(item.ano)}
              className={`timeline-ano text-theme-accent transition-colors focus:outline-none mt-[-14px] ${TemaHabilidades === item.ano ? "font-bold" : ""}`}>
              <h3 className="text-xl text-theme-accent font-bold text-center">
              {item.ano}
              </h3>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-2"> {/* Reduzido ainda mais para colar mais perto da timeline */}
        <AnimatePresence mode="wait">
          { selectedData && (
            <motion.div
              key={selectedData.ano}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-theme-accent px-4  max-w-2xl mx-auto z-50 text-left space-y-6 max-h-[65vh] overflow-y-auto custom-scroll"
            >
              <h3 className="text-xl text-theme-accent font-bold text-center">
                {language === 'pt' ? selectedData.titulo : selectedData.translations.EN.titulo}
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

        <audio ref={modeAudioRef} hidden />
        <audio ref={audioRef} hidden />

      <div className="fixed top-32 right-22 z-50 flex gap-4">
        <button className="toggle-mode" onClick={toggleLanguage}>
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
        <audio ref={audioRef} hidden />
      <div className="fixed top-32 right-8 z-50 flex gap-4">
        <button className="toggle-mode" onClick={handlePlay} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
        {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}</button>
      </div>
    </div>

      <div className="fixed top-4 right-22 z-20 flex gap-1">
        <button className="toggle-mode" onClick={() => window.location.href = '/profissional'}><ArrowLeft className="w-8 h-8" /></button>
        <button className="toggle-mode" onClick={() => window.location.href = '/skill-completo'}><ArrowRight className="w-8 h-8" /></button>
       </div>


    </div>
   </TemaProvider>
  );

};

export default TimelineDisplay; // Exporta o componente