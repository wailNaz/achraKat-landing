"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, UserPlus } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const toggleLanguage = () => {
        setLanguage(language === 'ar' ? 'fr' : 'ar');
    };
    return (
        <Button 
            variant="outline" 
            size="lg" 
            onClick={toggleLanguage}
            className="rounded-xl border border-border text-primary font-bold hover:bg-muted transition-colors min-w-[48px] min-h-[48px]"
        >
            <span>{language === 'ar' ? 'FR' : 'AR'}</span>
        </Button>
    );
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { language } = useLanguage();
  const t = content[language].header;

  const navLinks = [
    { href: '#home', label: t.navLinks.home },
    { href: '#features', label: t.navLinks.features },
    { href: '#app-screenshots', label: t.navLinks.app },
    { href: '#testimonials', label: t.navLinks.testimonials },
    { href: '#faq', label: t.navLinks.faq },
    { href: '#contact', label: t.navLinks.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <a href={href} onClick={onClick} className="text-base font-semibold text-muted-foreground hover:text-primary px-2 py-1 rounded-xl transition-colors min-h-[44px] flex items-center">
      {label}
    </a>
  );

  const PartnerButton = ({ isMobile = false, onClick }: { isMobile?: boolean, onClick?: () => void }) => (
    <Button asChild size="lg" className="rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/80 transition-colors min-w-[48px] min-h-[48px] px-6 text-base flex items-center justify-center">
      <a href="#partner-registration" onClick={onClick} tabIndex={0} className="flex items-center w-full h-full">
        {t.partnerButton}
        <UserPlus className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
      </a>
    </Button>
  );

  return (
    <header className={`sticky top-0 left-0 w-full z-50 bg-background border-b border-border transition-shadow ${scrolled ? 'shadow-md' : ''}`} style={{ WebkitTapHighlightColor: 'transparent' }}>
      <div className="container mx-auto px-4 md:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-w-[44px] min-h-[44px]">
          <span className="text-2xl font-bold text-primary">{t.appName}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map(link => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <PartnerButton />
            <LanguageSwitcher />
        </div>
        <div className="lg:hidden flex items-center gap-2">
           <LanguageSwitcher />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="lg" className="rounded-xl min-w-[48px] min-h-[48px] flex items-center justify-center">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">{t.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'right' : 'left'} className="w-[300px] sm:w-[400px] bg-background p-0 border-l border-border flex flex-col">
                <div className="flex justify-between items-center p-4 border-b border-border">
                    <Link href="/" className="flex items-center gap-2 min-w-[44px] min-h-[44px]" onClick={() => setIsSheetOpen(false)}>
                        <span className="text-2xl font-bold text-primary">{t.appName}</span>
                    </Link>
                     <SheetClose asChild>
                         <Button variant="ghost" size="lg" className="rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center">
                             <X className="h-6 w-6 text-primary" />
                             <span className="sr-only">{t.closeMenu}</span>
                         </Button>
                     </SheetClose>
                </div>
              <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
                <nav className="flex flex-col items-center gap-4 w-full">
                  {navLinks.map(link => (
                    <NavLink key={link.href} {...link} onClick={() => setIsSheetOpen(false)} />
                  ))}
                </nav>
                <div className="w-full flex flex-col items-center gap-4 mt-4">
                  <PartnerButton isMobile={true} onClick={() => setIsSheetOpen(false)} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
