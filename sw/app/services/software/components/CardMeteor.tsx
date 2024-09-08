import React from "react";
import { Meteors } from "@/components/ui/meteors";

// Definimos os tipos de propriedades que o CardMeteor vai receber
interface CardMeteorProps {
  title: string;
  description: string;
}

export const CardMeteor: React.FC<CardMeteorProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative z-30 max-w-xl w-full mb-10 bg-transparent">
      {/* Fundo animado com o efeito de escala e cor */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />

      {/* Card com conteúdo */}
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        {/* Ícone decorativo */}
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        {/* Título do serviço */}
        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {title}
        </h1>

        {/* Descrição do serviço */}
        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          {description}
        </p>

        {/* Meteor Effect */}
        <Meteors number={15} />
      </div>
      
    </div>
  );
};
