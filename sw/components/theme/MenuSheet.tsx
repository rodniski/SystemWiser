"use client";
import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils"; // Função auxiliar para concatenar classes
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

// Menu items para demonstração
const menuItems = [
  { title: "Desenvolvimento de Software", href: "/services/software" },
  { title: "Gerenciamento de Projetos", href: "/services/project" },
  { title: "Cibersegurança", href: "/services/cybersecurity" },
  { title: "Contato", href: "#contact" },
];

// Props do MenuSheet
interface MenuSheetProps {
  className?: string; // Classe opcional para customização
  menu?: "default" | "fullScreen"; // Controla o comportamento do Sheet (padrão ou tela cheia)
}

export const MenuSheet: React.FC<MenuSheetProps> = ({
  className,
  menu = "fullScreen", // Valor padrão para o layout do menu
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <button
          onClick={() => setIsMenuOpen(true)} // Abre o Sheet
          className={cn("ml-4 focus:outline-none", className)} // Usa className aqui
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      {/* Usa a prop `menu` para controlar o layout do Sheet */}
      <SheetContent menu={menu} side="top" className={cn("h-screen")}>
        {/* Logo no topo */}
        <SheetHeader className="w-full flex items-center justify-between">
          <a href="/" className="text-xl">
            <Image
              src={
                theme === "light"
                  ? "/logo/tcSqDkGrBl.png"
                  : "/logo/tcSqLtGrBl.png"
              }
              width={350}
              height={80}
              alt="Logo"
            />
          </a>
        </SheetHeader>

        {/* Animação do Sheet (desliza de cima para baixo) */}
        <motion.div
          className="flex flex-col h-full justify-center items-center space-y-8"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5 }}
        >
          {/* Animação dos links de navegação */}
          {menuItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="text-xl lg:text-6xl font-bold"
              initial={{ opacity: 0, x: -100 }} // Animação da esquerda para a direita
              animate={{ opacity: 1, x: 0 }} // Vai para o centro
              transition={{ delay: 0.6 + index * 0.2 }} // Animação escalonada
              onClick={() => setIsMenuOpen(false)} // Fecha o Sheet ao clicar
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};
