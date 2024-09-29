"use client";

import { motion } from "framer-motion";
import React from "react";
import ServiceCard from "../ServiceCard";

interface ServiceData {
  id?: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  href?: string;
}

interface ServicesProps {
  servicesData: ServiceData[];
  enableAnimation?: boolean; // Define se a animação está habilitada
  isLandingPage?: boolean; // Adicionando a propriedade isLandingPage
}

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

const Services: React.FC<ServicesProps> = ({
  servicesData,
  enableAnimation = false,
}) => {
  return (
    <section className="relative flex flex-col items-center min-h-screen text-whiteManuten">
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

      {/* Grid para os serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full">
        {/* Renderiza os serviços */}
        {servicesData.map((service: ServiceData, index) => (
          <motion.div
            key={service.id || index}
            variants={enableAnimation ? fadeInUp : {}}
            initial={enableAnimation ? "hidden" : undefined}
            whileInView={enableAnimation ? "visible" : undefined}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
