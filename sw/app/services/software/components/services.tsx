"use client";
import { motion } from "framer-motion";
import React from "react";
import { services } from "./constants"; // Importando os dados de serviços
import { CardMeteor } from "./CardMeteor"; // Importando o CardMeteor
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

// Animação dos cards com Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.7 },
  }),
};

export default function Services() {
  return (
    <section className="relative flex flex-col items-stretch min-h-screen text-whiteManuten">
      {/* Renderização das Categorias e Serviços */}
      {services.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-24">
          <motion.h3
            className="text-3xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {category.category}
          </motion.h3>

          {/* Cards de Serviços */}
          {category.items.map((service, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end "
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <CardMeteor
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      ))}
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
