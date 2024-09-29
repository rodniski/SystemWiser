"use client";
import {
  bodyshopHeroContent,
  bodyshopFeatures,
  bodyshopBentoItems,
} from "@/constants/bodyshop";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

// Importação dinâmica dos componentes
const Hero = dynamic(() => import("@/components/ui/structure/hero"), {
  ssr: false,
});
const Feature = dynamic(() => import("@/components/ui/structure/feature"), {
  ssr: false,
});
const BentoSection = dynamic(() => import("@/components/ui/structure/bento"), {
  ssr: false,
});

const BodyShopPage = () => {
  return (
    <>
      <Head>
        <title>BodyShop - Alocação de Profissionais</title>
        <meta
          name="description"
          content="Conheça nossos serviços de alocação de profissionais especializados em TI, suporte e gerenciamento de projetos."
        />
        <meta
          name="keywords"
          content="bodyshop, alocação de profissionais, gerenciamento de projetos, suporte TI, equipe temporária"
        />
      </Head>
      {/* Hero Section */}
      <section aria-labelledby="hero-section">
        <Hero
          subtitle={bodyshopHeroContent.subtitle}
          title={bodyshopHeroContent.title}
          description={bodyshopHeroContent.description}
          ctaText={bodyshopHeroContent.ctaText}
          animationType={bodyshopHeroContent.animationType} // Define o tipo de animação
          lottieSrc={bodyshopHeroContent.lottieSrc} // Caso a animação seja Lottie
          lottieData={bodyshopHeroContent.lottieData} // Caso a animação seja JSON
        />
      </section>

      {/* BodyShop Explanation Section */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-36 flex flex-col gap-16 md:gap-24">
        <section className="pb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-6">
            O Que é BodyShop?
          </h2>
          <div className="text-base md:text-lg lg:text-2xl text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              BodyShop é o modelo de alocação temporária de profissionais, onde
              fornecemos talentos especializados para atender a demandas
              específicas, por períodos definidos ou projetos pontuais.
            </p>
            <p>
              Flexibilidade para escalar equipes rapidamente conforme a
              necessidade do negócio.
            </p>
            <p>
              Sem custos trabalhistas de longo prazo, ideal para projetos
              temporários ou com incertezas de duração.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section aria-labelledby="features-section">
          <Feature
            features={bodyshopFeatures}
            sectionTitle="Diferenciais Competitivos"
          />
        </section>

        {/* Bento Section (Services) */}
        <section aria-labelledby="services-section">
          <BentoSection bentoItems={bodyshopBentoItems} />
        </section>
      </div>
    </>
  );
};

export default BodyShopPage;
