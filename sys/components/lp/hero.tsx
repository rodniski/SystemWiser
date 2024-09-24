"use client";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useScroll } from "@/lib/scroll-context";
export default function Hero() {
  const { scrollToForm } = useScroll();
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32 w-screen h-screen flex items-center justify-center">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}
        <div className="flex justify-center items-center">
          <div className="relative z-10">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <p className="text-xl">
                  Tecnologia Inteligente para Impulsionar Seu Negócio
                </p>
                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-relaxed lg:text-5xl">
                    Soluções <span className="text-blue-500">Inovadoras</span> e
                    Personalizadas para o{" "}
                    <span className="text-blue-500">Sucesso </span>de Sua
                    <span className="text-blue-500"> Empresa</span>
                  </h1>
                </div>
                {/* End Title */}
                <div className="mt-5 max-w-3xl">
                  <p className="text-xl text-muted-foreground">
                    Transforme desafios em oportunidades com consultoria
                    especializada e tecnologia avançada. A System Wiser está
                    aqui para levar seu negócio ao próximo nível.
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-8 gap-3 flex justify-center">
                  <Button onClick={scrollToForm} size={"lg"}>
                    Fale Conosco
                  </Button>
                </div>
                {/* End Buttons */}
              </div>
            </div>
          </div>
          <div className="w-fit">
            {" "}
            <DotLottieReact
              src="/lottie/lp/hero.lottie"
              loop
              autoplay
              width={400}
              height={600}
            />{" "}
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
