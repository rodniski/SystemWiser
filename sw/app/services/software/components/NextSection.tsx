import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NextSection = () => {
  return (
    <motion.section
      className="next-section w-screen h-screen p-20 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }} // Anima apenas na primeira vez que é visto
    >
      <h2 className="text-4xl text-white">Pronto para a próxima etapa?</h2>
      <p className="text-xl text-white mt-4">Vamos começar seu projeto!</p>
      <Button variant="secondary" size="lg" className="mt-8">
        Entre em contato
      </Button>
    </motion.section>
  );
};
