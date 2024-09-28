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
  const isFiveCards = servicesData.length === 5;

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

      {/* Flexbox para os serviços */}
      <div className="flex flex-wrap justify-center gap-6 m-8 px-4 w-full">
        {/* Renderiza os três primeiros cards (ou 2 se forem 4 cards) */}
        <div className={`flex justify-center w-full gap-6 lg:w-full`}>
          {servicesData
            .slice(0, isFiveCards ? 3 : 2)
            .map((service: ServiceData, index) => (
              <motion.div
                key={service.id || index}
                variants={enableAnimation ? fadeInUp : {}}
                initial={enableAnimation ? "hidden" : undefined}
                whileInView={enableAnimation ? "visible" : undefined}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col items-center justify-start w-full ${
                  isFiveCards ? "lg:w-[30%]" : "lg:w-[45%]"
                } h-full`}
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

        {/* Renderiza os dois últimos cards */}
        <div className={`flex justify-center gap-6 w-full`}>
          {servicesData
            .slice(isFiveCards ? 3 : 2)
            .map((service: ServiceData, index) => (
              <motion.div
                key={service.id || index + (isFiveCards ? 3 : 2)}
                variants={enableAnimation ? fadeInUp : {}}
                initial={enableAnimation ? "hidden" : undefined}
                whileInView={enableAnimation ? "visible" : undefined}
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-center w-full lg:w-[45%] h-full"
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
      </div>
    </section>
  );
};

export default Services;
