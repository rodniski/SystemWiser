"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Belief from "@/public/landingpage/bento1/Belief.svg";
import Difference from "@/public/landingpage/bento1/Difference.svg";
import Do from "@/public/landingpage/bento1/Do.svg";
import Growth from "@/public/landingpage/bento1/Growth.svg";
import Inspire from "@/public/landingpage/bento1/Inspire.svg";
import { Maximize2, Minimize2 } from "lucide-react"; // Importando ícones de expandir e encolher
import { useTheme } from "next-themes";

export default function Sobre() {
  const { theme } = useTheme(); // Hook para acessar o tema atual
  // Estado para armazenar o card ativo (expandido) ou null se nenhum estiver ativo
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId(); // Gera um ID único para cada instância do componente
  const ref = useRef<HTMLDivElement>(null); // Ref para o card expandido

  // Efeito para lidar com o pressionamento da tecla Escape e travar/destravar o scroll da página
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null); // Fechar o card ao pressionar Escape
      }
    }

    // Travar o scroll da página ao abrir um card
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Destravar o scroll ao fechar o card
    }

    window.addEventListener("keydown", onKeyDown); // Adicionar o listener para a tecla Escape
    return () => window.removeEventListener("keydown", onKeyDown); // Limpar o listener ao desmontar
  }, [active]);

  // Fechar o card ao clicar fora dele
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Seção de título e logotipo */}
      <div className="flex justify-center items-center space-x-5 pb-5">
        <h2 className="text-3xl md:text-5xl text-foreground font-bold">Sobre a</h2>
        <Image
            src={
              theme === "light" ? "/logo/brSqDkGrBl.png" : "/logo/brSqLtGrBl.png" 
            }
            width={200}
            height={40}
            alt="Logo"
          />
      </div>

      {/* Animação para o fundo escurecido ao abrir um card */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-card/70 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Animação para o card expandido */}
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Botão de fechar para mobile */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 p-2 bg-white rounded-full dark:bg-zinc-900"
              onClick={() => setActive(null)}
            >
              <Minimize2 className="text-foreground/60" /> {/* Ícone de encolher */}
            </motion.button>
            
            {/* Conteúdo do card expandido */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full md:w-[30dvw] h-full p-5 md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Imagem do card expandido */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              {/* Texto e descrição do card expandido */}
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-foreground text-center text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-foreground/70 text-center text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                {/* Conteúdo adicional do card */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-foreground text-sm lg:text-base h-fit md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Lista de cards compactados */}
      <ul className="w-full flex flex-grow flex-wrap items-center justify-center gap-5">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="relative h-[45dvh] p-5 m-5 md:m-1 flex flex-col bg-zinc-50 dark:bg-zinc-950/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-zinc-800 rounded-xl cursor-pointer w-full max-w-[400px]"
          >
            {/* Ícone de expandir no canto superior direito do card */}
            <div className="absolute top-4 right-4">
              {active && active.title === card.title ? (
                <Minimize2 className="h-6 text-zinc-300" /> // Ícone de encolher
              ) : (
                <Maximize2 className="h-6 text-zinc-300" /> // Ícone de expandir
              )}
            </div>
            {/* Conteúdo do card compactado */}
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-[31vh] w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-around items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

// Array contendo os dados de cada card
const cards = [
  {
    description: "Transformando o Futuro com Tecnologia Inovadora e Paixão",
    title: "O que Fazemos?",
    src: Do,
    content: () => (
      <p>
        Na System Wiser, nossa missão é transformar a sociedade através de
        soluções tecnológicas de ponta, desenvolvidas por uma equipe dedicada
        e apaixonada pelo que faz. Acreditamos no poder da tecnologia para
        impulsionar mudanças significativas e duradouras. Com uma abordagem
        centrada na criatividade e na originalidade, avaliamos ideias
        inovadoras e criamos soluções inteligentes e eficientes que não apenas
        resolvem problemas, mas também abrem novos horizontes para nossos
        clientes. Estamos comprometidos em moldar o futuro, oferecendo
        tecnologia que inspira e empodera empresas a alcançarem seu pleno
        potencial.
      </p>
    ),
  },
  {
    description: "Produtividade, Felicidade e Sucesso",
    title: "No que Acreditamos?",
    src: Belief,
    content: () => (
      <p>
        Na System Wiser, acreditamos que a produtividade e a qualidade de vida
        estão interligadas e são fundamentais para o sucesso. Organizações que
        investem no bem-estar de seus colaboradores colhem os frutos de
        equipes mais felizes, engajadas e criativas. Pessoas que têm qualidade
        de vida são mais produtivas e, quando se unem em um ambiente positivo,
        têm o poder de realizar projetos verdadeiramente incríveis. Nosso
        compromisso é criar um ecossistema onde produtividade e felicidade
        caminham juntas, gerando inovação e crescimento sustentável.
      </p>
    ),
  },
  {
    description: "Construindo um Brasil Mais Produtivo e Inovador",
    title: "O que nos inspira?",
    src: Inspire,
    content: () => (
      <p>
        Nossa inspiração na System Wiser vem do desejo de construir um Brasil
        mais produtivo e eficiente por meio da tecnologia. Acreditamos que, ao
        desenvolver soluções tecnológicas inovadoras, podemos modernizar
        processos e abrir novos horizontes para empresas e pessoas. Queremos
        empoderar o Brasil para que ele alcance seu máximo potencial,
        transformando desafios em oportunidades e criando um futuro mais
        próspero para todos.
      </p>
    ),
  },
  {
    description: "Excelência e Crescimento Através da Ética e Inovação",
    title: "Como fazemos a diferença?",
    src: Difference,
    content: () => (
      <p>
        Na System Wiser, a ética é o alicerce de todas as nossas ações.
        Estamos profundamente comprometidos com a excelência, buscando
        incessantemente as melhores práticas de tecnologia e desenvolvimento
        disponíveis no mercado. Nossa abordagem ética e inovadora nos permite
        criar soluções que não só atendem, mas superam as expectativas de
        nossos clientes.
      </p>
    ),
  },
  {
    description: "Integração, Aprimoramento e Parcerias Estratégicas",
    title: "Como crescemos e fazemos as pessoas crescerem?",
    src: Growth,
    content: () => (
      <p>
        Acreditamos que o verdadeiro crescimento ocorre através da integração
        e do compartilhamento de conhecimento. Promovemos uma estrutura
        organizacional horizontal que permite a troca constante de
        experiências, fomentando a verdadeira colaboração entre os times.
        Incentivamos nossos colaboradores a enxergar os desafios como
        oportunidades para mudanças positivas e aprimoramento contínuo. Ao nos
        aprofundarmos nos negócios de nossos clientes, nos tornamos um
        parceiro tecnológico estratégico, ajudando-os a superar desafios e
        alcançar o sucesso.
      </p>
    ),
  },
];
