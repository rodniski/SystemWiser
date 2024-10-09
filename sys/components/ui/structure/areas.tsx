import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Areas() {
  const words = [
    "Gestão de Projetos",
    "Software House",
    "BodyShop",
    "Suporte on Demand",
    "Desenvolvimento de BI",
    "System Wiser",
  ];

  return (
    <div className="text-2xl mx-auto font-normal text-blue-600 dark:text-blue-400">
      <FlipWords words={words} />
    </div>
  );
}
