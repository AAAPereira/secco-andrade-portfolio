// data/detailedSkillsTexts.tsx
"use client";

// Definição da interface para cada item de habilidade detalhada
export interface DetailedSkillItem {
  ano: string; // Usado como um identificador temático aqui (ex: SEGURANÇA_1)
  titulo: string;
  tecnologias: string;
  habilidades: string;
  impacto: string;
  translations: {
    PT: {
      ano: string;
      titulo: string;
      tecnologias: string;
      habilidades: string;
      impacto: string;
    };
    EN: {
      ano: string;
      titulo: string;
      tecnologias: string;
      habilidades: string;
      impacto: string;
    };
  };
}

// Array de dados das habilidades detalhadas
export const detailedSkillsData: DetailedSkillItem[] = [
  // --- SEGURANÇA DA INFORMAÇÃO ---
  {
    ano: "SEGURANÇA_1",
    titulo: "FERRAMENTAS ESSENCIAIS EM SEGURANÇA",
    tecnologias: "✔️ SIEM (Splunk, IBM QRadar, Microsoft Sentinel, Elastic SIEM), ✔️ EDR/XDR (CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint), ✔️ NGFW (FortiGate, Palo Alto, Cisco Firepower, Check Point), ✔️ IDS/IPS (Snort, Suricata), ✔️ Scanners de Vulnerabilidade (Nessus, Qualys, OpenVAS).",
    habilidades: "✔️ Coleta e correlação de logs de segurança, ✔️ Detecção e resposta a ameaças avançadas em endpoints e na rede, ✔️ Inspeção profunda de pacotes e controle de acesso baseado em identidade, ✔️ Prevenção de intrusões e bloqueio de ataques modernos, ✔️ Identificação e remediação proativa de vulnerabilidades em sistemas e aplicações.",
    impacto: "✔️ Detecção precoce de ameaças e violações de políticas, ✔️ Mitigação eficaz de ataques complexos (ransomware, fileless), ✔️ Redução significativa da superfície de ataque, ✔️ Proteção contínua da confidencialidade, integridade e disponibilidade dos dados, ✔️ Melhoria da postura de segurança e conformidade.",
    translations: {
      PT: {
        ano: "SEGURANÇA_1",
        titulo: "FERRAMENTAS ESSENCIAIS EM SEGURANÇA",
        tecnologias: "✔️ SIEM (Splunk, IBM QRadar, Microsoft Sentinel, Elastic SIEM), ✔️ EDR/XDR (CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint), ✔️ NGFW (FortiGate, Palo Alto, Cisco Firepower, Check Point), ✔️ IDS/IPS (Snort, Suricata), ✔️ Scanners de Vulnerabilidade (Nessus, Qualys, OpenVAS).",
        habilidades: "✔️ Coleta e correlação de logs de segurança, ✔️ Detecção e resposta a ameaças avançadas em endpoints e na rede, ✔️ Inspeção profunda de pacotes e controle de acesso baseado em identidade, ✔️ Prevenção de intrusões e bloqueio de ataques modernos, ✔️ Identificação e remediação proativa de vulnerabilidades em sistemas e aplicações.",
        impacto: "✔️ Detecção precoce de ameaças e violações de políticas, ✔️ Mitigação eficaz de ataques complexos (ransomware, fileless), ✔️ Redução significativa da superfície de ataque, ✔️ Proteção contínua da confidencialidade, integridade e disponibilidade dos dados, ✔️ Melhoria da postura de segurança e conformidade.",
      },
      EN: {
        ano: "SECURITY_1",
        titulo: "ESSENTIAL SECURITY TOOLS",
        tecnologias: "✔️ SIEM (Splunk, IBM QRadar, Microsoft Sentinel, Elastic SIEM), ✔️ EDR/XDR (CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint), ✔️ NGFW (FortiGate, Palo Alto, Cisco Firepower, Check Point), ✔️ IDS/IPS (Snort, Suricata), ✔️ Vulnerability Scanners (Nessus, Qualys, OpenVAS).",
        habilidades: "✔️ Security log collection and correlation, ✔️ Detection and response to advanced threats on endpoints and the network, ✔️ Deep packet inspection and identity-based access control, ✔️ Intrusion prevention and blocking of modern attacks, ✔️ Proactive identification and remediation of vulnerabilities in systems and applications.",
        impacto: "✔️ Early detection of threats and policy violations, ✔️ Effective mitigation of complex attacks (ransomware, fileless), ✔️ Significant reduction of the attack surface, ✔️ Continuous protection of data confidentiality, integrity, and availability, ✔️ Improved security posture and compliance.",
      },
    },
},
    { // <-- VÍRGULA ADICIONADA AQUI
      ano: "SEGURANÇA_2",
      titulo: "WINDOWS SERVER E SEGURANÇA",
      tecnologias: "✔️ Active Directory Domain Services (AD DS), ✔️ Group Policy Objects (GPO), ✔️ Windows Defender Firewall, ✔️ BitLocker Drive Encryption, ✔️ Windows Server Update Services (WSUS), ✔️ Windows Event Log / Event Viewer.",
      habilidades: "✔️ Gerenciamento centralizado de identidade e acesso (IAM), ✔️ Aplicação e imposição de políticas de segurança em larga escala, ✔️ Controle de tráfego de rede host-based e isolamento de aplicações, ✔️ Criptografia de disco completo para proteção de dados em repouso, ✔️ Distribuição e aplicação rápida de atualizações de segurança, ✔️ Análise forense e auditoria de eventos de segurança.",
      impacto: "✔️ Gerenciamento de acesso robusto e seguro, ✔️ Padronização do ambiente e redução da superfície de ataque, ✔️ Proteção granular contra ameaças internas e externas, ✔️ Confidencialidade de dados críticos em caso de perda/roubo, ✔️ Fechamento rápido de vulnerabilidades e manutenção da higiene de segurança, ✔️ Capacidade aprimorada de investigação e resposta a incidentes.",
      translations: {
        PT: {
          ano: "SEGURANÇA_2",
          titulo: "WINDOWS SERVER E SEGURANÇA",
          tecnologias: "✔️ Active Directory Domain Services (AD DS), ✔️ Group Policy Objects (GPO), ✔️ Windows Defender Firewall, ✔️ BitLocker Drive Encryption, ✔️ Windows Server Update Services (WSUS), ✔️ Windows Event Log / Event Viewer.",
          habilidades: "✔️ Gerenciamento centralizado de identidade e acesso (IAM), ✔️ Aplicação e imposição de políticas de segurança em larga escala, ✔️ Controle de tráfego de rede host-based e isolamento de aplicações, ✔️ Criptografia de disco completo para proteção de dados em repouso, ✔️ Distribuição e aplicação rápida de atualizações de segurança, ✔️ Análise forense e auditoria de eventos de segurança.",
          impacto: "✔️ Gerenciamento de acesso robusto e seguro, ✔️ Padronização do ambiente e redução da superfície de ataque, ✔️ Proteção granular contra ameaças internas e externas, ✔️ Confidencialidade de dados críticos em caso de perda/roubo, ✔️ Fechamento rápido de vulnerabilidades e manutenção da higiene de segurança, ✔️ Capacidade aprimorada de investigação e resposta a incidentes.",
        },
        EN: {
          ano: "SECURITY_2",
          titulo: "WINDOWS SERVER AND SECURITY",
          tecnologias: "✔️ Active Directory Domain Services (AD DS), ✔️ Group Policy Objects (GPO), ✔️ Windows Defender Firewall, ✔️ BitLocker Drive Encryption, ✔️ Windows Server Update Services (WSUS), ✔️ Windows Event Log / Event Viewer.",
          habilidades: "✔️ Centralized identity and access management (IAM), ✔️ Large-scale application and enforcement of security policies, ✔️ Host-based network traffic control and application isolation, ✔️ Full-disk encryption for data protection at rest, ✔️ Rapid distribution and application of security updates, ✔️ Forensic analysis and security event auditing.",
          impacto: "✔️ Robust and secure access management, ✔️ Environment standardization and attack surface reduction, ✔️ Granular protection against internal and external threats, ✔️ Confidentiality of critical data in case of loss/theft, ✔️ Rapid closing of vulnerabilities and maintenance of security hygiene, ✔️ Enhanced incident investigation and response capability.",
        },
      },
    },
    {
      ano: "SEGURANÇA_3",
      titulo: "GERENCIAMENTO DE ACESSO E AUTENTICAÇÃO",
      tecnologias: "✔️ TACACS+ (Cisco), ✔️ RADIUS, ✔️ NPS (Network Policy Server - Windows Server), ✔️ Padrão 802.1x.",
      habilidades: "✔️ Configuração e gerenciamento de controle de acesso granular em dispositivos de rede (TACACS+), ✔️ Centralização de autenticação e autorização para acesso à rede (RADIUS), ✔️ Implementação e aplicação de políticas de acesso com base em identidade (NPS), ✔️ Autenticação baseada em porta para acesso seguro à rede (802.1x).",
      impacto: "✔️ Auditoria detalhada e controle de comandos de administradores de rede, ✔️ Autenticação forte de usuários e dispositivos antes do acesso à rede, ✔️ Prevenção de acesso não autorizado e segmentação dinâmica de VLANs, ✔️ Aumento da segurança de acesso em redes com e sem fio.",
      translations: {
        PT: {
          ano: "SEGURANÇA_3",
          titulo: "GERENCIAMENTO DE ACESSO E AUTENTICAÇÃO",
          tecnologias: "✔️ TACACS+ (Cisco), ✔️ RADIUS, ✔️ NPS (Network Policy Server - Windows Server), ✔️ Padrão 802.1x.",
          habilidades: "✔️ Configuração e gerenciamento de controle de acesso granular em dispositivos de rede (TACACS+), ✔️ Centralização de autenticação e autorização para acesso à rede (RADIUS), ✔️ Implementação e aplicação de políticas de acesso com base em identidade (NPS), ✔️ Autenticação baseada em porta para acesso seguro à rede (802.1x).",
          impacto: "✔️ Auditoria detalhada e controle de comandos de administradores de rede, ✔️ Autenticação forte de usuários e dispositivos antes do acesso à rede, ✔️ Prevenção de acesso não autorizado e segmentação dinâmica de VLANs, ✔️ Aumento da segurança de acesso em redes com e sem fio.",
        },
        EN: {
          ano: "SECURITY_3",
          titulo: "ACCESS AND AUTHENTICATION MANAGEMENT",
          tecnologias: "✔️ TACACS+ (Cisco), ✔️ RADIUS, ✔️ NPS (Network Policy Server - Windows Server), ✔️ 802.1x Standard.",
          habilidades: "✔️ Configuration and management of granular access control on network devices (TACACS+), ✔️ Centralization of authentication and authorization for network access (RADIUS), ✔️ Implementation and application of identity-based access policies (NPS), ✔️ Port-based authentication for secure network access (802.1x).",
          impacto: "✔️ Detailed auditing and control of network administrator commands, ✔️ Strong authentication of users and devices before network access, ✔️ Prevention of unauthorized access and dynamic VLAN segmentation, ✔️ Increased access security on wired and wireless networks.",
        },
      },
    },
    // --- INFRAESTRUTURA (TI) ---
    {
      ano: "INFRA_1",
      titulo: "WINDOWS SERVER: SERVIDOR COMPLETO NO AR",
      tecnologias: "✔️ Active Directory (AD DS), ✔️ DNS Server, ✔️ DHCP Server, ✔️ File and Storage Services, ✔️ Print Services, ✔️ IIS (Internet Information Services), ✔️ Hyper-V, ✔️ Veeam Backup & Replication, Commvault, Acronis, ✔️ Zabbix, Nagios, PRTG Network Monitor.",
      habilidades: "✔️ Implantação e administração de roles essenciais (AD DS, DNS, DHCP, IIS), ✔️ Gerenciamento de compartilhamentos de arquivos e impressão, ✔️ Virtualização de servidores e otimização de hardware (Hyper-V), ✔️ Implementação de estratégias de backup e recuperação de desastres (DR), ✔️ Monitoramento proativo da saúde e desempenho da infraestrutura.",
      impacto: "✔️ Centralização e organização de identidades e recursos, ✔️ Resolução de nomes e atribuição IP eficientes, ✔️ Proteção robusta contra perda de dados e tempo de inatividade, ✔️ Otimização de recursos através de virtualização, ✔️ Manutenção da continuidade dos negócios e alerta proativo de problemas.",
      translations: {
        PT: {
          ano: "INFRA_1",
          titulo: "WINDOWS SERVER: SERVIDOR COMPLETO NO AR",
          tecnologias: "✔️ Active Directory (AD DS), ✔️ DNS Server, ✔️ DHCP Server, ✔️ File and Storage Services, ✔️ Print Services, ✔️ IIS (Internet Information Services), ✔️ Hyper-V, ✔️ Veeam Backup & Replication, Commvault, Acronis, ✔️ Zabbix, Nagios, PRTG Network Monitor.",
          habilidades: "✔️ Implantação e administração de roles essenciais (AD DS, DNS, DHCP, IIS), ✔️ Gerenciamento de compartilhamentos de arquivos e impressão, ✔️ Virtualização de servidores e otimização de hardware (Hyper-V), ✔️ Implementação de estratégias de backup e recuperação de desastres (DR), ✔️ Monitoramento proativo da saúde e desempenho da infraestrutura.",
          impacto: "✔️ Centralização e organização de identidades e recursos, ✔️ Resolução de nomes e atribuição IP eficientes, ✔️ Proteção robusta contra perda de dados e tempo de inatividade, ✔️ Otimização de recursos através de virtualização, ✔️ Manutenção da continuidade dos negócios e alerta proativo de problemas.",
        },
        EN: {
          ano: "INFRA_1",
          titulo: "WINDOWS SERVER: COMPLETE SERVER ON AIR",
          tecnologias: "✔️ Active Directory (AD DS), ✔️ DNS Server, ✔️ DHCP Server, ✔️ File and Storage Services, ✔️ Print Services, ✔️ IIS (Internet Information Services), ✔️ Hyper-V, ✔️ Veeam Backup & Replication, Commvault, Acronis, ✔️ Zabbix, Nagios, PRTG Network Monitor.",
          habilidades: "✔️ Deployment and administration of essential roles (AD DS, DNS, DHCP, IIS), ✔️ Management of file and print shares, ✔️ Server virtualization and hardware optimization (Hyper-V), ✔️ Implementation of backup and disaster recovery (DR) strategies, ✔️ Proactive monitoring of infrastructure health and performance.",
          impacto: "✔️ Centralization and organization of identities and resources, ✔️ Efficient name resolution and IP assignment, ✔️ Robust protection against data loss and downtime, ✔️ Resource optimization through virtualization, ✔️ Maintenance of business continuity and proactive problem alerting.",
        },
      },
    },
    {
      ano: "INFRA_2",
      titulo: "LINUX: GERENCIAMENTO DE REDE E DESKTOP",
      tecnologias: "✔️ Comandos de rede (`ip`, `ss`, `ping`, `traceroute`, `mtr`), ✔️ Scanners de rede (`nmap`), ✔️ Análise de pacotes (`tcpdump`, Wireshark), ✔️ Firewalls host-based (`iptables`, `firewalld`), ✔️ Ferramentas de segurança (`fail2ban`, SSH hardening, `clamav`), ✔️ Auditoria de Logs (`journalctl`, `rsyslog`), ✔️ Gerenciadores de Pacotes (APT, YUM/DNF, Pacman), ✔️ Ambientes de Desktop (GNOME, KDE Plasma, XFCE), ✔️ Shell Scripting (Bash).",
      habilidades: "✔️ Configuração avançada de rede e roteamento em Linux, ✔️ Diagnóstico e depuração de problemas de comunicação, ✔️ Mapeamento de rede e identificação de serviços, ✔️ Implementação de firewalls e regras de segurança, ✔️ Proteção contra ataques de força bruta e hardening de SSH, ✔️ Análise de logs para detecção de atividades suspeitas, ✔️ Gerenciamento eficiente de software e sistemas operacionais, ✔️ Automação de tarefas administrativas com scripts.",
      impacto: "✔️ Redes Linux robustas e seguras, ✔️ Diagnóstico rápido e preciso de problemas de rede, ✔️ Redução da superfície de ataque em hosts Linux, ✔️ Automação de rotinas para maior eficiência operacional, ✔️ Ambientes de trabalho desktop estáveis e produtivos.",
      translations: {
        PT: {
          ano: "INFRA_2",
          titulo: "LINUX: GERENCIAMENTO DE REDE E DESKTOP",
          tecnologias: "✔️ Comandos de rede (`ip`, `ss`, `ping`, `traceroute`, `mtr`), ✔️ Scanners de rede (`nmap`), ✔️ Análise de pacotes (`tcpdump`, Wireshark), ✔️ Firewalls host-based (`iptables`, `firewalld`), ✔️ Ferramentas de segurança (`fail2ban`, SSH hardening, `clamav`), ✔️ Auditoria de Logs (`journalctl`, `rsyslog`), ✔️ Gerenciadores de Pacotes (APT, YUM/DNF, Pacman), ✔️ Ambientes de Desktop (GNOME, KDE Plasma, XFCE), ✔️ Shell Scripting (Bash).",
          habilidades: "✔️ Configuração avançada de rede e roteamento em Linux, ✔️ Diagnóstico e depuração de problemas de comunicação, ✔️ Mapeamento de rede e identificação de serviços, ✔️ Implementação de firewalls e regras de segurança, ✔️ Proteção contra ataques de força bruta e hardening de SSH, ✔️ Análise de logs para detecção de atividades suspeitas, ✔️ Gerenciamento eficiente de software e sistemas operacionais, ✔️ Automação de tarefas administrativas com scripts.",
          impacto: "✔️ Redes Linux robustas e seguras, ✔️ Diagnóstico rápido e preciso de problemas de rede, ✔️ Redução da superfície de ataque em hosts Linux, ✔️ Automação de rotinas para maior eficiência operacional, ✔️ Ambientes de trabalho desktop estáveis e produtivos.",
        },
        EN: {
          ano: "INFRA_2",
          titulo: "LINUX: NETWORK AND DESKTOP MANAGEMENT",
          tecnologias: "✔️ Network commands (`ip`, `ss`, `ping`, `traceroute`, `mtr`), ✔️ Network scanners (`nmap`), ✔️ Packet analysis (`tcpdump`, Wireshark), ✔️ Host-based firewalls (`iptables`, `firewalld`), ✔️ Security tools (`fail2ban`, SSH hardening, `clamav`), ✔️ Log Auditing (`journalctl`, `rsyslog`), ✔️ Package Managers (APT, YUM/DNF, Pacman), ✔️ Desktop Environments (GNOME, KDE Plasma, XFCE), ✔️ Shell Scripting (Bash).",
          habilidades: "✔️ Advanced network and routing configuration in Linux, ✔️ Diagnosis and debugging of communication problems, ✔️ Network mapping and service identification, ✔️ Implementation of firewalls and security rules, ✔️ Protection against brute-force attacks and SSH hardening, ✔️ Log analysis for suspicious activity detection, ✔️ Efficient software and operating system management, ✔️ Automation of administrative tasks with scripts.",
          impacto: "✔️ Robust and secure Linux networks, ✔️ Fast and accurate diagnosis of network problems, ✔️ Reduced attack surface on Linux hosts, ✔️ Automation of routines for greater operational efficiency, ✔️ Stable and productive desktop work environments.",
        },
      },
    },

    {
      ano: "INFRA_3",
      titulo: "LAN, SWITCHES E CABEAMENTO",
      tecnologias: "✔️ Switches (Camada 2 e 3), ✔️ VLANs (Virtual Local Area Networks), ✔️ STP/RSTP/MSTP (Spanning Tree Protocol), ✔️ BPDU (Bridge Protocol Data Unit), ✔️ PortFast / BPDU Guard, ✔️ UTP (Unshielded Twisted Pair), ✔️ Coaxial (CFTV), ✔️ Fibra Óptica, ✔️ Conversores de Mídia, ✔️ Transceiver (SFP/SFP+).",
      habilidades: "✔️ Segmentação de redes lógicas e gerenciamento de broadcast (VLANs), ✔️ Prevenção de loops de camada 2 e garantia de redundância (STP), ✔️ Proteção contra loops acidentais e dispositivos não autorizados (BPDU Guard), ✔️ Planejamento e implementação de infraestrutura de cabeamento estruturado (UTP, Coaxial, Fibra Óptica), ✔️ Implantação e gerenciamento de conectividade óptica (Conversores de Mídia, Transceivers SFP/SFP+).",
      impacto: "✔️ Redução de broadcast storms e aumento da segurança em LANs, ✔️ Resiliência e estabilidade da rede local, ✔️ Suporte a diferentes tipos de mídia para diversas aplicações (dados, vídeo, longas distâncias), ✔️ Conectividade de alta velocidade e imunidade a interferências eletromagnéticas com fibra óptica.",
      translations: {
        PT: {
          ano: "INFRA_3",
          titulo: "LAN, SWITCHES E CABEAMENTO",
          tecnologias: "✔️ Switches (Camada 2 e 3), ✔️ VLANs (Virtual Local Area Networks), ✔️ STP/RSTP/MSTP (Spanning Tree Protocol), ✔️ BPDU (Bridge Protocol Data Unit), ✔️ PortFast / BPDU Guard, ✔️ UTP (Unshielded Twisted Pair), ✔️ Coaxial (CFTV), ✔️ Fibra Óptica, ✔️ Conversores de Mídia, ✔️ Transceiver (SFP/SFP+).",
          habilidades: "✔️ Segmentação de redes lógicas e gerenciamento de broadcast (VLANs), ✔️ Prevenção de loops de camada 2 e garantia de redundância (STP), ✔️ Proteção contra loops acidentais e dispositivos não autorizados (BPDU Guard), ✔️ Planejamento e implementação de infraestrutura de cabeamento estruturado (UTP, Coaxial, Fibra Óptica), ✔️ Implantação e gerenciamento de conectividade óptica (Conversores de Mídia, Transceivers SFP/SFP+).",
          impacto: "✔️ Redução de broadcast storms e aumento da segurança em LANs, ✔️ Resiliência e estabilidade da rede local, ✔️ Suporte a diferentes tipos de mídia para diversas aplicações (dados, vídeo, longas distâncias), ✔️ Conectividade de alta velocidade e imunidade a interferências eletromagnéticas com fibra óptica.",
        },
        EN: {
          ano: "INFRA_3",
          titulo: "LAN, SWITCHES, AND CABLING",
          tecnologias: "✔️ Switches (Layer 2 and 3), ✔️ VLANs (Virtual Local Area Networks), ✔️ STP/RSTP/MSTP (Spanning Tree Protocol), ✔️ BPDU (Bridge Protocol Data Unit), ✔️ PortFast / BPDU Guard, ✔️ UTP (Unshielded Twisted Pair), ✔️ Coaxial (CFTV), ✔️ Fibra Óptica, ✔️ Conversores de Mídia, ✔️ Transceiver (SFP/SFP+).",
          habilidades: "✔️ Logical network segmentation and broadcast management (VLANs), ✔️ Prevention of Layer 2 loops and ensuring redundancy (STP), ✔️ Protection against accidental loops and unauthorized devices (BPDU Guard), ✔️ Planning and implementation of structured cabling infrastructure (UTP, Coaxial, Fiber Optic), ✔️ Deployment and management of optical connectivity (Media Converters, SFP/SFP+ Transceivers).",
          impacto: "✔️ Reduction of broadcast storms and increased security in LANs, ✔️ Resilience and stability of the local network, ✔️ Support for different media types for various applications (data, video, long distances), ✔️ High-speed connectivity and immunity to electromagnetic interference with fiber optics.",
        },
      },
    },
    // --- TELECOM E TELEFONIA ---
    {
      ano: "TELECOM_1",
      titulo: "SISTEMAS DE TELEFONIA E AUTOMAÇÃO",
      tecnologias: "✔️ VoIP (Voice over IP), ✔️ IP PBX (Asterisk, 3CX, Cisco Call Manager, Avaya Aura), ✔️ URA (Unidade de Resposta Audível / IVR), ✔️ SBC (Session Border Controller), ✔️ Blip (Plataforma de automação de conversas), ✔️ CRM Integrado.",
      habilidades: "✔️ Implantação e gerenciamento de sistemas de voz sobre IP, ✔️ Configuração de PABX IP para roteamento e gerenciamento de chamadas, ✔️ Desenvolvimento de fluxos de atendimento automatizados com URA inteligente, ✔️ Proteção e normalização de tráfego VoIP com SBCs, ✔️ Integração de plataformas de chatbot (Blip) com sistemas de CRM, ✔️ Automação de processos de atendimento ao cliente via canais digitais (WhatsApp).",
      impacto: "✔️ Redução de custos em comunicação de voz, ✔️ Integração fluida entre voz e dados, ✔️ Otimização do atendimento ao cliente e experiência do usuário, ✔️ Aumento da segurança e interoperabilidade em ambientes VoIP, ✔️ Personalização e eficiência no engajamento com o cliente, ✔️ Melhoria na produtividade através da automação de tarefas críticas de comunicação.",
      translations: {
        PT: {
          ano: "TELECOM_1",
          titulo: "SISTEMAS DE TELEFONIA E AUTOMAÇÃO",
          tecnologias: "✔️ VoIP (Voice over IP), ✔️ IP PBX (Asterisk, 3CX, Cisco Call Manager, Avaya Aura), ✔️ URA (Unidade de Resposta Audível / IVR), ✔️ SBC (Session Border Controller), ✔️ Blip (Plataforma de automação de conversas), ✔️ CRM Integrado.",
          habilidades: "✔️ Implantação e gerenciamento de sistemas de voz sobre IP, ✔️ Configuração de PABX IP para roteamento e gerenciamento de chamadas, ✔️ Desenvolvimento de fluxos de atendimento automatizados com URA inteligente, ✔️ Proteção e normalização de tráfego VoIP com SBCs, ✔️ Integração de plataformas de chatbot (Blip) com sistemas de CRM, ✔️ Automação de processos de atendimento ao cliente via canais digitais (WhatsApp).",
          impacto: "✔️ Redução de custos em comunicação de voz, ✔️ Integração fluida entre voz e dados, ✔️ Otimização do atendimento ao cliente e experiência do usuário, ✔️ Aumento da segurança e interoperabilidade em ambientes VoIP, ✔️ Personalização e eficiência no engajamento com o cliente, ✔️ Melhoria na produtividade através da automação de tarefas críticas de comunicação.",
        },
        EN: {
          ano: "TELECOM_1",
          titulo: "TELEPHONY SYSTEMS AND AUTOMATION",
          tecnologias: "✔️ VoIP (Voice over IP), ✔️ IP PBX (Asterisk, 3CX, Cisco Call Manager, Avaya Aura), ✔️ IVR (Interactive Voice Response), ✔️ SBC (Session Border Controller), ✔️ Blip (Conversational automation platform), ✔️ Integrated CRM.",
          habilidades: "✔️ Deployment and management of Voice over IP systems, ✔️ IP PBX configuration for call routing and management, ✔️ Development of automated service flows with intelligent IVR, ✔️ VoIP traffic protection and normalization with SBCs, ✔️ Integration of chatbot platforms (Blip) with CRM systems, ✔️ Automation of customer service processes via digital channels (WhatsApp).",
          impacto: "✔️ Reduced voice communication costs, ✔️ Seamless integration between voice and data, ✔️ Optimized customer service and user experience, ✔️ Increased security and interoperability in VoIP environments, ✔️ Personalization and efficiency in customer engagement, ✔️ Improved productivity through automation of critical communication tasks.",
        },
      },
    },
    {
      ano: "TELECOM_2",
      titulo: "QoS PARA VOZ",
      tecnologias: "✔️ QoS (Quality of Service) em redes IP.",
      habilidades: "✔️ Análise e priorização de tráfego de voz em redes IP, ✔️ Implementação de políticas de QoS para garantir qualidade de chamada, ✔️ Diagnóstico e otimização de problemas de latência e jitter para VoIP.",
      impacto: "✔️ Qualidade de chamada superior e experiência do usuário aprimorada em comunicações VoIP, ✔️ Prevenção de interrupções e voz robotizada em chamadas, ✔️ Garantia de desempenho para aplicações de voz críticas em ambientes de rede congestionados.",
      translations: {
        PT: {
          ano: "TELECOM_2",
          titulo: "QoS PARA VOZ",
          tecnologias: "✔️ QoS (Quality of Service) em redes IP.",
          habilidades: "✔️ Análise e priorização de tráfego de voz em redes IP, ✔️ Implementação de políticas de QoS para garantir qualidade de chamada, ✔️ Diagnóstico e otimização de problemas de latência e jitter para VoIP.",
          impacto: "✔️ Qualidade de chamada superior e experiência do usuário aprimorada em comunicações VoIP, ✔️ Prevenção de interrupções e voz robotizada em chamadas, ✔️ Garantia de desempenho para aplicações de voz críticas em ambientes de rede congestionados.",
        },
        EN: {
          ano: "TELECOM_2",
          titulo: "QoS FOR VOICE",
          tecnologias: "✔️ QoS (Quality of Service) on IP networks.",
          habilidades: "✔️ Analysis and prioritization of voice traffic on IP networks, ✔️ Implementation of QoS policies to ensure call quality, ✔️ Diagnosis and optimization of latency and jitter issues for VoIP.",
          impacto: "✔️ Superior call quality and enhanced user experience in VoIP communications, ✔️ Prevention of interruptions and robotic voice in calls, ✔️ Guaranteed performance for critical voice applications in congested network environments.",
        },
      },
    },
    {
      ano: "TELECOM_3",
      titulo: "ROTEADORES MULTI-VENDOR E TROUBLESHOOTING",
      tecnologias: "✔️ Cisco (OSPF, EIGRP, BGP, HSRP, VRRP, GLBP, ACLs, Route Maps, QoS, VRF), ✔️ FortiGate (UTM, NGFW, FortiManager, FortiAnalyzer), ✔️ HP (IMC), ✔️ Huawei (eSight), ✔️ Ferramentas CLI/GUI, SNMP, NetFlow/IPFIX.",
      habilidades: "✔️ Configuração e suporte avançado em diversos vendors (Cisco, FortiGate, HP, Huawei), ✔️ Implementação e gestão de protocolos de roteamento dinâmico e BGP, ✔️ Criação de redes redundantes para alta disponibilidade (HSRP, VRRP, GLBP), ✔️ Otimização de tráfego com QoS e manipulação de rotas com Route Maps, ✔️ Troubleshooting avançado de roteamento (loops, rotas ausentes, latência), ✔️ Monitoramento e análise de fluxo de tráfego de rede.",
      impacto: "✔️ Conectividade de rede robusta e de alta performance, ✔️ Resiliência e continuidade dos serviços de rede, ✔️ Controle granular sobre o tráfego e políticas de segurança, ✔️ Resolução rápida e eficaz de problemas de roteamento e conectividade, ✔️ Visibilidade completa do comportamento da rede para otimização e segurança.",
      translations: {
        PT: {
          ano: "TELECOM_3",
          titulo: "ROTEADORES MULTI-VENDOR E TROUBLESHOOTING",
          tecnologias: "✔️ Cisco (OSPF, EIGRP, BGP, HSRP, VRRP, GLBP, ACLs, Route Maps, QoS, VRF), ✔️ FortiGate (UTM, NGFW, FortiManager, FortiAnalyzer), ✔️ HP (IMC), ✔️ Huawei (eSight), ✔️ Ferramentas CLI/GUI, SNMP, NetFlow/IPFIX.",
          habilidades: "✔️ Configuração e suporte avançado em diversos vendors (Cisco, FortiGate, HP, Huawei), ✔️ Implementação e gestão de protocolos de roteamento dinâmico e BGP, ✔️ Criação de redes redundantes para alta disponibilidade (HSRP, VRRP, GLBP), ✔️ Otimização de tráfego com QoS e manipulação de rotas com Route Maps, ✔️ Troubleshooting avançado de roteamento (loops, rotas ausentes, latência), ✔️ Monitoramento e análise de fluxo de tráfego de rede.",
          impacto: "✔️ Conectividade de rede robusta e de alta performance, ✔️ Resiliência e continuidade dos serviços de rede, ✔️ Controle granular sobre o tráfego e políticas de segurança, ✔️ Resolução rápida e eficaz de problemas de roteamento e conectividade, ✔️ Visibilidade completa do comportamento da rede para otimização e segurança.",
        },
        EN: {
          ano: "TELECOM_3",
          titulo: "MULTI-VENDOR ROUTERS AND TROUBLESHOOTING",
          tecnologias: "✔️ Cisco (OSPF, EIGRP, BGP, HSRP, VRRP, GLBP, ACLs, Route Maps, QoS, VRF), ✔️ FortiGate (UTM, NGFW, FortiManager, FortiAnalyzer), ✔️ HP (IMC), ✔️ Huawei (eSight), ✔️ CLI/GUI Tools, SNMP, NetFlow/IPFIX.",
          habilidades: "✔️ Advanced configuration and support across various vendors (Cisco, FortiGate, HP, Huawei), ✔️ Implementation and management of dynamic routing protocols and BGP, ✔️ Creation of redundant networks for high availability (HSRP, VRRP, GLBP), ✔️ Traffic optimization with QoS and route manipulation with Route Maps, ✔️ Advanced routing troubleshooting (loops, missing routes, latency), ✔️ Network traffic flow monitoring and analysis.",
          impacto: "✔️ Robust and high-performance network connectivity, ✔️ Resilience and continuity of network services, ✔️ Granular control over traffic and security policies, ✔️ Fast and effective resolution of routing and connectivity issues, ✔️ Comprehensive visibility into network behavior for optimization and security.",
        },
      },
    },
];

