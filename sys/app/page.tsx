"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

// Importação dinâmica dos componentes
const Hero = dynamic(() => import("@/components/lp/hero"), {
  ssr: false,
});
const Sobre = dynamic(() => import("@/components/lp/Sobre"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/lp/services"), {
  ssr: false,
});
const Formulario = dynamic(() => import("@/components/lp/form"), {
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
        <Hero />
      </section>{" "}
      <div className="px-36 flex flex-col gap-24">
        <section aria-labelledby="Sobre-section">
          <Sobre />
        </section>
        <section aria-labelledby="services-section">
          <Services />
        </section>
        <section aria-labelledby="form-section">
          <Formulario />
        </section>
      </div>
    </>
  );
};

export default page;
