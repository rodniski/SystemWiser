"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { HeroProps } from "@/types/interfaces";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const Hero: React.FC<HeroProps> = ({
  subtitle,
  title,
  description,
  ctaText,
  lottieSrc,
  lottieData,
  animationType = "lottie", // Define o tipo de animação, default para 'lottie'
}) => {
  const [jsonAnimation, setJsonAnimation] = useState<Record<
    string,
    unknown
  > | null>(null);

  // Carregar a animação JSON dinamicamente
  useEffect(() => {
    if (animationType === "json" && lottieData) {
      lottieData().then((animation) =>
        setJsonAnimation(animation as Record<string, unknown>)
      );
    }
  }, [animationType, lottieData]);

  return (
    <section className="relative overflow-hidden py-16 px-4 sm:py-24 md:py-32 w-full flex items-center justify-center md:h-screen">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-10">
        {/* Texto Principal */}
        <div className="text-center md:text-left">
          {/* Título */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl font-bold text-black dark:text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            {title}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="mt-2 text-sm sm:text-base md:text-3xl text-black/80 dark:text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* Descrição */}
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Botão de Call to Action */}
          <motion.div
            className="mt-6 sm:mt-8 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-sky-500 text-white dark:bg-sky-300 dark:text-black hover:translate-x-2"
              aria-label="Call to action button"
            >
              <a href="/contato">{ctaText}</a>
            </Button>
          </motion.div>
        </div>

        {/* Animação Lottie ou JSON */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full flex items-center justify-center">
          {animationType === "lottie" && lottieSrc ? (
            <DotLottieReact
              src={lottieSrc}
              loop
              autoplay
              width="100%"
              height="100%"
              className="md:w-full "
            />
          ) : animationType === "json" && jsonAnimation ? (
            <Lottie
              animationData={jsonAnimation}
              loop
              autoplay
              className=" md:max-w-full"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
