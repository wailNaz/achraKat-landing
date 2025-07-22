"use client";

import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

export function Footer() {
  const { language } = useLanguage();
  const t = content[language];
  const t_footer = t.footer;

  const quickLinks = [
    { href: '#home', label: t.header.navLinks.home },
    { href: '#features', label: t.header.navLinks.features },
    { href: '#screenshots', label: t.header.navLinks.app },
    { href: '#testimonials', label: t.header.navLinks.testimonials },
    { href: '#faq', label: t.header.navLinks.faq },
    { href: '#partner-registration', label: t.header.navLinks.partnerRegistration },
    { href: '#contact', label: t.header.navLinks.contact },
  ];

  return (
    <footer className="w-full bg-card/30 border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold ml-2 rtl:mr-2 rtl:ml-0">{t_footer.appName}</span>
            </Link>
            <p className="text-muted-foreground">
              {t_footer.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t_footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}><a href={link.href} className="hover:text-primary transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t_footer.social.title}</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t_footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
