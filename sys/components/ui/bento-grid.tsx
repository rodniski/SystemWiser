// components/ui/bento-grid.tsx

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-lg dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-zinc-300 space-y-4",
        className
      )}
    >
      {header} {/* Renderiza a animação Lottie no header */}
      <div className="flex items-center space-x-2 transition duration-200 group-hover/bento:translate-x-2">
        {icon} {/* Renderiza o ícone */}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
};
