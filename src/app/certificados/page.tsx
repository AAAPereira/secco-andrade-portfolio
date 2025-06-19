// src/app/certificados/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const audioMap: Record<string, string> = {
  "oracle-oci": "/media/audios/profissional/amazing-grace.mp3",
  "nse1": "/media/audios/profissional/who-am-i.mp3",
  "nse2": "/media/audios/profissional/stand-by-me.mp3",
  "ccna": "/media/audios/profissional/goodness-of-god.mp3",
  "malware": "/media/audios/profissional/city-of-god.mp3",
  "ethical-hacker": "/media/audios/profissional/dont-cry-daddy.mp3",
  "nivelamento-hackers": "/media/audios/profissional/bailando.mp3",
  "pentest": "/media/audios/profissional/in-the-ghetto.mp3",
  "mitre": "/media/audios/profissional/sweet-caroline.mp3",
  "securety": "/media/audios/profissional/this-body-of-mine.mp3",
  "multicloud": "/media/audios/profissional/a-thousand-years.mp3",
  "politica-ciber": "/media/audios/profissional/oceans-where-feet-may-fail.mp3",
  "mikrotik": "/media/audios/profissional/when-i-get-where-im-going.mp3",
  "seguranca-digital": "/media/audios/profissional/baby-what-you-want-me-to-do.mp3",
  "bt-fdn": "/media/audios/profissional/hallelujah.mp3",
  "bt-fdn-a": "/media/audios/profissional/sing-me-back-home.mp3",
  "bt-tc": "/media/audios/profissional/riding-home-to-you.mp3",
  "bt-tc-a": "/media/audios/profissional/relaxing-country.mp3",
  "mainframe": "/media/audios/profissional/livin-on-love.mp3",
  "fundamentos": "/media/audios/profissional/youve-lost-that-lovin-feelin.mp3",
  "storage": "/media/audios/profissional/home.mp3",
  "mba-gestao": "/media/audios/profissional/hungry-eyes.mp3",
  "diploma": "/media/audios/profissional/always-on-my-mind.mp3",
};

const minhasCertificacoes = [
  { id: 'oracle-oci', src: '/media/photos/certificados/Certificado-Oracle-OCI.webp' },
  { id: 'nse1', src: '/media/photos/certificados/Certificado-NSE1.webp' },
  { id: 'nse2', src: '/media/photos/certificados/Certificado-NSE2.webp' },
  { id: 'ccna', src: '/media/photos/certificados/Certificado-CURSO_CCNA.webp' },
  { id: 'malware', src: '/media/photos/certificados/Certificado-Analise-de-Malware.webp' },
  { id: 'ethical-hacker', src: '/media/photos/certificados/Certificado-Ethical-Hacker.webp' },
  { id: 'nivelamento-hackers', src: '/media/photos/certificados/Certificado-Nivelamento-Hackers-do-Bem.webp' },
  { id: 'pentest', src: '/media/photos/certificados/Certificado-Introdução-Pentest.webp' },
  { id: 'mitre', src: '/media/photos/certificados/Certificado-MITRE-ATT&CK.webp'},
  { id: 'securety', src: '/media/photos/certificados/Certificado-Information-Securety-Foundation.webp'},
  { id: 'multicloud', src: '/media/photos/certificados/Certificado-MultiCloud.webp' },
  { id: 'politica-ciber', src: '/media/photos/certificados/Certificado-Política-Cibersegurança.webp' },
  { id: 'mikrotik', src: '/media/photos/certificados/Certificado-Mikrotik.webp' },
  { id: 'seguranca-digital', src: '/media/photos/certificados/Certificado-Segurança-Digital.webp' },
  { id: 'bt-fdn', src: '/media/photos/certificados/Certificado-BT-ICT-FDN-Foundation.webp' },
  { id: 'bt-fdn-a', src: '/media/photos/certificados/Certificado-BT-ICT-FDN-Foundation_verso.webp' },
  { id: 'bt-tc', src: '/media/photos/certificados/Certificado-BT-ICT-TC-Conceitos-e-Fundamentos.webp' },
  { id: 'bt-tc-a', src: '/media/photos/certificados/Certificado-BT-ICT-TC-Conceitos-Fundamentos-verso.webp' },
  { id: 'mainframe', src: '/media/photos/certificados/Certificado-Arquitetura-Mainframe.webp' },
  { id: 'fundamentos', src: '/media/photos/certificados/Certificado-Fundamentos.webp' },
  { id: 'storage', src: '/media/photos/certificados/Certificado-Praticas-Suporte-Storage.webp' },
  { id: 'mba-gestao', src: '/media/photos/certificados/Certificado-MBA-Gestao.webp' },
  { id: 'diploma', src: '/media/photos/certificados/Certificado-Diploma-Bacharel.webp' },
];

export default function Certificacoes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [emailAutorizado, setEmailAutorizado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email === "fernandre6973@gmail.com") {
      setEmailAutorizado(true);
    }
  }, []);

  useEffect(() => {
    const certAtual = minhasCertificacoes[currentSlide];
    const audioSrc = audioMap[certAtual?.id];

    if (!audioRef.current || !audioSrc) return;

    audioRef.current.pause();
    audioRef.current.src = audioSrc;
    audioRef.current.load();
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [currentSlide]);

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.warn);
    }
    setIsPlaying(!isPlaying);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    // Simula um carregamento de 2 segundos
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milissegundos = 2 segundos

    // Limpa o timeout ao sair do componente
    return () => clearTimeout(timeout);
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
            <Image src="/media/photos/icone-security.webp" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />

          <h1 className="text-xl text-theme-primary font-bold">Carregando Pagina Certificados...</h1>
        </motion.div>
      </div>
      </div>
    );
  }


return (
  <div className="relative flex flex-col w-full mx-auto px-4">

    {/* ✅ Imagem do André - Centralizada no topo */}
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
      <Image
        src="/media/photos/andre-pereira-b.webp"
        alt="Foto de André Pereira"
        width={183}
        height={624}
        className="rounded-lg shadow-xl"
      />
    </div>

    {/* ✅ Slider de Certificados */}
    <div className="mt-[350px] z-50"> {/* Esse margin-top ajusta certinho abaixo da imagem */}
      <Slider {...settings}>
        {minhasCertificacoes.map((cert) => (
          <div key={cert.id} className="p-0">
            <div className="bg-zinc-900 rounded-xl border border-theme-primary p-2 shadow-lg">
              <Image
                src={cert.src}
                alt={cert.id}
                width={500}
                height={330}
                className="object-contain rounded-xl mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* 🔊 Controles de Áudio */}
    <audio ref={audioRef} hidden preload="auto" />
    <div className="fixed top-32 right-8 z-50 flex gap-4">
      <button
        className="toggle-mode border-theme-primary"
        onClick={handlePlay}
        title={isPlaying ? "Parar trilha" : "Tocar trilha"}
      >
        {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}
      </button>
    </div>

    {/* 🔀 Navegação */}
    <div className="fixed top-4 right-24 z-50 flex gap-2">
      <button
        className="toggle-mode border-theme-primary"
        onClick={() => router.push('/profissional')}
      >
        <ArrowLeft className="w-8 h-8" />
      </button>
      {emailAutorizado && (
        <button
          className="toggle-mode border-theme-primary"
          onClick={() => router.push('/estatisticas')}
        >
          <ArrowRight className="w-8 h-8" />
        </button>
      )}
    </div>
  </div>
);
}