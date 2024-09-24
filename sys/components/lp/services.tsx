"use client";
import { servicesData } from "@/constants/lp";
import { LinkPreview } from "../ui/link-preview";

export default function Services() {
  // Dados para os itens, incluindo título, descrição, ícone, cor e efeito de neon

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Título da seção de serviços */}
      <h2 className="text-2xl text-start w-full sm:text-3xl md:text-5xl text-foreground font-bold mb-10">
        Nossos{" "}
        <span className="text-blue-500 dark:text-brand-accent">
          Serviços
        </span>
      </h2>

      {/* Contêiner flexível para os serviços, com grade responsiva */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 m-8 lg:grid-cols-5">
        {/* Mapeamento dos dados para criar cada serviço */}
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Ícone do serviço com efeito de neon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 relative flex justify-center items-center">
              <service.icon className="dark:text-cyan-200 text-cyan-700 w-full h-full filter drop-shadow-[0_0_5px_#00d2ff]" />
            </div>

            {/* Título e descrição do serviço */}
            <h3 className="font-bold h-16 text-lg sm:text-lg md:text-xl text-foreground mb-2">
              <LinkPreview url={service.href} className="font-bold">
                {service.title}
              </LinkPreview>{" "}
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
