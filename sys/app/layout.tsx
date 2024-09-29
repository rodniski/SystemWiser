import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ScrollProvider } from "@/lib/scroll-context";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/ui/structure/footer"), {
  ssr: false,
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Defina uma variável CSS personalizada para a fonte
  display: "swap", // Isso melhora o desempenho de carregamento da fonte
});

export const metadata = {
  title: "System Wiser - Sua Vantagem Tecnológica",
  description:
    "Conheça nossos serviços de TI e como podemos ajudar a sua empresa",
  openGraph: {
    title: "System Wiser - Sua Vantagem Tecnológica",
    description: "Conheça nossos serviços de TI",
    url: "https://system-wiser.vercel.app/",
    images: [
      {
        url: "/logo/favicon.png",
        width: 600,
        height: 600,
        alt: "Logo da System Wiser",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProvider>
            <Header />
            {children}
          </ScrollProvider>
        </ThemeProvider>{" "}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
