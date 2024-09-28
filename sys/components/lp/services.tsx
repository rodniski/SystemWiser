"use client";
import { servicesData } from "@/constants/lp";
import { Button } from "../ui/button";
import { IconOutbound } from "@tabler/icons-react";

export default function Services() {
  // Dados para os itens, incluindo título, descrição, ícone, cor e efeito de neon

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Título da seção de serviços */}
      <h2 className="text-2xl text-start w-full sm:text-3xl md:text-5xl text-foreground font-bold mb-10">
        Nossos{" "}
        <span className="text-blue-500 dark:text-brand-accent">Serviços</span>
      </h2>

      {/* Contêiner flexível para os serviços, com grade responsiva */}
      <div className="flex flex-wrap items-center justify-center gap-6 m-8">
        {/* Mapeamento dos dados para criar cada serviço */}
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="h-full w-72 border border-blue-600 rounded-xl p-3 flex flex-col items-center justify-start text-center gap-3"
          >
            {/* Ícone do serviço com efeito de neon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 relative flex justify-center items-center">
              <service.icon className="dark:text-cyan-200 text-cyan-700 w-full h-full filter drop-shadow-[0_0_5px_#00d2ff]" />
            </div>

            {/* Título e descrição do serviço */}
            <h3 className="font-bold text-lg text-foreground">
              {service.title}
            </h3>
            <p className="font-normal text-base text-muted-foreground">
              {service.description}
            </p>
            <Button variant={"ghost"} className="border-blue-500">
              <a className="flex gap-4 items-center" href={service.href}>
                Ver Mais <IconOutbound className="size-5" />
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
