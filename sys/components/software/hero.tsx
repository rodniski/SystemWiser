"use client"; // Garante que o componente é executado no lado do cliente
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@/components/ui/button"; // Botão do Shadcn UI
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { useScroll } from "@/lib/scroll-context";

export default function HeroSection() {
  const { scrollToForm } = useScroll();
  return (
    <section className="w-screen h-screen px-10 bg-transparent z-10">
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col max-w-3xl p-1 items-center md:items-start">
          {/* Título Principal com animação */}
          <motion.h1
            className="relative text-3xl md:text-5xl font-sans font-bold text-center md:text-start text-black dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          >
            Soluções digitais personalizadas para{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-b from-sky-800 to-sky-600 dark:from-sky-200 dark:to-sky-500">
              impulsionar o seu negócio.
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="mt-2 text-base text-start text-black/80 dark:text-white/80 md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Desenvolvimento personalizado para levar o seu negócio ao próximo
            nível
          </motion.p>

          {/* Botões de Call to Action */}
          <motion.div
            className="mt-14 flex gap-5 w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <Button
              variant={"default"}
              size={"lg"}
              className="group text-xl relative dark:bg-sky-300 dark:text-black hover:translate-x-2 z-30"
              onClick={scrollToForm} // Chama a função para rolar até o formulário
            >
              Fale com a gente
            </Button>
          </motion.div>
        </div>

        <div>
          {/* Animação Lottie */}
          <div className="animation-container hidden md:block mt-6 w-full max-w-lg sm:max-w-md md:max-w-6xl">
            <DotLottieReact
              src="/lottie/software/hero.lottie"
              loop
              autoplay
              width={400}
              height={600}
            />{" "}
          </div>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
