import * as React from "react";
import { LucideProps, Home, Briefcase, Users, Mail, ArrowDown, Lightbulb, Shield, Handshake, Star } from "lucide-react";

// Centralizando todos os ícones usados na aplicação
export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.8 0-5.07-2.27-5.07-5.07 0-1.84.95-3.47 2.43-4.36l-2.9-2.9a7.959 7.959 0 0 1 5.54-2.28c2.13 0 4.1.83 5.54 2.28l-2.9 2.9c1.48.89 2.43 2.52 2.43 4.36 0 2.8-2.27 5.07-5.07 5.07z"/>
    </svg>
  ),
  arrowDown: (props: LucideProps) => <ArrowDown {...props} />,
  home: (props: LucideProps) => <Home {...props} />,
  briefcase: (props: LucideProps) => <Briefcase {...props} />,
  users: (props: LucideProps) => <Users {...props} />,
  mail: (props: LucideProps) => <Mail {...props} />,
  lightbulb: (props: LucideProps) => <Lightbulb {...props} />, // Inovação
  shield: (props: LucideProps) => <Shield {...props} />, // Transparência
  handshake: (props: LucideProps) => <Handshake {...props} />, // Comprometimento
  star: (props: LucideProps) => <Star {...props} />, // Excelência
};
