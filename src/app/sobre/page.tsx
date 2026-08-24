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

      <div className="grid grid-cols-2 md:grid-cols-12 gap-6 pt-8 lg:-translate-x-12">
          <div className="lg:col-span-4 z-50 w-full flex flex-col justify-start items-center pt-16 translate-y-4 lg:translate-x-12">
        <Image
          src="/media/photos/modelos/modelo20.webp"
          alt="Foto de André Pereira"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-44 md:w-60 lg:w-72 xl:w-80 h-auto object-contain"
        />
      </div>

          <div className="lg:col-span-8 mt-6 w-full flex flex-col justify-center items-center">
              {idioma === "pt" ? (
                  <div className="text-justify leading-[1.55] space-y-4 max-h-[620px] overflow-y-auto pr-4 lg:-translate-x-22"
                      style={{
                          scrollbarWidth: "thin",
                          scrollbarColor: "#00d9ff transparent",
                      }}>
                      <p>
                          Sou André Pereira, tenho 57 anos e resido em Campinas - SP. Sou casado com a Fernanda,
                          pai de dois filhos e avô de cinco netos. Atuo há mais de{" "}
                          <strong>25 anos nas áreas de TELECOM e INFRAESTRUTURA DE TI</strong>,
                          construindo minha experiência em ambientes corporativos que envolvem
                          conectividade, redes, servidores, segurança, monitoramento e continuidade
                          dos serviços.
                      </p>

                      <p>
                          Minha trajetória profissional reúne experiência em operação, implantação
                          e sustentação de ambientes tecnológicos, passando por diferentes cenários
                          de Telecom e Infraestrutura. Ao longo da carreira, atuei na administração
                          e troubleshooting de redes e serviços, implantação de soluções,
                          recuperação de falhas, análise de causa raiz e evolução de ambientes
                          críticos, sempre buscando conciliar disponibilidade, segurança e
                          estabilidade operacional.
                      </p>

                      <p>
                          Atualmente participo do <strong>Projeto FUMEC</strong>, atuando na
                          implantação e integração de infraestrutura de TI e Telecom. O ambiente
                          reúne tecnologias como Proxmox, Linux e Windows, serviços de identidade
                          e autenticação com Active Directory, LDAP e FreeRADIUS, além de recursos
                          de rede, segurança e monitoramento. Nesse contexto, também desenvolvo e
                          evoluo o <strong>AD Replication Mission Control</strong>, utilizando
                          Zabbix e Grafana para consolidar informações de saúde, serviços,
                          utilização de recursos e auditoria de 19 servidores. Minha atuação inclui
                          ainda troubleshooting de backbone, análise de falhas e trabalhos
                          relacionados à infraestrutura óptica e equipamentos de rede.
                      </p>

                      <p>
                          Minha formação acadêmica inclui <strong>MBA em Gestão de Logística</strong>,
                          concluído em 2009, <strong>Pós-Graduação em Gestão Empresarial</strong>,
                          concluída em 2008, e <strong>Graduação em Administração
                              (Análise de Sistemas)</strong>, concluída em 2005, todas pelas Faculdades
                          Fleming COC. Essa formação complementa minha experiência técnica,
                          agregando conhecimentos de gestão, processos e negócio à atuação em
                          Telecom e Infraestrutura de TI.
                      </p>

                      <p>
                          Minha base técnica inclui redes LAN e WAN, ambientes Layer 2 e Layer 3,
                          roteamento, redundância e conectividade utilizando tecnologias como BGP,
                          OSPF, MPLS, HSRP, VRRP e GLBP, além de servidores Windows e Linux,
                          virtualização, segurança e observabilidade. Ao longo da carreira,
                          mantenho também uma rotina contínua de capacitação profissional, com
                          certificações Fortinet NSE1, NSE2 e Oracle OCI, além de estudos em
                          segurança da informação, NIST, MITRE ATT&CK, governança e LGPD. Os
                          principais certificados e comprovantes podem ser consultados na seção{" "}
                          <strong>Certificados</strong> deste portfólio.
                      </p>
                  </div>
              ) : (
                      <div className="text-justify leading-[1.55] space-y-4 max-h-[620px] overflow-y-auto pr-4 lg:-translate-x-22"
                          style={{
                              scrollbarWidth: "thin",
                              scrollbarColor: "#00d9ff transparent",
                          }}>
                      <p>
                          I am André Pereira, 57 years old, based in Campinas, São Paulo, Brazil.
                          I am married, a father of two, and a grandfather of five. I have more
                          than <strong>25 years of experience in TELECOM and IT INFRASTRUCTURE</strong>,
                          building my career in corporate environments involving connectivity,
                          networks, servers, security, monitoring, and service continuity.
                      </p>

                      <p>
                          My professional career combines operations, implementation, and support
                          of technology environments across different Telecom and IT Infrastructure
                          scenarios. Throughout my career, I have worked with network and service
                          administration and troubleshooting, solution implementation, fault
                          recovery, root-cause analysis, and the evolution of critical
                          environments, always seeking to balance availability, security, and
                          operational stability.
                      </p>

                      <p>
                          I am currently involved in the <strong>FUMEC Project</strong>, working
                          on the implementation and integration of IT and Telecom infrastructure.
                          The environment combines technologies such as Proxmox, Linux, and
                          Windows, identity and authentication services using Active Directory,
                          LDAP, and FreeRADIUS, as well as networking, security, and monitoring
                          resources. Within this environment, I also develop and enhance the{" "}
                          <strong>AD Replication Mission Control</strong>, using Zabbix and Grafana
                          to consolidate health, service, resource utilization, and audit
                          information from 19 servers. My work also includes backbone
                          troubleshooting, fault analysis, and activities involving optical
                          infrastructure and network equipment.
                      </p>

                      <p>
                          My academic background includes an <strong>MBA in Logistics
                              Management</strong>, completed in 2009, a{" "}
                          <strong>Postgraduate Degree in Business Management</strong>, completed
                          in 2008, and a <strong>Degree in Business Administration
                              (Systems Analysis)</strong>, completed in 2005, all from Faculdades
                          Fleming COC. This academic background complements my technical
                          experience by adding management, process, and business perspectives to
                          my work in Telecom and IT Infrastructure.
                      </p>

                      <p>
                          My technical background includes LAN and WAN networks, Layer 2 and
                          Layer 3 environments, routing, redundancy, and connectivity using
                          technologies such as BGP, OSPF, MPLS, HSRP, VRRP, and GLBP, as well as
                          Windows and Linux servers, virtualization, security, and observability.
                          Throughout my career, I have also maintained a continuous professional
                          development path, including Fortinet NSE1, NSE2, and Oracle OCI
                          certifications, along with studies in information security, NIST,
                          MITRE ATT&CK, governance, and LGPD. My main certificates and supporting
                          credentials are available in the <strong>Certificates</strong> section
                          of this portfolio.
                      </p>
                  </div>
              )}
      </div>

    </div>
  );
}
