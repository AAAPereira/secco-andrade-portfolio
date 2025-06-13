"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { detailedSkillsData, DetailedSkillItem } from "@/app/skill-completo/texto_skill_completo"; // Assumindo '@/data' como alias ou caminho relativo correto
import "@/app/backgrounds/backgrounds.css";
import { TemaProvider } from "@/app/components/TemaProvider"; // Verifique se TemaProvider é realmente necessário aqui, ou se é um vestígio de outro código
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import { AutoPlayAudio } from "@/app/components/audio/AutoPlayAudio";
import { useRouter } from 'next/navigation';

const audioMap = {
  "SEGURANÇA_1": "/media/audios/profissional/Sweet Caroline.mp3",
  "SEGURANÇA_2": "/media/audios/profissional/If I Got Jesus.mp3",
  "SEGURANÇA_3": "/media/audios/profissional/Always On My Mind.mp3",
  "INFRA_1": "/media/audios/profissional/Gods Country.mp3",
  "INFRA_2": "/media/audios/profissional/Just Breathe.mp3",
  "INFRA_3": "/media/audios/profissional/Kenny Rogers.mp3",
  "TELECOM_1": "/media/audios/profissional/Baby What You Want Me To Do.mp3",
  "TELECOM_2": "/media/audios/profissional/Hallelujah.mp3",
  "TELECOM_3": "/media/audios/profissional/Hes My Brother.mp3",
};

// Definição da interface SkillDisplayProps
interface SkillDisplayProps {}

const SkillDisplay: React.FC<SkillDisplayProps> = () => {
  const [temaSkillCompleto, setTemaSkillCompleto] = useState(detailedSkillsData["TELECOM_2"]?.ano || null); // Inicializa com o primeiro ano ou null
  const [mode, setMode] = useState("default");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedData, setSelectedData] = useState<DetailedSkillItem | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();

  const modeAudioRef = useRef<HTMLAudioElement>(null); // sons neon/classic
  const audioRef = useRef<HTMLAudioElement>(null); // God's Country

  // Efeito para carregar o idioma salvo ao montar o componente
  useEffect(() => {
    const idiomaSalvo = localStorage.getItem('idioma') || 'pt';
    setLanguage(idiomaSalvo as 'pt' | 'en');
  }, []);

  // Efeito para atualizar selectedData quando temaSkillCompleto muda
  useEffect(() => {
    const data = detailedSkillsData.find(item => item.ano === temaSkillCompleto);
    setSelectedData(data || null);
  }, [temaSkillCompleto]); // CORREÇÃO: Capitalização corrigida aqui!

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
      audio.currentTime = 0; // Reinicia o áudio
      setIsPlaying(false);
    } else {
      // Verifica o estado de carregamento do áudio antes de tentar tocar
      if (audio.readyState >= 2) { // 2 = HAVE_CURRENT_DATA, 3 = HAVE_FUTURE_DATA, 4 = HAVE_ENOUGH_DATA
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error("Erro ao tentar tocar áudio:", error);
          setIsPlaying(false);
        });
      } else {
        // Se o áudio ainda não carregou, adiciona um listener para tocar quando estiver pronto
        const onCanPlay = () => {
          audio.removeEventListener("canplaythrough", onCanPlay); // Remove o listener após o primeiro play
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch((error) => {
            console.error("Erro ao tocar após carregamento:", error);
            setIsPlaying(false);
          });
        };
        audio.addEventListener("canplaythrough", onCanPlay);
        audio.load(); // Tenta carregar o áudio
      }
    }
  };

  // Efeito para controlar o áudio de fundo (baseado em modo, não em temaSkillCompleto)
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(); // Inicializa o elemento de áudio apenas uma vez
    }

    const newSrc = mode === "neon" ? "/media/sounds/corporate-motivational-theme.mp3" : "/media/sounds/corporate-motivational.mp3";

    if (audioRef.current.src !== window.location.origin + newSrc) { // Compara a URL completa
      audioRef.current.src = newSrc;
      audioRef.current.load();
    }

    if (mode !== "default" && !isMuted && !isPlaying) { // Só toca se não estiver no modo default, não mutado e não estiver tocando já
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Audio playback interrupted or failed:", error);
        });
      }
    } else if (isPlaying) {
        audioRef.current.play(); // Continua tocando se isPlaying for true e as condições de modo/mute permitirem
    }
    else {
      audioRef.current.pause();
    }

    // Limpeza: pausa o áudio ao desmontar o componente
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Limpa a fonte
      }
    };
  }, [mode, isMuted]); // Dependências: mode, isMuted. Não depende de isPlaying para evitar loop

  useEffect(() => {
    if (audioRef.current && temaSkillCompleto) {
      audioRef.current.pause();
      const audioEl = audioRef.current;
      audioEl.src = audioMap[temaSkillCompleto as keyof typeof audioMap] || "";
      audioEl.play();
      setIsPlaying(true);
    }
  }, [temaSkillCompleto]);

  // Efeito para a saudação de áudio
