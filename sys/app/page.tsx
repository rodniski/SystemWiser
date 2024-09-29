"use client";
import { homeHeroContent, philosophy, servicesData } from "@/constants/lp";
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
const Services = dynamic(() => import("@/components/ui/structure/services"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <Head>
        <title>System Wiser</title>
        <meta
          name="description"
          content="Explore nossos serviços de software e soluções personalizadas."
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
          subtitle={homeHeroContent.subtitle}
          title={homeHeroContent.title}
          description={homeHeroContent.description}
          ctaText={homeHeroContent.ctaText}
          lottieSrc={homeHeroContent.lottieSrc}
        />
      </section>

      {/* Main Content with Features and Services */}
      <div className="px-4 md:px-12 lg:px-24 xl:px-36 flex flex-col gap-16 md:gap-24">
        {/* Feature Section */}
        <section aria-labelledby="Sobre-section">
          <Feature features={philosophy} sectionTitle="Quem Somos" />
        </section>

        {/* Services Section */}
        <section aria-labelledby="services-section">
          <Services
            servicesData={servicesData}
            isLandingPage={true}
            enableAnimation={true}
          />
        </section>
      </div>
    </>
  );
};

export default Page;
