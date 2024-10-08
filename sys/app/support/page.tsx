"use client";

import {
  supportHeroContent,
  supportFeatures,
  supportBentoItems,
  supportTimeline,
} from "@/constants/support"; // Atualize o caminho conforme necessário
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Hero from "@/components/ui/structure/hero";
const Feature = dynamic(() => import("@/components/ui/structure/feature"), {
  ssr: false,
});
const BentoSection = dynamic(() => import("@/components/ui/structure/bento"), {
  ssr: false,
});

const Timeline = dynamic(() => import("@/components/ui/structure/timeline"), {
  ssr: false,
});

const SupportOnDemandPage = () => {
  return (
    <>
      <Head>
        <title>Suporte On-Demand - System Wiser</title>
        <meta
          name="description"
          content="Explore nossos serviços de suporte on-demand, com assistência técnica remota e presencial, monitoramento contínuo e gestão de incidentes."
        />
      </Head>

      {/* Hero Section */}
      <section aria-labelledby="hero-section">
        <Hero
          subtitle={supportHeroContent.subtitle}
          title={supportHeroContent.title}
          description={supportHeroContent.description}
          ctaText={supportHeroContent.ctaText}
          lottieSrc={supportHeroContent.lottieSrc}
        />
      </section>

      {/* Main Content with Features and Services */}
      <div className="p-5 lg:px-36 flex flex-col gap-24">
        {/* Features Section */}
        <section aria-labelledby="features-section">
          <Feature
            features={supportFeatures}
            sectionTitle="Diferenciais Competitivos"
          />
        </section>
        {/* Timeline Section (Nossa Abordagem e Benefícios) */}
        <section aria-labelledby="timeline-section">
          <Timeline data={supportTimeline} />
        </section>

        {/* Services Section (Bento Layout) */}
        <section aria-labelledby="services-section">
          <BentoSection bentoItems={supportBentoItems} />
        </section>


      </div>
    </>
  );
};

export default SupportOnDemandPage;
