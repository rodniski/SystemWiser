"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { bentoItems } from "./constants"; // Importando os dados de serviços
import Lottie from "lottie-react"; // Importando o componente Lottie
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Bento() {
  return (
    <section className="relative flex flex-col items-stretch min-h-screen text-whiteManuten">
      <BentoGrid className="my-10 gap-6">
        {bentoItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={
              <div>
                {/* Renderiza a animação Lottie no header */}
                <Lottie
                  className="h-[17rem]" // Definindo o tamanho da animação Lottie para cobrir o header
                  animationData={item.lottieOptions.animationData}
                  loop={item.lottieOptions.loop}
                />
              </div>
            }
            className={i === 3 || i === 6 ? "md:col-span-2" : ""} // Alguns itens ocupam mais espaço
          />
        ))}
      </BentoGrid>
      
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
