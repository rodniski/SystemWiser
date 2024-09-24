// components/lp/Bento.tsx
"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { bentoItems } from "@/constants/software"; // Atualize o caminho conforme necessário
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function Bento() {
  return (
    <section className="relative flex flex-col items-stretch min-h-screen text-whiteManuten">
      <BentoGrid className="my-10 gap-6">
        {bentoItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon} // Passando o ícone para a prop 'icon'
            header={
              <div className="w-full h-40"> {/* Ajuste conforme necessário */}
                <DotLottieReact
                  src={item.lottie}
                  loop
                  autoplay
                  width="100%"
                  height="100%"
                  className="object-contain h-full w-full"
                />
              </div>
            }
            className={item.id === "integracao-sistemas" || item.id === "design-ux-ui" ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
