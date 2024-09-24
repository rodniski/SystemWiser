// components/Logo.tsx
import Image from "next/image";
import React from "react";

interface LogoProps {
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  alt = "System Wiser Logo",
  className,
  width = 650, // Ajuste conforme necessário
  height = 420, // Ajuste conforme necessário
}) => {


  return (
    <Image
      src="/logo/brSqDkBl.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={true} // Otimiza o carregamento da imagem
    />
  );
};

export default Logo;
