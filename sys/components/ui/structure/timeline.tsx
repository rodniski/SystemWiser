"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  process?: string;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Bolinha e Título removidos em telas menores */}
            <div className="md:sticky md:flex md:flex-row z-40 items-center md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Bolinha só em telas maiores */}
              <div className="hidden md:flex h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center filter drop-shadow-[0_0_6px_#00d2ff]">
                <div className="h-4 w-4 rounded-full dark:bg-cyan-200 bg-cyan-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Título com ícone ao lado em telas menores */}
              <div className="flex items-center gap-4">
                {item.icon}
                <h3 className="text-xl md:pl-20 md:text-5xl font-bold text-cyan-800 dark:text-cyan-500 md:sticky md:top-40">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Lado direito: Subtítulo e conteúdo */}
            <div className="relative pl-0 md:pl-20 pr-4 w-full">
              {/* Subtítulo */}
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300 mb-4">
                {item.subtitle}
              </h4>

              {/* Conteúdo */}
              <div className="text-lg text-neutral-600 dark:text-neutral-400">
                {item.content}
              </div>

              {/* Processo se houver */}
              {item.process && (
                <p className="mt-2 text-sm text-blue-500">{item.process}</p>
              )}
            </div>
          </div>
        ))}

        {/* Linha de progresso só em telas maiores */}
        <div
          style={{
            height: height + "px",
          }}
          className="hidden md:block absolute md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
