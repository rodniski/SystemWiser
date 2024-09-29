import { Bento, FeatureInterface } from "@/types/interfaces";
import {
  IconBolt,
  IconUserCheck,
  IconTarget,
  IconSettings,
  IconDeviceLaptop,
  IconClipboardList,
  IconCalendarEvent,
  IconAlertTriangle,
  IconUsers,
  IconHierarchy,
} from "@tabler/icons-react";

// Conteúdo do Hero Section
export const projectHeroContent = {
  subtitle: "Consultoria Especializada em Gestão de Projetos",
  title: (
    <>
      Transforme Seus <span className="text-blue-500">Projetos</span> em Sucesso
    </>
  ),
  description:
    "Com uma abordagem estruturada e metodologias comprovadas, ajudamos você a alcançar resultados consistentes em seus projetos. Desde o planejamento inicial até a execução final, garantimos que suas metas sejam cumpridas dentro do prazo e orçamento.",
  ctaText: "Fale Conosco",
  lottieSrc: "/lottie/projects/hero.lottie",
};

// Lista de Features (Diferenciais Competitivos)
export const projectFeatures: FeatureInterface[] = [
  {
    title: "Metodologias de Ponta",
    description: "Utilizamos práticas como PMI, PRINCE2, Ágil (Scrum, Kanban).",
    icon: <IconBolt className="size-4 md:size-6" />,
    content: (
      <p>
        Trabalhamos com metodologias avançadas para garantir o sucesso dos seus
        projetos, adotando práticas reconhecidas internacionalmente.
      </p>
    ),
  },
  {
    title: "Equipe Especializada",
    description: "Profissionais certificados com vasta experiência.",
    icon: <IconUserCheck className="size-4 md:size-6" />,
    content: (
      <p>
        Nossa equipe é formada por profissionais certificados e altamente
        qualificados, com ampla experiência em projetos de alta complexidade.
      </p>
    ),
  },
  {
    title: "Foco em Resultados",
    description: "Compromisso com a entrega de valor para nossos clientes.",
    icon: <IconTarget className="size-4 md:size-6" />,
    content: (
      <p>
        Nosso objetivo é garantir a entrega de resultados mensuráveis e
        significativos para sua empresa, com foco em eficiência e eficácia.
      </p>
    ),
  },
  {
    title: "Flexibilidade",
    description: "Soluções adaptáveis aos desafios de cada setor.",
    icon: <IconSettings className="size-4 md:size-6" />,
    content: (
      <p>
        Oferecemos soluções flexíveis e customizadas para atender às
        necessidades específicas de cada setor e empresa.
      </p>
    ),
  },
  {
    title: "Ferramentas de Tecnologia",
    description: "Softwares avançados para controle e visibilidade.",
    icon: <IconDeviceLaptop className="size-4 md:size-6" />,
    content: (
      <p>
        Utilizamos ferramentas de ponta, como Microsoft Project, Jira, Asana,
        Trello, Power BI, e Tableau, para otimizar o monitoramento e controle
        dos projetos.
      </p>
    ),
  },
];

// Lista de Itens do Bento (Nossos Serviços)
export const projectBentoItems: Bento[] = [
  {
    id: "consultoria-gerenciamento",
    title: "Consultoria em Gerenciamento de Projetos",
    description: "Avaliação inicial e recomendação de metodologias ideais.",
    icon: <IconClipboardList className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/projects/consult.json"), // Importação dinâmica
  },
  {
    id: "planejamento-controle",
    title: "Planejamento e Controle",
    description: "Criação de cronogramas e controle de orçamento.",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/projects/plan.json"), // Importação dinâmica
  },
  {
    id: "gestao-riscos",
    title: "Gestão de Riscos e Qualidade",
    description: "Identificação e mitigação de riscos desde o início.",
    icon: <IconAlertTriangle className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/projects/risk.json"), // Importação dinâmica
  },
  {
    id: "gerenciamento-stakeholders",
    title: "Gerenciamento de Stakeholders",
    description: "Coordenação da comunicação com as partes interessadas.",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/projects/stake.json"), // Importação dinâmica
  },
  {
    id: "integracao-equipes",
    title: "Integração de Equipes Multidisciplinares",
    description: "Alinhamento eficaz de equipes técnicas e operacionais.",
    icon: <IconHierarchy className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/projects/conference.json"), // Importação dinâmica
  },
];

