// Interface para definir o formato dos dados de cada item
interface ServiceData {
  title: string;
  description: string;
  icon: React.ElementType; // Tipo do ícone (componente React)
  href?: string;
}

import {
  IconCode,
  IconCalendarStats,
  IconFileAnalytics,
  IconLifebuoy,
  IconUsers,
} from "@tabler/icons-react";

export const servicesData: ServiceData[] = [
  {
    title: "Desenvolvimento de Software",
    description:
      "Desenvolvimento de aplicações robustas e escaláveis para atender às necessidades do seu negócio.",
    icon: IconCode,
    href: "https://system-wiser.vercel.app/software",
  },
  {
    title: "Gerenciamento de Projetos",
    description:
      "Planejamento e execução eficazes para garantir o sucesso de seus projetos.",
    icon: IconCalendarStats,
    href: "/projects",
  },
  {
    title: "Consultoria de TI",
    description:
      "Alocação temporária de profissionais especializados conforme a demanda do seu negócio.",
    icon: IconUsers,
    href: "/consultant",
  },
  {
    title: "Suporte On-Demand",
    description:
      "Suporte técnico remoto e presencial para a continuidade das suas operações.",
    icon: IconLifebuoy,
    href: "/support",
  },
  {
    title: "Desenvolvimento de PowerBI",
    description:
      "Transformamos dados em insights acionáveis para decisões estratégicas.",
    icon: IconFileAnalytics,
    href: "/powerbi",
  },
];

import {
  IconBolt,
  IconUser,
  IconZoomIn,
  IconClock,
  IconCurrencyDollar,
} from "@tabler/icons-react";

// Filosofia da empresa (CMS)
export const philosophy = [
  {
    title: "O que Fazemos?",
    description: "Soluções Tecnológicas que Transformam Negócios",
    icon: <IconBolt className="size-4 md:size-6" />,
    content: (
      <p>
        Na <strong>System Wiser</strong>, criamos soluções tecnológicas sob
        medida para transformar desafios em oportunidades. Nossa equipe dedicada
        usa inovação e criatividade para desenvolver soluções inteligentes que
        não apenas resolvem problemas, mas também impulsionam o crescimento de
        nossos clientes.
      </p>
    ),
  },
  {
    title: "No que Acreditamos?",
    description: "Produtividade e Felicidade Andam Juntas",
    icon: <IconUser className="size-4 md:size-6" />,
    content: (
      <p>
        Acreditamos que <strong>empresas produtivas</strong> e{" "}
        <strong>pessoas felizes</strong> criam resultados extraordinários. Nossa
        missão é promover ambientes que incentivam a produtividade e o bem-estar
        dos colaboradores, criando um ciclo de inovação e sucesso sustentável.
      </p>
    ),
  },
  {
    title: "O que nos Inspira?",
    description: "Criando um Futuro Produtivo e Inovador",
    icon: <IconZoomIn className="size-4 md:size-6" />,
    content: (
      <p>
        Nossa inspiração vem do desejo de{" "}
        <strong>construir um Brasil mais produtivo</strong>e eficiente por meio
        da tecnologia. Com soluções inovadoras, abrimos novos horizontes para
        empresas e pessoas, ajudando o país a atingir seu máximo potencial.
      </p>
    ),
  },
  {
    title: "Como Fazemos a Diferença?",
    description: "Excelência e Ética em Tudo que Fazemos",
    icon: <IconClock className="size-4 md:size-6" />,
    content: (
      <p>
        Na <strong>System Wiser</strong>, acreditamos que a{" "}
        <strong>ética</strong> é a base de todas as nossas ações. Nosso
        compromisso com a <strong>excelência</strong> nos guia na busca pelas
        melhores práticas, criando soluções que vão além das expectativas e
        geram resultados significativos para nossos clientes.
      </p>
    ),
  },
  {
    title: "Como Crescemos?",
    description: "Crescimento Através de Parcerias e Inovação",
    icon: <IconCurrencyDollar className="size-4 md:size-6" />,
    content: (
      <p>
        O verdadeiro crescimento vem da <strong>integração</strong> e do{" "}
        <strong>compartilhamento de conhecimento</strong>. Na{" "}
        <strong>System Wiser</strong>, incentivamos a troca constante de
        experiências e criamos parcerias estratégicas que ajudam nossos clientes
        a superar desafios e alcançar seus objetivos com sucesso.
      </p>
    ),
  },
];
