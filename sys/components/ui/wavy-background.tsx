"use client";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { useTheme } from "next-themes";

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const { theme } = useTheme(); // Acessa o tema atual
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);
  let animationId: number;

  const getSpeed = (): number => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    updateCanvasSize();
    let nt = 0;

    const render = () => {
      // Define a cor de fundo com base no tema
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Limpa o canvas antes de redesenhar
      ctx.fillStyle = backgroundFill || (theme === "light" ? "white" : "black");
      ctx.globalAlpha = 1; // Garante que não haja opacidade no fundo
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Desenha as ondas
      drawWave(
        ctx,
        nt,
        ctx.canvas.width,
        ctx.canvas.height,
        waveColors,
        waveWidth || 50
      );
      nt += getSpeed();
      animationId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", updateCanvasSize);
    render();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    nt: number,
    w: number,
    h: number,
    waveColors: string[],
    waveWidth: number
  ) => {
    for (let i = 0; i < waveColors.length; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      ctx.globalAlpha = waveOpacity; // Define a opacidade das ondas
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // Ajusta a altura da onda
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  useEffect(() => {
    init();
  }, [theme]); // Adiciona o tema como dependência para atualizar quando o tema mudar

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        /Safari/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent)
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
