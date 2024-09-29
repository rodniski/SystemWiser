import { IconBrandWhatsapp, IconBrandLinkedin, IconBrandInstagram, IconMail } from '@tabler/icons-react'
import React from 'react'
import { Button } from '../button'

const Socials = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
    <Button
      asChild
      variant="whatsapp"
      size={"icon"}
      className="flex justify-center items-center"
      aria-label="Converse pelo WhatsApp"
    >
      <a
        href="https://wa.me/5511999999999" // Substitua pelo seu número com código do país
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandWhatsapp />
      </a>
    </Button>
    <Button
      asChild
      variant="outline"
      size={"icon"}
      className="flex justify-center items-center border-blue-500 hover:bg-blue-500"
      aria-label="Conecte-se no LinkedIn"
    >
      <a
        href="https://www.linkedin.com/company/system-wiser-tecnologia/" // Substitua pelo seu número com código do país
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandLinkedin />
      </a>
    </Button>{" "}
    <Button
      asChild
      variant="outline"
      size={"icon"}
      className="flex justify-center items-center  border-purple-500 hover:bg-purple-500"
      aria-label="Nos siga no Instagram"
    >
      <a
        href="https://www.instagram.com/systemwiser/" // Substitua pelo seu número com código do país
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandInstagram />
      </a>
    </Button>
    <Button
      asChild
      variant="outline"
      size={"icon"}
      className="flex justify-center items-center  border-red-500 hover:bg-red-500"
      aria-label="Nos envie um e-mail!"
    >
      <a
        href="mailto:comercial@systemwiser.com" // Substitua pelo seu número com código do país
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconMail />
      </a>
    </Button>
  </div>
  )
}

export default Socials