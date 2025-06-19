// src/app/sobre/page.tsx

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AutoPlayAudio } from "@/app/components/audio/AutoPlayAudio";
import { Music, Square, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const audioMap = {
  "pt": "/media/audios/profissional/stand-by-me.mp3",
  "en": "/media/audios/profissional/a-thousand-years.mp3",
};

const certificados = [
'/media/photos/certificados/Certificado-Oracle-OCI.webp',
'/media/photos/certificados/Certificado-NSE1.webp',
'/media/photos/certificados/Certificado-NSE2.webp',
'/media/photos/certificados/Certificado-CURSO_CCNA.webp',
'/media/photos/certificados/Certificado-Analise-de-Malware.webp',
'/media/photos/certificados/Certificado-Ethical-Hacker.webp',
'/media/photos/certificados/Certificado-Nivelamento-Hackers-do-Bem.webp',
'/media/photos/certificados/Certificado-Introdução-Pentest.webp',
'/media/photos/certificados/Certificado-MITRE-ATT&CK.webp',
'/media/photos/certificados/Certificado-Information-Securety-Foundation.webp',
'/media/photos/certificados/Certificado-MultiCloud.webp',
'/media/photos/certificados/Certificado-Política-Cibersegurança.webp',
'/media/photos/certificados/Certificado-Mikrotik.webp',
'/media/photos/certificados/Certificado-Segurança-Digital.webp',
'/media/photos/certificados/Certificado-BT-ICT-FDN-Foundation.webp',
'/media/photos/certificados/Certificado-BT-ICT-FDN-Foundation_verso.webp',
'/media/photos/certificados/Certificado-BT-ICT-TC-Conceitos-e-Fundamentos.webp',
'/media/photos/certificados/Certificado-BT-ICT-TC-Conceitos-Fundamentos-verso.webp',
'/media/photos/certificados/Certificado-Arquitetura-Mainframe.webp',
'/media/photos/certificados/Certificado-Fundamentos.webp',
'/media/photos/certificados/Certificado-Praticas-Suporte-Storage.webp',
'/media/photos/certificados/Certificado-MBA-Gestao.webp',
'/media/photos/certificados/Certificado-Diploma-Bacharel.webp',
];

export default function SobrePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [idioma, setIdioma] = useState<"pt" | "en">("pt");
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null); // Adicione o estado firstName
  const router = useRouter();

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      const newIndex = direction === "left" ? scrollIndex - 1 : scrollIndex + 1;
      const maxIndex = certificados.length - 5;
      const clampedIndex = Math.max(0, Math.min(maxIndex, newIndex));
      setScrollIndex(clampedIndex);
      carouselRef.current.scrollTo({ left: clampedIndex * (width / 5), behavior: "smooth" });
    }
  };


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause(); // Para a música anterior
      audio.src = audioMap[idioma];
      audio.load();
      audio.play();
      setIsPlaying(true);
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

    // Adicione o useEffect para buscar o nome do usuário
    useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
    }, []);


    useEffect(() => {
    const saudacaoExecutada = sessionStorage.getItem("saudacaoSobreExecutada");
    const storedFirstName = sessionStorage.getItem("firstName");

    if ("speechSynthesis" in window && !saudacaoExecutada) {
    const hora = new Date().getHours();
    const nome =
    storedFirstName
    ? storedFirstName.split("@")[0].replace(/^./, c => c.toUpperCase())
    : "visitante";

    let saudacaoPt = `Olá${nome ? `, ${nome}` : ""}! Esta é a página sobre André Pereira. Aqui você terá uma visão breve e direta sobre sua trajetória e experiência profissional. As demais páginas complementam essa introdução e ajudam a formar uma percepção mais completa. Aproveite a leitura e obrigado pela visita.`;

    let saudacaoEn = `Hello${nome ? `, ${nome}` : ""}! This is the page about André Pereira. Here, you'll get a brief and direct overview of his professional background. The other sections will complement this introduction and help you form a more complete picture. Enjoy your reading, and thank you for visiting!`;

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
          <Image
              src="/media/photos/icone-security.webp"
              alt="Logo da Segurança"
              width={400}
              height={400}
              priority
              className="mx-auto mb-4 animate-pulse logo-neon"
              style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }}
            />


          <h1 className="text-xl text-theme-primary font-bold">Carregando Sobre o Profissional - Andre Pereira...</h1>
        </motion.div>
      </div>
      </div>
    );
  }

 return (
    <div className="flex flex-col gap-10">

      {/* Botões flutuantes fixos */}
      <div className="fixed top-5 right-23 z-20 flex gap-2">
        <button className="toggle-mode border-theme-primary" onClick={() => router.push("/profissional")}> <ArrowRight className="w-8 h-8" /></button>
      </div>

      <audio ref={audioRef} />
      <div className="fixed top-32 right-23 z-20">
         <button className="toggle-mode border-theme-primary" onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>{idioma === "pt" ? "EN" : "PT"}</button>
      </div>

      <div className="fixed top-32 right-8 z-20">
         <button className="toggle-mode border-theme-primary" onClick={handlePlay}>{isPlaying ? <Square className="w-8 h-8" /> : <Music className="w-8 h-8" />}</button>
      </div>




      {/* Container de Imagem + Texto */}
      <div className="flex flex-col lg:flex-row z-50 mt-4 items-center justify-center gap-8">

        {/* 📸 Imagem */}
        <div className="flex-shrink-0">
          <Image
            src="/media/photos/andre-pereira.webp"
            alt="André Pereira"
            width={170}
            height={550}
            className="rounded-lg shadow-xl"
          />
        </div>

        {/* 📝 Texto */}
        <div className="max-w-2xl text-justify leading-relaxed text-white">
          {idioma === "pt" ? (
            <>
              <p>
                André Pereira, 55 anos, residente em Campinas - SP. Casado e pai de dois filhos. Profissional atuante na área de <strong>TELECOM e INFRAESTRUTURA</strong>, com mais de <strong>15 anos de experiência</strong>.
                <br /><br />
                Com amplo conhecimento técnico, domina cabeamento estruturado, redes LAN/WAN/WIFI, switches Layer 2 e 3, entrega de portas seguras, servidores Windows e Linux, segurança com firewall Fortinet, monitoramento por CFTV e protocolos de roteamento como BGP, OSPF, EIGRP e RIP.
                <br /><br />
                Possui certificações Fortinet NSE1, NSE2, Oracle OCI e diversos cursos na área de segurança da informação com domínio de frameworks como NIST e MITRE ATT&CK.
                Seu diferencial está no conhecimento prático e na constante atualização frente às tendências e governança da área.
              </p>
            </>
          ) : (
            <>
              <p>
                André Pereira, 55 years old, lives in Campinas - SP, Brazil. Married and father of two. Active professional in the <strong>TELECOM and INFRASTRUCTURE</strong> field with over <strong>15 years of experience</strong>.
                <br /><br />
                With broad technical expertise, he masters structured cabling, LAN/WAN/WIFI networks, Layer 2 and 3 switches, secure port delivery, Windows and Linux servers, Fortinet firewall security, CCTV monitoring, and routing protocols such as BGP, OSPF, EIGRP, and RIP.
                <br /><br />
                He holds certifications such as Fortinet NSE1, NSE2, Oracle OCI, and has completed several cybersecurity courses, with proficiency in frameworks like NIST and MITRE ATT&CK.
                His differential lies in practical knowledge and constant updating in line with industry trends and governance.
              </p>
            </>
          )}
        </div>
      </div>


      {/* 🎖️ Carrossel de Certificados */}
      <div className="text-center relative bottom-24">
        <h2 className="text-2xl font-bold text-theme-primary mb-4">
          Certificados
        </h2>
        <Slider {...settings}>
          {certificados.map((src, idx) => (
            <div
              key={idx}
              onClick={() => router.push("/certificados")}
              className="slick-slide-item cursor-pointer rounded-xl shadow-md border border-theme-primary hover:shadow-xl"
            >
              <Image
                src={src}
                alt={`Certificado ${idx + 1}`}
                width={190}
                height={140}
                className="object-contain rounded-xl mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}