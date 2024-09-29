// Interface para dados de serviços
export interface ServiceData {
  title: string;
  description: string;
  icon: React.ElementType; // Componente React para ícones
  href?: string; // URL opcional para link
}

// Interface para dados de serviços em projetos
export interface Service {
  id: string;
  title: string;
  description: string;
}

// Interface para Bento (usada em BentoSection)
export interface Bento {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // Ícone pode ser qualquer ReactNode
  lottie?: string; // Caminho para o arquivo Lottie
  lordIcon?: string; // Caminho para o arquivo LordIcon (caso seja utilizado LordIcon)
  iconType?: "lottie" | "json"; // Indica qual tipo de ícone usar
  lottieData?: () => Promise<Record<string, unknown>>; // Função opcional para carregar animações Lottie dinamicamente
}

// Props da seção Bento (recebe um array de BentoItems)
export interface BentoSectionProps {
  bentoItems: Bento[];
}

// Interface para Feature (usada em FeatureSection)
export interface FeatureInterface {
  title: string;
  description: string;
  content: JSX.Element; // Conteúdo como JSX Element
  icon: JSX.Element; // Ícone como JSX Element
}

// Props da seção Feature (recebe um array de FeatureInterface)
export interface FeatureSectionProps {
  features: FeatureInterface[];
  sectionTitle: string; // Título da seção
}

// Props para Hero (usado em HeroBase)
export interface HeroProps {
  subtitle: string;
  title: React.ReactNode; // ReactNode para suportar HTML dentro do título
  description: string;
  ctaText: string;
  lottieSrc?: string; // URL para animação Lottie (opcional para o caso de JSON)
  lottieData?: () => Promise<Record<string, unknown>>; // Função que importa dinamicamente o arquivo JSON de animação
  animationType?: "lottie" | "json"; // Define o tipo de animação, 'lottie' ou 'json'
}

export interface TimelineEntry {
  title: string;
  subtitle?: string; // Adicionando um subtítulo opcional
  content: React.ReactNode;
  icon: React.ReactNode; // Adicionando ícone
  process?: string; // Adicionando processo opcional
}
