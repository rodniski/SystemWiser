"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MenuSheet } from "./MenuSheet";

export function Navbar() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false); // Controla o scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="absolute top-0 py-3 left-0 z-30 w-full bg-transparent backdrop-blur-3xl">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logotipo */}
        <a
          href="/"
          className="text-xl font-bold text-foreground flex items-center"
        >
          <Image
            src={
              theme === "light"
                ? "/logo/tcSqDkGrBl.png"
                : "/logo/tcSqLtGrBl.png"
            }
            width={200}
            height={40}
            alt="Logo"
          />
        </a>

        {/* Botão de Menu (Hambúrguer) */}
        <div
          className={
            "flex justify-center items-center transition-all duration-300"
          } // Tornar o hambúrguer fixo ao rolar
        >
          <MenuSheet />
        </div>
      </div>
    </header>
  );
}
