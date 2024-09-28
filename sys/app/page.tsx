"use client";
import { homeHeroContent, philosophy, servicesData } from "@/constants/lp";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

// Importação dinâmica dos componentes
const Hero = dynamic(() => import("@/components/ui/structure/hero"), {
  // Ajuste o caminho aqui
  ssr: false,
});
const Feature = dynamic(() => import("@/components/ui/structure/feature"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/ui/structure/services"), {
  ssr: false,
});
const Formulario = dynamic(() => import("@/components/ui/structure/form"), {
  ssr: false,
});

const page = () => {
  return (
    <>
      <Head>
        <title>System Wiser</title>
        <meta
          name="description"
          content="Explore our software services and solutions."
        />
        <link
          rel="preload"
          href="/fonts/myfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <section aria-labelledby="hero-section">
        <Hero
          subtitle={homeHeroContent.subtitle}
          title={homeHeroContent.title}
          description={homeHeroContent.description}
          ctaText={homeHeroContent.ctaText}
          lottieSrc={homeHeroContent.lottieSrc}
        />
      </section>{" "}
      <div className="px-36 flex flex-col gap-24">
        <section aria-labelledby="Sobre-section">
          <Feature features={philosophy} sectionTitle="Quem Somos" />
        </section>
        <section aria-labelledby="services-section">
          <Services
            servicesData={servicesData}
            isLandingPage={true}
            enableAnimation={true}
          />
        </section>
        <section aria-labelledby="form-section">
          <Formulario />
        </section>
      </div>
    </>
  );
};

export default page;
