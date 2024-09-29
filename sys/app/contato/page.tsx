// pages/contato/page.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

// Carregamento dinâmico para otimização de performance
const Formulario = dynamic(() => import("@/components/ui/structure/form"), {
  ssr: false,
});
const Socials = dynamic(() => import("@/components/ui/structure/socials"), {
  ssr: false,
});
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

function ContatoPage() {
  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between p-4 lg:p-32 space-y-8 lg:space-y-0">
      {/* Seção Esquerda (Mobile-first) */}
      <div className="flex-1 max-w-full lg:max-w-xl flex flex-col items-center lg:items-start justify-center space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
          Entre em Contato
        </h1>
        <p className="text-lg lg:text-xl text-center lg:text-left text-foreground/80">
          Estamos prontos para atender você. Preencha o formulário ou fale
          conosco pelo WhatsApp.
        </p>
        {/* Botões de Redes Sociais */}
        <Socials />
        {/* Animação Lottie */}
        <div className="w-full h-64 md:h-80 lg:h-96 flex justify-center">
          <DotLottieReact
            src="/lottie/lp/contact.lottie"
            loop
            autoplay
            width="100%"
            height="100%"
            className="object-contain"
          />
        </div>
      </div>

      {/* Seção Direita (Formulário) */}
      <div className="w-full lg:w-1/2">
        <Formulario />
      </div>
    </main>
  );
}

export default ContatoPage;
