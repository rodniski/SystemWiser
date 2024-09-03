"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useTheme } from "next-themes";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useScroll } from "@/components/scroll-context"; // Importando o hook useScroll

export function HeroSection() {
  const { theme } = useTheme(); // Hook para acessar o tema atual
  const { scrollToForm } = useScroll();
  
  const words = [
    {
      text: "sua",
    },
    {
      text: "vantagem",
    },
    {
      text: "Tecnológica.",
    },
  ];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center h-[95dvh] text-center px-4"
      >
        <p className="text-neutral-600 dark:text-neutral-200 text-xl mb-5">
          Impulsione seu negócio com soluções integradas.
        </p>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="pb-4"
        >
          <Image
            src={
              theme === "dark"
                ? "/logo/tcLightGreen.png"
                : "/logo/tcDarkGreen.png"
            }
            alt="Logo"
            width={400}
            height={30}
          />
        </motion.div>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-accent flex items-center space-x-2"
            onClick={scrollToForm} // Conectando o botão ao scrollToForm
          >
            <span className="text-foreground">Entre em Contato</span>
          </HoverBorderGradient>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
