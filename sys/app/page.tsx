"use client";
import Hero from "@/components/lp/hero";
import dynamic from "next/dynamic";
import React from "react";

// Importação dinâmica com feedback
const Sobre = dynamic(() => import("@/components/lp/Sobre"), { ssr: true });
const Services = dynamic(() => import("@/components/lp/services"), {
  ssr: true,
});
const Form = dynamic(() => import("@/components/lp/form"), {
  ssr: true,
});


const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-full">
        <Hero />
      </div>
      <div className="px-32 flex flex-col gap-20 w-full">
        <div className="w-full">
          <Services />
        </div>
        <div className="w-full">
          <Sobre />
        </div>
      </div>
      <div className="w-full px-32 pt-5 flex flex-col">
        <Form />
      </div>
    </div>
  );
};

export default Page;
