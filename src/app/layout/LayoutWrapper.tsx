// src/app/layout/LayoutWrapper.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import "@/app/backgrounds/backgrounds.css";
import SkillMenu from "@/app/components/skillmenu/DropdownMenu";
import CVMenu from "@/app/components/cvmenu/DropdownCV";
import NavigationControls from "@/app/components/controles/NavigationControls";

const modeIcons: Record<string, React.ReactNode> = {
  "theme-default": "🌗",
  "theme-neon": "🤖",
  "theme-classic": "📜",
  "theme-green": "🌿",
  "theme-yellow": "🌞",
  "theme-blue": "🌊",
  "theme-pink": "🌸",
  "theme-purple": "🔮",
  "theme-orange": "🔥",
  "theme-black-white": "☯️",
  "theme-futuristic": "👾",
  "theme-verde-neon": "🧪",
  "theme-azul-neon": "🛸",
  "theme-verdao-neon": "💚",
  "theme-roxo-neon": "💜",
  "theme-cybergrid": "⚫",
  "theme-laranja-neon": "💣",
};

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [firstName, setFirstName] = useState<string | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);

  const temas = [
    "theme-green", "theme-yellow", "theme-blue", "theme-pink", "theme-purple",
    "theme-orange", "theme-black-white", "theme-futuristic", "theme-default", "theme-classic",
    "theme-neon", "theme-verde-neon", "theme-azul-neon", "theme-verdao-neon",
    "theme-roxo-neon", "theme-cybergrid", "theme-laranja-neon",
  ];
  const [theme, setTheme] = useState("theme-default");

  const isPaginaProfissional = pathname === "/profissional";

  // Controle de áudio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-default";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;

    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);

    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      isMuted ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [pathname, isMuted]);

  const toggleTheme = () => {
    const indexAtual = temas.indexOf(theme);
    const proximoTema = temas[(indexAtual + 1) % temas.length];
    setTheme(proximoTema);
    localStorage.setItem("theme", proximoTema);
    document.documentElement.className = proximoTema;
  };

  const handleExit = () => {
    const jaVisitou = sessionStorage.getItem("visitouAval") === "sim";
    if (jaVisitou) {
      setShowExitModal(true);
    } else {
      router.push("/avaliacao-site");
    }
  };

  const pageTitles: { [key: string]: string } = {
    "/": "TERMO DE USO - LGPD",
    "/login": "ACESSAR INFORMAÇÕES - ANDRÉ PEREIRA",
    "/verificar-token": "VALIDANDO TOKEN - ANDRÉ PEREIRA",
    "/sobre": "SOBRE O PROFISSIONAL - ANDRÉ PEREIRA",
    "/profissional": "EMPRESAS E APRENDIZADOS - ANDRÉ PEREIRA",
    "/resume-skill": "RESUMO DO SKILL - ANDRÉ PEREIRA",
    "/skill-completo": "SKILL COMPLETO - ANDRÉ PEREIRA",
    "/certificados": "CERTIFICADOS DIGITAIS",
    "/timeline": "LINHA DO TEMPO - ANDRÉ PEREIRA",
    "/estatisticas": "GRAFICO ESTATÍSTICO - ANDRÉ PEREIRA",
    "/visao-macro": "VISITANTES - ANDRÉ PEREIRA",
    "/avaliacao-site": "AVALIAÇÃO DO CONTEÚDO - ANDRÉ PEREIRA",
  };

  const title = pageTitles[pathname] || "MUDANDO DE PAGINA - ANDRÉ PEREIRA";

  const paginasSemMenu = ["/login", "/verificar-token", "/"];

  const paginas = [
  "/sobre",
  "/profissional",
  "/resume-skill",
  "/skill-completo",
  "/timeline",
  "/certificados",
  "/estatisticas",
  "/visao-macro",
];

    const currentIndex = paginas.indexOf(pathname);
    const proximaPagina = paginas[(currentIndex + 1) % paginas.length];
    const paginaAnterior = paginas[(currentIndex - 1 + paginas.length) % paginas.length];


  return (
    <div className={`min-h-screen flex flex-col justify-between overflow-x-hidden ${theme}`}>

      {/* HEADER */}
      <header className="h-30 w-full border-b-2 border-theme-primary text-center relative z-10 flex items-center justify-center">
      <Image
      src="/media/photos/icone-security.webp"
      alt="Logo Segurança"
      width={0}
      height={0}
      sizes="100vw"
      priority
      className="w-[10px] md:w-[50px] lg:w-[90px] mb-6 absolute left-4 animate-pulse logo-neon"
      style={{ filter: "drop-shadow(var(--logo-glow))" }}
    />

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-primary drop-shadow-lg">
          {title}
        </h1>
        <div className="absolute right-8 top-4 z-50 flex gap-2">
          <button className="toggle-mode border-theme-primary" onClick={toggleTheme}>
            {(theme && modeIcons[theme]) || "🎨"}
          </button>
          <button className="toggle-mode border-theme-primary" onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>

        <div className="absolute bottom-6 w-full h-[2px] border-theme-primary bg-theme-primary"></div>


      <div className="absolute w-full top-16 h-[8px]">
      {/* MENU DE NAVEGAÇÃO */}
      {!paginasSemMenu.includes(pathname) && (
        <nav className="flex justify-center gap-4 py-8 flex-wrap text-theme-primary">
          <button onClick={() => router.push("/sobre")} className="btn-neon">Sobre</button>
          <button onClick={() => router.push("/profissional")} className="btn-neon">Profissional</button>
          <button onClick={() => router.push("/resume-skill")} className="btn-neon">Skill Resumido</button>
          <button onClick={() => router.push("/skill-completo")} className="btn-neon">Skill Completo</button>
          <button onClick={() => router.push("/timeline")} className="btn-neon">Timeline</button>
          <button onClick={() => router.push("/estatisticas")} className="btn-neon">Estatísticas</button>
          <button onClick={() => router.push("/visao-macro")} className="btn-neon">Visão Macro</button>
        </nav>
      )}
        </div>
      </header>

      {/* Menus da Página Profissional */}
      {isPaginaProfissional && (
        <>
          <div className="fixed top-6 left-60 z-20">
            <SkillMenu />
          </div>
          <div className="fixed top-6 right-80 z-20">
            <CVMenu />
          </div>
        </>
      )}


      {/* CONTROLES DE NAVEGAÇÃO */}
      {!["/login", "/verificar-token", "/"].includes(pathname) && (
        <NavigationControls
          showAudio={!["/", "/login", "/verificar-token"].includes(pathname)}
          showLanguage={!["/estatisticas", "/avaliacao-site"].includes(pathname)}
          next={proximaPagina}
          prev={paginaAnterior}
        />
      )}

      {/* MAIN */}
      <main className="relative flex-grow w-full">
        <div className="background-overlay theme-background-overlay" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="h-14 border-t-2 border-theme-primary text-center text-sm flex items-center justify-center relative">
        CRIADO POR IA - SECCO&ANDRADE v.2
        {firstName && !["/avaliacao-site", "/", "/sobre"].includes(pathname) && (
          <div className="absolute right-4 top-3 flex gap-3 items-center">
            <span className="text-theme-accent font-semibold text-sm">Olá {firstName}</span>
            <button
              onClick={handleExit}
              className="bg-theme-button px-3 py-1 rounded text-sm text-white button-theme"
            >
              Sair
            </button>
          </div>
        )}
      </footer>

      {/* MODAL DE SAÍDA */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-gray-900 border border-theme-primary p-8 rounded-lg text-white max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 text-theme-primary">
              Tem certeza que deseja sair?
            </h2>
            <p className="mb-6">
              Você ainda não conheceu todo o conteúdo sobre André Pereira. Deseja realmente sair do site agora?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  sessionStorage.clear();
                  window.location.href = "https://www.google.com.br";
                }}
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
              >
                Quero sair mesmo assim
              </button>
              <button
                onClick={() => {
                  setShowExitModal(false);
                  router.push("/sobre");
                }}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
              >
                Continuar explorando
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
