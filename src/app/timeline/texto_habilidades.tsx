// data/timelineTexts.tsx
"use client";

// =========================================================
// Interface da Linha do Tempo
// =========================================================
export interface textoHabilidadesItem {
    ano: string;
    titulo: string;
    momento: string;
    evolucao: string;
    legado: string;

    translations: {
        PT: {
            ano: string;
            titulo: string;
            momento: string;
            evolucao: string;
            legado: string;
        };

        EN: {
            ano: string;
            titulo: string;
            momento: string;
            evolucao: string;
            legado: string;
        };
    };
}


// =========================================================
// Dados da Linha do Tempo
// =========================================================
export const timelineData: textoHabilidadesItem[] = [

    // =========================================================
    // 1993
    // =========================================================
    {
        ano: "1993",
        titulo: "O INÍCIO DE UMA TRAJETÓRIA EM TECNOLOGIA",

        momento:
            "✔️ Em 1993, iniciei minha trajetória profissional na Casa do Engenheiro, entrando em contato com um ambiente tecnológico muito diferente do atual: mainframes IBM, programação COBOL, sistemas PASCAL, redes SNA, TCP/IP, unidades robóticas de fita e impressoras Xerox de grande volume. ✔️ Também participei de atividades de produção e tratamento de imagens com Corel Draw e PhotoShop, em um ambiente onde processamento de dados, impressão em larga escala e continuidade operacional faziam parte da rotina.",

        evolucao:
            "✔️ Foi nesse ambiente que comecei a desenvolver uma forma mais lógica e estruturada de pensar. Programar em COBOL, acompanhar jobs, trabalhar com processamento de dados e entender redes despertou uma curiosidade que rapidamente se transformou em interesse profissional pela tecnologia. ✔️ Ao mesmo tempo, assumi responsabilidades de organização da produção e liderança de equipes de até 20 pessoas, aprendendo cedo que tecnologia também envolve planejamento, pessoas e responsabilidade por aquilo que precisa continuar funcionando.",

        legado:
            "✔️ O maior legado dessa primeira experiência foi a construção da base sobre a qual minha carreira seria desenvolvida. Disciplina, raciocínio lógico, responsabilidade operacional e capacidade de trabalhar sob pressão passaram a fazer parte da minha formação profissional. ✔️ Mais do que meu primeiro contato com computadores em ambiente corporativo, 1993 marcou o momento em que a tecnologia deixou de ser apenas uma curiosidade e passou a representar um caminho profissional que eu continuaria explorando nas décadas seguintes.",

        translations: {
            PT: {
                ano: "1993",
                titulo: "O INÍCIO DE UMA TRAJETÓRIA EM TECNOLOGIA",

                momento:
                    "✔️ Em 1993, iniciei minha trajetória profissional na Casa do Engenheiro, entrando em contato com um ambiente tecnológico muito diferente do atual: mainframes IBM, programação COBOL, sistemas PASCAL, redes SNA, TCP/IP, unidades robóticas de fita e impressoras Xerox de grande volume. ✔️ Também participei de atividades de produção e tratamento de imagens com Corel Draw e PhotoShop, em um ambiente onde processamento de dados, impressão em larga escala e continuidade operacional faziam parte da rotina.",

                evolucao:
                    "✔️ Foi nesse ambiente que comecei a desenvolver uma forma mais lógica e estruturada de pensar. Programar em COBOL, acompanhar jobs, trabalhar com processamento de dados e entender redes despertou uma curiosidade que rapidamente se transformou em interesse profissional pela tecnologia. ✔️ Ao mesmo tempo, assumi responsabilidades de organização da produção e liderança de equipes de até 20 pessoas, aprendendo cedo que tecnologia também envolve planejamento, pessoas e responsabilidade por aquilo que precisa continuar funcionando.",

                legado:
                    "✔️ O maior legado dessa primeira experiência foi a construção da base sobre a qual minha carreira seria desenvolvida. Disciplina, raciocínio lógico, responsabilidade operacional e capacidade de trabalhar sob pressão passaram a fazer parte da minha formação profissional. ✔️ Mais do que meu primeiro contato com computadores em ambiente corporativo, 1993 marcou o momento em que a tecnologia deixou de ser apenas uma curiosidade e passou a representar um caminho profissional que eu continuaria explorando nas décadas seguintes.",
            },

            EN: {
                ano: "1993",
                titulo: "THE BEGINNING OF A CAREER IN TECHNOLOGY",

                momento:
                    "✔️ In 1993, I began my professional journey at Casa do Engenheiro, entering a technology environment very different from what we know today: IBM mainframes, COBOL programming, PASCAL systems, SNA networks, TCP/IP, robotic tape units and high-volume Xerox printers. ✔️ I also worked with production activities and image processing using Corel Draw and PhotoShop, in an environment where data processing, large-scale printing and operational continuity were part of everyday work.",

                evolucao:
                    "✔️ This environment helped me develop a more logical and structured way of thinking. Programming in COBOL, following jobs, working with data processing and understanding networks turned curiosity into a genuine professional interest in technology. ✔️ At the same time, I took on responsibilities involving production organization and teams of up to 20 people, learning early that technology also involves planning, people and responsibility for keeping operations running.",

                legado:
                    "✔️ The greatest legacy of this first experience was the foundation on which my career would later be built. Discipline, logical thinking, operational responsibility and the ability to work under pressure became part of my professional development. ✔️ More than my first contact with computers in a corporate environment, 1993 marked the moment when technology stopped being only a curiosity and became a professional path that I would continue exploring over the following decades.",
            },
        },
    },


    // =========================================================
    // 1995
    // =========================================================
    {
        ano: "1995",
        titulo: "APRENDER, ENSINAR E COMUNICAR",

        momento:
            "✔️ Em 1995, passei a atuar como Instrutor de Informática pela Compucenter Informática, ensinando Windows, Microsoft Office, MS-DOS e automações com arquivos BATCH para profissionais de empresas como CPQD, IBM e TV Campinas. ✔️ A mesma tecnologia que eu havia começado a conhecer poucos anos antes agora precisava ser explicada de forma clara para pessoas com diferentes níveis de conhecimento. Também participei de iniciativas de educação tecnológica vinculadas ao FAT, levando esse aprendizado para um contexto social.",

        evolucao:
            "✔️ Ensinar mudou minha relação com o conhecimento. Percebi que dominar uma ferramenta não significava automaticamente saber explicá-la; era necessário entender o problema do outro, adaptar a linguagem e transformar conceitos técnicos em algo útil para sua realidade. ✔️ Essa experiência fortaleceu didática, paciência, empatia e comunicação — competências que mais tarde seriam fundamentais no suporte a usuários, relacionamento com clientes, trabalho em equipe e liderança.",

        legado:
            "✔️ O principal legado de 1995 foi compreender que conhecimento ganha valor quando pode ser compartilhado e aplicado. ✔️ A experiência de ensinar profissionais e jovens de diferentes realidades mostrou que tecnologia também pode ser uma ferramenta de autonomia e transformação. Essa capacidade de ouvir, compreender e traduzir assuntos técnicos continuaria presente em praticamente todas as etapas seguintes da minha carreira.",

        translations: {
            PT: {
                ano: "1995",
                titulo: "APRENDER, ENSINAR E COMUNICAR",

                momento:
                    "✔️ Em 1995, passei a atuar como Instrutor de Informática pela Compucenter Informática, ensinando Windows, Microsoft Office, MS-DOS e automações com arquivos BATCH para profissionais de empresas como CPQD, IBM e TV Campinas. ✔️ A mesma tecnologia que eu havia começado a conhecer poucos anos antes agora precisava ser explicada de forma clara para pessoas com diferentes níveis de conhecimento. Também participei de iniciativas de educação tecnológica vinculadas ao FAT, levando esse aprendizado para um contexto social.",

                evolucao:
                    "✔️ Ensinar mudou minha relação com o conhecimento. Percebi que dominar uma ferramenta não significava automaticamente saber explicá-la; era necessário entender o problema do outro, adaptar a linguagem e transformar conceitos técnicos em algo útil para sua realidade. ✔️ Essa experiência fortaleceu didática, paciência, empatia e comunicação — competências que mais tarde seriam fundamentais no suporte a usuários, relacionamento com clientes, trabalho em equipe e liderança.",

                legado:
                    "✔️ O principal legado de 1995 foi compreender que conhecimento ganha valor quando pode ser compartilhado e aplicado. ✔️ A experiência de ensinar profissionais e jovens de diferentes realidades mostrou que tecnologia também pode ser uma ferramenta de autonomia e transformação. Essa capacidade de ouvir, compreender e traduzir assuntos técnicos continuaria presente em praticamente todas as etapas seguintes da minha carreira.",
            },

            EN: {
                ano: "1995",
                titulo: "LEARNING, TEACHING AND COMMUNICATING",

                momento:
                    "✔️ In 1995, I began working as an IT Instructor through Compucenter Informática, teaching Windows, Microsoft Office, MS-DOS and BATCH file automation to professionals from organizations such as CPQD, IBM and TV Campinas. ✔️ The technology I had started learning only a few years earlier now had to be explained clearly to people with very different levels of experience. I also participated in technology education initiatives supported by FAT, bringing this knowledge into a social context.",

                evolucao:
                    "✔️ Teaching changed my relationship with knowledge. I learned that knowing how to use a tool does not automatically mean knowing how to explain it; it requires understanding the other person's problem, adapting the language and turning technical concepts into something useful in their reality. ✔️ This experience strengthened my communication, patience, empathy and teaching skills — abilities that would later become essential in user support, customer relationships, teamwork and leadership.",

                legado:
                    "✔️ The main legacy of 1995 was understanding that knowledge becomes more valuable when it can be shared and applied. ✔️ Teaching professionals and young people from different backgrounds showed me that technology can also be a tool for autonomy and transformation. The ability to listen, understand and translate technical subjects would remain present throughout almost every stage of my career.",
            },
        },
    },


    // =========================================================
    // 1997
    // =========================================================
    {
        ano: "1997",
        titulo: "DA SALA DE AULA PARA O SUPORTE REAL",

        momento:
            "✔️ Em 1997, atuei pela Talimar Serviços Temporários como Técnico de Suporte, alocado em um escritório de advocacia. O cenário passou a envolver redes LAN e WAN, Windows Server e estações Windows, roteadores, switches Layer 2, desktops, impressoras e ferramentas do Microsoft Office e de e-mail corporativo. ✔️ Diferentemente da sala de aula, agora cada problema técnico estava ligado diretamente à rotina de alguém que precisava continuar trabalhando.",

        evolucao:
            "✔️ Essa fase fortaleceu minha capacidade de diagnóstico. Aprendi a investigar problemas de hardware, software, conectividade e periféricos buscando não apenas corrigir o sintoma, mas compreender sua causa. ✔️ A experiência anterior como instrutor ajudou muito: explicar uma falha para um usuário, controlar expectativas e adaptar a linguagem técnica tornou-se parte tão importante do atendimento quanto realizar o reparo.",

        legado:
            "✔️ Foi nesse período que comecei a consolidar uma postura profissional orientada à solução de problemas. Proatividade, raciocínio analítico e comunicação passaram a caminhar juntos. ✔️ O suporte mostrou, na prática, que tecnologia só cumpre seu papel quando permite que outras pessoas realizem o próprio trabalho — uma percepção que continuaria influenciando minha atuação em infraestrutura e redes.",

        translations: {
            PT: {
                ano: "1997",
                titulo: "DA SALA DE AULA PARA O SUPORTE REAL",

                momento:
                    "✔️ Em 1997, atuei pela Talimar Serviços Temporários como Técnico de Suporte, alocado em um escritório de advocacia. O cenário passou a envolver redes LAN e WAN, Windows Server e estações Windows, roteadores, switches Layer 2, desktops, impressoras e ferramentas do Microsoft Office e de e-mail corporativo. ✔️ Diferentemente da sala de aula, agora cada problema técnico estava ligado diretamente à rotina de alguém que precisava continuar trabalhando.",

                evolucao:
                    "✔️ Essa fase fortaleceu minha capacidade de diagnóstico. Aprendi a investigar problemas de hardware, software, conectividade e periféricos buscando não apenas corrigir o sintoma, mas compreender sua causa. ✔️ A experiência anterior como instrutor ajudou muito: explicar uma falha para um usuário, controlar expectativas e adaptar a linguagem técnica tornou-se parte tão importante do atendimento quanto realizar o reparo.",

                legado:
                    "✔️ Foi nesse período que comecei a consolidar uma postura profissional orientada à solução de problemas. Proatividade, raciocínio analítico e comunicação passaram a caminhar juntos. ✔️ O suporte mostrou, na prática, que tecnologia só cumpre seu papel quando permite que outras pessoas realizem o próprio trabalho — uma percepção que continuaria influenciando minha atuação em infraestrutura e redes.",
            },

            EN: {
                ano: "1997",
                titulo: "FROM THE CLASSROOM TO REAL-WORLD SUPPORT",

                momento:
                    "✔️ In 1997, I worked through Talimar Serviços Temporários as a Support Technician assigned to a law firm. My environment now included LAN and WAN networks, Windows Server and Windows workstations, routers, Layer 2 switches, desktops, printers, Microsoft Office and corporate email systems. ✔️ Unlike the classroom, every technical problem was now directly connected to someone who needed technology to continue doing their job.",

                evolucao:
                    "✔️ This stage strengthened my diagnostic skills. I learned to investigate hardware, software, connectivity and peripheral issues while looking beyond the symptom to understand the actual cause. ✔️ My previous experience as an instructor became extremely useful: explaining a problem to a user, managing expectations and adapting technical language became as important as performing the repair itself.",

                legado:
                    "✔️ During this period, I began consolidating a professional approach centered on problem-solving. Proactivity, analytical thinking and communication started working together. ✔️ Technical support taught me that technology only fulfills its purpose when it enables other people to do their work — a perspective that would continue influencing my career in infrastructure and networking.",
            },
        },
    },


    // =========================================================
    // 2000
    // =========================================================
    {
        ano: "2000",
        titulo: "DIAGNÓSTICO, CLIENTE E RESPONSABILIDADE",

        momento:
            "✔️ Em 2000, na Balão da Informática, passei a trabalhar diretamente com manutenção e pós-venda de desktops e notebooks. O cotidiano envolvia diagnóstico de hardware e software, Windows e Linux, ferramentas de recuperação de sistemas, backup de dados e substituição de componentes como discos, memórias e fontes. ✔️ O equipamento chegava com um defeito, mas quase sempre havia também um cliente aguardando uma resposta clara e uma solução.",

        evolucao:
            "✔️ A experiência aumentou minha velocidade e precisão no diagnóstico e reforçou a importância de trabalhar de forma metódica. Cada equipamento exigia identificar o problema, avaliar alternativas e decidir entre reparo, substituição ou recuperação. ✔️ Ao mesmo tempo, o contato de pós-venda desenvolveu ainda mais minha capacidade de lidar com expectativas, pressão e comunicação com clientes que muitas vezes já chegavam frustrados pela falha.",

        legado:
            "✔️ Essa etapa consolidou a ideia de que competência técnica e qualidade de atendimento são inseparáveis. Resolver o defeito era importante, mas transmitir confiança durante o processo também era parte da solução. ✔️ A combinação entre diagnóstico técnico e relacionamento com o cliente preparou o caminho para responsabilidades maiores em ambientes corporativos de infraestrutura.",

        translations: {
            PT: {
                ano: "2000",
                titulo: "DIAGNÓSTICO, CLIENTE E RESPONSABILIDADE",

                momento:
                    "✔️ Em 2000, na Balão da Informática, passei a trabalhar diretamente com manutenção e pós-venda de desktops e notebooks. O cotidiano envolvia diagnóstico de hardware e software, Windows e Linux, ferramentas de recuperação de sistemas, backup de dados e substituição de componentes como discos, memórias e fontes. ✔️ O equipamento chegava com um defeito, mas quase sempre havia também um cliente aguardando uma resposta clara e uma solução.",

                evolucao:
                    "✔️ A experiência aumentou minha velocidade e precisão no diagnóstico e reforçou a importância de trabalhar de forma metódica. Cada equipamento exigia identificar o problema, avaliar alternativas e decidir entre reparo, substituição ou recuperação. ✔️ Ao mesmo tempo, o contato de pós-venda desenvolveu ainda mais minha capacidade de lidar com expectativas, pressão e comunicação com clientes que muitas vezes já chegavam frustrados pela falha.",

                legado:
                    "✔️ Essa etapa consolidou a ideia de que competência técnica e qualidade de atendimento são inseparáveis. Resolver o defeito era importante, mas transmitir confiança durante o processo também era parte da solução. ✔️ A combinação entre diagnóstico técnico e relacionamento com o cliente preparou o caminho para responsabilidades maiores em ambientes corporativos de infraestrutura.",
            },

            EN: {
                ano: "2000",
                titulo: "DIAGNOSIS, CUSTOMER SERVICE AND RESPONSIBILITY",

                momento:
                    "✔️ In 2000, at Balão da Informática, I began working directly with maintenance and after-sales support for desktops and notebooks. My routine involved hardware and software diagnostics, Windows and Linux, system recovery tools, data backup and replacement of components such as disks, memory and power supplies. ✔️ A device might arrive with a technical failure, but behind it there was almost always a customer waiting for a clear explanation and a solution.",

                evolucao:
                    "✔️ This experience increased both the speed and precision of my diagnostics and reinforced the importance of working methodically. Each device required identifying the problem, evaluating alternatives and deciding between repair, replacement or recovery. ✔️ At the same time, after-sales support further developed my ability to manage expectations, pressure and communication with customers who were often already frustrated by the failure.",

                legado:
                    "✔️ This stage consolidated my understanding that technical competence and service quality cannot be separated. Fixing the equipment was important, but maintaining customer confidence throughout the process was also part of the solution. ✔️ The combination of technical diagnosis and customer relationship prepared me for greater responsibilities in corporate infrastructure environments.",
            },
        },
    },


    // =========================================================
    // 2001
    // =========================================================
    {
        ano: "2001",
        titulo: "DO EQUIPAMENTO PARA A INFRAESTRUTURA",

        momento:
            "✔️ Em 2001, na CDP Sistemas, minha atuação começou a se expandir do suporte a equipamentos para os serviços que sustentavam o ambiente corporativo. Passei a trabalhar com servidores Windows, DHCP, DNS, Active Directory, compartilhamento de arquivos, impressão em rede, firewall com Iptables e suporte ao ERP legado da empresa. ✔️ O problema já não estava necessariamente em uma única máquina: uma falha em servidor, rede ou serviço podia atingir vários usuários ao mesmo tempo.",

        evolucao:
            "✔️ Essa mudança de perspectiva foi importante. Comecei a compreender melhor dependências entre usuários, servidores, rede e aplicações, desenvolvendo uma visão mais sistêmica da infraestrutura. ✔️ Administração de contas, políticas, conectividade, backups e segurança passaram a exigir planejamento e cuidado, porque uma alteração aparentemente pequena poderia afetar todo o ambiente.",

        legado:
            "✔️ A CDP marcou minha transição de um profissional focado principalmente em suporte de estações para alguém cada vez mais interessado na infraestrutura por trás dos serviços. ✔️ Essa visão de ambiente — e não apenas de equipamento — seria fundamental nas etapas seguintes da carreira, especialmente quando redes e Telecom começassem a ganhar maior importância.",

        translations: {
            PT: {
                ano: "2001",
                titulo: "DO EQUIPAMENTO PARA A INFRAESTRUTURA",

                momento:
                    "✔️ Em 2001, na CDP Sistemas, minha atuação começou a se expandir do suporte a equipamentos para os serviços que sustentavam o ambiente corporativo. Passei a trabalhar com servidores Windows, DHCP, DNS, Active Directory, compartilhamento de arquivos, impressão em rede, firewall com Iptables e suporte ao ERP legado da empresa. ✔️ O problema já não estava necessariamente em uma única máquina: uma falha em servidor, rede ou serviço podia atingir vários usuários ao mesmo tempo.",

                evolucao:
                    "✔️ Essa mudança de perspectiva foi importante. Comecei a compreender melhor dependências entre usuários, servidores, rede e aplicações, desenvolvendo uma visão mais sistêmica da infraestrutura. ✔️ Administração de contas, políticas, conectividade, backups e segurança passaram a exigir planejamento e cuidado, porque uma alteração aparentemente pequena poderia afetar todo o ambiente.",

                legado:
                    "✔️ A CDP marcou minha transição de um profissional focado principalmente em suporte de estações para alguém cada vez mais interessado na infraestrutura por trás dos serviços. ✔️ Essa visão de ambiente — e não apenas de equipamento — seria fundamental nas etapas seguintes da carreira, especialmente quando redes e Telecom começassem a ganhar maior importância.",
            },

            EN: {
                ano: "2001",
                titulo: "FROM DEVICES TO INFRASTRUCTURE",

                momento:
                    "✔️ In 2001, at CDP Sistemas, my responsibilities began expanding from individual equipment support to the services supporting the corporate environment. I worked with Windows servers, DHCP, DNS, Active Directory, file sharing, network printing, Iptables firewall policies and support for the company's legacy ERP. ✔️ A problem was no longer necessarily limited to one computer: a failure involving a server, network or service could affect many users at the same time.",

                evolucao:
                    "✔️ This change in perspective was important. I began to understand the dependencies between users, servers, networks and applications, developing a more systemic view of infrastructure. ✔️ Account administration, policies, connectivity, backups and security required greater planning and care because a seemingly small change could affect the entire environment.",

                legado:
                    "✔️ CDP marked my transition from a professional primarily focused on workstation support to someone increasingly interested in the infrastructure behind business services. ✔️ This environment-oriented perspective — rather than focusing only on individual devices — would become fundamental in the following stages of my career, particularly as networking and Telecom became more important.",
            },
        },
    },


    // =========================================================
    // 2002
    // =========================================================
    {
        ano: "2002",
        titulo: "APRENDENDO A TRABALHAR SOB PRESSÃO",

        momento:
            "✔️ Em 2002, na A. B. Pereira Comércio e Manutenção, trabalhei em campo com manutenção de caixas eletrônicos de depósito por envelope em agências bancárias. Sensores, circuitos de controle, lógica digital, displays, teclados, leitores e atualizações do ambiente bancário faziam parte das atividades. ✔️ Diferentemente de uma bancada de manutenção, o equipamento estava diante de clientes e gestores da agência. Quando parava, a pressão pela recuperação era imediata.",

        evolucao:
            "✔️ Essa experiência fortaleceu minha capacidade de manter raciocínio e concentração mesmo em situações de cobrança. A análise precisava ser rápida, mas não podia ser precipitada: era necessário diagnosticar sensores, componentes e comportamento lógico antes de decidir a intervenção. ✔️ Também aprendi a comunicar o andamento do problema com clareza, mantendo a confiança dos responsáveis pela agência enquanto trabalhava na recuperação do equipamento.",

        legado:
            "✔️ O trabalho de campo reforçou características que seriam essenciais mais tarde em ambientes de missão crítica: calma, método, senso de urgência e responsabilidade pelo restabelecimento do serviço. ✔️ Aprendi que pressão não pode substituir o diagnóstico. Quanto maior a urgência, maior a importância de manter clareza para chegar à causa correta do problema.",

        translations: {
            PT: {
                ano: "2002",
                titulo: "APRENDENDO A TRABALHAR SOB PRESSÃO",

                momento:
                    "✔️ Em 2002, na A. B. Pereira Comércio e Manutenção, trabalhei em campo com manutenção de caixas eletrônicos de depósito por envelope em agências bancárias. Sensores, circuitos de controle, lógica digital, displays, teclados, leitores e atualizações do ambiente bancário faziam parte das atividades. ✔️ Diferentemente de uma bancada de manutenção, o equipamento estava diante de clientes e gestores da agência. Quando parava, a pressão pela recuperação era imediata.",

                evolucao:
                    "✔️ Essa experiência fortaleceu minha capacidade de manter raciocínio e concentração mesmo em situações de cobrança. A análise precisava ser rápida, mas não podia ser precipitada: era necessário diagnosticar sensores, componentes e comportamento lógico antes de decidir a intervenção. ✔️ Também aprendi a comunicar o andamento do problema com clareza, mantendo a confiança dos responsáveis pela agência enquanto trabalhava na recuperação do equipamento.",

                legado:
                    "✔️ O trabalho de campo reforçou características que seriam essenciais mais tarde em ambientes de missão crítica: calma, método, senso de urgência e responsabilidade pelo restabelecimento do serviço. ✔️ Aprendi que pressão não pode substituir o diagnóstico. Quanto maior a urgência, maior a importância de manter clareza para chegar à causa correta do problema.",
            },

            EN: {
                ano: "2002",
                titulo: "LEARNING TO WORK UNDER PRESSURE",

                momento:
                    "✔️ In 2002, at A. B. Pereira Comércio e Manutenção, I worked in the field maintaining envelope-deposit ATMs in bank branches. Sensors, control circuits, digital logic, displays, keyboards, readers and banking-system updates were part of my routine. ✔️ Unlike working at a maintenance bench, the equipment was operating in front of customers and branch managers. When it stopped, the pressure to restore service was immediate.",

                evolucao:
                    "✔️ This experience strengthened my ability to remain focused and analytical even under direct pressure. Diagnosis had to be fast, but it could not be careless: sensors, components and logical behavior needed to be understood before deciding on the intervention. ✔️ I also learned to communicate progress clearly, maintaining the confidence of branch managers while working to restore the equipment.",

                legado:
                    "✔️ Field work reinforced characteristics that would later become essential in mission-critical environments: calmness, method, urgency and responsibility for service restoration. ✔️ I learned that pressure cannot replace diagnosis. The greater the urgency, the more important it is to remain clear-headed and identify the real cause of the problem.",
            },
        },
    },


    // =========================================================
    // 2003
    // =========================================================
    {
        ano: "2003",
        titulo: "ENTENDENDO O VALOR DE UM PROJETO BEM PLANEJADO",

        momento:
            "✔️ Em 2003, fui contratado pela Vocal Comércio de Peças, empresa do Grupo Volkswagen, para atuar em um projeto temporário de migração sistêmica entre Campinas e São Paulo. O ambiente envolvia sistemas DATASUL e Volkswagen, servidores Novell e Windows, redes LAN e WAN, além de backup e contingência. ✔️ Pela primeira vez, o foco não era apenas manter algo funcionando: havia uma transição planejada, com prazo, testes e um objetivo claro de negócio.",

        evolucao:
            "✔️ Trabalhar com equipes distribuídas e executar testes de conectividade, integridade e performance ampliou minha visão sobre planejamento técnico. Passei a enxergar testes e contingência não como etapas secundárias, mas como mecanismos para antecipar problemas antes que eles chegassem à produção. ✔️ A experiência também fortaleceu minha capacidade de colaborar com equipes externas e compreender dependências entre sistemas, rede e operação.",

        legado:
            "✔️ A migração reforçou uma lição que seguiria comigo: uma boa implantação começa muito antes da mudança em produção. Planejar, testar, documentar e prever alternativas reduz riscos e torna a execução mais segura. ✔️ Essa mentalidade de projeto se tornaria cada vez mais presente nas futuras modernizações de infraestrutura, redes e Telecom.",

        translations: {
            PT: {
                ano: "2003",
                titulo: "ENTENDENDO O VALOR DE UM PROJETO BEM PLANEJADO",

                momento:
                    "✔️ Em 2003, fui contratado pela Vocal Comércio de Peças, empresa do Grupo Volkswagen, para atuar em um projeto temporário de migração sistêmica entre Campinas e São Paulo. O ambiente envolvia sistemas DATASUL e Volkswagen, servidores Novell e Windows, redes LAN e WAN, além de backup e contingência. ✔️ Pela primeira vez, o foco não era apenas manter algo funcionando: havia uma transição planejada, com prazo, testes e um objetivo claro de negócio.",

                evolucao:
                    "✔️ Trabalhar com equipes distribuídas e executar testes de conectividade, integridade e performance ampliou minha visão sobre planejamento técnico. Passei a enxergar testes e contingência não como etapas secundárias, mas como mecanismos para antecipar problemas antes que eles chegassem à produção. ✔️ A experiência também fortaleceu minha capacidade de colaborar com equipes externas e compreender dependências entre sistemas, rede e operação.",

                legado:
                    "✔️ A migração reforçou uma lição que seguiria comigo: uma boa implantação começa muito antes da mudança em produção. Planejar, testar, documentar e prever alternativas reduz riscos e torna a execução mais segura. ✔️ Essa mentalidade de projeto se tornaria cada vez mais presente nas futuras modernizações de infraestrutura, redes e Telecom.",
            },

            EN: {
                ano: "2003",
                titulo: "UNDERSTANDING THE VALUE OF A WELL-PLANNED PROJECT",

                momento:
                    "✔️ In 2003, I was hired by Vocal Comércio de Peças, part of the Volkswagen Group, for a temporary system migration project between Campinas and São Paulo. The environment involved DATASUL and Volkswagen systems, Novell and Windows servers, LAN and WAN networks, backup and contingency. ✔️ For the first time, the focus was not simply on keeping an existing environment running: there was a planned transition with deadlines, testing and a clear business objective.",

                evolucao:
                    "✔️ Working with distributed teams and executing connectivity, integrity and performance tests expanded my understanding of technical planning. I began to see testing and contingency not as secondary tasks, but as mechanisms for identifying problems before they reached production. ✔️ The experience also strengthened my ability to collaborate with external teams and understand dependencies between systems, networks and operations.",

                legado:
                    "✔️ The migration reinforced a lesson that would remain with me: a successful implementation begins long before the production change itself. Planning, testing, documentation and contingency reduce risk and make execution safer. ✔️ This project-oriented mindset would become increasingly important in future infrastructure, networking and Telecom modernization projects.",
            },
        },
    },


    // =========================================================
    // 2004
    // =========================================================
    {
        ano: "2004",
        titulo: "O ENCONTRO COM TELECOM",

        momento:
            "✔️ Em 2004, trabalhando em uma empresa de Telecom fundada por um ex-profissional da Lucent Technologies, tive contato direto com uma área que mudaria a direção da minha carreira. Passei a atuar em redes coaxiais com topologia BUS, terminadores, conectores, continuidade de sinal e equipamentos de medição, principalmente em ambientes bancários. ✔️ Nessa arquitetura, uma falha física aparentemente pequena podia comprometer vários pontos da rede, exigindo leitura cuidadosa da topologia e investigação por segmentos.",

        evolucao:
            "✔️ O trabalho fortaleceu meu raciocínio sobre a relação entre camada física e funcionamento lógico da rede. Cada incidente exigia seguir o caminho do sinal, interpretar sintomas e eliminar hipóteses até localizar a falha. ✔️ Foi também meu primeiro contato mais profundo com a cultura de Telecom: comunicação de dados, voz, conectividade e a importância de compreender a infraestrutura ponta a ponta.",

        legado:
            "✔️ 2004 representou um verdadeiro ponto de virada. Redes deixaram de ser apenas uma parte do suporte e passaram a ocupar um espaço central no meu desenvolvimento profissional. ✔️ O interesse despertado nesse período orientaria os anos seguintes e, com o tempo, evoluiria para roteamento, redundância, MPLS, SD-WAN, infraestrutura óptica e ambientes de Telecom muito mais complexos.",

        translations: {
            PT: {
                ano: "2004",
                titulo: "O ENCONTRO COM TELECOM",

                momento:
                    "✔️ Em 2004, trabalhando em uma empresa de Telecom fundada por um ex-profissional da Lucent Technologies, tive contato direto com uma área que mudaria a direção da minha carreira. Passei a atuar em redes coaxiais com topologia BUS, terminadores, conectores, continuidade de sinal e equipamentos de medição, principalmente em ambientes bancários. ✔️ Nessa arquitetura, uma falha física aparentemente pequena podia comprometer vários pontos da rede, exigindo leitura cuidadosa da topologia e investigação por segmentos.",

                evolucao:
                    "✔️ O trabalho fortaleceu meu raciocínio sobre a relação entre camada física e funcionamento lógico da rede. Cada incidente exigia seguir o caminho do sinal, interpretar sintomas e eliminar hipóteses até localizar a falha. ✔️ Foi também meu primeiro contato mais profundo com a cultura de Telecom: comunicação de dados, voz, conectividade e a importância de compreender a infraestrutura ponta a ponta.",

                legado:
                    "✔️ 2004 representou um verdadeiro ponto de virada. Redes deixaram de ser apenas uma parte do suporte e passaram a ocupar um espaço central no meu desenvolvimento profissional. ✔️ O interesse despertado nesse período orientaria os anos seguintes e, com o tempo, evoluiria para roteamento, redundância, MPLS, SD-WAN, infraestrutura óptica e ambientes de Telecom muito mais complexos.",
            },

            EN: {
                ano: "2004",
                titulo: "THE ENCOUNTER WITH TELECOM",

                momento:
                    "✔️ In 2004, working for a Telecom company founded by a former Lucent Technologies professional, I had direct contact with an area that would change the direction of my career. I worked with coaxial networks using BUS topology, terminators, connectors, signal continuity and measurement equipment, mainly in banking environments. ✔️ In this architecture, a seemingly small physical failure could affect several points of the network, requiring careful topology analysis and segment-by-segment investigation.",

                evolucao:
                    "✔️ This work strengthened my understanding of the relationship between the physical layer and the logical behavior of a network. Each incident required following the signal path, interpreting symptoms and eliminating possibilities until the fault was identified. ✔️ It was also my first deeper exposure to Telecom as a discipline: data communication, voice, connectivity and the importance of understanding infrastructure from end to end.",

                legado:
                    "✔️ 2004 became a true turning point. Networking stopped being just one part of technical support and began occupying a central place in my professional development. ✔️ The interest created during this period would guide the following years and eventually expand into routing, redundancy, MPLS, SD-WAN, optical infrastructure and much more complex Telecom environments.",
            },
        },
    },


    // =========================================================
    // 2006
    // =========================================================
    {
        ano: "2006",
        titulo: "DA OPERAÇÃO PARA A VISÃO DE INFRAESTRUTURA",

        momento:
            "✔️ Na Interchange Veterinária, passei a ter responsabilidade ampla sobre a infraestrutura de TI, envolvendo rede LAN, cabeamento CAT5e, switches DELL Gigabit Ethernet, servidores Windows, RAID, firewall Linux BRMA, Wi-Fi corporativo e suporte ao escritório e ao chão de fábrica. ✔️ Depois de mapear o ambiente, participei de uma modernização que também incluiu a negociação de outsourcing de impressão com a Xerox.",

        evolucao:
            "✔️ Essa experiência me fez sair cada vez mais da postura de apenas reagir a incidentes e começar a pensar em como o ambiente poderia ser melhorado antes que os problemas aparecessem. Planejamento, testes, documentação, negociação e implantação passaram a fazer parte do mesmo trabalho. ✔️ Comecei a olhar infraestrutura como um conjunto de componentes interdependentes, no qual rede, servidores, segurança, conectividade sem fio e custos precisavam ser considerados em conjunto.",

        legado:
            "✔️ A Interchange fortaleceu minha capacidade de conduzir melhorias de ponta a ponta e mostrou que um profissional técnico também pode contribuir para decisões de investimento, contratos e organização operacional. ✔️ Essa visão mais ampla preparou o terreno para ambientes corporativos maiores, onde disponibilidade, monitoramento, segurança e relacionamento com diferentes áreas se tornariam ainda mais importantes.",

        translations: {
            PT: {
                ano: "2006",
                titulo: "DA OPERAÇÃO PARA A VISÃO DE INFRAESTRUTURA",

                momento:
                    "✔️ Na Interchange Veterinária, passei a ter responsabilidade ampla sobre a infraestrutura de TI, envolvendo rede LAN, cabeamento CAT5e, switches DELL Gigabit Ethernet, servidores Windows, RAID, firewall Linux BRMA, Wi-Fi corporativo e suporte ao escritório e ao chão de fábrica. ✔️ Depois de mapear o ambiente, participei de uma modernização que também incluiu a negociação de outsourcing de impressão com a Xerox.",

                evolucao:
                    "✔️ Essa experiência me fez sair cada vez mais da postura de apenas reagir a incidentes e começar a pensar em como o ambiente poderia ser melhorado antes que os problemas aparecessem. Planejamento, testes, documentação, negociação e implantação passaram a fazer parte do mesmo trabalho. ✔️ Comecei a olhar infraestrutura como um conjunto de componentes interdependentes, no qual rede, servidores, segurança, conectividade sem fio e custos precisavam ser considerados em conjunto.",

                legado:
                    "✔️ A Interchange fortaleceu minha capacidade de conduzir melhorias de ponta a ponta e mostrou que um profissional técnico também pode contribuir para decisões de investimento, contratos e organização operacional. ✔️ Essa visão mais ampla preparou o terreno para ambientes corporativos maiores, onde disponibilidade, monitoramento, segurança e relacionamento com diferentes áreas se tornariam ainda mais importantes.",
            },

            EN: {
                ano: "2006",
                titulo: "FROM OPERATIONS TO AN INFRASTRUCTURE PERSPECTIVE",

                momento:
                    "✔️ At Interchange Veterinária, I took on broad responsibility for IT infrastructure, including LAN networks, CAT5e structured cabling, DELL Gigabit Ethernet switches, Windows servers, RAID, BRMA Linux firewall, corporate Wi-Fi and support for both office and factory-floor operations. ✔️ After mapping the environment, I participated in an infrastructure modernization effort that also included negotiating a printing outsourcing agreement with Xerox.",

                evolucao:
                    "✔️ This experience moved me further away from simply reacting to incidents and toward thinking about how an environment could be improved before problems occurred. Planning, testing, documentation, negotiation and implementation became parts of the same process. ✔️ I began viewing infrastructure as a group of interdependent components in which networking, servers, security, wireless connectivity and costs had to be considered together.",

                legado:
                    "✔️ Interchange strengthened my ability to drive end-to-end improvements and showed me that a technical professional can also contribute to investment decisions, contracts and operational organization. ✔️ This broader perspective prepared me for larger corporate environments where availability, monitoring, security and collaboration with different business areas would become increasingly important.",
            },
        },
    },


    // =========================================================
    // 2011
    // =========================================================
    {
        ano: "2011",
        titulo: "MATURIDADE EM AMBIENTE CORPORATIVO CRÍTICO",

        momento:
            "✔️ Em 2011, ingressei na TIVIT para atuar dentro da PwC, em um ambiente corporativo exigente e com forte dependência dos serviços de TI. Minha rotina envolvia Windows Server, Active Directory, SAP R3, Lotus Notes, Citrix, ARCSERVER para backup em fita, além de Zabbix e Grafana para monitoramento. ✔️ Também mantinha contato com equipes internacionais, inclusive na Índia, para tratamento de incidentes que ultrapassavam o escopo local.",

        evolucao:
            "✔️ A experiência ampliou minha percepção sobre disponibilidade e continuidade. Não bastava corrigir um problema depois que ele acontecia; monitoramento, backup e acompanhamento dos serviços passaram a fazer parte da prevenção. ✔️ Com o crescimento da operação, também tive oportunidade de orientar tecnicamente novos profissionais, fortalecendo uma liderança que já havia surgido em etapas anteriores, agora aplicada em um ambiente corporativo mais estruturado.",

        legado:
            "✔️ A passagem pela TIVIT/PwC consolidou disciplina operacional, atenção a ambientes críticos e capacidade de colaborar com equipes distribuídas. ✔️ Zabbix e Grafana também passaram a fazer parte da minha visão de infraestrutura, introduzindo uma abordagem que anos mais tarde voltaria com muito mais profundidade em projetos de observabilidade e no Mission Control.",

        translations: {
            PT: {
                ano: "2011",
                titulo: "MATURIDADE EM AMBIENTE CORPORATIVO CRÍTICO",

                momento:
                    "✔️ Em 2011, ingressei na TIVIT para atuar dentro da PwC, em um ambiente corporativo exigente e com forte dependência dos serviços de TI. Minha rotina envolvia Windows Server, Active Directory, SAP R3, Lotus Notes, Citrix, ARCSERVER para backup em fita, além de Zabbix e Grafana para monitoramento. ✔️ Também mantinha contato com equipes internacionais, inclusive na Índia, para tratamento de incidentes que ultrapassavam o escopo local.",

                evolucao:
                    "✔️ A experiência ampliou minha percepção sobre disponibilidade e continuidade. Não bastava corrigir um problema depois que ele acontecia; monitoramento, backup e acompanhamento dos serviços passaram a fazer parte da prevenção. ✔️ Com o crescimento da operação, também tive oportunidade de orientar tecnicamente novos profissionais, fortalecendo uma liderança que já havia surgido em etapas anteriores, agora aplicada em um ambiente corporativo mais estruturado.",

                legado:
                    "✔️ A passagem pela TIVIT/PwC consolidou disciplina operacional, atenção a ambientes críticos e capacidade de colaborar com equipes distribuídas. ✔️ Zabbix e Grafana também passaram a fazer parte da minha visão de infraestrutura, introduzindo uma abordagem que anos mais tarde voltaria com muito mais profundidade em projetos de observabilidade e no Mission Control.",
            },

            EN: {
                ano: "2011",
                titulo: "MATURITY IN A CRITICAL CORPORATE ENVIRONMENT",

                momento:
                    "✔️ In 2011, I joined TIVIT to work within PwC, a demanding corporate environment highly dependent on IT services. My responsibilities involved Windows Server, Active Directory, SAP R3, Lotus Notes, Citrix, ARCSERVER for tape backup, and Zabbix and Grafana for monitoring. ✔️ I also communicated with international teams, including teams in India, when incidents required support beyond the local environment.",

                evolucao:
                    "✔️ This experience expanded my understanding of availability and continuity. It was no longer enough to fix a problem after it occurred; monitoring, backup and service visibility became important parts of prevention. ✔️ As the operation grew, I also had the opportunity to provide technical guidance to new professionals, strengthening leadership skills that had appeared earlier in my career, now within a more structured corporate environment.",

                legado:
                    "✔️ My time at TIVIT/PwC consolidated operational discipline, attention to critical environments and the ability to collaborate with distributed teams. ✔️ Zabbix and Grafana also became part of my infrastructure perspective, introducing an approach that would return years later with much greater depth in observability projects and Mission Control.",
            },
        },
    },


    // =========================================================
    // 2014
    // =========================================================
    {
        ano: "2014",
        titulo: "CONSOLIDAÇÃO EM REDES E TELECOM",

        momento:
            "✔️ A partir de 2014, na Globalhitss / Embratel, minha carreira entrou em uma fase de forte especialização em Redes e Telecom. Passei a atuar com ambientes MPLS, BGP, OSPF, HSRP, VRRP, GLBP, Frame-Relay, PPP, Multilink, PortChannel, BLD, SD-WAN com VLCloud e soluções Fortinet, utilizando equipamentos Cisco, Huawei e HP. ✔️ O trabalho envolvia clientes corporativos e instituições financeiras, incluindo Banco do Brasil e Banco Itaú, onde disponibilidade, segurança e cumprimento de SLA eram requisitos permanentes.",

        evolucao:
            "✔️ A escala e a complexidade desses ambientes aprofundaram minha capacidade de troubleshooting. Analisar rotas, redundância, logs, políticas de segurança e diferentes tecnologias de acesso exigia correlacionar informações de várias camadas antes de tomar uma decisão. ✔️ Também amadureci no relacionamento direto com clientes estratégicos, entendendo que incidentes de rede possuem impacto técnico, operacional e de negócio.",

        legado:
            "✔️ Essa fase consolidou definitivamente minha identidade profissional em Redes e Telecom. Conhecimentos que haviam começado com redes coaxiais em 2004 evoluíram para ambientes corporativos distribuídos, MPLS, segurança e SD-WAN. ✔️ Mais importante do que acumular protocolos, desenvolvi capacidade de analisar ambientes complexos, trabalhar com tecnologias multi-vendor e manter clareza durante incidentes críticos — características que continuariam presentes nos projetos seguintes.",

        translations: {
            PT: {
                ano: "2014",
                titulo: "CONSOLIDAÇÃO EM REDES E TELECOM",

                momento:
                    "✔️ A partir de 2014, na Globalhitss / Embratel, minha carreira entrou em uma fase de forte especialização em Redes e Telecom. Passei a atuar com ambientes MPLS, BGP, OSPF, HSRP, VRRP, GLBP, Frame-Relay, PPP, Multilink, PortChannel, BLD, SD-WAN com VLCloud e soluções Fortinet, utilizando equipamentos Cisco, Huawei e HP. ✔️ O trabalho envolvia clientes corporativos e instituições financeiras, incluindo Banco do Brasil e Banco Itaú, onde disponibilidade, segurança e cumprimento de SLA eram requisitos permanentes.",

                evolucao:
                    "✔️ A escala e a complexidade desses ambientes aprofundaram minha capacidade de troubleshooting. Analisar rotas, redundância, logs, políticas de segurança e diferentes tecnologias de acesso exigia correlacionar informações de várias camadas antes de tomar uma decisão. ✔️ Também amadureci no relacionamento direto com clientes estratégicos, entendendo que incidentes de rede possuem impacto técnico, operacional e de negócio.",

                legado:
                    "✔️ Essa fase consolidou definitivamente minha identidade profissional em Redes e Telecom. Conhecimentos que haviam começado com redes coaxiais em 2004 evoluíram para ambientes corporativos distribuídos, MPLS, segurança e SD-WAN. ✔️ Mais importante do que acumular protocolos, desenvolvi capacidade de analisar ambientes complexos, trabalhar com tecnologias multi-vendor e manter clareza durante incidentes críticos — características que continuariam presentes nos projetos seguintes.",
            },

            EN: {
                ano: "2014",
                titulo: "CONSOLIDATION IN NETWORKING AND TELECOM",

                momento:
                    "✔️ From 2014 onward, at Globalhitss / Embratel, my career entered a period of strong specialization in Networking and Telecom. I worked with MPLS environments, BGP, OSPF, HSRP, VRRP, GLBP, Frame-Relay, PPP, Multilink, PortChannel, BLD, VLCloud SD-WAN and Fortinet solutions across Cisco, Huawei and HP equipment. ✔️ The work involved corporate customers and financial institutions, including Banco do Brasil and Banco Itaú, where availability, security and SLA compliance were permanent requirements.",

                evolucao:
                    "✔️ The scale and complexity of these environments significantly deepened my troubleshooting skills. Analyzing routes, redundancy, logs, security policies and different access technologies required correlating information across multiple layers before making a decision. ✔️ I also matured in my direct relationship with strategic customers, understanding that network incidents have technical, operational and business consequences.",

                legado:
                    "✔️ This phase definitively consolidated my professional identity in Networking and Telecom. Knowledge that had begun with coaxial networks in 2004 evolved into distributed corporate environments, MPLS, security and SD-WAN. ✔️ More important than accumulating protocols, I developed the ability to analyze complex environments, work across multiple vendors and remain clear-headed during critical incidents — characteristics that would continue into later projects.",
            },
        },
    },


    // =========================================================
    // 2022
    // =========================================================
    {
        ano: "2022",
        titulo: "EXPERIÊNCIA TRANSFORMADA EM AUTONOMIA",

        momento:
            "✔️ Em 2022, no CTI Renato Archer, encontrei um ambiente onde a experiência acumulada ao longo da carreira poderia ser utilizada não apenas para sustentar a operação, mas também para identificar oportunidades de melhoria. Trabalhei com redes LAN e Wi-Fi, Intelbras WOW 5G, equipamentos Ubiquiti e TP-Link, cabeamento estruturado, organização de racks e automação com VBA. ✔️ Após analisar o ambiente, participei de iniciativas envolvendo organização da Sala de Distribuição, expansão de conectividade externa e cobertura para projetos de robótica.",

        evolucao:
            "✔️ O contexto do CTI fortaleceu minha autonomia para observar um problema, estruturar uma proposta e buscar uma solução adequada às restrições existentes. Nem sempre havia orçamento, equipamento ou processo ideal disponível; muitas vezes era necessário trabalhar com criatividade, documentação e planejamento. ✔️ A experiência acumulada passou a funcionar como repertório: problemas diferentes podiam ser analisados a partir de conhecimentos adquiridos em várias fases anteriores da carreira.",

        legado:
            "✔️ O principal legado dessa etapa foi perceber com mais clareza o valor da experiência quando ela deixa de ser apenas memória técnica e passa a orientar decisões. ✔️ No CTI, consolidou-se uma postura de olhar o ambiente, compreender suas limitações e propor melhorias realistas — uma capacidade que seria muito importante nos desafios profissionais que viriam em seguida.",

        translations: {
            PT: {
                ano: "2022",
                titulo: "EXPERIÊNCIA TRANSFORMADA EM AUTONOMIA",

                momento:
                    "✔️ Em 2022, no CTI Renato Archer, encontrei um ambiente onde a experiência acumulada ao longo da carreira poderia ser utilizada não apenas para sustentar a operação, mas também para identificar oportunidades de melhoria. Trabalhei com redes LAN e Wi-Fi, Intelbras WOW 5G, equipamentos Ubiquiti e TP-Link, cabeamento estruturado, organização de racks e automação com VBA. ✔️ Após analisar o ambiente, participei de iniciativas envolvendo organização da Sala de Distribuição, expansão de conectividade externa e cobertura para projetos de robótica.",

                evolucao:
                    "✔️ O contexto do CTI fortaleceu minha autonomia para observar um problema, estruturar uma proposta e buscar uma solução adequada às restrições existentes. Nem sempre havia orçamento, equipamento ou processo ideal disponível; muitas vezes era necessário trabalhar com criatividade, documentação e planejamento. ✔️ A experiência acumulada passou a funcionar como repertório: problemas diferentes podiam ser analisados a partir de conhecimentos adquiridos em várias fases anteriores da carreira.",

                legado:
                    "✔️ O principal legado dessa etapa foi perceber com mais clareza o valor da experiência quando ela deixa de ser apenas memória técnica e passa a orientar decisões. ✔️ No CTI, consolidou-se uma postura de olhar o ambiente, compreender suas limitações e propor melhorias realistas — uma capacidade que seria muito importante nos desafios profissionais que viriam em seguida.",
            },

            EN: {
                ano: "2022",
                titulo: "EXPERIENCE TRANSFORMED INTO AUTONOMY",

                momento:
                    "✔️ In 2022, at CTI Renato Archer, I found an environment where the experience accumulated throughout my career could be used not only to support operations, but also to identify opportunities for improvement. I worked with LAN and Wi-Fi networks, Intelbras WOW 5G, Ubiquiti and TP-Link equipment, structured cabling, rack organization and VBA automation. ✔️ After analyzing the environment, I participated in initiatives involving Distribution Room organization, external connectivity expansion and wireless coverage for robotics projects.",

                evolucao:
                    "✔️ The CTI environment strengthened my autonomy to observe a problem, structure a proposal and find a solution appropriate to the existing constraints. The ideal budget, equipment or process was not always available; creativity, documentation and planning were often required. ✔️ My accumulated experience became a practical repertoire: new problems could be analyzed using knowledge developed during several earlier stages of my career.",

                legado:
                    "✔️ The main legacy of this period was understanding more clearly the value of experience when it stops being only technical memory and begins guiding decisions. ✔️ At CTI, I consolidated an approach based on observing the environment, understanding its limitations and proposing realistic improvements — an ability that would become very important in the professional challenges that followed.",
            },
        },
    },


    // =========================================================
    // 2024
    // =========================================================
    {
        ano: "2024",
        titulo: "LIDERANÇA E MATURIDADE PROFISSIONAL",

        momento:
            "✔️ Em 2024, assumi a Coordenação de TI e Telefonia na Azza Telecom, passando de uma atuação predominantemente técnica para uma posição com responsabilidade direta sobre uma equipe de 17 profissionais. Além da infraestrutura e da operação, passaram a fazer parte do meu cotidiano decisões envolvendo pessoas, prioridades, indicadores e relacionamento entre áreas. ✔️ Ferramentas como Power BI, Smartsheet, metodologias ágeis, Blip e integração entre CRM e Telefonia serviram como instrumentos para organizar trabalho, acompanhar resultados e melhorar processos.",

        evolucao:
            "✔️ A experiência mostrou de forma muito clara que conhecimento técnico, por mais importante que seja, não é suficiente para conduzir uma equipe. Comunicação, escuta ativa, inteligência emocional, organização e capacidade de estabelecer prioridades passaram a ter um peso muito maior na minha atuação. ✔️ Situações de conflito, diferenças de perfil e limitações da própria função exigiram aprender a buscar soluções mesmo quando o problema não possuía uma resposta puramente técnica.",

        legado:
            "✔️ A Azza representou uma etapa importante de amadurecimento profissional. Passei a compreender com mais profundidade a relação entre pessoas, processos, tecnologia e resultados. ✔️ Levei dessa experiência uma visão mais ampla sobre liderança, responsabilidade e tomada de decisão. Ao retornar posteriormente a uma atuação fortemente técnica, essa experiência de gestão não desapareceu: passou a complementar a forma como analiso projetos, prioridades, comunicação e impacto das decisões.",

        translations: {
            PT: {
                ano: "2024",
                titulo: "LIDERANÇA E MATURIDADE PROFISSIONAL",

                momento:
                    "✔️ Em 2024, assumi a Coordenação de TI e Telefonia na Azza Telecom, passando de uma atuação predominantemente técnica para uma posição com responsabilidade direta sobre uma equipe de 17 profissionais. Além da infraestrutura e da operação, passaram a fazer parte do meu cotidiano decisões envolvendo pessoas, prioridades, indicadores e relacionamento entre áreas. ✔️ Ferramentas como Power BI, Smartsheet, metodologias ágeis, Blip e integração entre CRM e Telefonia serviram como instrumentos para organizar trabalho, acompanhar resultados e melhorar processos.",

                evolucao:
                    "✔️ A experiência mostrou de forma muito clara que conhecimento técnico, por mais importante que seja, não é suficiente para conduzir uma equipe. Comunicação, escuta ativa, inteligência emocional, organização e capacidade de estabelecer prioridades passaram a ter um peso muito maior na minha atuação. ✔️ Situações de conflito, diferenças de perfil e limitações da própria função exigiram aprender a buscar soluções mesmo quando o problema não possuía uma resposta puramente técnica.",

                legado:
                    "✔️ A Azza representou uma etapa importante de amadurecimento profissional. Passei a compreender com mais profundidade a relação entre pessoas, processos, tecnologia e resultados. ✔️ Levei dessa experiência uma visão mais ampla sobre liderança, responsabilidade e tomada de decisão. Ao retornar posteriormente a uma atuação fortemente técnica, essa experiência de gestão não desapareceu: passou a complementar a forma como analiso projetos, prioridades, comunicação e impacto das decisões.",
            },

            EN: {
                ano: "2024",
                titulo: "LEADERSHIP AND PROFESSIONAL MATURITY",

                momento:
                    "✔️ In 2024, I became IT and Telephony Coordinator at Azza Telecom, moving from a predominantly technical position to one with direct responsibility for a team of 17 professionals. In addition to infrastructure and operations, my daily responsibilities now involved people, priorities, performance indicators and collaboration across different business areas. ✔️ Tools such as Power BI, Smartsheet, agile methodologies, Blip and CRM-Telephony integration became instruments for organizing work, tracking results and improving processes.",

                evolucao:
                    "✔️ The experience demonstrated very clearly that technical knowledge, however important, is not enough to lead a team. Communication, active listening, emotional intelligence, organization and the ability to establish priorities became much more significant in my work. ✔️ Conflicts, different professional profiles and limitations within the role required learning how to find solutions even when the problem did not have a purely technical answer.",

                legado:
                    "✔️ Azza represented an important stage of professional maturity. I developed a deeper understanding of the relationship between people, processes, technology and results. ✔️ I carried forward a broader perspective on leadership, responsibility and decision-making. When I later returned to a strongly technical role, that management experience did not disappear; it became part of how I evaluate projects, priorities, communication and the impact of technical decisions.",
            },
        },
    },


    // =========================================================
    // 2025
    // =========================================================
    {
        ano: "2025",
        titulo: "A CONVERGÊNCIA DA TRAJETÓRIA - PROJETO FUMEC",

        momento:
            "✔️ Em setembro de 2025, iniciei minha atuação na 3CORP como Analista de Redes Sênior, contratado para o Projeto FUMEC. O desafio reuniu Telecom, Redes e Infraestrutura de TI em um mesmo ambiente, incluindo backbone e anel óptico Huawei com 8 pontos, DWDM, roteadores, switches, OLTs e ONUs, além da construção de uma plataforma virtualizada com Proxmox e servidores Windows e Linux. ✔️ Minha frente principal concentrou-se na criação e integração da infraestrutura de servidores e serviços, sem assumir como minha a configuração completa dos roteadores e OLTs, mas trabalhando diretamente na integração desses equipamentos com os serviços construídos.",

        evolucao:
            "✔️ Ao longo do projeto, participei da implantação e organização de uma infraestrutura composta por 19 servidores, incluindo quatro Controladores de Domínio Active Directory e relações de confiança entre diferentes domínios. Serviços de DNS, LDAP e FreeRADIUS foram integrados para permitir identidade e autenticação centralizada, inclusive para equipamentos de rede. ✔️ Também trabalhamos na padronização e sincronização de horário por NTP entre servidores, roteadores, switches e OLTs, criando uma base comum importante para autenticação, registros de eventos, auditoria e troubleshooting. ✔️ Zabbix e Grafana passaram a consolidar a observabilidade do ambiente, culminando no desenvolvimento do AD Replication Mission Control para acompanhar saúde, serviços, recursos e informações operacionais dos 19 servidores.",

        legado:
            "✔️ O Projeto FUMEC representa uma etapa especial porque reúne, em um único cenário, conhecimentos que foram sendo construídos separadamente ao longo de mais de três décadas: suporte, servidores, redes, Telecom, identidade, segurança, monitoramento, troubleshooting, documentação e visão de projeto. ✔️ Mais do que aprender novas ferramentas, essa experiência fortaleceu minha capacidade de integrar tecnologias diferentes e compreender como cada camada influencia a outra. O profissional que começou em 1993 olhando um mainframe agora participa da construção de um ecossistema em que servidores, identidade, autenticação, observabilidade e Telecom precisam funcionar de forma coordenada. ✔️ Para mim, esse é o principal significado desta etapa: não representa o fim da trajetória, mas a convergência de tudo aquilo que foi aprendido antes e uma nova base para continuar evoluindo.",

        translations: {
            PT: {
                ano: "2025",
                titulo: "A CONVERGÊNCIA DA TRAJETÓRIA - PROJETO FUMEC",

                momento:
                    "✔️ Em setembro de 2025, iniciei minha atuação na 3CORP como Analista de Redes Sênior, contratado para o Projeto FUMEC. O desafio reuniu Telecom, Redes e Infraestrutura de TI em um mesmo ambiente, incluindo backbone e anel óptico Huawei com 8 pontos, DWDM, roteadores, switches, OLTs e ONUs, além da construção de uma plataforma virtualizada com Proxmox e servidores Windows e Linux. ✔️ Minha frente principal concentrou-se na criação e integração da infraestrutura de servidores e serviços, sem assumir como minha a configuração completa dos roteadores e OLTs, mas trabalhando diretamente na integração desses equipamentos com os serviços construídos.",

                evolucao:
                    "✔️ Ao longo do projeto, participei da implantação e organização de uma infraestrutura composta por 19 servidores, incluindo quatro Controladores de Domínio Active Directory e relações de confiança entre diferentes domínios. Serviços de DNS, LDAP e FreeRADIUS foram integrados para permitir identidade e autenticação centralizada, inclusive para equipamentos de rede. ✔️ Também trabalhamos na padronização e sincronização de horário por NTP entre servidores, roteadores, switches e OLTs, criando uma base comum importante para autenticação, registros de eventos, auditoria e troubleshooting. ✔️ Zabbix e Grafana passaram a consolidar a observabilidade do ambiente, culminando no desenvolvimento do AD Replication Mission Control para acompanhar saúde, serviços, recursos e informações operacionais dos 19 servidores.",

                legado:
                    "✔️ O Projeto FUMEC representa uma etapa especial porque reúne, em um único cenário, conhecimentos que foram sendo construídos separadamente ao longo de mais de três décadas: suporte, servidores, redes, Telecom, identidade, segurança, monitoramento, troubleshooting, documentação e visão de projeto. ✔️ Mais do que aprender novas ferramentas, essa experiência fortaleceu minha capacidade de integrar tecnologias diferentes e compreender como cada camada influencia a outra. O profissional que começou em 1993 olhando um mainframe agora participa da construção de um ecossistema em que servidores, identidade, autenticação, observabilidade e Telecom precisam funcionar de forma coordenada. ✔️ Para mim, esse é o principal significado desta etapa: não representa o fim da trajetória, mas a convergência de tudo aquilo que foi aprendido antes e uma nova base para continuar evoluindo.",
            },

            EN: {
                ano: "2025",
                titulo: "THE CONVERGENCE OF A CAREER - FUMEC PROJECT",

                momento:
                    "✔️ In September 2025, I joined 3CORP as a Senior Network Analyst assigned to the FUMEC Project. The challenge brought Telecom, Networking and IT Infrastructure together in the same environment, including a Huawei backbone and eight-point optical ring, DWDM, routers, switches, OLTs and ONUs, as well as a Proxmox virtualized platform with Windows and Linux servers. ✔️ My main responsibility was centered on building and integrating the server and service infrastructure. I was not responsible for the complete configuration of routers and OLTs, but worked directly on integrating those devices with the services being implemented.",

                evolucao:
                    "✔️ Throughout the project, I participated in the deployment and organization of an infrastructure composed of 19 servers, including four Active Directory Domain Controllers and trust relationships between different domains. DNS, LDAP and FreeRADIUS services were integrated to provide centralized identity and authentication, including authentication for network equipment. ✔️ We also standardized time synchronization through NTP across servers, routers, switches and OLTs, creating a consistent foundation for authentication, event logging, auditing and troubleshooting. ✔️ Zabbix and Grafana became the observability layer for the environment, leading to the development of the AD Replication Mission Control to consolidate health, services, resource usage and operational information across the 19 servers.",

                legado:
                    "✔️ The FUMEC Project represents a special stage of my career because it brings together, within a single environment, knowledge that had been developed separately over more than three decades: support, servers, networking, Telecom, identity, security, monitoring, troubleshooting, documentation and project thinking. ✔️ More than learning additional tools, this experience strengthened my ability to integrate different technologies and understand how each layer affects the others. The professional who began in 1993 working around a mainframe now participates in building an ecosystem where servers, identity, authentication, observability and Telecom must operate in a coordinated way. ✔️ For me, that is the most important meaning of this stage: it does not represent the end of the journey, but the convergence of what came before and a new foundation for continued growth.",
            },
        },
    },
];