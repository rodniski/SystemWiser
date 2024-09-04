import { ThemeProvider } from "./providers/theme-provider";
import { Navbar } from "../components/theme/navbar";
import { ScrollProvider } from "../components/scroll-context";
import Footer from "@/components/theme/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <title>System Wiser - Soluções Tecnológicas Inovadoras</title>
        <meta
          name="description"
          content="A System Wiser oferece soluções tecnológicas avançadas e personalizadas para impulsionar o crescimento do seu negócio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="System Wiser, tecnologia, soluções tecnológicas, consultoria TI, desenvolvimento de software, cibersegurança"
        />
        <meta name="author" content="System Wiser" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://systemwiser.com" />
        <meta
          property="og:title"
          content="System Wiser - Soluções Tecnológicas Inovadoras"
        />
        <meta
          property="og:description"
          content="A System Wiser oferece soluções tecnológicas avançadas e personalizadas para impulsionar o crescimento do seu negócio."
        />
        <meta property="og:image" content="/images/system-wiser-logo.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://systemwiser.com" />
        <meta
          property="twitter:title"
          content="System Wiser - Soluções Tecnológicas Inovadoras"
        />
        <meta
          property="twitter:description"
          content="A System Wiser oferece soluções tecnológicas avançadas e personalizadas para impulsionar o crescimento do seu negócio."
        />
        <meta property="twitter:image" content="/images/system-wiser-logo.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="bg-background">
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProvider>
            <Navbar />
            {children}
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
