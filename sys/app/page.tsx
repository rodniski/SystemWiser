// pages/index.jsx ou pages/index.tsx
"use client";
import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animation";
import { useScroll } from "@/lib/scroll-context";

// Importação dinâmica dos componentes
const Hero = dynamic(() => import("@/components/lp/hero"), {
  loading: () => <p></p>,
  ssr: true,
});
const Services = dynamic(() => import("@/components/lp/services"), {
  loading: () => <p></p>,
  ssr: true,
});
const Sobre = dynamic(() => import("@/components/lp/Sobre"), {
  loading: () => <p></p>,
  ssr: true,
});
const Form = dynamic(() => import("@/components/lp/form"), {
  loading: () => <p></p>,
  ssr: true,
});

const Page = () => {
  const { formRef } = useScroll();
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      {/* Envolver cada componente com motion.div */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <Hero />
      </motion.div>
      <div className="px-32 flex flex-col gap-20 w-full">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Services />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <Sobre />
        </motion.div>
      </div>{" "}
      <motion.div
        variants={fadeInUp}
        ref={formRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full px-32 pt-5 flex flex-col"
      >
        <Form />
      </motion.div>
    </div>
  );
};

export default Page;
