// constants.ts
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ReactNode } from "react";
import { LottieOptions } from "lottie-react"; // Importando tipo para animações

export interface ServiceItem {
  title: string;
  description: string;
  lottieOptions: LottieOptions; // Usando LottieOptions para definir a animação
  icon: React.ReactNode;
}

// Animações Lottie (exemplo com caminhos para animações Lottie)
import automation from "@/public/lotties/software/automation.json";
import bug from "@/public/lotties/software/bug.json";
import integration from "@/public/lotties/software/integration.json";
import maintenance from "@/public/lotties/software/maintenance.json";
import saas from "@/public/lotties/software/saas.json";
import update from "@/public/lotties/software/update.json";
import ux from "@/public/lotties/software/ux.json";

export const bentoItems: ServiceItem[] = [
  {
    title: "Manutenção e Suporte",
    description:
      "Fornecemos manutenção contínua e suporte técnico especializado para garantir que seu software funcione de maneira eficiente e sem interrupções.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: maintenance,
      loop: true,
    }, // Ícone aqui
  },
  {
    title: "Correção de Bugs",
    description:
      "Identificação e resolução de bugs para garantir a estabilidade e eficiência do sistema.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: bug,
      loop: true,
    }, // Ícone aqui
  },
  {
    title: "Atualizações e Melhorias",
    description:
      "Adicionamos novas funcionalidades e mantemos o software atualizado com as melhores práticas do mercado.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: update,
      loop: true,
    }, // Ícone aqui
  },
  {
    title: "Integração de Sistemas",
    description:
      "Facilitamos a comunicação entre diferentes plataformas para que seu sistema seja mais integrado e eficiente.",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: integration,
      loop: true,
    }, // Ícone aqui
  },
  {
    title: "Automatização de Processos",
    description:
      "Automatizamos fluxos de trabalho, reduzindo tarefas manuais e aumentando a produtividade.",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: automation,
      loop: true,
    }, // Ícone aqui
  },
  {
    title: "Desenvolvimento SaaS",
    description:
      "Criamos plataformas SaaS personalizadas, facilitando a entrega de serviços online para seus clientes.",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: saas,
      loop: true,
    }, // Ícone aqui
  },
  {
    title: "Design UX/UI",
    description:
      "Desenvolvemos interfaces intuitivas e experiências de usuário envolventes, focadas em eficiência e usabilidade.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    lottieOptions: {
      animationData: ux,
      loop: true,
    }, // Ícone aqui
  },
];

export const services = [
  {
    category: "Desenvolvimento de Software Sob Medida",
    items: [
      {
        title: "Aplicativos Personalizados",
        description:
          "Transforme suas operações com software sob medida, pensado para atender cada necessidade exclusiva do seu negócio. Seja um sistema de gestão ou um CRM personalizado, entregamos soluções que se integram perfeitamente ao seu fluxo de trabalho, garantindo escalabilidade e performance no crescimento da sua empresa. Imagine um sistema feito exatamente para o que você precisa, sem compromissos ou limitações.",
      },
      {
        title: "Aplicativos Mobile",
        description:
          "Leve a experiência do seu cliente para o próximo nível com aplicativos móveis de alta performance. Desenvolvemos apps nativos que funcionam impecavelmente tanto em Android quanto em iOS, sempre com foco na melhor experiência de usuário. Desde marketplaces até soluções empresariais, criamos aplicativos que conectam suas ideias ao mundo digital de forma ágil e segura.",
      },
      {
        title: "Análise de Requisitos",
        description:
          "Cada projeto começa com um entendimento profundo das suas necessidades. Mergulhamos no seu negócio para definir o escopo ideal, funcionalidades e requisitos técnicos que não só alinham com seus objetivos, mas também identificam oportunidades de otimização que talvez você ainda não tenha considerado. Dessa forma, garantimos que o desenvolvimento do software seja preciso, eficiente e alinhado ao que você realmente precisa.",
      },
      {
        title: "Planejamento de Projetos",
        description:
          "Planejamento é a chave do sucesso em qualquer projeto. Ajudamos a estruturar uma estratégia sólida, com cronogramas bem definidos e metodologias ágeis, assegurando que tudo seja entregue dentro do prazo e do orçamento. A execução é acompanhada de perto em cada etapa, garantindo que cada detalhe seja ajustado para o sucesso final do seu projeto.",
      },
    ],
  },
];
