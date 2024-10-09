"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconWindowMaximize } from "@tabler/icons-react";
import { FeatureSectionProps, FeatureInterface } from "../../../types/interfaces";

const Feature: React.FC<FeatureSectionProps> = ({ features, sectionTitle }) => {
  const [active, setActive] = useState<FeatureInterface | null>(null);
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
      {/* Título da seção */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-6 md:mb-10 text-center">
        {sectionTitle}
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
          <div className="fixed inset-0 grid place-items-center z-[100] px-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[95%] md:max-w-[500px] h-full md:h-auto flex flex-col bg-slate-200 dark:bg-slate-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Ícone */}
              <div className="flex justify-center items-center p-6">
                <div className="text-4xl md:text-6xl filter drop-shadow-[0_0_5px_#00d2ff] border border-cyan-700 dark:border-cyan-200 rounded-full p-4 dark:text-cyan-200 text-cyan-700">
                  {active.icon}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col items-center text-center px-6">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-medium text-neutral-900 dark:text-neutral-200 text-2xl"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.title}-${id}`}
                  className="text-sm md:text-base text-muted-foreground"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-left md:text-sm lg:text-lg pt-4 flex flex-col gap-4 overflow-auto dark:text-neutral-300 max-h-[200px] md:max-h-[400px]"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lista de Cartões */}
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <motion.div
            layoutId={`card-${feature.title}-${id}`}
            key={feature.title}
            onClick={() => setActive(feature)}
            className="relative p-4 flex flex-col items-center text-center hover:bg-blue-300 dark:hover:bg-blue-950 rounded-xl cursor-pointer border border-blue-500 h-40 justify-center shadow-sm"
            role="button"
            tabIndex={0}
            aria-label={`Feature card for ${feature.title}`}
          >
            {/* Ícone */}
            <div className="absolute top-3 left-3 text-4xl md:text-6xl filter drop-shadow-[0_0_5px_#00d2ff] dark:text-cyan-200 text-cyan-700">
              {feature.icon}
            </div>
            <div className="absolute right-3 top-3 text-zinc-500">
              <IconWindowMaximize />
            </div>

            {/* Título e Descrição */}
            <motion.h3
              layoutId={`title-${feature.title}-${id}`}
              className="font-bold text-base md:text-xl text-foreground"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${feature.title}-${id}`}
              className="text-sm md:text-base text-muted-foreground"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export default Feature;
