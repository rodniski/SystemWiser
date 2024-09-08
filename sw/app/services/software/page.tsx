"use client";

import React, { useRef } from "react";
import { HeroSection } from "./components/hero";
import Services from "./components/services";
import { Bento } from "./components/bento";
import { Formulario } from "@/components/lp/form";
import { Training } from "./components/training";

const Page = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null); // Referência para a seção de serviços
  const formRef = useRef<HTMLDivElement | null>(null); // Referência para a seção de formulário

  const scrollToNextSection = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark flex-col w-screen h-full flex justify-center">
      {/* Hero Section */}
      <HeroSection
        scrollToNextSection={scrollToNextSection}
        scrollToForm={scrollToForm}
      />

      <div className="px-40 ">
        <h1 className="text-5xl font-bold text-center pb-5">
          Nossas Soluções de software
        </h1>

        {/* Seção de Serviços */}
        <div ref={servicesRef}>
          <Services />
          <Bento />
          <Training />
        </div>
        {/* Seção de Formulário */}
        <div className="my-24" ref={formRef}>
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default Page;
