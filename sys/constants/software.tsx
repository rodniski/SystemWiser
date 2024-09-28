//HERO SECTION
export const softwareHeroContent = {
  subtitle: "Desenvolvimento personalizado para levar o seu negócio ao próximo nível",
  title: (
    <>
      Soluções digitais personalizadas para{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-sky-800 to-sky-600 dark:from-sky-200 dark:to-sky-500">
        impulsionar o seu negócio.
      </span>
    </>
  ),
  description:
    "Desenvolvimento personalizado para levar o seu negócio ao próximo nível",
  ctaText: "Fale com a gente",
  lottieSrc: "/lottie/software/hero.lottie",
  additionalClasses: "", // Classes adicionais se necessário
  isAnimated: true, // Flag para animações específicas
};

// SERVICES
export interface Service {
  id: string;
  title: string;
  description: string;
}
export const servicesData: Service[] = [
  {
    id: "applicativos-personalizados",
    title: "Aplicativos Personalizados",
    description:
      "Transforme suas operações com software sob medida, pensado para atender cada necessidade exclusiva do seu negócio. Seja um sistema de gestão ou um CRM personalizado, entregamos soluções que se integram perfeitamente ao seu fluxo de trabalho, garantindo escalabilidade e performance no crescimento da sua empresa. Imagine um sistema feito exatamente para o que você precisa, sem compromissos ou limitações.",
  },
  {
    id: "applicativos-mobile",
    title: "Aplicativos Mobile",
    description:
      "Leve a experiência do seu cliente para o próximo nível com aplicativos móveis de alta performance. Desenvolvemos apps nativos que funcionam impecavelmente tanto em Android quanto em iOS, sempre com foco na melhor experiência de usuário. Desde marketplaces até soluções empresariais, criamos aplicativos que conectam suas ideias ao mundo digital de forma ágil e segura.",
  },
  {
    id: "analise-de-requisitos",
    title: "Análise de Requisitos",
    description:
      "Cada projeto começa com um entendimento profundo das suas necessidades. Mergulhamos no seu negócio para definir o escopo ideal, funcionalidades e requisitos técnicos que não só alinham com seus objetivos, mas também identificam oportunidades de otimização que talvez você ainda não tenha considerado. Dessa forma, garantimos que o desenvolvimento do software seja preciso, eficiente e alinhado ao que você realmente precisa.",
  },
  {
    id: "planejamento-de-projetos",
    title: "Planejamento de Projetos",
    description:
      "Planejamento é a chave do sucesso em qualquer projeto. Ajudamos a estruturar uma estratégia sólida, com cronogramas bem definidos e metodologias ágeis, assegurando que tudo seja entregue dentro do prazo e do orçamento. A execução é acompanhada de perto em cada etapa, garantindo que cada detalhe seja ajustado para o sucesso final do seu projeto.",
  },
];

//BENTOBOX
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";

export interface Bento {
  id: string;
  title: string;
  description: string;
  lottie: string;
  icon: React.ReactNode;
}
export const bentoItems: Bento[] = [
  {
    id: "manutencao-suporte",
    title: "Manutenção e Suporte",
    description:
      "Fornecemos manutenção contínua e suporte técnico especializado para garantir que seu software funcione de maneira eficiente e sem interrupções.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/maintenance.lottie",
  },
  {
    id: "integracao-sistemas",
    title: "Integração de Sistemas",
    description:
      "Facilitamos a comunicação entre diferentes plataformas para que seu sistema seja mais integrado e eficiente.",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/connect.lottie",
  },
  {
    id: "correcao-bugs",
    title: "Correção de Bugs",
    description:
      "Identificação e resolução de bugs para garantir a estabilidade e eficiência do sistema.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/bugs.lottie",
  },
  {
    id: "atualizacoes-melhorias",
    title: "Atualizações e Melhorias",
    description:
      "Adicionamos novas funcionalidades e mantemos o software atualizado com as melhores práticas do mercado.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/update.lottie",
  },

  {
    id: "automatizacao-processos",
    title: "Automatização de Processos",
    description:
      "Automatizamos fluxos de trabalho, reduzindo tarefas manuais e aumentando a produtividade.",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/robot.lottie",
  },
  {
    id: "design-ux-ui",
    title: "Design UX/UI",
    description:
      "Desenvolvemos interfaces intuitivas e experiências de usuário envolventes, focadas em eficiência e usabilidade.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/ux.lottie",
  },
  {
    id: "desenvolvimento-saas",
    title: "Desenvolvimento SaaS",
    description:
      "Criamos plataformas SaaS personalizadas, facilitando a entrega de serviços online para seus clientes.",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    lottie: "/lottie/software/saas.lottie",
  },
];
