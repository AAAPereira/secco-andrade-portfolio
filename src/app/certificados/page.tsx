// src/app/certificados/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const audioMap: Record<string, string> = {
  "oracle-oci": "/media/audios/profissional/Amazing Grace.mp3",
  "nse1": "/media/audios/pessoal/Who Am I.mp3",
  "nse2": "/media/audios/pessoal/Stand By Me.mp3",
  "ccna": "/media/audios/pessoal/Goodness of God.mp3",
  "malware": "/media/audios/pessoal/City of God.mp3",
  "ethical-hacker": "/media/audios/pessoal/dont-cry-daddy.mp3",
  "nivelamento-hackers": "/media/audios/pessoal/bailando.mp3",
  "pentest": "/media/audios/pessoal/In the Ghetto.mp3",
  "multicloud": "/media/audios/pessoal/A Thousand Years.mp3",
  "politica-ciber": "/media/audios/pessoal/Oceans Where Feet May Fail.mp3",
  "mikrotik": "/media/audios/profissional/Sweet Caroline.mp3",
  "seguranca-digital": "/media/audios/profissional/Baby What You Want Me To Do.mp3",
  "bt-fdn": "/media/audios/profissional/Hallelujah.mp3",
  "bt-fdn-a": "/media/audios/profissional/Sing Me Back Home.mp3",
  "bt-tc": "/media/audios/profissional/Riding home to you.mp3",
  "bt-tc-a": "/media/audios/profissional/This Body of Mine.mp3",
  "mainframe": "/media/audios/profissional/Livin On Love.mp3",
  "fundamentos": "/media/audios/profissional/Youve Lost That Lovin Feelin.mp3",
  "storage": "/media/audios/profissional/Home.mp3",
  "mba-gestao": "/media/audios/profissional/Hungry Eyes.mp3",
  "diploma": "/media/audios/profissional/Always On My Mind.mp3",
};

const minhasCertificacoes = [
  { id: 'oracle-oci', src: '/media/photos/certificados/Certificado - Oracle OCI.png' },
  { id: 'nse1', src: '/media/photos/certificados/Certificado - NSE1.png' },
  { id: 'nse2', src: '/media/photos/certificados/Certificado - NSE2.png' },
  { id: 'ccna', src: '/media/photos/certificados/Certificado - CURSO_CCNA.png' },
  { id: 'malware', src: '/media/photos/certificados/Certificado - Analise de Malware.png' },
  { id: 'ethical-hacker', src: '/media/photos/certificados/Certificado - Ethical Hacker.png' },
  { id: 'nivelamento-hackers', src: '/media/photos/certificados/Certificado - Nivelamento Hackers do Bem.png' },
  { id: 'pentest', src: '/media/photos/certificados/Certificado - Introdução Pentest.png' },
  { id: 'multicloud', src: '/media/photos/certificados/Certificado - MultiCloud.png' },
  { id: 'politica-ciber', src: '/media/photos/certificados/Certificado - Política de Cibersegurança.png' },
  { id: 'mikrotik', src: '/media/photos/certificados/Certificado - Mikrotik.png' },
  { id: 'seguranca-digital', src: '/media/photos/certificados/Certificado - Segurança Digital_a.png' },
  { id: 'bt-fdn', src: '/media/photos/certificados/Certificado - BT-ICT-FDN - Foundation.png' },
  { id: 'bt-fdn-a', src: '/media/photos/certificados/Certificado - BT-ICT-FDN - Foundation_a.png' },
  { id: 'bt-tc', src: '/media/photos/certificados/Certificado - BT-ICT-TC - Conceitos e Fundamentos.png' },
  { id: 'bt-tc-a', src: '/media/photos/certificados/Certificado - BT-ICT-TC - Conceitos e Fundamentos_a.png' },
  { id: 'mainframe', src: '/media/photos/certificados/Certificado - Arquitetura Mainframe.png' },
  { id: 'fundamentos', src: '/media/photos/certificados/Certificado - Fundamentos.png' },
  { id: 'storage', src: '/media/photos/certificados/Certificado - Praticas Suporte Storage.png' },
  { id: 'mba-gestao', src: '/media/photos/certificados/Certificado - MBA - Gestao.png' },
  { id: 'diploma', src: '/media/photos/certificados/Certificado - Diploma Bacharel_a.png' },
];

export default function Certificacoes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  return (
    <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] w-full px-4">
      {/* Imagem lateral */}
      <div className="absolute left-180 mt-16">
        <Image src="/media/photos/andre_pereira_b.png" alt="Foto de André Pereira" width={183} height={624} className="rounded-lg shadow-xl" />
      </div>

      {/* Slider de certificados */}
      <div className="col-span-12 mt-83">
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

      {/* Controles de áudio */}
      <audio ref={audioRef} hidden preload="auto" />
      <div className="fixed top-32 right-8 z-50 flex gap-4">
        <button className="toggle-mode border-theme-primary" onClick={handlePlay} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
          {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}
        </button>
      </div>

      {/* Navegação */}
      <div className="fixed top-4 right-24 z-20 flex gap-4">
        <button className="toggle-mode border-theme-primary" onClick={() => router.push('/profissional')}>
          <ArrowLeft className="w-8 h-8" />
        </button>
        {emailAutorizado && (
          <button className="toggle-mode border-theme-primary" onClick={() => router.push('/estatisticas')}>
            <ArrowRight className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}
