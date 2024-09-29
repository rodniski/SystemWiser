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
import { Bento, FeatureInterface, TimelineEntry } from "@/types/interfaces";

// Conteúdo do Hero Section
export const supportHeroContent = {
  subtitle: "Suporte Técnico On-Demand",
  title: (
    <>
      A Melhor Assistência Técnica{" "}
      <span className="text-blue-500">Quando Você Precisar</span>
    </>
  ),
  description:
    "Nosso suporte on-demand oferece uma solução flexível e escalável para garantir o funcionamento contínuo dos seus sistemas. Seja remoto ou presencial, estamos sempre prontos para ajudar.",
  ctaText: "Fale Conosco",
  lottieSrc: "/lottie/software/update.lottie",
};

// Lista de Features (Diferenciais Competitivos)
export const supportFeatures: FeatureInterface[] = [
  {
    title: "Atendimento 24/7",
    description:
      "Suporte contínuo, garantindo assistência a qualquer hora do dia ou da noite.",
    icon: <IconBolt className="size-4 md:size-6" />,
    content: (
      <p>
        Oferecemos suporte técnico a qualquer hora do dia, com equipes
        disponíveis 24/7 para resolver problemas críticos e garantir a
        continuidade do seu negócio.
      </p>
    ),
  },
  {
    title: "Equipe Especializada",
    description:
      "Profissionais altamente qualificados com experiência em diversos sistemas.",
    icon: <IconUserCheck className="size-4 md:size-6" />,
    content: (
      <p>
        Nossos especialistas possuem vasta experiência em ERP (TOTVS, SAP,
        Oracle), CRM (Microsoft, Salesforce), e muito mais, garantindo soluções
        rápidas e eficientes.
      </p>
    ),
  },
  {
    title: "Resposta Rápida",
    description: "Tempo de resposta rápido para incidentes críticos.",
    icon: <IconTarget className="size-4 md:size-6" />,
    content: (
      <p>
        Priorizamos incidentes críticos para manter seus sistemas sempre
        funcionando, com foco na continuidade do seu negócio e no atendimento
        rápido para falhas.
      </p>
    ),
  },
  {
    title: "Suporte Personalizado",
    description: "Soluções adaptadas à necessidade de cada cliente.",
    icon: <IconSettings className="size-4 md:size-6" />,
    content: (
      <p>
        Adaptamos nossas soluções de suporte às suas necessidades específicas,
        seja para pequenas empresas ou grandes corporações, com SLAs
        personalizados.
      </p>
    ),
  },
  {
    title: "Ferramentas Tecnológicas",
    description:
      "Ferramentas avançadas de monitoramento e gestão de incidentes.",
    icon: <IconDeviceLaptop className="size-4 md:size-6" />,
    content: (
      <p>
        Utilizamos as melhores ferramentas tecnológicas, como Microsoft Project,
        Jira e Asana, para monitorar e controlar seus sistemas com eficiência.
      </p>
    ),
  },
];

// Lista de Itens do Bento (Nossos Serviços)
export const supportBentoItems: Bento[] = [
  {
    id: "suporte-remoto-presencial",
    title: "Suporte Técnico Remoto e Presencial",
    description: "Diagnóstico e resolução de problemas técnicos em tempo real.",
    icon: <IconClipboardList className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/support/support.json"), // Importação dinâmica
  },
  {
    id: "monitoramento-preventivo",
    title: "Monitoramento e Manutenção Preventiva",
    description: "Identificação de falhas e atualizações de software.",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/support/camera.json"), // Importação dinâmica
  },
  {
    id: "gestao-incidentes",
    title: "Gestão de Incidentes e Soluções",
    description: "Priorização e resolução rápida de incidentes críticos.",
    icon: <IconAlertTriangle className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/support/lifebuoy.json"), // Importação dinâmica
  },
  {
    id: "treinamento-capacitacao",
    title: "Treinamento e Capacitação",
    description: "Capacitação para autossuficiência em operações diárias.",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/support/trainer.json"), // Importação dinâmica
  },
  {
    id: "integracao-novos-sistemas",
    title: "Integração de Novos Sistemas",
    description:
      "O suporte na migração e integração de novos sistemas garante a transição segura e eficiente de plataformas legadas para soluções modernas, minimizando riscos e interrupções.",
    icon: <IconHierarchy className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/support/connect.json"), // Importação dinâmica
  },
];

// Timeline (Nossa Abordagem e Benefícios)
export const supportTimeline: TimelineEntry[] = [
  {
    title: "Suporte Técnico",
    subtitle: "Remoto e Presencial",
    content: (
      <p>
        Oferecemos suporte técnico de qualidade, tanto remoto quanto presencial,
        com diagnóstico em tempo real e soluções rápidas para problemas
        técnicos.
      </p>
    ),
    icon: <IconClipboardList className="h-5 w-5" />,
  },
  {
    title: "Monitoramento Preventivo",
    subtitle: "Manutenção Contínua",
    content: (
      <p>
        Monitoramos seus sistemas continuamente, garantindo que possíveis falhas
        sejam identificadas antes que causem problemas, e realizamos
        atualizações preventivas.
      </p>
    ),
    icon: <IconCalendarEvent className="h-5 w-5" />,
  },
  {
    title: "Gestão de Incidentes",
    subtitle: "Soluções Rápidas",
    content: (
      <p>
        Garantimos a rápida resolução de incidentes críticos, priorizando
        problemas de acordo com a gravidade e o impacto no seu negócio.
      </p>
    ),
    icon: <IconAlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Treinamento e Capacitação",
    subtitle: "Suporte para sua Equipe",
    content: (
      <p>
        Capacitamos sua equipe para lidar com operações diárias de forma
        independente, além de fornecer treinamento específico para novas
        funcionalidades.
      </p>
    ),
    icon: <IconUsers className="h-5 w-5" />,
  },
  {
    title: "Integração de Sistemas",
    subtitle: "Migração e Suporte",
    content: (
      <p>
        Ajudamos na integração e migração de novos sistemas, garantindo
        compatibilidade e performance otimizada em todas as plataformas.
      </p>
    ),
    icon: <IconHierarchy className="h-5 w-5" />,
  },
];
