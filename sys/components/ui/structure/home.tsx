"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroProps } from "@/types/interfaces";
import { WavyBackground } from "../wavy-background";
import { Areas } from "./areas";

const Home: React.FC<HeroProps> = ({
  subtitle,
  title,
  description,
  ctaText,
}) => {
  return (
    <div className="relative">
      {/* Background ondulado para a home */}
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <section className="relative overflow-hidden py-16 px-4 sm:py-24 md:py-32 w-full flex items-center justify-center md:h-screen">
          <div className="flex flex-col justify-center items-center max-w-7xl mx-auto space-y-6 text-center">
            {/* Título */}
            <Areas />
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-black dark:text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            >
              {title}
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="mt-2 text-xl sm:text-base md:text-3xl text-black/80 dark:text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>

            {/* Descrição */}
            <motion.p
              className="mt-4 text-xl sm:text-lg md:text-2xl text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              {description}
            </motion.p>

            {/* Botão de Call to Action */}
            <motion.div
              className="mt-6 sm:mt-8 flex justify-center"
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
        </section>
      </WavyBackground>
    </div>
  );
};

export default Home;
