import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/hooks/use-language";

interface LanguageOption {
  code: Language;
  name: string;
  shortName: string;
}

const languages: LanguageOption[] = [
  { code: 'ar', name: 'العربية', shortName: 'Ar' },
  { code: 'fr', name: 'Français', shortName: 'Fr' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm" 
            className="flex items-center gap-2 text-dark-gray hover:text-primary-blue transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-primary-blue/5 min-w-[60px]"
          >
            <span className="text-sm font-medium font-tajawal">
              {currentLanguage.shortName}
            </span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        align="end"
        className="w-32 bg-white border border-gray-200 shadow-lg rounded-xl p-2"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 font-tajawal ${
              language === lang.code
                ? 'bg-primary-blue text-white'
                : 'hover:bg-light-blue text-dark-gray'
            }`}
          >
            <span className="text-sm font-medium">{lang.name}</span>
            {language === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 bg-white rounded-full"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}