// components/lp/Services.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";
import { servicesData, Service } from "@/constants/software"; // Importando os dados de serviços
import ServiceCard from "./ServiceCard"; // Importando o ServiceCard
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

// Definindo a variante de animação
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section className="relative flex flex-col items-stretch min-h-screen text-whiteManuten">
      {/* Título da seção de serviços */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-foreground font-bold text-center">
          Nossos{" "}
          <span className="text-brand-tertiary dark:text-brand-accent">
            Serviços
          </span>
        </h2>
      </motion.div>

      {/* Contêiner flexível para os serviços, com grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 m-8 px-4">
        {/* Mapeamento dos dados para criar cada serviço */}
        {servicesData.map((service: Service) => (
          <motion.div
            key={service.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>

      {/* Elementos de fundo */}
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
