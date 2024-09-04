"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sobre from "@/components/lp/Sobre";
import { Companies } from "@/components/lp/Companies";
import { HeroSection } from "@/components/lp/HeroSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Services from "@/components/lp/services";
import { AuroraLeft } from "@/components/ui/aurora-left";
import { WhyUs } from "@/components/lp/whyUs/WhyUs";
import { Formulario } from "@/components/lp/form";
import { useScroll } from "../components/scroll-context";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AnimatedSection = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30% 0px" }}
      variants={fadeInUp}
      className="w-full"
    >
      {children}
    </motion.div>
  );
});
AnimatedSection.displayName = "AnimatedSection";  
export default function Page() {

  const { formRef } = useScroll();

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <main className="flex flex-col bg-background dark:bg-zinc-900 space-y-10 h-full">
      {/* Hero Section */}
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      {/* Companies Section
      <AnimatedSection>
        <Companies />
      </AnimatedSection>*/}

      {/* Tracing Beam começa a partir da seção Companies */}
      <AuroraLeft>
        <TracingBeam className="overflow-visible w-full space-y-10 h-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col space-y-14"
          >
            {/* Services Section */}
            <AnimatedSection>
              <Services />
            </AnimatedSection>

            {/* Bento Section */}
            <AnimatedSection>
              <Sobre />
            </AnimatedSection>

            {/* Why Us Section */}
            <AnimatedSection>
              <WhyUs />
            </AnimatedSection>

            {/* Form Section */}
            <div className="pb-36" ref={formRef}>
              <Formulario />
            </div>
          </motion.div>
        </TracingBeam>
      </AuroraLeft>
    </main>
  );
}


