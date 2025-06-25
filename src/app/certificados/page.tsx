// src/app/certificados/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  { id: 'blueteam', src: '/media/photos/certificados/certi-blue-team.png'},
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
    <div className="flex flex-col items-center w-full p-4">

      {/* ✅ Imagem do André */}
      <div className="lg:col-span-2 space-y-6">
        <Image
          src="/media/photos/andre-pereira-b.webp"
          alt="Foto de André Pereira"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-16 md:w-32 lg:w-48 mx-auto"
        />
      </div>

      {/* ✅ Slider de Certificados */}
      <div className="lg:col-span-1 space-y-6 lg:mt-[-23rem] max-w-7xl">
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