// Timeline para o processo
export const projectTimeline = [
  {
    title: "Nossa Abordagem",
    content: (
      <>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Diagnóstico
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Uma análise detalhada do projeto é conduzida para identificar as
            necessidades e oportunidades. Durante essa fase, mapeamos as
            demandas específicas do cliente, o escopo do projeto, os desafios e
            os recursos disponíveis. O objetivo é criar uma base sólida para um
            planejamento eficaz.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Planejamento
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Com base nas informações obtidas no diagnóstico, desenvolvemos um
            roadmap estratégico. O planejamento inclui a criação de cronogramas
            detalhados, definição de metas claras e a distribuição eficiente de
            recursos. Garantimos que todas as etapas estejam bem definidas, com
            prazos realistas e metas atingíveis.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Execução
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Durante a execução, alocamos os recursos necessários e monitoramos
            continuamente as atividades. Nossa equipe acompanha de perto o
            progresso, realizando ajustes e correções conforme necessário, para
            garantir que o projeto siga conforme o planejado e os marcos sejam
            atingidos.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Monitoramento e Controle
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Avaliamos o desempenho do projeto por meio de indicadores-chave
            (KPIs) e relatórios detalhados. O monitoramento constante permite
            ajustes rápidos, assegurando que o projeto mantenha sua qualidade e
            cumpra seus objetivos. Asseguramos que qualquer risco emergente seja
            tratado rapidamente.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Encerramento
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Na fase de encerramento, realizamos uma avaliação final de todo o
            projeto, revisando os KPIs e o cumprimento dos objetivos
            estabelecidos. Fornecemos uma entrega completa e conclusiva do
            projeto, juntamente com recomendações para melhorias futuras e a
            satisfação das partes interessadas.
          </p>
        </div>
      </>
    ),
    icon: <IconClipboardList className="h-5 w-5" />,
  },
  {
    title: "Ferramentas e Tecnologias",
    content: (
      <>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Microsoft Project, Jira, Asana, Trello
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Utilizamos ferramentas de ponta como Microsoft Project, Jira, Asana
            e Trello para planejar, monitorar e controlar os projetos. Essas
            plataformas permitem uma gestão eficiente de tarefas, prazos,
            recursos e comunicação entre equipes. Elas oferecem uma visão clara
            e organizada do andamento do projeto, facilitando a tomada de
            decisões estratégicas.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Power BI, Tableau
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Para análise de dados e geração de relatórios, utilizamos Power BI e
            Tableau, que oferecem dashboards personalizados para acompanhamento
            do desempenho. Essas ferramentas transformam dados em insights
            acionáveis, permitindo a visualização em tempo real e ajudando na
            tomada de decisões informadas e baseadas em dados concretos.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Automação de Processos
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Implementamos soluções de automação de processos que ajudam a
            reduzir tarefas manuais, aumentando a eficiência e eliminando
            gargalos. Ao automatizar fluxos de trabalho repetitivos, conseguimos
            otimizar o uso dos recursos disponíveis, economizar tempo e reduzir
            o risco de erros humanos.
          </p>
        </div>
      </>
    ),
    icon: <IconDeviceLaptop className="h-5 w-5" />,
  },
  {
    title: "Treinamentos e Capacitação",
    content: (
      <>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Gerenciamento de Projetos
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Oferecemos treinamentos completos para capacitar sua equipe em
            gerenciamento de projetos com foco em metodologias como PMI, PRINCE2
            e Ágil (Scrum e Kanban). Nossos cursos são voltados para melhorar a
            capacidade de liderança, planejamento e execução dos projetos dentro
            das melhores práticas do mercado.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Ferramentas de Software
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Treinamos sua equipe no uso de ferramentas de software para gestão
            de projetos, como Microsoft Project, Jira e Asana. Através desses
            treinamentos, sua equipe será capaz de utilizar essas ferramentas
            para aumentar a eficiência no gerenciamento de tarefas, recursos e
            tempo.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
            Gestão de Risco e Comunicação
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Além de técnicas de gerenciamento, capacitamos sua equipe para
            identificar, avaliar e mitigar riscos em projetos, assim como
            promover uma comunicação eficaz entre as partes interessadas. Isso
            garante que todos estejam alinhados e que os desafios sejam
            enfrentados de maneira proativa.
          </p>
        </div>
      </>
    ),
    icon: <IconUsers className="h-5 w-5" />,
  },
];
