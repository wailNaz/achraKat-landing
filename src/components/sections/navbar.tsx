import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "@/lib/translations";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#features", label: t("nav.features") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary-blue font-cairo cursor-pointer"
            >
              {language === 'ar' ? 'أشرقت' : 'AchraKat'}
            </motion.h1>
          </div>

          {!isMobile && (
            <div className="hidden md:block">
              <div className={`${isRTL ? 'mr-10' : 'ml-10'} flex items-baseline ${isRTL ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-dark-gray hover:text-primary-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-tajawal"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleNavClick("#partners")}
                className="gradient-bg text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 font-tajawal"
              >
                {t("nav.signupPartner")}
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-medium-gray hover:text-primary-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-3 py-2 text-dark-gray hover:text-primary-blue font-tajawal w-full text-right"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2">
                <LanguageSwitcher />
                <Button
                  onClick={() => handleNavClick("#partners")}
                  className="w-full gradient-bg text-white font-tajawal"
                >
                  {t("nav.signupPartner")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
