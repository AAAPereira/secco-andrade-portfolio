// src/app/timeline/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    timelineData,
    textoHabilidadesItem,
} from "@/app/timeline/texto_habilidades";
import { TemaProvider } from "@/app/components/TemaProvider";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";


const TimelineDisplay = () => {
    const [TemaHabilidades, setTemaHabilidades] = useState("2024");
    const [selectedData, setSelectedData] =
        useState<textoHabilidadesItem | null>(null);

    const [loading, setLoading] = useState(true);

    const { idioma } = useIdioma();


    // 🔥 Atualiza os dados conforme o ano selecionado
    useEffect(() => {
        const data = timelineData.find(
            (item) => item.ano === TemaHabilidades
        );

        setSelectedData(data || null);
    }, [TemaHabilidades]);


    // ⏳ Loading inicial
    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1500);

        return () => clearTimeout(timeout);
    }, []);


    // 📋 Renderiza os textos separados pelo ✔️
    // Também evita erro caso algum campo esteja vazio.
    const renderList = (texto?: string) => {
        if (!texto) return null;

        return texto
            .split("✔️")
            .filter((item) => item.trim() !== "")
            .map((item, idx) => (
                <li key={idx} className="mb-2 text-justify">
                    {item.trim()}
                </li>
            ));
    };


    // 🎯 Seleção do ano
    const handleYearClick = (ano: string) => {
        setTemaHabilidades(ano);
    };


    // ⏳ Tela de carregamento
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
                            className="
                w-[133px]
                md:w-[266px]
                lg:w-[400px]
                mx-auto
                mb-4
                animate-pulse
                logo-neon
              "
                            style={{
                                height: "auto",
                                filter: "drop-shadow(var(--logo-glow))",
                            }}
                        />

                        <h1 className="text-xl text-theme-primary font-bold">
                            Carregando Linha do Tempo...
                        </h1>

                    </motion.div>

                </div>

            </div>
        );
    }


    return (
        <TemaProvider>

            <div className="w-full">


                {/* ========================================================= */}
                {/* 📸 FOTO */}
                {/* ========================================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mx-auto max-w-5xl">

                    <div className="absolute col-span-2 flex justify-center items-start mt-51 translate-y-4 lg:-translate-x-22">

                        <Image
                            src="/media/photos/modelos/modelo22.webp"
                            alt="Foto de André Pereira"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                            className="w-44 md:w-60 lg:w-72 xl:w-80 h-auto object-contain"
                        />

                    </div>

                </div>


                {/* ========================================================= */}
                {/* 🕒 LINHA DO TEMPO */}
                {/* ========================================================= */}

                <div className="col-span-8 space-y-6 mt-6">


                    <div className="relative flex justify-center items-center">

                        {/* Linha horizontal */}
                        <div
                            className="
                absolute
                top-0
                -translate-y-1/2
                w-[90%]
                h-1
                bg-theme-primary
                neon-line
                z-0
              "
                        />


                        {/* Anos */}
                        {timelineData.map((item) => (

                            <div
                                key={item.ano}
                                className="relative z-10 flex flex-col items-center"
                            >

                                <div className="w-1 h-8 bg-theme-primary" />

                                <button
                                    onClick={() => handleYearClick(item.ano)}
                                    className={`
                    timeline-ano
                    ${TemaHabilidades === item.ano
                                            ? "font-bold"
                                            : ""
                                        }
                  `}
                                >

                                    <h3 className="text-xl text-theme-accent font-bold">
                                        {item.ano}
                                    </h3>

                                </button>

                            </div>

                        ))}

                    </div>


                    {/* ======================================================= */}
                    {/* 📝 CONTEÚDO DO ANO SELECIONADO */}
                    {/* ======================================================= */}

                    <div className="col-span-2 space-y-6 mt-6">

                        <AnimatePresence mode="wait">

                            {selectedData && (

                                <motion.div
                                    key={selectedData.ano}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="
                    relative
                    left-[60px]
                    text-theme-accent
                    px-14
                    max-w-3xl
                    mx-auto
                    z-50
                    text-left
                    space-y-6
                    max-h-[65vh]
                    overflow-y-auto
                    custom-scroll
                  "
                                >


                                    {/* ================================================= */}
                                    {/* 🏷️ TÍTULO */}
                                    {/* ================================================= */}

                                    <h2
                                        className="
                      text-2xl
                      font-bold
                      text-theme-accent
                      text-center
                      mb-4
                    "
                                    >

                                        {idioma === "pt"
                                            ? `${selectedData.ano} - ${selectedData.titulo}`
                                            : `${selectedData.ano} - ${selectedData.translations.EN.titulo}`
                                        }

                                    </h2>


                                    {/* ================================================= */}
                                    {/* 🔴 O MOMENTO */}
                                    {/* ================================================= */}

                                    <div>

                                        <p className="text-red-400 font-bold mb-2">

                                            {idioma === "pt"
                                                ? "O Momento:"
                                                : "The Moment:"
                                            }

                                        </p>

                                        <ul className="list-disc list-inside text-white">

                                            {renderList(
                                                idioma === "pt"
                                                    ? selectedData.momento
                                                    : selectedData.translations.EN.momento
                                            )}

                                        </ul>

                                    </div>


                                    {/* ================================================= */}
                                    {/* 🟡 EVOLUÇÃO PROFISSIONAL */}
                                    {/* ================================================= */}

                                    <div>

                                        <p className="text-yellow-400 font-bold mb-2">

                                            {idioma === "pt"
                                                ? "Evolução Profissional:"
                                                : "Professional Growth:"
                                            }

                                        </p>

                                        <ul className="list-disc list-inside text-white">

                                            {renderList(
                                                idioma === "pt"
                                                    ? selectedData.evolucao
                                                    : selectedData.translations.EN.evolucao
                                            )}

                                        </ul>

                                    </div>


                                    {/* ================================================= */}
                                    {/* 🟣 APRENDIZADO E LEGADO */}
                                    {/* ================================================= */}

                                    <div>

                                        <p className="text-purple-400 font-bold mb-2">

                                            {idioma === "pt"
                                                ? "Aprendizado e Legado:"
                                                : "Learning and Legacy:"
                                            }

                                        </p>

                                        <ul className="list-disc list-inside text-white">

                                            {renderList(
                                                idioma === "pt"
                                                    ? selectedData.legado
                                                    : selectedData.translations.EN.legado
                                            )}

                                        </ul>

                                    </div>


                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                </div>

            </div>

        </TemaProvider>
    );
};


export default TimelineDisplay;