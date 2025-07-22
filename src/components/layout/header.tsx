"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Sparkles, X, UserPlus } from 'lucide-react';
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
            size="sm" 
            onClick={toggleLanguage}
            className="rounded-full bg-background/70 backdrop-blur-sm shadow-md hover:shadow-yellow-400/50 transition-all duration-300 transform hover:-translate-y-0.5"
        >
            <span className="font-bold">{language === 'ar' ? 'FR' : 'AR'}</span>
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
    { href: '#screenshots', label: t.navLinks.app },
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
    <a href={href} onClick={onClick} className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300">
      {label}
    </a>
  );

  const PartnerButton = ({ isMobile = false, onClick }: { isMobile?: boolean, onClick?: () => void }) => (
    <Button asChild size={isMobile ? "lg" : "default"} className="bg-gradient-to-r from-primary to-yellow-400 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 rounded-full text-base h-12 px-6">
      <a href="#partner-registration" onClick={onClick}>
        {t.partnerButton}
        <UserPlus className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
      </a>
    </Button>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">{t.appName}</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
            <PartnerButton />
            <LanguageSwitcher />
        </div>

        <div className="lg:hidden flex items-center gap-2">
           <LanguageSwitcher />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'right' : 'left'} className="w-[300px] sm:w-[400px] bg-background p-0">
                <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                        <Sparkles className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold text-foreground">{t.appName}</span>
                    </Link>
                     <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                             <X className="h-6 w-6" />
                             <span className="sr-only">{t.closeMenu}</span>
                         </Button>
                     </SheetClose>
                </div>
              <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
                <nav className="flex flex-col items-center gap-8">
                  {navLinks.map(link => (
                    <NavLink key={link.href} {...link} onClick={() => setIsSheetOpen(false)} />
                  ))}
                </nav>
                <PartnerButton isMobile={true} onClick={() => setIsSheetOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
