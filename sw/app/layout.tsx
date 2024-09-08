import { ThemeProvider } from "./providers/theme-provider";
import { Navbar } from "../components/theme/navbar";
import { ScrollProvider } from "../components/scroll-context";
import Footer from "@/components/theme/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import SEOHead from "@/components/theme/SEOHead";
import { MenuSheet } from "@/components/theme/MenuSheet";

export default function RootLayout({
  children,
  showThemeToggle = true, // Novo: controla a exibição do seletor de tema
}: {
  children: React.ReactNode;
  showThemeToggle?: boolean; // Novo: prop opcional
}) {
  return (
    <html lang="en" className="dark">
      <SEOHead 
        title="System Wiser - Soluções Tecnológicas Inovadoras"
        description="A System Wiser oferece soluções tecnológicas avançadas e personalizadas para impulsionar o crescimento do seu negócio."
        url="https://systemwiser.com"
        image="/images/system-wiser-logo.jpg"
      />

      <body className="bg-background">
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProvider>
            <main className="flex flex-col justify-between">
              <MenuSheet className="bg-background/20  p-3 ring rounded-full fixed top-[2%] right-[2%] z-10" />
              {/* Passa a prop showThemeToggle para a Navbar */}
              <Navbar />
              {children}
              <Footer />
            </main>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
