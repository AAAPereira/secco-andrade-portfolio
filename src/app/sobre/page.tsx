// pages/sobre/page.tsx (ou o caminho do seu arquivo SobrePage)

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useIdioma } from "@/app/components/idioma/IdiomaContext"; // Certifique-se que o caminho está correto

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
  const { idioma } = useIdioma(); // Hook para gerenciar o idioma
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();

  // Configurações do slider de certificados (React-Slick)
  const settings = {
    dots: true,
    infinite: false, // Pode ser true se quiser loop infinito nos certificados
    speed: 500,
    slidesToShow: 6, // Ajustado para 6 por padrão (desktops médios)
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } }, // Para telas muito grandes
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // lg: breakpoint
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // md: breakpoint
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // sm: breakpoint (tablets em portrait)
      { breakpoint: 480, settings: { slidesToShow: 1 } },  // Para mobile
    ],
  };

  // Simula o carregamento inicial da página
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Busca o nome do usuário na sessão
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);

  // Tela de Carregamento
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

            <h1 className="text-xl text-theme-primary font-bold">Carregando Skill Completo...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  // Conteúdo Principal da Página Sobre
  return (

    <div className="grid grid-cols-2 md:grid-cols-12 gap-6">
      <div className="lg:col-span-4 mt-12 z-50 w-full flex flex-col justify-center items-center">
        <Image
          src="/media/photos/andre-pereira.webp"
          alt="Foto de André Pereira"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-16 md:w-24 lg:w-40 h-auto"
        />
      </div>

      <div className="lg:col-span-5 mt-6 w-full flex flex-col justify-center items-center">
        {idioma === "pt" ? (
          <p>
            André Pereira, 55 anos, residente em Campinas - SP. Casado e pai de dois filhos.
            Profissional atuante na área de <strong>TELECOM e INFRAESTRUTURA</strong>, com mais
            de <strong>15 anos de experiência</strong>.
            <br />
            <br />
            Com amplo conhecimento técnico, domina cabeamento estruturado, redes LAN/WAN/WIFI,
            switches Layer 2 e 3, entrega de portas seguras, servidores Windows e Linux,
            segurança com firewall Fortinet, monitoramento por CFTV e protocolos de roteamento
            como BGP, OSPF, EIGRP e RIP.
            <br />
            <br />
            Possui certificações Fortinet NSE1, NSE2, Oracle OCI e diversos cursos na área de
            segurança da informação com domínio de frameworks como NIST e MITRE ATT&CK. Seu
            diferencial está no conhecimento prático e na constante atualização frente às
            tendências e governança da área.
          </p>
        ) : (
          <p>
            André Pereira, 55 years old, lives in Campinas - SP, Brazil. Married and father of
            two. Active professional in the <strong>TELECOM and INFRASTRUCTURE</strong> field with
            over <strong>15 years of experience</strong>.
            <br />
            <br />
            With broad technical expertise, he masters structured cabling, LAN/WAN/WIFI networks,
            Layer 2 and 3 switches, secure port delivery, Windows and Linux servers, Fortinet
            firewall security, CCTV monitoring, and routing protocols such as BGP, OSPF, EIGRP,
            and RIP.
            <br />
            <br />
            He holds certifications such as Fortinet NSE1, NSE2, Oracle OCI, and has completed
            several cybersecurity courses, with proficiency in frameworks like NIST and MITRE
            ATT&CK. His differential lies in practical knowledge and constant updating in line
            with industry trends and governance.
          </p>
        )}
      </div>

      <div className="col-span-full mt-8 lg:mt-[-6rem] space-y-6 max-w-full overflow-hidden">
        <h2 className="text-2xl font-bold text-theme-primary mb-4 text-center">Certificados</h2>
        <Slider {...settings}>
          {certificados.map((src, idx) => (
            <div
              key={idx}
              onClick={() => router.push("/certificados")}
              className="slick-slide-item cursor-pointer bg-gray-800 rounded-xl shadow-md border border-theme-primary hover:shadow-xl p-2" // Adicionado padding no item do slider
            >
              <Image
                src={src}
                alt={`Certificado ${idx + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-full h-auto object-contain rounded-xl mx-auto" // w-full e h-auto para responsividade
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
