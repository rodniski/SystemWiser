import { HeroProps, Bento, FeatureInterface } from "@/types/interfaces";
import {
  IconDatabase,
  IconChartBar,
  IconDeviceAnalytics,
  IconCloud,
  IconPresentationAnalytics,
  IconListDetails,
} from "@tabler/icons-react";

// Conteúdo do Hero Section
export const biHeroContent: HeroProps = {
  subtitle: "Soluções Personalizadas de Business Intelligence",
  title: (
    <>
      Transforme Dados em <span className="text-blue-500">Decisões</span>
    </>
  ),
  description:
    "Com as ferramentas de BI da System Wiser, você pode transformar grandes volumes de dados em insights práticos e acionáveis. Dashboards em tempo real, análise preditiva e muito mais.",
  ctaText: "Fale Conosco",
  animationType: "json",
  lottieData: () => import("@/public/lottie/bi/hero.json"), // Caminho para a animação Lottie
};

// Lista de Features (Diferenciais Competitivos)
export const biFeatures: FeatureInterface[] = [
  {
    title: "Equipe Especializada",
    description: "Profissionais com vasta experiência em análise de dados.",
    icon: <IconDeviceAnalytics className="h-6 w-6" />,
    content: (
      <p>
        Nossa equipe conta com especialistas em BI, Data Science e Machine
        Learning, que irão garantir o sucesso das suas implementações de BI.
      </p>
    ),
  },
  {
    title: "Soluções Sob Medida",
    description: "Adaptado para pequenas, médias e grandes empresas.",
    icon: <IconListDetails className="h-6 w-6" />,
    content: (
      <p>
        Desenvolvemos soluções de BI personalizadas para as necessidades e KPIs
        do seu negócio, de acordo com seu porte e setor.
      </p>
    ),
  },
  {
    title: "Integração Completa",
    description: "Conexão perfeita com ERP, CRM e sistemas empresariais.",
    icon: <IconDatabase className="h-6 w-6" />,
    content: (
      <p>
        Garantimos a integração dos dados da sua empresa em uma única
        plataforma, garantindo a consistência e qualidade dos dados.
      </p>
    ),
  },
  {
    title: "Análise em Tempo Real",
    description: "Dashboards atualizados em tempo real.",
    icon: <IconChartBar className="h-6 w-6" />,
    content: (
      <p>
        Nossos dashboards oferecem insights em tempo real, permitindo decisões
        rápidas e baseadas em dados atualizados.
      </p>
    ),
  },
  {
    title: "ROI Mensurável",
    description: "Decisões orientadas por dados com ROI claro.",
    icon: <IconPresentationAnalytics className="h-6 w-6" />,
    content: (
      <p>
        Oferecemos soluções que demonstram retorno sobre o investimento (ROI)
        claro e mensurável, com base nas decisões orientadas por dados.
      </p>
    ),
  },
];

// Lista de Itens do Bento (Nossos Serviços)
export const biBentoItems: Bento[] = [
  {
    id: "consultoria-bi",
    title: "Consultoria em BI",
    description: "Análise das necessidades de dados e KPIs da empresa.",
    icon: <IconCloud className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/support/support.json"), // Caminho do arquivo JSON
  },
  {
    id: "dashboards-relatorios",
    title: "Desenvolvimento de Dashboards e Relatórios",
    description: "Criação de dashboards personalizados e relatórios dinâmicos.",
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/bi/bar.json"),
  },
  {
    id: "integracao-dados",
    title: "Integração de Dados",
    description: "Conectamos várias fontes de dados com qualidade garantida.",
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/bi/integration.json"),
  },
  {
    id: "analise-avancada",
    title: "Análise Avançada de Dados",
    description:
      "Modelos preditivos e análises avançadas para identificar oportunidades.",
    icon: <IconDeviceAnalytics className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/bi/doc.json"),
  },
  {
    id: "treinamento-suporte",
    title: "Treinamento e Suporte",
    description:
      "Treinamento personalizado e suporte contínuo para sua equipe.",
    icon: <IconListDetails className="h-4 w-4 text-neutral-500" />,
    iconType: "json",
    lottieData: () => import("@/public/lottie/projects/conference.json"),
  },
];
