"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { detailedSkillsData, DetailedSkillItem } from "@/app/skill-completo/texto_skill_completo";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import "@/app/backgrounds/backgrounds.css";

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
            <Image src="/media/photos/icone-security.webp"
            alt="Logo da Segurança"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
            style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />

            <h1 className="text-xl text-theme-primary font-bold">Carregando Competências Técnicas...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    // Contêiner principal da página.
    // `flex flex-col items-center`: Empilha os itens verticalmente e os centraliza horizontalmente.
    // `w-full p-4 sm:p-6 md:p-8`: Padding interno responsivo.
    // `overflow-hidden`: Garante que nenhum conteúdo transborde e cause barras de rolagem.
    <div className="flex flex-col items-center w-full">

      {/* Objeto 3: Agora acima dos Outros Dois, Ocupa a Largura Total */}
      {/* `w-full max-w-5xl mx-auto`: Garante que este objeto seja centralizado
          e tenha uma largura máxima controlada.
          `mb-6`: Margem inferior para separá-lo dos objetos abaixo. */}
      <div className="lg:col-span-6 text-white text-base md:text-lg lg:text-gl">
          <div className="relative flex justify-center items-center mt-6">
            <div className="absolute top-0 -translate-y-1/2 w-[100%] h-1 bg-theme-primary neon-line z-0"></div>
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
      </div>

      {/* Contêiner para Objeto 1 e Objeto 2 */}
      {/* Este div usará grid para posicionar Objeto 1 e 2 lado a lado em telas maiores
          e será centralizado horizontalmente (`mx-auto`). */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-5xl"> {/* max-w-5xl para controlar a largura máxima e centralizar */}

        {/* Objeto 1: Coluna Esquerda */}
        {/* Em telas menores, ocupa 1 coluna (`col-span-1`). */}
        <div className="lg:col-span-4 z-50 w-full flex flex-col justify-start items-center pt-14 translate-y-4 lg:translate-x-12">
                <Image src="/media/photos/modelos/modelo27.webp"
                alt="Foto de André Pereira"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-44 md:w-60 lg:w-72 xl:w-79 h-auto object-contain"/>
        </div>

        {/* Objeto 2: Coluna Direita */}
        {/* Comportamento similar ao Objeto 1, ficará à direita do Objeto 1 em telas maiores. */}
        <div className="col-span-7 mt-8">
            <AnimatePresence mode="wait">
              {selectedData && (
                <motion.div
                  key={selectedData.ano}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                    className="text-theme-accent px-2 py-6 max-w-1xl mx-auto text-left space-y-6 max-h-[65vh] overflow-y-auto custom-scroll"
                >
              <h2 className="text-1xl font-bold text-theme-accent text-center">
                {idioma === "pt"
                  ? ` ${selectedData.titulo}`
                  : `${selectedData.translations.EN.titulo}`}
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
    </div>
  );
}


export default SkillDisplay;

