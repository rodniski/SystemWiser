"use client";
import { cn } from "@/lib/utils";
import { Laptop, Briefcase, Shield, BarChart } from "lucide-react"; // Exemplo de ícones

// Interface para definir o formato dos dados de cada item
interface ServiceData {
  title: string;
  description: string;
  icon: React.ElementType; // Tipo do ícone (componente React)
  color: string;
  neonColor: string;
}

export default function Services() {
  // Dados para os itens, incluindo título, descrição, ícone, cor e efeito de neon
  const servicesData: ServiceData[] = [
    {
      title: "Desenvolvimento de Software",
      description:
        "Desenvolvimento de aplicações robustas e escaláveis para atender às necessidades do seu negócio.",
      icon: Laptop,
      color: "text-brand-primary", // Cor para o efeito de neon
      neonColor: "rgba(8, 93, 166, 0.7)", // Cor para o efeito de neon
    },
    {
      title: "Gerenciamento de Projetos",
      description:
        "Planejamento e execução eficazes para garantir o sucesso de seus projetos.",
      icon: Briefcase,
      color: "text-brand-secondary",
      neonColor: "rgba(138, 209, 229, 0.7)",
    },
    {
      title: "Gestão de Cibersegurança",
      description:
        "Proteção avançada contra ameaças digitais para o seu negócio.",
      icon: Shield,
      color: "text-brand-tertiary",
      neonColor: "rgba(0, 96, 108, 0.7)",
    },
    {
      title: "Desenvolvimento de PowerBI",
      description:
        "Consultoria especializada para ajudar sua empresa a alcançar o próximo nível.",
      icon: BarChart,
      color: "text-brand-accent",
      neonColor: "rgba(215, 224, 107, 0.7)",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Título da seção de serviços */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-foreground font-bold mb-10">
        Nossos <span className="text-brand-tertiary dark:text-brand-accent">Serviços</span>
      </h2>
      
      {/* Contêiner flexível para os serviços, com grade responsiva */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 m-8 lg:grid-cols-4">
        {/* Mapeamento dos dados para criar cada serviço */}
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Ícone do serviço com efeito de neon */}
            <div
              className={cn(
                service.color,
                "w-14 h-14 sm:w-16 sm:h-16 mb-4 relative flex justify-center items-center"
              )}
              style={{
                filter: `drop-shadow(0 0 10px ${service.neonColor})`,
              }}
            >
              <service.icon className="w-full h-full" />
            </div>
            
            {/* Título e descrição do serviço */}
            <h3 className="font-bold h-16 text-lg sm:text-xl md:text-2xl text-foreground mb-2">
              {service.title}
            </h3>
            <p className="font-normal text-sm sm:text-base text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
