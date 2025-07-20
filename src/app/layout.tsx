import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBackground } from '@/components/animated-background';
import { Inter } from 'next/font/google';
import { LanguageProvider, useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// We need a client component to access the context and update the HTML tag.
function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { language, dir } = useLanguage();

  const metadataContent = content[language].metadata;

  return (
    <html lang={language} dir={dir}>
      <head>
        <title>{metadataContent.title}</title>
        <meta name="description" content={metadataContent.description} />
        <meta name="keywords" content={metadataContent.keywords.join(', ')} />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </LanguageProvider>
  );
}