//Saudação portugues e ingles
useEffect(() => {
  const saudacaoExecutada = sessionStorage.getItem("saudacaoSkillCompletoExecutada");
  const storedFirstName = sessionStorage.getItem("firstName");

  if (
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    !saudacaoExecutada
  ) {
    const hora = new Date().getHours();
    const nome =
      storedFirstName
        ? storedFirstName.split("@")[0].replace(/^./, c => c.toUpperCase())
        : "visitante";

    let saudacaoPt = `Esta é a página de habilidades completa. Aqui você terá uma visão aprofundada das experiências que André Pereira acumulou ao longo de mais de 15 anos de trajetória profissional. Explore as seções de Segurança, Infraestrutura e Telecom clicando em cada uma delas. Boa leitura e muito obrigado pela visita, ${nome}!`;

    let saudacaoEn = `This is the complete skills page. Here, you'll find an in-depth overview of the experiences André Pereira has accumulated over more than 15 years of professional work. Explore the sections on Security, Infrastructure, and Telecom by clicking on each one. Enjoy the read, and thank you for your visit, ${nome}!`;

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
    utterPt.rate = 0.97;
    utterPt.pitch = 1.1;

    const utterEn = new SpeechSynthesisUtterance(saudacaoEn);
    utterEn.lang = "en-US";
    utterEn.rate = 1.0;
    utterEn.pitch = 1.0;

    window.speechSynthesis.speak(utterPt);
    window.speechSynthesis.speak(utterEn);
    sessionStorage.setItem("saudacaoSkillCompletoExecutada", "true");
  }
}, []);


  // Efeito para simular carregamento
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Efeito para buscar o nome do usuário
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);

  // CORREÇÃO: renderSkillCompletoItem agora tipado com DetailedSkillItem
  const renderSkillCompletoItem = (item: DetailedSkillItem) => {
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
        className="space-y-6 mt-2 text-center max-w-4xl mx-auto" // Reduzido mt-44 para evitar espaço excessivo
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
          <Image src="/media/photos/icone_security.png" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }}/>
          <h1 className="text-xl text-green-400 font-bold text-theme-primary">Carregando Skill Completo...</h1>
        </motion.div>
      </div>
      </div>
    );
  }

  return (
  <TemaProvider>
     <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] w-full px-4">

        <div className="col-span-2 space-y-4">
             <div className="relative left-80 z-0 w-full mt-30">
                <Image src="/media/photos/andrade_pereira.png" alt="Foto de André Pereira" width={243} height={624}  className="rounded-lg shadow-xl"/>
             </div>
        </div>

     <div className="col-span-10 space-y-4 mt-6">
      <div className="relative flex justify-center items-center">
        <div className="absolute top-0 -translate-y-1/2 w-[105%] h-1 bg-theme-primary neon-line z-0"></div>
        {detailedSkillsData.map((item) => ( // CORREÇÃO: Usando detailedSkillsData
          <div key={item.ano} className="relative z-10 flex flex-col items-center">
            <div className="w-1 h-8 bg-theme-primary"></div>
            <button
              onClick={() => setTemaSkillCompleto(item.ano)}
              className={`timeline-ano text-theme-accent transition-colors focus:outline-none mt-[-14px] ${temaSkillCompleto === item.ano ? "font-bold" : ""}`}>
              <h3 className="text-gl text-theme-accent font-bold text-center">
              {item.ano}
              </h3>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-2">
        <AnimatePresence mode="wait">
          { selectedData && (
            <motion.div
              key={selectedData.ano}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-theme-accent px-64 py-4 max-w-5xl mx-auto z-50 text-left space-y-6 overflow-y-auto max-h-[60vh] px-2 custom-scroll"
            >
              <h3 className="text-xl text-theme-accent font-bold text-center">
                {language === 'pt' ? selectedData.titulo : selectedData.translations.EN.titulo}
              </h3>

              <div>
                <p className="text-red-400 font-bold">{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</p>
                <ul className="list-disc list-inside text-green-200">
                  {(language === 'pt' ? selectedData.tecnologias : selectedData.translations.EN.tecnologias)
                    .split('✔️')
                    .filter(Boolean)
                    .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                </ul>
              </div>

              <div>
                <p className="text-yellow-400 font-bold">{language === 'pt' ? 'Habilidades:' : 'Skills:'}</p>
                <ul className="list-disc list-inside text-green-200">
                  {(language === 'pt' ? selectedData.habilidades : selectedData.translations.EN.habilidades)
                    .split('✔️')
                    .filter(Boolean)
                    .map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                </ul>
              </div>

              <div>
                <p className="text-purple-400 font-bold">{language === 'pt' ? 'Impacto:' : 'Impact:'}</p>
                <ul className="list-disc list-inside text-green-200">
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

      <div className="fixed top-32 right-24 z-50 flex gap-4">
        <button className="toggle-mode" onClick={toggleLanguage}>
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
      {/* Removida: linha duplicada de audio ref */}
      {/* <audio ref={audioRef} hidden /> */}
      <div className="fixed top-32 right-8 z-50 flex gap-4">
        <button className="toggle-mode" onClick={handlePlay} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
        {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}</button>
      </div>
    </div>

      <div className="fixed top-4 right-23 z-20 flex gap-2">
        <button className="toggle-mode" onClick={() => router.push('/profissional')}><ArrowLeft className="w-8 h-8" /></button>
       </div>

    </div>
   </TemaProvider>
  );

};

export default SkillDisplay;
