"use client";

import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import PropTypes from "prop-types"; // Importa PropTypes
import { navbar } from "@/constants/navbar";
import { ModeToggle } from "./toggle";
import Image from "next/image";

// Definindo as PropTypes
const Logo = memo(({ alt, width, height, className }) => {
  return (
    <Image
      src="/logo/brSqDkBl.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
});

Logo.displayName = "Logo";

// Definindo PropTypes
Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    opened: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    opened: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 backdrop-blur-xl border-b border-zinc-200 dark:border-border shadow-sm text-foreground flex justify-between items-center px-6 md:px-12 z-50">
      <div className="text-xl font-bold w-24">
        <Logo
          alt="System Wiser Logo"
          width={100}
          height={50}
          className="w-20"
        />
      </div>

      <div className="z-50 flex items-center justify-center">
        <ModeToggle />
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          duration={0.5}
          aria-label="Abrir menu de navegação"
        />
      </div>

      <motion.nav
        initial="closed"
        animate={isOpen ? "opened" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-black flex flex-col items-center justify-center"
        style={{ willChange: "transform" }}
      >
        <Logo
          alt="System Wiser Logo"
          width={350}
          height={75}
          className="w-36 absolute top-9"
        />

        <motion.ul
          variants={containerVariants}
          className="space-y-8 text-center flex flex-col items-center justify-center"
        >
          {navbar.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <Link href={item.href}>
                <p
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-bold font-mono dark:text-primary text-black hover:italic transition"
                  role="menuitem"
                >
                  {item.title}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={itemVariants}
          className="mt-16 absolute bottom-8 text-center text-muted-foreground flex flex-col space-y-2"
        >
          <h5 className="text-sm">(11) 93015-6720</h5>
          <h5 className="text-sm">comercial@systemwiser.com</h5>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Header;
