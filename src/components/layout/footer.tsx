"use client";

import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram } from 'lucide-react';
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
    <footer className="w-full bg-background border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-2xl font-bold text-primary">{t_footer.appName}</span>
            </Link>
            <p className="text-muted-foreground">
              {t_footer.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">{t_footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}><a href={link.href} className="font-semibold text-muted-foreground hover:text-primary transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">{t_footer.social.title}</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t_footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
