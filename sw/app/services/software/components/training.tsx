"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Training() {
  return (
    <section className="relative flex flex-col items-stretch text-whiteManuten">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-4xl mx-auto w-full">
        {/* Primeiro Card */}
        <WobbleCard
          containerClassName="col-span-1 bg-black  shadow-xl shadow-black"
          className=""
        >
          <div className="">
            <h2 className="text-center text-balance  text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Treinamento de Usuários
            </h2>
            <p className="mt-4 text-center text-base leading-relaxed text-neutral-200">
              Treinamento de Usuários: Oferecimento de programas de treinamento
              para ensinar os usuários a utilizar o software de forma eficaz.
              <br />
              Documentação Técnica: Fornecimento de manuais, guias e outras
              documentações que ajudem no uso e manutenção do software.
            </p>
          </div>
        </WobbleCard>

        {/* Segundo Card */}
        <WobbleCard
          containerClassName="col-span-1 bg-black  shadow-xl shadow-black"
          className=""
        >
          <div className="">
            <h2 className="text-center text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Outsourcing de Desenvolvimento
            </h2>
            <p className="mt-4 text-center text-base leading-relaxed text-neutral-200">
              Equipe Dedicada: Alocação de desenvolvedores para trabalhar em
              projetos específicos de clientes, seja em curto ou longo prazo.{" "}
              <br />
              Gerenciamento de Projetos: Supervisão completa do ciclo de vida do
              projeto, desde o planejamento até a entrega final.
            </p>
          </div>
        </WobbleCard>
      </div>

      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
