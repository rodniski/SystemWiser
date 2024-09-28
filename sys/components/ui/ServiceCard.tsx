"use client";

import React from "react";
import { Button } from "./button";
import { IconOutbound } from "@tabler/icons-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ElementType; // O ícone é opcional
  href?: string; // O href será opcional
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, href }) => {
  return (
    <div className="relative z-30 max-w-xl w-full mb-10 bg-transparent">
      {/* Fundo animado com o efeito de escala e cor */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />

      {/* Card com conteúdo */}
      <div className="relative shadow-xl bg-white border-gray-300 dark:bg-gray-900 border dark:border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        {/* Ícone decorativo (opcional) */}
        {Icon && (
          <div className="h-10 w-10 mb-4 flex items-center justify-center text-blue-500">
            <Icon className="w-full h-full" />
          </div>
        )}

        {/* Título do serviço */}
        <h1 className="font-bold text-xl text-gray-800 dark:text-gray-300 mb-4 relative z-50">
          {title}
        </h1>

        {/* Descrição do serviço */}
        <p className="font-normal text-base text-gray-800 dark:text-gray-300 mb-4 relative z-50">
          {description}
        </p>

        {/* Link "Ver Mais" (opcional) */}
        {href && (
            <Button variant={"ghost"} className="border-blue-500">
            <a className="flex gap-4 items-center" href={href}>
              Ver Mais <IconOutbound className="size-5" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
