"use client";

import {
  bentoItems,
  servicesData,
  softwareHeroContent,
} from "@/constants/software";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

// Importação dinâmica dos componentes

const Hero = dynamic(() => import("@/components/ui/structure/hero"), {
  ssr: false,
});
const ShootingStars = dynamic(() => import("@/components/ui/shooting-stars"), {
  ssr: false,
});
const StarsBackground = dynamic(
  () => import("@/components/ui/stars-background"),
  {
    ssr: false,
  }
);

const Services = dynamic(() => import("@/components/ui/structure/services"), {
  ssr: false,
});
const BentoSection = dynamic(() => import("@/components/ui/structure/bento"), {
  ssr: false,
});

const SoftwarePage = () => {
  return (
    <>
      <Head>
        <title>Software Services</title>
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
      <div>
        <section aria-labelledby="hero-section" className="relative">
          <Hero
            subtitle={softwareHeroContent.subtitle}
            title={softwareHeroContent.title}
            description={softwareHeroContent.description}
            ctaText={softwareHeroContent.ctaText}
            lottieSrc={softwareHeroContent.lottieSrc}
          />
          <ShootingStars />
          <StarsBackground />
        </section>

        <section
          aria-labelledby="services-section"
          className="px-4 sm:px-6 md:px-8 py-12"
        >
          <Services
            servicesData={servicesData}
            isLandingPage={false}
            enableAnimation={true}
          />
        </section>

        <section
          aria-labelledby="bento-section"
          className="px-4 sm:px-6 md:px-8 py-12"
        >
          <BentoSection bentoItems={bentoItems} />
        </section>
      </div>
    </>
  );
};

export default SoftwarePage;
