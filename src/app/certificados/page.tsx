//app/certificados/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";

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

type Certificacao = {
  id: string;
  src: string;
  alt: string;
};

export const minhasCertificacoes: Certificacao[] = [
  { id: 'oracle-oci', src: '/media/photos/certificados/Certificado - Oracle OCI.png', alt: 'Certificação 1' },
  { id: 'nse1', src: '/media/photos/certificados/Certificado - NSE1.png', alt: 'Certificação 2' },
  { id: 'nse2', src: '/media/photos/certificados/Certificado - NSE2.png', alt: 'Certificação 3' },
  { id: 'ccna', src: '/media/photos/certificados/Certificado - CURSO_CCNA.png', alt: 'Certificação 4' },
  { id: 'malware', src: '/media/photos/certificados/Certificado - Analise de Malware.png', alt: 'Certificação 5' },
  { id: 'ethical-hacker', src: '/media/photos/certificados/Certificado - Ethical Hacker.png', alt: 'Certificação 6' },
  { id: 'nivelamento-hackers', src: '/media/photos/certificados/Certificado - Nivelamento Hackers do Bem.png', alt: 'Certificação 7' },
  { id: 'pentest', src: '/media/photos/certificados/Certificado - Introdução Pentest.png', alt: 'Certificação 8' },
  { id: 'multicloud', src: '/media/photos/certificados/Certificado - MultiCloud.png', alt: 'Certificação 9' },
  { id: 'politica-ciber', src: '/media/photos/certificados/Certificado - Política de Cibersegurança.png', alt: 'Certificação 10' },
  { id: 'mikrotik', src: '/media/photos/certificados/Certificado - Mikrotik.png', alt: 'Certificação 11' },
  { id: 'seguranca-digital', src: '/media/photos/certificados/Certificado - Segurança Digital_a.png', alt: 'Certificação 12' },
  { id: 'bt-fdn', src: '/media/photos/certificados/Certificado - BT-ICT-FDN - Foundation.png', alt: 'Certificação 13' },
  { id: 'bt-fdn-a', src: '/media/photos/certificados/Certificado - BT-ICT-FDN - Foundation_a.png', alt: 'Certificação 14' },
  { id: 'bt-tc', src: '/media/photos/certificados/Certificado - BT-ICT-TC - Conceitos e Fundamentos.png', alt: 'Certificação 15' },
  { id: 'bt-tc-a', src: '/media/photos/certificados/Certificado - BT-ICT-TC - Conceitos e Fundamentos_a.png', alt: 'Certificação 16' },
  { id: 'mainframe', src: '/media/photos/certificados/Certificado - Arquitetura Mainframe.png', alt: 'Certificação 17' },
  { id: 'fundamentos', src: '/media/photos/certificados/Certificado - Fundamentos.png', alt: 'Certificação 18' },
  { id: 'storage', src: '/media/photos/certificados/Certificado - Praticas Suporte Storage.png', alt: 'Certificação 19' },
  { id: 'mba-gestao', src: '/media/photos/certificados/Certificado - MBA - Gestao.png', alt: 'Certificação 20' },
  { id: 'diploma', src: '/media/photos/certificados/Certificado - Diploma Bacharel_a.png', alt: 'Certificação 21' },
];

