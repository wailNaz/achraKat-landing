import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AnimatedBackground } from "@/components/animated-background";
import { Inter } from "next/font/google";
import { LanguageProvider, LanguageUpdater } from "@/context/language-context";
import { Providers } from "./providers"; // ← fixed

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AchraKat | Achetez en plusieurs fois",
  description:
    "AchraKat est votre première application pour les achats en plusieurs fois au Moyen-Orient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-body antialiased`}>
        <LanguageProvider>
          <LanguageUpdater>
            <Providers>
              <AnimatedBackground />
              <div className="relative z-10">{children}</div>
              <Toaster />
            </Providers>
          </LanguageUpdater>
        </LanguageProvider>
      </body>
    </html>
  );
}
