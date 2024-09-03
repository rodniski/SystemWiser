"use client";
import React from "react";
import Image from "next/image";
import { KPIRadialChart } from "./KPIRadialChart";
import Company from "@/public/landingpage/bento2/Company.svg";
import Web from "@/public/landingpage/bento2/Web.svg";
import GitGlobe from "./gitglobe";


export const SkeletonOne = () => {

  return (
    <div className="flex justify-center items-center">
      <KPIRadialChart/>
    </div>
  );
};


export const SkeletonTwo = () => (
  <div className="flex justify-center items-center h-full">
    <Image src={Company} alt="Crescimento Empresarial" width={500} height={500} />
  </div>
);

export const SkeletonThree = () => (
  <div className="flex justify-center items-center h-full">
    <Image src={Web} alt="Soluções de Tecnologia Avançada" width={500} height={500} />
  </div>
);

export const SkeletonFour = () => (
  <div className="flex justify-center items-center h-full">
    <GitGlobe />
  </div>
);
