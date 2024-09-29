"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react"; // Dependência de Lottie
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useScroll } from "@/lib/scroll-context";
import { motion } from "framer-motion";
import { HeroProps } from "../../../types/interfaces";

const Hero: React.FC<HeroProps> = ({
  subtitle,
  title,
  description,
  ctaText,
  lottieSrc,
  lottieData,
  animationType = "lottie", // Define o tipo de animação, default para 'lottie'
}) => {
  const { scrollToForm } = useScroll();
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
    <section className="relative overflow-hidden py-24 lg:py-32 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center px-6 lg:px-16">
        {/* Texto Principal */}
        <div className="relative z-10 max-w-2xl text-center md:text-left mx-auto">
          {/* Título */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-black dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            {title}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="mt-2 text-base md:text-2xl text-black/80 dark:text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* Descrição */}
          <motion.p
            className="mt-5 text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Botão de Call to Action */}
          <motion.div
            className="mt-8 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <Button
              variant="default"
              size="lg"
              className="dark:bg-sky-300 dark:text-black hover:translate-x-2"
              onClick={scrollToForm}
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>

        {/* Animação Lottie ou JSON */}
        <div className="w-full max-w-xs md:max-w-md lg:max-w-lg mt-10 md:mt-0 flex items-center justify-center">
          {animationType === "lottie" && lottieSrc ? (
            <DotLottieReact src={lottieSrc} loop autoplay width={400} height={600} />
          ) : animationType === "json" && jsonAnimation ? (
            <Lottie animationData={jsonAnimation} loop autoplay />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
