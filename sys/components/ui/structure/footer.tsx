import Logo from "../logo";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="bg-muted text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <Logo className="w-32 mx-auto md:mx-0 pb-4" />
            <p className="text-sm text-gray-400">Sua vantagem tecnológica.</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-5">
            <Socials />
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} SYSTEMWISER. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
