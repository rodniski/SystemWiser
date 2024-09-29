import { Bento, FeatureInterface, HeroProps } from "@/types/interfaces";
import {
  IconBolt,
  IconHierarchy,
  IconUsers,
  IconClipboardList,
  IconCalendarEvent,
  IconSettings,
  IconDeviceLaptop,
} from "@tabler/icons-react";

export const bodyshopHeroContent: HeroProps = {
  subtitle: "Alocação Flexível de Profissionais Especializados",
  title: (
    <>
      Soluções de <span className="text-blue-500">BodyShop</span> para Atender
      às Suas Demandas
    </>
  ),
  description:
    "Oferecemos alocação temporária de profissionais qualificados para atender às suas necessidades específicas de projetos e operações. Flexibilidade e rapidez com a garantia de profissionais experientes.",
  ctaText: "Entre em Contato",
  animationType: "json", // Especifica que estamos usando um JSON
  lottieData: () => import("@/public/lottie/bodyshop/hero.json"), // Importa dinamicamente o arquivo JSON
};

// Lista de Features (Diferenciais Competitivos)
export const bodyshopFeatures: FeatureInterface[] = [
  {
    title: "Seleção Rigorosa",
    description:
      "Processo criterioso de recrutamento para garantir a experiência e especialização.",
    icon: <IconBolt className="size-4 md:size-6" />,
    content: (
      <p>
        Avaliamos cuidadosamente os candidatos para garantir que seus
        profissionais sejam altamente qualificados e capazes de atender às
        demandas técnicas e culturais da sua empresa.
      </p>
    ),
  },
  {
    title: "Flexibilidade Total",
    description: "Escalabilidade rápida conforme a evolução do projeto.",
    icon: <IconUsers className="size-4 md:size-6" />,
    content: (
      <p>
        Nosso modelo BodyShop permite expandir ou reduzir sua equipe conforme a
        necessidade, sem comprometer a eficiência ou os custos de longo prazo.
      </p>
    ),
  },
  {
    title: "Redução de Custos Operacionais",
    description: "Sem vínculos trabalhistas permanentes.",
    icon: <IconHierarchy className="size-4 md:size-6" />,
    content: (
      <p>
        Com a contratação de profissionais temporários, você elimina encargos
        trabalhistas desnecessários, mantendo sua empresa enxuta e eficiente.
      </p>
    ),
  },
  {
    title: "Agilidade na Contratação",
    description: "Alocação rápida de profissionais capacitados.",
    icon: <IconSettings className="size-4 md:size-6" />,
    content: (
      <p>
        Nossa equipe preenche suas demandas com rapidez, disponibilizando
        profissionais qualificados em tempo recorde, assegurando que seus
        projetos comecem sem atrasos.
      </p>
    ),
  },
  {
    title: "Equipe Multidisciplinar",
    description: "Profissionais especializados em diversas áreas.",
    icon: <IconDeviceLaptop className="size-4 md:size-6" />,
    content: (
      <p>
        Nossos profissionais vêm de diversas áreas, prontos para colaborar em
        projetos que envolvem múltiplos setores, como desenvolvimento,
        segurança, e suporte.
      </p>
    ),
  },
];

// Lista de Itens do Bento (Nossos Serviços)
export const bodyshopBentoItems: Bento[] = [
  {
    id: "alocacao-profissionais-ti",
    title: "Alocação de Profissionais de TI",
    description:
      "Desenvolvimento de software, suporte técnico, infraestrutura, Cloud e DevOps.",
    icon: <IconClipboardList className="h-4 w-4 text-neutral-500" />,
    lottieData: () => import("@/public/lottie/bodyshop/car.json"),
    iconType: "json",
  },
  {
    id: "gerenciamento-projetos",
    title: "Gerenciamento de Projetos",
    description:
      "Gerentes de projeto experientes com certificações PMP, SCRUM e PRINCE2.",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
    lottieData: () => import("@/public/lottie/projects/plan.json"),
    iconType: "json",
  },
  {
    id: "infraestrutura-cloud",
    title: "Infraestrutura e Cloud",
    description:
      "Suporte para arquitetura e manutenção de soluções de infraestrutura em nuvem.",
    icon: <IconDeviceLaptop className="h-4 w-4 text-neutral-500" />,
    lottieData: () => import("@/public/lottie/bodyshop/server.json"),
    iconType: "json",
  },
  {
    id: "seguranca-informacao",
    title: "Segurança da Informação",
    description:
      "Especialistas em segurança para proteger seus dados e operações de ataques cibernéticos.",
    icon: <IconHierarchy className="h-4 w-4 text-neutral-500" />,
    lottieData: () => import("@/public/lottie/bodyshop/security.json"),
    iconType: "json",
  },
  {
    id: "capacitacao-treinamento",
    title: "Capacitação e Treinamento",
    description:
      "Treinamentos específicos para capacitação de equipes internas nas melhores práticas e novas tecnologias.",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    lottieData: () => import("@/public/lottie/projects/conference.json"),
    iconType: "json",
  },
];
