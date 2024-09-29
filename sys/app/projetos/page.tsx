"use client";
import {
  projectHeroContent,
  projectFeatures,
  projectBentoItems,
  projectTimeline, // Agora importando a constante correta
} from "@/constants/projects";
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


const ProjectManagementPage = () => {
  return (
    <>
      <Head>
        <title>Gestão de Projetos - System Wiser</title>
        <meta
          name="description"
          content="Explore nossos serviços de consultoria em gerenciamento de projetos, incluindo planejamento, controle de riscos e integração de equipes."
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
          subtitle={projectHeroContent.subtitle}
          title={projectHeroContent.title}
          description={projectHeroContent.description}
          ctaText={projectHeroContent.ctaText}
          lottieSrc={projectHeroContent.lottieSrc}
        />
      </section>

      {/* Main Content with Features and Services */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-24">
        {/* Features Section */}
        <section aria-labelledby="features-section">
          <Feature
            features={projectFeatures}
            sectionTitle="Diferenciais Competitivos"
          />
        </section>

        {/* Timeline Section */}
        <section aria-labelledby="timeline-section">
          <Timeline data={projectTimeline} />
        </section>

        {/* Services Section (Bento Layout) */}
        <section aria-labelledby="services-section">
          <BentoSection bentoItems={projectBentoItems} />
        </section>


      </div>
    </>
  );
};

export default ProjectManagementPage;
