"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScroll } from "@/components/scroll-context";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useTheme } from "next-themes";

const components = [
  {
    title: "Desenvolvimento de Software",
    href: "/services/software-development",
    description: "Desenvolvimento de aplicações robustas e escaláveis.",
  },
  {
    title: "Gerenciamento de Projetos",
    href: "/services/project-management",
    description:
      "Planejamento e execução para garantir o sucesso de seus projetos.",
  },
  {
    title: "Cibersegurança",
    href: "/services/cybersecurity",
    description:
      "Proteção avançada contra ameaças digitais para o seu negócio.",
  },
];

export function Navbar() {
  const { theme } = useTheme();
  const { scrollToForm } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 50);
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
    <motion.header
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 bg-background/40 backdrop-blur md:bg-transparent",
        scrolled
          ? "bg-background/40 border backdrop-blur shadow-lg translate-y-2 rounded-full px-4"
          : "shadow-sm translate-y-0"
      )}
      animate={{
        width: scrolled ? "60vw" : "100vw",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logotipo */}
        <a
          href="/"
          className="text-xl font-bold text-foreground flex items-center"
        >
          <Image
            src={
              theme === "light" ? "/logo/tcSqDkGrBl.png" : "/logo/tcSqLtGrBl.png" 
            }
            width={200}
            height={40}
            alt="Logo"
          />
        </a>

        {/* Botão de Menu para Mobile */}
        <div className="md:hidden flex justify-center items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu de Navegação */}
        <NavigationMenu className={cn("hidden md:flex")}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <a
                      href="/about"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:from-primary/10 hover:to-primary/30"
                    >
                      <Image
                        src={"/logo/.png"}
                        width={30}
                        height={40}
                        alt="Logo"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        System Wiser
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Consultoria de TI focada em soluções personalizadas e
                        resultados mensuráveis. Conheça mais sobre nossa missão
                        e valores.
                      </p>
                    </a>
                  </li>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <a href="/testimonials" className={navigationMenuTriggerStyle()}>
                Depoimentos
              </a>
            </NavigationMenuItem>*/}
            <NavigationMenuItem>
              <a href="/contact" className={navigationMenuTriggerStyle()}>
                Contato
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Toggle de Modo Escuro/Claro */}
        <div className="hidden md:flex items-center justify-end space-x-4">
          <ThemeToggle />
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={scrollToForm}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
              Entrar em Contato
            </span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <nav className="flex flex-col p-4 bg-background/40 backdrop-blur">
          <a href="/services/software-development" className="py-2 text-sm">
            Desenvolvimento de Software
          </a>
          <a href="/services/project-management" className="py-2 text-sm">
            Gerenciamento de Projetos
          </a>
          <a href="/services/cybersecurity" className="py-2 text-sm">
            Cibersegurança
          </a>
          {/*<a href="/testimonials" className="py-2 text-sm">
            Depoimentos
          </a>*/}
          <a onClick={scrollToForm} className="py-2 text-sm">
            Contato
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
