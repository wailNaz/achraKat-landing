import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBackground } from '@/components/animated-background';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'أشرقت | تسوق بالتقسيط',
  description: 'أشرقت هو تطبيقك الأول للتسوق بالتقسيط في الشرق الأوسط. اكتشف آلاف المنتجات وادفع على راحتك.',
  keywords: ['تسوق', 'تقسيط', 'أشرقت', 'e-commerce', 'installments', 'achrakat'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
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
