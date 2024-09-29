"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { biHeroContent, biFeatures, biBentoItems } from "@/constants/bi";
import Hero from "@/components/ui/structure/hero";
const Feature = dynamic(() => import("@/components/ui/structure/feature"), {
  ssr: false,
});
const BentoSection = dynamic(() => import("@/components/ui/structure/bento"), {
  ssr: false,
});


const BusinessIntelligencePage = () => {
  return (
    <>
      <Head>
        <title>Business Intelligence - System Wiser</title>
        <meta
          name="description"
          content="Descubra como a System Wiser pode transformar dados em decisões acionáveis com soluções de Business Intelligence personalizadas."
        />
        <meta
          name="keywords"
          content="business intelligence, BI, System Wiser, análise de dados, dashboards, relatórios, Power BI, Tableau, QlikView"
        />
        <link
          rel="preload"
          href="/fonts/myfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Hero Section */}
      <section aria-labelledby="hero-section">
        <Hero
          subtitle={biHeroContent.subtitle}
          title={biHeroContent.title}
          description={biHeroContent.description}
          ctaText={biHeroContent.ctaText}
          animationType={biHeroContent.animationType}
          lottieSrc={biHeroContent.lottieSrc}
          lottieData={biHeroContent.lottieData}
        />
      </section>

      {/* Features Section */}
      <section
        aria-labelledby="features-section"
        className="py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <Feature
          features={biFeatures}
          sectionTitle="Diferenciais Competitivos"
        />
      </section>

      {/* Bento Section */}
      <section
        aria-labelledby="services-section"
        className="py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <BentoSection bentoItems={biBentoItems} />
      </section>
    </>
  );
};

export default BusinessIntelligencePage;
