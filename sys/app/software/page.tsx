import Formulario from "@/components/lp/form";
import { Bento } from "@/components/software/bento";
import HeroSection from "@/components/software/hero";
import Services from "@/components/software/services";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Bento />
      <Formulario />
    </div>
  );
};

export default page;
