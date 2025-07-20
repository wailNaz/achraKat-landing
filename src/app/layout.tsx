import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBackground } from '@/components/animated-background';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
