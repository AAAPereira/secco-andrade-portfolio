// src/app/certificados/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAudio } from "@/app/contexts/AudioProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { updateAudioSource, toggleAudio } = useAudio();

useEffect(() => {
  const certAtual = minhasCertificacoes[currentSlide];
  const audioSrc = audioMap[certAtual?.id];

  if (audioSrc) {
    updateAudioSource(audioSrc);

    // Se já estiver tocando, força a troca automática da música
    setTimeout(() => {
      const audioEl = document.querySelector('audio');
      if (audioEl) {
        audioEl.play().catch(() => {});
      }
    }, 200);
  }
}, [currentSlide]);


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
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-12 max-w-screen-xl w-full mx-auto md:px-16 py-30">
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
              className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
              style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }}
            />
            <h1 className="text-xl text-theme-primary font-bold">Carregando Página Certificados...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col w-full mx-auto px-4 mt-12">

      {/* ✅ Imagem do André */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src="/media/photos/andre-pereira-b.webp"
          alt="Foto de André Pereira"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-[61px] md:w-[122px] lg:w-[183px] rounded-lg shadow-xl"
        />
      </div>

      {/* ✅ Slider de Certificados */}
      <div className="mt-[350px] z-50">
        <Slider {...settings}>
          {minhasCertificacoes.map((cert) => (
            <div key={cert.id} className="p-0">
              <div className="bg-zinc-900 rounded-xl border border-theme-primary p-2 shadow-lg">
                <Image
                  src={cert.src}
                  alt={cert.id}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="w-[166px] md:w-[232px] lg:w-[500px] object-contain rounded-xl mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
