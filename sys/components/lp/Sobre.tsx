// components/lp/features.tsx
"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click"; // Certifique-se de que este hook está implementado
import { philosophy } from "@/constants/lp"; // Atualize o caminho conforme necessário
import { IconWindowMaximize } from "@tabler/icons-react";

export function Sobre() {
  const [active, setActive] = useState<(typeof philosophy)[number] | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {" "}
      {/* Título da seção de serviços */}
      <h2 className="text-2xl text-blue-500 sm:text-3xl md:text-5xl font-bold mb-10">
        Quem <span className="text-white dark:text-brand-accent">Somos</span>
      </h2>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      {/* Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            ></motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-slate-200 dark:bg-slate-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Ícone */}
              <div className="flex justify-center items-center p-6">
                <div className="text-4xl md:text-6xl text-blue-500 border border-blue-500 rounded-full p-4">
                  {active.icon}
                </div>
              </div>

              {/* Conteúdo */}
              <div>
                <div className="flex justify-between items-center text-center w-full p-4">
                  <div className="w-full">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-900 dark:text-neutral-200 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-center dark:text-neutral-400 text-neutral-800"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-xs text-center md:text-sm lg:text-lg pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-300 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Lista de Cartões */}
      <ul className="flex-1 mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 ">
        {philosophy.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="relative p-4 flex flex-col hover:bg-blue-300 dark:hover:bg-blue-950 dark:hover:bg-card rounded-xl cursor-pointer border border-blue-500 h-40 justify-start shadow-sm"
          >
            <div className="flex gap-4 flex-col w-full">
              {/* Ícone */}
              <div className="flex justify-center items-center text-4xl md:text-6xl text-blue-500">
                {card.icon}
              </div>
              <div className="absolute h-4 text-zinc-500 right-3 top-3">
                <IconWindowMaximize />
              </div>
              {/* Título e Descrição */}
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium dark:text-neutral-400 text-neutral-950 text-center md:text-left text-lg"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="dark:text-neutral-400 text-neutral-900 text-center md:text-center text-lg"
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

export default Sobre;
