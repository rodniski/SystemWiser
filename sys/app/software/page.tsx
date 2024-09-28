"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

// Importação dinâmica dos componentes
const HeroSection = dynamic(() => import("@/components/software/hero"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/software/services"), {
  ssr: false,
});
const Bento = dynamic(() => import("@/components/software/bento"), {
  ssr: false,
});
const Formulario = dynamic(() => import("@/components/lp/form"), {
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
          <HeroSection />
        </section>

        <section aria-labelledby="services-section">
          <Services />
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
