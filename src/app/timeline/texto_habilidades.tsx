// data/timelineTexts.tsx
"use client";

// Definição da interface para cada item da timeline
export interface textoHabilidadesItem {
  ano: string;
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

// Array de dados da timeline
export const timelineData: textoHabilidadesItem[] = [
    {
        ano: "1993",
        titulo: "OPERADOR DE COMPUTADOR",
        tecnologias: "✔️ Mainframe IBM (sala dedicada), ✔️ Linguagem COBOL (programação e automação de jobs), ✔️ Backups usando (UNIDADE DE FITA ROBOTICA IBM), ✔️ Sistemas PASCAL, ✔️ Redes SNA, ✔️ TCP/IP, Endereço IP e Máscara de Sub-rede, ✔️ Criação e tratamento de imagens usando Corel Draw e PhotoShop (LOGO CARNE IPTU, LOGOS EMPRESAS), ✔️ Impressoras Xerox de Grande Volume.",
        habilidades: "✔️ Programação em COBOL (lógica e automação), ✔️ Manipulação de fitas magnéticas para processamento de dados, ✔️ Planejamento e liderança de equipes de produção (até 20 pessoas), ✔️ Gerenciamento de operações críticas e ambientes de alta pressão, ✔️ Capacidade de adaptação em ambientes complexos e tecnológicos, ✔️ Comunicação e colaboração com diferentes perfis (técnicos e gestores).",
        impacto: "✔️ Garantia de produção em massa (campanhas como o projeto Papa Tudo), ✔️ Manutenção da continuidade operacional em ambientes críticos, ✔️ Desenvolvimento de uma base técnica sólida em programação e redes, ✔️ Transformação de um jovem com sonhos em um profissional focado em resultados.",
        translations: {
            PT: {
                ano: "1993",
                titulo: "OPERADOR DE COMPUTADOR",
                tecnologias: "✔️ Mainframe IBM (sala dedicada), ✔️ Linguagem COBOL (programação e automação de jobs), ✔️ Backups usando (UNIDADE DE FITA ROBOTICA IBM), ✔️ Sistemas PASCAL, ✔️ Redes SNA, ✔️ TCP/IP, Endereço IP e Máscara de Sub-rede, ✔️ Criação e tratamento de imagens usando Corel Draw e PhotoShop (LOGO CARNE IPTU, LOGOS EMPRESAS), ✔️ Impressoras Xerox de Grande Volume.",
                habilidades: "✔️ Programação em COBOL (lógica e automação), ✔️ Manipulação de fitas magnéticas para processamento de dados, ✔️ Planejamento e liderança de equipes de produção (até 20 pessoas), ✔️ Gerenciamento de operações críticas e ambientes de alta pressão, ✔️ Capacidade de adaptação em ambientes complexos e tecnológicos, ✔️ Comunicação e colaboração com diferentes perfis (técnicos e gestores).",
                impacto: "✔️ Garantia de produção em massa (campanhas como o projeto Papa Tudo), ✔️ Manutenção da continuidade operacional em ambientes críticos, ✔️ Desenvolvimento de uma base técnica sólida em programação e redes, ✔️ Transformação de um jovem com sonhos em um profissional focado em resultados.",
            },
            EN: {
                ano: "1993",
                titulo: "COMPUTER OPERATOR",
                tecnologias: "✔️ IBM Mainframe (dedicated room), ✔️ COBOL Language (programming and job automation), ✔️ Backups using (IBM ROBOTIC TAPE DRIVE), ✔️ PASCAL Systems, ✔️ SNA Networks, ✔️ TCP/IP, IP Address and Subnet Mask, ✔️ Image creation and editing using Corel Draw and PhotoShop (IPTU MEAT LOGO, COMPANY LOGOS), ✔️ Xerox High Volume Printers.",
                habilidades: "✔️ COBOL Programming (logic and automation), ✔️ Magnetic tape handling for data processing, ✔️ Planning and leadership of production teams (up to 20 people), ✔️ Management of critical operations and high-pressure environments, ✔️ Adaptability in complex and technological environments, ✔️ Communication and collaboration with different profiles (technical and managers).",
                impacto: "✔️ Guarantee of mass production (campaigns like the Papa Tudo project), ✔️ Maintenance of operational continuity in critical environments, ✔️ Development of a solid technical foundation in programming and networks, ✔️ Transformation of a young man with dreams into a results-oriented professional.",
            },
        },
    },
    // ... adicione os outros itens da sua timeline aqui
    {
      ano: "1995",
      titulo: "INSTRUTOR DE INFORMÁTICA",
      tecnologias: "✔️ Sistema (WINDOWS), ✔️Microsoft Office (Word, Excel, PowerPoint, Access), ✔️ Sistema Operacional MS-DOS, ✔️ Automação com Arquivos BATCH (.bat), ✔️ Educação Tecnológica em Ambiente Corporativo e Social.",
      habilidades: "✔️ Ensino e capacitação tecnológica para profissionais (CPQD, IBM, TV Campinas), ✔️ Criação de planilhas avançadas (PROCV, SE) e automação em Excel, ✔️ Adaptação de conteúdo para diferentes públicos (corporativo e social), ✔️ Didática, empatia e comunicação clara, ✔️ Capacidade de inspirar e transformar através da educação.",
      impacto: "✔️ Transformação prática do conhecimento, com impacto direto no dia a dia dos alunos, ✔️ Educação tecnológica para jovens em situação de vulnerabilidade (FAT), ✔️ Fortalecimento do aprendizado técnico e social para diferentes públicos.",
      translations: {
        PT: {
          ano: "1995",
          titulo: "INSTRUTOR DE INFORMÁTICA",
          tecnologias: "✔️ Sistema (WINDOWS), ✔️Microsoft Office (Word, Excel, PowerPoint, Access), ✔️ Sistema Operacional MS-DOS, ✔️ Automação com Arquivos BATCH (.bat), ✔️ Educação Tecnológica em Ambiente Corporativo e Social.",
          habilidades: "✔️ Ensino e capacitação tecnológica para profissionais (CPQD, IBM, TV Campinas), ✔️ Criação de planilhas avançadas (PROCV, SE) e automação em Excel, ✔️ Adaptação de conteúdo para diferentes públicos (corporativo e social), ✔️ Didática, empatia e comunicação clara, ✔️ Capacidade de inspirar e transformar através da educação.",
          impacto: "✔️ Transformação prática do conhecimento, com impacto direto no dia a dia dos alunos, ✔️ Educação tecnológica para jovens em situação de vulnerabilidade (FAT), ✔️ Fortalecimento do aprendizado técnico e social para diferentes públicos.",
        },
        EN: {
          ano: "1995",
          titulo: "IT INSTRUCTOR",
          tecnologias: "✔️ System (WINDOWS), ✔️ Microsoft Office (Word, Excel, PowerPoint, Access), ✔️ MS-DOS Operating System, ✔️ Automation with BATCH Files (.bat), ✔️ Technological Education in Corporate and Social Environments.",
          habilidades: "✔️ Teaching and technological training for professionals (CPQD, IBM, TV Campinas), ✔️ Creation of advanced spreadsheets (VLOOKUP, IF) and automation in Excel, ✔️ Adaptation of content for different audiences (corporate and social), ✔️ Didactics, empathy, and clear communication, ✔️ Ability to inspire and transform through education.",
          impacto: "✔️ Practical transformation of knowledge, with direct impact on students' daily lives, ✔️ Technological education for vulnerable youth (FAT), ✔️ Strengthening technical and social learning for different audiences.",
        },
      },
    },
    {
      ano: "1997",
      titulo: "TECNICO DE SUPORTE",
      tecnologias: "✔️ Redes Locais (LAN), ✔️ Redes Locais (WAN), ✔️ Sistema (WINDOWS SERVER), ✔️ Sistema (WINDOWS CLIENTE), ✔️ Redes Locais (ROTEADORES), ✔️ Redes Locais (SWITCH LAYER2), ✔️ Manutenção de Desktops, ✔️ Impressoras em Rede e Locais, ✔️ Microsoft Office (Word, Excel, Outlook), ✔️ Sistemas de E-mail Corporativo.",
      habilidades: "✔️ Suporte técnico completo (hardware e software), ✔️ Diagnóstico e resolução de problemas, ✔️ Comunicação eficaz com usuários, ✔️ Proatividade e pensamento analítico na solução de problemas, ✔️ Adaptação e resiliência em ambientes de alta pressão.",
      impacto: "✔️ Garantia de satisfação do cliente com suporte ágil e eficaz, ✔️ Redução de tempo de inatividade dos equipamentos dos clientes, ✔️ Fortalecimento da confiança dos clientes na marca e no suporte técnico.",
      translations: {
        PT: {
          ano: "1997",
          titulo: "TECNICO DE SUPORTE",
          tecnologias: "✔️ Redes Locais (LAN), ✔️ Redes Locais (WAN), ✔️ Sistema (WINDOWS SERVER), ✔️ Sistema (WINDOWS CLIENTE), ✔️ Redes Locais (ROTEADORES), ✔️ Redes Locais (SWITCH LAYER2), ✔️ Manutenção de Desktops, ✔️ Impressoras em Rede e Locais, ✔️ Microsoft Office (Word, Excel, Outlook), ✔️ Sistemas de E-mail Corporativo.",
          habilidades: "✔️ Suporte técnico completo (hardware e software), ✔️ Diagnóstico e resolução de problemas, ✔️ Comunicação eficaz com usuários, ✔️ Proatividade e pensamento analítico na solução de problemas, ✔️ Adaptação e resiliência em ambientes de alta pressão.",
          impacto: "✔️ Garantia de satisfação do cliente com suporte ágil e eficaz, ✔️ Redução de tempo de inatividade dos equipamentos dos clientes, ✔️ Fortalecimento da confiança dos clientes na marca e no suporte técnico.",
        },
        EN: {
          ano: "1997",
          titulo: "SUPPORT TECHNICIAN",
          tecnologias: "✔️ Local Area Networks (LAN), ✔️ Wide Area Networks (WAN), ✔️ System (WINDOWS SERVER), ✔️ System (WINDOWS CLIENT), ✔️ Local Area Networks (ROUTERS), ✔️ Local Area Networks (LAYER2 SWITCHES), ✔️ Desktop Maintenance, ✔️ Network and Local Printers, ✔️ Microsoft Office (Word, Excel, Outlook), ✔️ Corporate Email Systems.",
          habilidades: "✔️ Complete technical support (hardware and software), ✔️ Problem diagnosis and resolution, ✔️ Effective communication with users, ✔️ Proactivity and analytical thinking in problem-solving, ✔️ Adaptability in high-pressure environments.",
          impacto: "✔️ Ensuring customer satisfaction with agile and effective support, ✔️ Reduction of customer equipment downtime, ✔️ Strengthening customer confidence in the brand and technical support.",
        },
      },
    },
    {
      ano: "2000",
      titulo: "TECNICO DE SUPORTE",
      tecnologias: "✔️ Diagnóstico e manutenção de hardware (desktops e notebooks), ✔️ Sistemas operacionais Windows e Linux, ✔️ Software de diagnóstico e recuperação de sistema, ✔️ Ferramentas de backup e recuperação de dados.",
      habilidades: "✔️ Diagnóstico rápido de problemas em hardware e software, ✔️ Substituição e reparo de componentes de hardware (discos, memória, fontes), ✔️ Atendimento ao cliente com clareza e empatia, ✔️ Gerenciamento de garantias e pós-venda (relacionamento com clientes), ✔️ Comunicação clara das causas e soluções para os problemas.",
      impacto: "✔️ Garantia de satisfação do cliente com suporte ágil e eficaz, ✔️ Redução de tempo de inatividade dos equipamentos dos clientes, ✔️ Fortalecimento da confiança dos clientes na marca e no suporte técnico.",
      translations: {
        PT: {
          ano: "2000",
          titulo: "TECNICO DE SUPORTE",
          tecnologias: "✔️ Diagnóstico e manutenção de hardware (desktops e notebooks), ✔️ Sistemas operacionais Windows e Linux, ✔️ Software de diagnóstico e recuperação de sistema, ✔️ Ferramentas de backup e recuperação de dados.",
          habilidades: "✔️ Diagnóstico rápido de problemas em hardware e software, ✔️ Substituição e reparo de componentes de hardware (discos, memória, fontes), ✔️ Atendimento ao cliente com clareza e empatia, ✔️ Gerenciamento de garantias e pós-venda (relacionamento com clientes), ✔️ Comunicação clara das causas e soluções para os problemas.",
          impacto: "✔️ Garantia de satisfação do cliente com suporte ágil e eficaz, ✔️ Redução de tempo de inatividade dos equipamentos dos clientes, ✔️ Fortalecimento da confiança dos clientes na marca e no suporte técnico.",
        },
        EN: {
          ano: "2000",
          titulo: "SUPPORT TECHNICIAN",
          tecnologias: "✔️ Hardware diagnostics and maintenance (desktops and notebooks), ✔️ Windows and Linux operating systems, ✔️ System diagnostics and recovery software, ✔️ Data backup and recovery tools.",
          habilidades: "✔️ Rapid diagnosis of hardware and software issues, ✔️ Replacement and repair of hardware components (disks, memory, power supplies), ✔️ Customer service with clarity and empathy, ✔️ Warranty and after-sales management (customer relationship), ✔️ Clear communication of problem causes and solutions.",
          impacto: "✔️ Ensuring customer satisfaction with agile and effective support, ✔️ Reduction of customer equipment downtime, ✔️ Strengthening customer confidence in the brand and technical support.",
        },
      },
    },
    {
      ano: "2001",
      titulo: "TECNICO DE SUPORTE",
      tecnologias: "✔️ Servidores Windows (DHCP, DNS, Active Directory), ✔️ Serviços de Rede (compartilhamento de arquivos, impressão em rede), ✔️ Firewall com Iptables (controle de acesso e segurança), ✔️ ERP Legado (suporte e manutenção).",
      habilidades: "✔️ Administração de servidores Windows (gerenciamento de pastas, usuários e políticas de domínio), ✔️ Suporte técnico a estações de trabalho e impressoras em rede, ✔️ Criação e gerenciamento de usuários no Active Directory, ✔️ Troubleshooting de conectividade e desempenho de rede, ✔️ Backup seguro dos dados e recuperação eficiente, ✔️ Configuração e gerenciamento de políticas de segurança (Iptables).",
      impacto: "✔️ Garantia de continuidade operacional dos servidores e serviços de rede, ✔️ Melhoria na segurança com firewall Iptables, ✔️ Otimização do suporte técnico e gerenciamento de usuários, ✔️ Aumento da eficiência com gerenciamento de políticas de domínio e backup seguro.",
      translations: {
        PT: {
          ano: "2001",
          titulo: "TECNICO DE SUPORTE",
          tecnologias: "✔️ Servidores Windows (DHCP, DNS, Active Directory), ✔️ Serviços de Rede (compartilhamento de arquivos, impressão em rede), ✔️ Firewall com Iptables (controle de acesso e segurança), ✔️ ERP Legado (suporte e manutenção).",
          habilidades: "✔️ Administração de servidores Windows (gerenciamento de pastas, usuários e políticas de domínio), ✔️ Suporte técnico a estações de trabalho e impressoras em rede, ✔️ Criação e gerenciamento de usuários no Active Directory, ✔️ Troubleshooting de conectividade e desempenho de rede, ✔️ Backup seguro dos dados e recuperação eficiente, ✔️ Configuração e gerenciamento de políticas de segurança (Iptables).",
          impacto: "✔️ Garantia de continuidade operacional dos servidores e serviços de rede, ✔️ Melhoria na segurança com firewall Iptables, ✔️ Otimização do suporte técnico e gerenciamento de usuários, ✔️ Aumento da eficiência com gerenciamento de políticas de domínio e backup seguro.",
        },
        EN: {
          ano: "2001",
          titulo: "SUPPORT TECHNICIAN",
          tecnologias: "✔️ Windows Servers (DHCP, DNS, Active Directory), ✔️ Network Services (file sharing, network printing), ✔️ Firewall with Iptables (access control and security), ✔️ Legacy ERP (support and maintenance).",
          habilidades: "✔️ Windows server administration (folder, user, and domain policy management), ✔️ Technical support for workstations and network printers, ✔️ User creation and management in Active Directory, ✔️ Connectivity and network troubleshooting, ✔️ Secure data backup and efficient recovery, ✔️ Configuration and management of security policies (Iptables).",
          impacto: "✔️ Ensuring operational continuity of servers and network services, ✔️ Improved security with Iptables firewall, ✔️ Optimization of technical support and user management, ✔️ Increased efficiency with domain policy management and secure backup.",
        },
      },
    },
    {
      ano: "2002",
      titulo: "TECNICO DE CAMPO E SUPORTE",
      tecnologias: "✔️ Sensores de detecção de envelope (caixas eletrônicos), ✔️ Circuitos de controle e lógica digital, ✔️ Componentes de hardware (displays, teclados, leitores de cartão), ✔️ Diagnóstico de falhas eletrônicas em tempo real, ✔️ Sistema Bancário SPB (Sistema de Pagamentos Brasileiro), ✔️ Aplicação de Paths de Atualização (manutenção e segurança).",
      habilidades: "✔️ Manutenção preventiva, corretiva e preditiva em caixas eletrônicos, ✔️ Diagnóstico preciso de falhas em sensores e hardware crítico, ✔️ Análise lógica de funcionamento e comportamento de sensores, ✔️ Resolução rápida de problemas em ambientes críticos (agências bancárias), ✔️ Comunicação clara com gestores de agência, mantendo a confiança, ✔️ Adaptação em ambientes de alta pressão e vigilância.",
      impacto: "✔️ Garantia de operação contínua dos caixas eletrônicos em agências bancárias, ✔️ Redução do tempo de inatividade dos equipamentos, ✔️ Manutenção da confiança dos gestores e clientes em ambientes críticos.",
      translations: {
        PT: {
          ano: "2002",
          titulo: "TECNICO DE CAMPO E SUPORTE",
          tecnologias: "✔️ Sensores de detecção de envelope (caixas eletrônicos), ✔️ Circuitos de controle e lógica digital, ✔️ Componentes de hardware (displays, teclados, leitores de cartão), ✔️ Diagnóstico de falhas eletrônicas em tempo real, ✔️ Sistema Bancário SPB (Sistema de Pagamentos Brasileiro), ✔️ Aplicação de Paths de Atualização (manutenção e segurança).",
          habilidades: "✔️ Manutenção preventiva, corretiva e preditiva em caixas eletrônicos, ✔️ Diagnóstico preciso de falhas em sensores e hardware crítico, ✔️ Análise lógica de funcionamento e comportamento de sensores, ✔️ Resolução rápida de problemas em ambientes críticos (agências bancárias), ✔️ Comunicação clara com gestores de agência, mantendo a confiança, ✔️ Adaptação em ambientes de alta pressão e vigilância.",
          impacto: "✔️ Garantia de operação contínua dos caixas eletrônicos em agências bancárias, ✔️ Redução do tempo de inatividade dos equipamentos, ✔️ Manutenção da confiança dos gestores e clientes em ambientes críticos.",
        },
        EN: {
          ano: "2002",
          titulo: "FIELD AND SUPPORT TECHNICIAN",
          tecnologias: "✔️ Envelope detection sensors (ATMs), ✔️ Control circuits and digital logic, ✔️ Hardware components (displays, keyboards, card readers), ✔️ Real-time electronic fault diagnosis, ✔️ SPB Banking System (Brazilian Payments System), ✔️ Application of Update Paths (maintenance and security).",
          habilidades: "✔️ Preventive, corrective, and predictive maintenance on ATMs, ✔️ Precise diagnosis of faults in sensors and critical hardware, ✔️ Logical analysis of sensor operation and behavior, ✔️ Rapid problem resolution in critical environments (bank branches), ✔️ Clear communication with branch managers, maintaining trust, ✔️ Adaptation in high-pressure and surveillance environments.",
          impacto: "✔️ Ensuring continuous operation of ATMs in bank branches, ✔️ Reduction of equipment downtime, ✔️ Maintaining the trust of managers and customers in critical environments.",
        },
      },
    },
    {
      ano: "2003",
      titulo: "ANALISTA DE SUPORTE",
      tecnologias: "✔️ Sistemas DATASUL e Volkswagen (migração sistêmica), ✔️ Servidores Novell e Windows, ✔️ Redes LAN e WAN, ✔️ Backup e contingência.",
      habilidades: "✔️ Planejamento e execução de testes de migração, ✔️ Suporte técnico a servidores e redes, ✔️ Gerenciamento de conectividade entre filiais, ✔️ Garantia de integridade de dados e performance dos sistemas, ✔️ Trabalho em equipe com equipes distribuídas (Campinas e São Paulo).",
      impacto: "✔️ Migração sistêmica concluída com sucesso entre as filiais, ✔️ Garantia de operação contínua no novo sistema com downtime mínimo, ✔️ Confiabilidade e segurança dos dados durante a transição.",
      translations: {
        PT: {
          ano: "2003",
          titulo: "ANALISTA DE SUPORTE",
          tecnologias: "✔️ Sistemas DATASUL e Volkswagen (migração sistêmica), ✔️ Servidores Novell e Windows, ✔️ Redes LAN e WAN, ✔️ Backup e contingência.",
          habilidades: "✔️ Planejamento e execução de testes de migração, ✔️ Suporte técnico a servidores e redes, ✔️ Gerenciamento de conectividade entre filiais, ✔️ Garantia de integridade de dados e performance dos sistemas, ✔️ Trabalho em equipe com equipes distribuídas (Campinas e São Paulo).",
          impacto: "✔️ Migração sistêmica concluída com sucesso entre as filiais, ✔️ Garantia de operação contínua no novo sistema com downtime mínimo, ✔️ Confiabilidade e segurança dos dados durante a transição.",
        },
        EN: {
          ano: "2003",
          titulo: "SUPPORT ANALYST",
          tecnologias: "✔️ DATASUL and Volkswagen Systems (system migration), ✔️ Novell and Windows Servers, ✔️ LAN and WAN Networks, ✔️ Backup and contingency.",
          habilidades: "✔️ Planning and execution of migration tests, ✔️ Technical support for servers and networks, ✔️ Management of connectivity between branches, ✔️ Ensuring data integrity and system performance, ✔️ Teamwork with distributed teams (Campinas and São Paulo).",
          impacto: "✔️ System migration successfully completed between branches, ✔️ Ensuring continuous operation on the new system with minimal downtime, ✔️ Data reliability and security during the transition.",
        },
      },
    },
    {
      ano: "2004",
      titulo: "ANALISTA DE SUPORTE",
      tecnologias: "✔️ Redes Coaxiais (topologia BUS), ✔️ Cabeamento Coaxial com terminadores e conectores, ✔️ Diagnóstico de continuidade de sinal, ✔️ Medição de redes com equipamentos especializados.",
      habilidades: "✔️ Diagnóstico e resolução de problemas em redes coaxiais, ✔️ Análise de topologia física e lógica de redes, ✔️ Suporte técnico em ambientes críticos (agências bancárias), ✔️ Interpretação de esquemas e continuidade de sinal, ✔️ Raciocínio lógico para redes legadas e troubleshooting.",
      impacto: "✔️ Garantia de estabilidade nas redes coaxiais de clientes bancários, ✔️ Redução de falhas críticas em ambientes de operação sensível, ✔️ Desenvolvimento de conhecimento técnico sólido em telecomunicações.",
      translations: {
        PT: {
          ano: "2004",
          titulo: "ANALISTA DE SUPORTE",
          tecnologias: "✔️ Redes Coaxiais (topologia BUS), ✔️ Cabeamento Coaxial com terminadores e conectores, ✔️ Diagnóstico de continuidade de sinal, ✔️ Medição de redes com equipamentos especializados.",
          habilidades: "✔️ Diagnóstico e resolução de problemas em redes coaxiais, ✔️ Análise de topologia física e lógica de redes, ✔️ Suporte técnico em ambientes críticos (agências bancárias), ✔️ Interpretação de esquemas e continuidade de sinal, ✔️ Raciocínio lógico para redes legadas e troubleshooting.",
          impacto: "✔️ Garantia de estabilidade nas redes coaxiais de clientes bancários, ✔️ Redução de falhas críticas em ambientes de operação sensível, ✔️ Desenvolvimento de conhecimento técnico sólido em telecomunicações.",
        },
        EN: {
          ano: "2004",
          titulo: "SUPPORT ANALYST",
          tecnologias: "✔️ Coaxial Networks (BUS topology), ✔️ Coaxial Cabling with terminators and connectors, ✔️ Signal continuity diagnostics, ✔️ Network measurement with specialized equipment.",
          habilidades: "✔️ Diagnosis and resolution of problems in coaxial networks, ✔️ Analysis of physical and logical network topology, ✔️ Technical support in critical environments (bank branches), ✔️ Interpretation of diagrams and signal continuity, ✔️ Logical reasoning for legacy networks and troubleshooting.",
          impacto: "✔️ Ensuring stability in coaxial networks of banking clients, ✔️ Reduction of critical failures in sensitive operating environments, ✔️ Development of solid technical knowledge in telecommunications.",
        },
      },
    },
    {
      ano: "2006",
      titulo: "ANALISTA DE SUPORTE",
      tecnologias: "✔️ Redes LAN (cabeamento estruturado CAT5e, switches DELL Gigabit Ethernet), ✔️ Servidores Windows (upgrade e gerenciamento de desempenho com RAID 0), ✔️ BRMA Firewall Linux (segurança de rede e controle de tráfego), ✔️ Wi-Fi Corporativo (ponto de acesso industrial), ✔️ Contrato de outsourcing de impressão (Xerox).",
      habilidades: "✔️ Gestão de infraestrutura de TI (rede, servidores, firewall, Wi-Fi), ✔️ Planejamento e execução de upgrades de infraestrutura, ✔️ Negociação e gerenciamento de contratos de TI (outsourcing de impressão), ✔️ Suporte técnico de N1 a N3 (usuários e chão de fábrica), ✔️ Troubleshooting avançado em ambientes de rede e servidores, ✔️ Documentação técnica e comunicação com stakeholders.",
      impacto: "✔️ Melhoria na performance da rede com switches Gigabit e cabeamento estruturado, ✔️ Aumento da segurança com firewall Linux (BRMA), ✔️ Otimização dos custos com impressão através de outsourcing (Xerox), ✔️ Estabilidade operacional em ambientes críticos (escritório e fábrica).",
      translations: {
        PT: {
          ano: "2006",
          titulo: "ANALISTA DE SUPORTE",
          tecnologias: "✔️ Redes LAN (cabeamento estruturado CAT5e, switches DELL Gigabit Ethernet), ✔️ Servidores Windows (upgrade e gerenciamento de desempenho com RAID 0), ✔️ BRMA Firewall Linux (segurança de rede e controle de tráfego), ✔️ Wi-Fi Corporativo (ponto de acesso industrial), ✔️ Contrato de outsourcing de impressão (Xerox).",
          habilidades: "✔️ Gestão de infraestrutura de TI (rede, servidores, firewall, Wi-Fi), ✔️ Planejamento e execução de upgrades de infraestrutura, ✔️ Negociação e gerenciamento de contratos de TI (outsourcing de impressão), ✔️ Suporte técnico de N1 a N3 (usuários e chão de fábrica), ✔️ Troubleshooting avançado em ambientes de rede e servidores, ✔️ Documentação técnica e comunicação com stakeholders.",
          impacto: "✔️ Melhoria na performance da rede com switches Gigabit e cabeamento estruturado, ✔️ Aumento da segurança com firewall Linux (BRMA), ✔️ Otimização dos custos com impressão através de outsourcing (Xerox), ✔️ Estabilidade operacional em ambientes críticos (escritório e fábrica).",
        },
        EN: {
          ano: "2006",
          titulo: "SUPPORT ANALYST",
          tecnologias: "✔️ LAN Networks (CAT5e structured cabling, DELL Gigabit Ethernet switches), ✔️ Windows Servers (upgrade and performance management with RAID 0), ✔️ BRMA Linux Firewall (network security and traffic control), ✔️ Corporate Wi-Fi (industrial access point), ✔️ Printing outsourcing contract (Xerox).",
          habilidades: "✔️ IT infrastructure management (network, servers, firewall, Wi-Fi), ✔️ Planning and execution of infrastructure upgrades, ✔️ Negotiation and management of IT contracts (printing outsourcing), ✔️ N1 to N3 technical support (users and shop floor), ✔️ Advanced troubleshooting in network and server environments, ✔️ Technical documentation and communication with stakeholders.",
          impacto: "✔️ Improved network performance with Gigabit switches and structured cabling, ✔️ Increased security with Linux firewall (BRMA), ✔️ Optimization of printing costs through outsourcing (Xerox), ✔️ Operational stability in critical environments (office and factory).",
        },
      },
    },
    {
      ano: "2011",
      titulo: "ANALISTA DE SUPORTE E REDES",
      tecnologias: "✔️ Servidores Windows 2012, ✔️ Active Directory (gestão de usuários), ✔️ SAP R3, Lotus Notes, Citrix, ARCSERVER (backup em fita), ✔️ Zabbix e Grafana (monitoramento).",
      habilidades: "✔️ Administração de servidores Windows e Active Directory, ✔️ Gerenciamento de usuários e políticas de domínio, ✔️ Backup e recuperação de dados (ARCSERVER), ✔️ Monitoramento e análise de desempenho (Zabbix e Grafana), ✔️ Suporte técnico avançado (remoto e presencial), ✔️ Liderança técnica com orientação de estagiários, ✔️ Comunicação com equipes internacionais (Índia)",
      impacto: "✔️ Garantia de estabilidade e segurança dos serviços de TI para o cliente PWC, ✔️ Melhoria na visibilidade de desempenho com Zabbix e Grafana, ✔️ Aumento da eficiência no suporte técnico e na gestão de usuários, ✔️ Controle aprimorado de backup e recuperação de dados críticos.",
      translations: {
        PT: {
          ano: "2011",
          titulo: "ANALISTA DE SUPORTE E REDES",
          tecnologias: "✔️ Servidores Windows 2012, ✔️ Active Directory (gestão de usuários), ✔️ SAP R3, Lotus Notes, Citrix, ARCSERVER (backup em fita), ✔️ Zabbix e Grafana (monitoramento).",
          habilidades: "✔️ Administração de servidores Windows e Active Directory, ✔️ Gerenciamento de usuários e políticas de domínio, ✔️ Backup e recuperação de dados (ARCSERVER), ✔️ Monitoramento e análise de desempenho (Zabbix e Grafana), ✔️ Suporte técnico avançado (remoto e presencial), ✔️ Liderança técnica com orientação de estagiários, ✔️ Comunicação com equipes internacionais (Índia)",
          impacto: "✔️ Garantia de estabilidade e segurança dos serviços de TI para o cliente PWC, ✔️ Melhoria na visibilidade de desempenho com Zabbix e Grafana, ✔️ Aumento da eficiência no suporte técnico e na gestão de usuários, ✔️ Controle aprimorado de backup e recuperação de dados críticos.",
        },
        EN: {
          ano: "2011",
          titulo: "SUPPORT AND NETWORK ANALYST",
          tecnologias: "✔️ Windows Server 2012, ✔️ Active Directory (user management), ✔️ SAP R3, Lotus Notes, Citrix, ARCSERVER (tape backup), ✔️ Zabbix and Grafana (monitoring).",
          habilidades: "✔️ Windows server and Active Directory administration, ✔️ User and domain policy management, ✔️ Data backup and recovery (ARCSERVER), ✔️ Performance monitoring and analysis (Zabbix and Grafana), ✔️ Advanced technical support (remote and on-site), ✔️ Technical leadership with guidance of interns, ✔️ Communication with international teams (India)",
          impacto: "✔️ Ensuring stability and security of IT services for the PWC client, ✔️ Improved performance visibility with Zabbix and Grafana, ✔️ Increased efficiency in technical support and user management, ✔️ Enhanced control of critical data backup and recovery.",
        },
      },
    },
    {
      ano: "2014",
      titulo: "ANALISTA DE REDES PLENO",
      tecnologias: "✔️ MPLS (Multi-Protocol Label Switching) para alta disponibilidade, ✔️ Protocolos de Roteamento (BGP, OSPF, VRRP, HSRP, GLBP), ✔️ Frame-Relay, PPP, Multilink, PortChannel, BLD (Business Link Direct), ✔️ SD-WAN com VLCloud, ✔️ Fortinet (FortiGate, FortiAnalyzer, FortiManager), ✔️ Equipamentos Cisco, Huawei, HP.",
      habilidades: "✔️ Configuração e suporte avançado em ambientes MPLS, ✔️ Gestão de redes dinâmicas e redundantes com protocolos avançados, ✔️ Segurança de rede com ACLs e políticas avançadas (Firewall FortiGate), ✔️ Planejamento e execução de migrações de rede para SD-WAN (VLCloud), ✔️ Análise de logs e troubleshooting de alta complexidade, ✔️ Documentação técnica e gestão de SLA em ambientes críticos, ✔️ Relacionamento direto com clientes estratégicos (Banco do Brasil, Banco Itaú, Saint-Goban e outros).",
      impacto: "✔️ Garantia de alta disponibilidade e segurança dos serviços para clientes críticos, ✔️ Sucesso na migração de ambientes legados para SD-WAN, modernizando a infraestrutura, ✔️ Implementação de redes criptografadas para clientes financeiros (Banco do Brasil), ✔️ Melhoria na resiliência e estabilidade da rede (GLBP, VRRP), ✔️ Fortalecimento da segurança com políticas usando produtos da Fortinet (Firewall Fortigate), para gerenciamento do ambiente (FortiManager), para controle e analise de pacotes (FortiAnalyzer) e cadastro e controle dos devices (FortiCloud).",
      translations: {
        PT: {
          ano: "2014",
          titulo: "ANALISTA DE REDES PLENO",
          tecnologias: "✔️ MPLS (Multi-Protocol Label Switching) para alta disponibilidade, ✔️ Protocolos de Roteamento (BGP, OSPF, VRRP, HSRP, GLBP), ✔️ Frame-Relay, PPP, Multilink, PortChannel, BLD (Business Link Direct), ✔️ SD-WAN com VLCloud, ✔️ Fortinet (FortiGate, FortiAnalyzer, FortiManager), ✔️ Equipamentos Cisco, Huawei, HP.",
          habilidades: "✔️ Configuração e suporte avançado em ambientes MPLS, ✔️ Gestão de redes dinâmicas e redundantes com protocolos avançados, ✔️ Segurança de rede com ACLs e políticas avançadas (Firewall FortiGate), ✔️ Planejamento e execução de migrações de rede para SD-WAN (VLCloud), ✔️ Análise de logs e troubleshooting de alta complexidade, ✔️ Documentação técnica e gestão de SLA em ambientes críticos, ✔️ Relacionamento direto com clientes estratégicos (Banco do Brasil, Banco Itaú, Saint-Goban e outros).",
          impacto: "✔️ Garantia de alta disponibilidade e segurança dos serviços para clientes críticos, ✔️ Sucesso na migração de ambientes legados para SD-WAN, modernizando a infraestrutura, ✔️ Implementação de redes criptografadas para clientes financeiros (Banco do Brasil), ✔️ Melhoria na resiliência e estabilidade da rede (GLBP, VRRP), ✔️ Fortalecimento da segurança com políticas usando produtos da Fortinet (Firewall Fortigate), para gerenciamento do ambiente (FortiManager), para controle e analise de pacotes (FortiAnalyzer) e cadastro e controle dos devices (FortiCloud).",

        },
        EN: {
          ano: "2014",
          titulo: "NETWORK ANALYST",
          tecnologias: "✔️ MPLS (Multi-Protocol Label Switching) for high availability, ✔️ Routing Protocols (BGP, OSPF, VRRP, HSRP, GLBP), ✔️ Frame-Relay, PPP, Multilink, PortChannel, BLD (Business Link Direct), ✔️ SD-WAN with VLCloud, ✔️ Fortinet (FortiGate, FortiAnalyzer, FortiManager), ✔️ Cisco, Huawei, HP equipment.",
          habilidades: "✔️ Advanced configuration and support in MPLS environments, ✔️ Management of dynamic and redundant networks with advanced protocols, ✔️ Network security with ACLs and advanced policies (FortiGate Firewall), ✔️ Planning and execution of network migrations to SD-WAN (VLCloud), ✔️ Log analysis and high-complexity troubleshooting, ✔️ Technical documentation and SLA management in critical environments, ✔️ Direct relationship with strategic clients (Banco do Brasil, Banco Itaú, Saint-Goban, and others).",
          impacto: "✔️ Ensuring high availability and security of services for critical clients, ✔️ Successful migration of legacy environments to SD-WAN, modernizing the infrastructure, ✔️ Implementation of encrypted networks for financial clients (Banco do Brasil), ✔️ Improved network resilience and stability (GLBP, VRRP), ✔️ Strengthened security with policies using Fortinet products (FortiGate Firewall), for environment management (FortiManager), for packet control and analysis (FortiAnalyzer), and device registration and control (FortiCloud).",
        },
      },
    },
    {
      ano: "2022",
      titulo: "ANALISTA DE REDES SENIOR",
      tecnologias: "✔️ Redes LAN e Wi-Fi (Intelbras WOW 5G), ✔️ Equipamentos Ubiquiti e TP-Link, ✔️ VBA (Visual Basic for Applications) para automação, ✔️ Infraestrutura de cabeamento estruturado e organização de racks.",
      habilidades: "✔️ Documentação técnica e organização de infraestrutura, ✔️ Automação de processos com VBA, ✔️ Planejamento e execução de projetos de conectividade, ✔️ Solução de problemas técnicos e gestão de ambientes críticos.",
      impacto: "✔️ Organização física da Sala de Distribuição (SD), ✔️ Ampliação da conectividade Wi-Fi em áreas externas, ✔️ Estabilidade na comunicação para projetos de robótica, ✔️ Transformação de ambiente complexo em uma infraestrutura mais funcional e organizada.",
      translations: {
        PT: {
          ano: "2022",
          titulo: "ANALISTA DE REDES SENIOR",
          tecnologias: "✔️ Redes LAN e Wi-Fi (Intelbras WOW 5G), ✔️ Equipamentos Ubiquiti e TP-Link, ✔️ VBA (Visual Basic for Applications) para automação, ✔️ Infraestrutura de cabeamento estruturado e organização de racks.",
          habilidades: "✔️ Documentação técnica e organização de infraestrutura, ✔️ Automação de processos com VBA, ✔️ Planejamento e execução de projetos de conectividade, ✔️ Solução de problemas técnicos e gestão de ambientes críticos.",
          impacto: "✔️ Organização física da Sala de Distribuição (SD), ✔️ Ampliação da conectividade Wi-Fi em áreas externas, ✔️ Estabilidade na comunicação para projetos de robótica, ✔️ Transformação de ambiente complexo em uma infraestrutura mais funcional e organizada.",
        },
        EN: {
          ano: "2022",
          titulo: "SENIOR NETWORK ANALYST",
          tecnologias: "✔️ LAN and Wi-Fi Networks (Intelbras WOW 5G), ✔️ Ubiquiti and TP-Link equipment, ✔️ VBA (Visual Basic for Applications) for automation, ✔️ Structured cabling infrastructure and rack organization.",
          habilidades: "✔️ Technical documentation and infrastructure organization, ✔️ Process automation with VBA, ✔️ Planning and execution of connectivity projects, ✔️ Technical problem-solving and management of critical environments.",
          impacto: "✔️ Physical organization of the Distribution Room (SD), ✔️ Expansion of Wi-Fi connectivity in external areas, ✔️ Communication stability for robotics projects, ✔️ Transformation of a complex environment into a more functional and organized infrastructure.",
        },
      },
    },
    {
      ano: "2024",
      titulo: "COORDENADOR DE TI E TELEFONIA",
      tecnologias: "✔️ Power BI (análise de dados e dashboards), ✔️ Smartsheet (gestão de projetos e automação), ✔️ Metodologias ágeis (SCRUM), ✔️ CRM Integrado, ✔️ Telefonia Corporativa, ✔️ Servidores, Switches, Storages, Máquinas Virtuais (VMs).",
      habilidades: "✔️ Liderança de equipes técnicas (17 profissionais), ✔️ Gestão de conflitos e resolução de problemas complexos, ✔️ Inteligência emocional e comunicação assertiva, ✔️ Planejamento estratégico e gestão de indicadores de desempenho (KPIs), ✔️ Implementação de metodologias ágeis (SCRUM), ✔️ Automação de processos (Blip e WhatsApp), ✔️ Integração entre CRM e Telefonia.",
      impacto: "✔️ Otimização dos processos de atendimento, ✔️ Automação de tarefas críticas (Blip e WhatsApp), ✔️ Melhoria na visibilidade de resultados (Power BI), ✔️ Fortalecimento da cultura de performance, ✔️ Aumento da produtividade com integração CRM e Telefonia.",
      translations: {
        PT: {
          ano: "2024",
          titulo: "COORDENADOR DE TI E TELEFONIA",
          tecnologias: "✔️ Power BI (análise de dados e dashboards), ✔️ Smartsheet (gestão de projetos e automação), ✔️ Metodologias ágeis (SCRUM), ✔️ CRM Integrado, ✔️ Telefonia Corporativa, ✔️ Servidores, Switches, Storages, Máquinas Virtuais (VMs).",
          habilidades: "✔️ Liderança de equipes técnicas (17 profissionais), ✔️ Gestão de conflitos e resolução de problemas complexos, ✔️ Inteligência emocional e comunicação assertiva, ✔️ Planejamento estratégico e gestão de indicadores de desempenho (KPIs), ✔️ Implementação de metodologias ágeis (SCRUM), ✔️ Automação de processos (Blip e WhatsApp), ✔️ Integração entre CRM e Telefonia.",
          impacto: "✔️ Otimização dos processos de atendimento, ✔️ Automação de tarefas críticas (Blip e WhatsApp), ✔️ Melhoria na visibilidade de resultados (Power BI), ✔️ Fortalecimento da cultura de performance, ✔️ Aumento da produtividade com integração CRM e Telefonia.",
        },
        EN: {
          ano: "2024",
          titulo: "IT AND TELEPHONY COORDINATOR",
          tecnologias: "✔️ Power BI (data analysis and dashboards), ✔️ Smartsheet (project management and automation), ✔️ Metodologias ágeis (SCRUM), ✔️ CRM Integrado, ✔️ Telefonia Corporativa, ✔️ Servidores, Switches, Storages, Máquinas Virtuais (VMs).",
          habilidades: "✔️ Leadership of technical teams (17 professionals), ✔️ Conflict management and resolution of complex problems, ✔️ Emotional intelligence and assertive communication, ✔️ Strategic planning and management of performance indicators (KPIs), ✔️ Implementation of agile methodologies (SCRUM), ✔️ Process automation (Blip and WhatsApp), ✔️ Integration between CRM and Telephony.",
          impacto: "✔️ Optimization of service processes, ✔️ Automation of critical tasks (Blip and WhatsApp), ✔️ Improved visibility of results (Power BI), ✔️ Strengthening the performance culture, ✔️ Increased productivity with CRM and Telephony integration.",
        },
      },
    },
];