export default function Certificacoes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


  const [emailAutorizado, setEmailAutorizado] = useState(false);

  useEffect(() => {
      const email = localStorage.getItem("email");
      if (
           email === "fernandre6973@gmail.com"
      ) {
        setEmailAutorizado(true);
      }
  }, []);


  useEffect(() => {
    const certAtual = minhasCertificacoes[currentSlide];
    const audioSrc = audioMap[certAtual?.id];
    if (!audioSrc || !audioRef.current) return;

    audioRef.current.src = audioSrc;
    audioRef.current.play().then(() => setIsPlaying(true)).catch(console.warn);
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
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setFirstName(sessionStorage.getItem("firstName"));
  }, []);


  useEffect(() => {
      const saudacaoExecutada = sessionStorage.getItem("saudacaoCertificadosExecutada");
      const storedFirstName = sessionStorage.getItem("firstName");

      if (typeof window !== "undefined" && "speechSynthesis" in window && !saudacaoExecutada) {
        const hora = new Date().getHours();
        const nome = storedFirstName?.split("@")[0];
        const nomeFormatado = nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "visitante";

        let saudacaoPt = `Esta é a página de Certificados e Cursos, uma verdadeira vitrine do conhecimento formal adquirido por André Pereira ao longo da carreira. Aqui você encontrará formações relevantes, especializações e certificações que contribuíram com sua jornada profissional. No entanto, é importante lembrar: nenhum certificado supera o valor das experiências vividas na prática — com acertos, erros, superações e aprendizados reais. Obrigado pela visita, ${nome || "visitante"}!`;
        let saudacaoEn = `This is the Certificates and Courses page — a showcase of the formal knowledge André Pereira has gained throughout his career. Here, you'll find meaningful training, specializations, and certifications that supported his professional journey. Yet, it's important to remember: no certificate outweighs the value of real-world experience — with successes, mistakes, resilience, and meaningful growth. Thank you for visiting, ${nome || "visitor"}!`;

        if (hora >= 12 && hora < 18) {
          saudacaoPt = saudacaoPt.replace("Bom dia", "Boa tarde");
          saudacaoEn = saudacaoEn.replace("Good morning", "Good afternoon");
        } else if (hora >= 18 || hora < 5) {
          saudacaoPt = saudacaoPt.replace("Bom dia", "Boa noite");
          saudacaoEn = saudacaoEn.replace("Good morning", "Good evening");
        }

        const utter = new SpeechSynthesisUtterance(`${saudacaoPt} ${saudacaoEn}`);
        utter.lang = "pt-BR"; // Pode deixar assim se não quiser mudar voz no meio
        utter.rate = 0.95;
        utter.pitch = 1.1;

        window.speechSynthesis.speak(utter);
        sessionStorage.setItem("saudacaoCertificadosExecutada", "true");
      }
  }, []);


  if (loading) {
    return (
      <div className="grid grid-cols-12 max-w-screen-xl w-full mx-auto md:px-16 py-30">
        <div className="col-span-12 z-10 flex justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-center">
            <Image src="/media/photos/icone_security.png" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />
            <h1 className="text-xl text-green-400 font-bold text-theme-primary">Carregando Certificados...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-12 gap-1 max-w-[1600px] w-full px-2">
      <div className="col-span-1 space-y-4 mt-30">
        <div className="absolute left-180 w-full">
          <Image src="/media/photos/andre_pereira_b.png" alt="Foto de André Pereira" width={183} height={624}  className="rounded-lg shadow-xl"/>
        </div>
      </div>

      <div className="absolute left-0 w-full">
      <div className="col-span-11 space-y-4 mt-95 z-10">
        <audio ref={audioRef} hidden preload="auto" />
        <Slider {...settings}>
          {minhasCertificacoes.map((cert, index) => (
            <div key={cert.id} className={`slick-slide-item ${index === currentSlide ? "active" : ""} box-theme rounded-xl shadow-md object-contain border border-theme-primary p-0 cursor-pointer hover:shadow card`}>
              <img src={cert.src} alt={cert.alt} width={500} height={330} style={{ maxHeight: "500px" }} className="object-contain rounded-xl max-h-full max-w-full z-0" />
            </div>
           ))}
      </Slider>
        </div>


        <div className="fixed top-32 right-8 z-50 flex gap-4">
          <button className="toggle-mode border-theme-primary" onClick={handlePlay} title={isPlaying ? "Parar trilha" : "Tocar trilha"}>
            {isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}
          </button>
        </div>

        <div className="fixed top-4 right-23 z-20 flex gap-2">
          <button className="toggle-mode border-theme-primary" onClick={() => window.location.href = '/profissional'}><ArrowLeft className="w-8 h-8" /></button>
          {emailAutorizado && (
          <button className="toggle-mode border-theme-primary" onClick={() => window.location.href = '/estatisticas'}><ArrowRight className="w-8 h-8" /></button>
          )}
        </div>
      </div>
    </div>
  );
}
