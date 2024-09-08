import { Separator } from "@/components/ui/separator";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconPhone, IconMail } from "@tabler/icons-react";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 w-screen dark:bg-zinc-950 flex flex-col justify-center items-center">
      <div className="py-10 w-full text-center px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src={"/logo/brSqWt.png"}
                width={150}
                height={75}
                alt="Logo"
                className="invert dark:invert-0"
              />
              <p className="text-foreground/60 text-center">Sua vantagem tecnológica.</p>
            </div>
            <div className="hidden border-l pl-4 md:flex flex-col gap-4 w-fit">
              <a
                href="https://www.instagram.com/systemwiser/"
                className="flex items-center hover:font-bold hover:text-brand-secondary justify-start gap-1"
              >
                <IconBrandInstagram className="w-6 h-6 md:w-8 md:h-8" /> Siga-nos no Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/system-wiser-tecnologia/"
                className="flex items-center hover:font-bold hover:text-brand-secondary justify-start gap-1"
              >
                <IconBrandLinkedin className="w-6 h-6 md:w-8 md:h-8" /> Nos encontre no Linkedin
              </a>
              <a
                href="https://wa.link/xccd37"
                className="flex items-center hover:font-bold hover:text-brand-secondary justify-start gap-1"
              >
                <IconBrandWhatsapp className="w-6 h-6 md:w-8 md:h-8" /> Fale conosco no Whatsapp
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-fit items-center md:items-start">
            <div className="flex items-center hover:font-bold hover:text-brand-secondary justify-start gap-1">
              <IconPhone className="w-6 h-6 md:w-8 md:h-8" />
              <a href="tel:011930156720" className="border-l ml-2 pl-2">
                (011) 93015-6720
              </a>
            </div>
            <div className="flex items-center hover:font-bold hover:text-brand-secondary justify-start gap-1">
              <IconMail className="w-6 h-6 md:w-8 md:h-8" />
              <p className="border-l ml-2 pl-2">comercial@systemwiser.com</p>
            </div>
          </div>
          <div className="block md:hidden mt-4">
            <div className="flex flex-col gap-4 w-fit">
              <a
                href="https://www.instagram.com/systemwiser/"
                className="flex items-center hover:font-bold hover:text-brand-secondary justify-center gap-1"
              >
                <IconBrandInstagram className="w-6 h-6 md:w-8 md:h-8" /> Siga-nos no Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/system-wiser-tecnologia/"
                className="flex items-center hover:font-bold hover:text-brand-secondary justify-center gap-1"
              >
                <IconBrandLinkedin className="w-6 h-6 md:w-8 md:h-8" /> Nos encontre no Linkedin
              </a>
              <a
                href="https://wa.link/xccd37"
                className="flex items-center hover:font-bold hover:text-brand-secondary justify-center gap-1"
              >
                <IconBrandWhatsapp className="w-6 h-6 md:w-8 md:h-8" /> Fale conosco no Whatsapp
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className="pt-5">
          <p className="text-sm text-foreground">
            © 2024 System Wiser. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
