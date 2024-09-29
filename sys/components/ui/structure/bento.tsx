"use client";

import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react"; // Nova dependência de Lottie
import { cn } from "@/lib/utils";
import { BentoSectionProps } from "@/types/interfaces";

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
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

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
  lottieData?: () => Promise<unknown>; // Alterado para aceitar unknown
}) => {
  const [jsonAnimation, setJsonAnimation] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    if (iconType === "json" && lottieData) {
      lottieData().then((animation) =>
        setJsonAnimation(animation as Record<string, unknown>) // Type assertion aplicado
      );
    }
  }, [iconType, lottieData]);

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-lg dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-zinc-300 space-y-4",
        className
      )}
    >
      <div className="w-full h-40">
        {iconType === "lottie" ? (
          <DotLottieReact
            src={lottie}
            loop
            autoplay
            width="100%"
            height="100%"
          />
        ) : iconType === "json" && jsonAnimation ? (
          <Lottie
            animationData={jsonAnimation}
            loop
            autoplay
            className="h-24 w-24 max-h-40 max-w-40"
          />
        ) : null}
      </div>
      <div className="flex items-center space-x-2 transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
};

const BentoSection: React.FC<BentoSectionProps> = ({ bentoItems }) => {
  return (
    <section className="relative flex flex-col items-stretch min-h-screen text-whiteManuten">
      <BentoGrid className="my-10 gap-6 z-10">
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
                item.id === "consultoria-gerenciamento"
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
