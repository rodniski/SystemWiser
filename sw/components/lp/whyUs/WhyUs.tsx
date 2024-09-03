"use client";
import React from "react";
import { FeatureSection } from "./FeatureSection";
import { FeatureCard, FeatureTitle, FeatureDescription } from "./FeatureCard";
import { SkeletonOne,  SkeletonTwo, SkeletonThree, SkeletonFour } from "./Skeletons";

export function WhyUs() {
  const features = [
    {
      title: "Nossos Resultados em Números",
      description:
        "Monitoramos de perto o impacto das nossas soluções através de métricas-chave. Estes números destacam o sucesso dos nossos serviços e a satisfação dos nossos clientes, refletindo nosso compromisso em entregar resultados excepcionais e impulsionar o crescimento dos nossos parceiros.",
      skeleton: <SkeletonOne />,
      className: "bg-white/60 dark:bg-black/40 backdrop-blur-2xl lg:col-span-3 border rounded",
    },
    {
      title: "Crescimento Empresarial",
      description:
        "Desenvolvemos estratégias personalizadas para alavancar o crescimento de empresas em diversos setores.",
      skeleton: <SkeletonTwo />,
      className: "bg-white/60 dark:bg-black/40 backdrop-blur-2xl lg:col-span-3 border rounded ",
    },
    {
      title: "Soluções de Tecnologia Avançada",
      description:
        "Na System Wiser, acreditamos que a inovação tecnológica é a chave para o sucesso em um mercado competitivo...",
      skeleton: <SkeletonThree />,
      className: "bg-white/60 dark:bg-black/40 backdrop-blur-2xl lg:col-span-2 border rounded",
    },
    {
      title: "Parceiro de Negócios Confiável",
      description:
        "Na System Wiser, nos posicionamos como o parceiro de confiança que sua empresa precisa para alcançar novos patamares de sucesso...",
      skeleton: <SkeletonFour />,
      className: "bg-white/60 dark:bg-black/40 backdrop-blur-2xl lg:col-span-4 border rounded",
    },
  ];

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <FeatureSection
        title="Seu Parceiro de Confiança para Crescimento e Inovação"
        description="Na System Wiser, somos mais do que um fornecedor de tecnologia; somos seu parceiro estratégico no crescimento e inovação..."
      />

      <div className="relative m-5">
        <div className="grid grid-cols-1 lg:grid-cols-6 rounded-md border border-border">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="flex justify-center items-center lg:h-[80%] w-full">
                {feature.skeleton}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}
