import { ThemeProvider } from "./providers/theme-provider";
import { Navbar } from "../components/theme/navbar";
import { ScrollProvider } from "../components/scroll-context"; // Importando o ScrollProvider
import "../styles/globals.css";
import Footer from "@/components/theme/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProvider>
            {" "}
            {/* Envolvendo o layout com o ScrollProvider */}
            <Navbar />
            {children}
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
