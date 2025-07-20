import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBackground } from '@/components/animated-background';
import { Inter } from 'next/font/google';
import { LanguageProvider, LanguageUpdater } from '@/context/language-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Default metadata, can be overridden by LanguageUpdater
export const metadata: Metadata = {
  title: 'AchraKat | Achetez en plusieurs fois',
  description: 'AchraKat est votre première application pour les achats en plusieurs fois au Moyen-Orient.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      {/* LanguageUpdater is a client component that will update html/head tags */}
      <LanguageUpdater>
        <body className={`${inter.variable} font-body antialiased`}>
          <AnimatedBackground />
          <div className="relative z-10">
            {children}
          </div>
          <Toaster />
        </body>
      </LanguageUpdater>
    </LanguageProvider>
  );
}
