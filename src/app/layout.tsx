import * as React from "react";
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider, LanguageUpdater } from '@/context/language-context';

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
      <LanguageUpdater>
        <body>
          <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0 -z-10">
              {/* Animated background gradient with brand accent overlays */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-yellow-50 to-red-50 animate-gradient-move" />
              <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background opacity-80 animate-subtle-gradient-bg" />
              {/* Decorative floating accent blobs */}
              <div className="absolute left-[-10vw] top-[-10vh] w-[30vw] h-[30vw] bg-yellow-300/30 rounded-full blur-3xl animate-blob-float" />
              <div className="absolute right-[-8vw] bottom-[-8vh] w-[24vw] h-[24vw] bg-red-400/20 rounded-full blur-2xl animate-blob-float2" />
            </div>
            {children}
          </div>
          <Toaster />
        </body>
      </LanguageUpdater>
    </LanguageProvider>
  );
}
