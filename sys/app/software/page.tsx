"use client";

import { servicesData, softwareHeroContent } from "@/constants/software";
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
const Bento = dynamic(() => import("@/components/software/bento"), {
  ssr: false,
});
const Formulario = dynamic(() => import("@/components/ui/structure/form"), {
  ssr: false,
});

const page = () => {
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
        <section aria-labelledby="hero-section">
          <Hero
            subtitle={softwareHeroContent.subtitle}
            title={softwareHeroContent.title}
            description={softwareHeroContent.description}
            ctaText={softwareHeroContent.ctaText}
            lottieSrc={softwareHeroContent.lottieSrc}
          />{" "}
          <ShootingStars />
          <StarsBackground />
        </section>

        <section aria-labelledby="services-section">
        <Services servicesData={servicesData} isLandingPage={false} enableAnimation={true} />
        </section>

        <section aria-labelledby="bento-section">
          <Bento />
        </section>

        <section aria-labelledby="form-section">
          <Formulario />
        </section>
      </div>
    </>
  );
};

export default page;
