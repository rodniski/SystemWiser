"use client";

import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react"; // Dependência de Lottie
import { cn } from "@/lib/utils";
import { BentoSectionProps } from "@/types/interfaces";

// Componente de grid que organiza os itens
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

// Componente individual de cada item no grid
export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  iconType,
  lottie,
  lottieData,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  iconType: "lottie" | "json";
  lottie?: string;
  lottieData?: () => Promise<unknown>;
}) => {
  const [jsonAnimation, setJsonAnimation] = useState<Record<
    string,
    unknown
  > | null>(null);

  useEffect(() => {
    if (iconType === "json" && lottieData) {
      lottieData().then(
        (animation) => setJsonAnimation(animation as Record<string, unknown>)
      );
    }
  }, [iconType, lottieData]);

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl group hover:shadow-xl transition-shadow duration-300 shadow-lg dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-zinc-300 space-y-6",
        className
      )}
    >
      <div className="flex justify-center items-center h-40">
        {iconType === "lottie" && lottie ? (
          <DotLottieReact
            src={lottie}
            loop
            autoplay
            width="100%"
            height="100%"
            className="object-contain"
          />
        ) : iconType === "json" && jsonAnimation ? (
          <Lottie
            animationData={jsonAnimation}
            loop
            autoplay
            className="h-24 w-24 max-h-40 max-w-40"
          />
        ) : (
          <div className="h-24 w-24 flex justify-center items-center">
            {icon}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
          {title}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const BentoSection: React.FC<BentoSectionProps> = ({ bentoItems }) => {
  return (
    <section className="relative flex flex-col items-center min-h-screen text-whiteManuten">
      <BentoGrid className="gap-6 z-10">
        {bentoItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            iconType={item.iconType || "lottie"}
            lottie={item.lottie}
            lottieData={item.lottieData}
            className={cn(
              item.id === "integracao-sistemas" ||
                item.id === "design-ux-ui" ||
                item.id === "consultoria-gerenciamento" ||
                item.id === "integracao-novos-sistemas"
                ? "md:col-span-2"
                : ""
            )}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default BentoSection;
