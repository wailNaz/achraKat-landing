"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { content } from '@/lib/content';

type Language = 'ar' | 'fr';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  dir: Direction;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLang = localStorage.getItem('language') as Language | null;
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
        localStorage.setItem('language', language);
    }
  }, [language, isMounted]);

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  const value = { language, setLanguage, dir };

  // This prevents UI flicker by not rendering anything until the client has mounted
  // and determined the correct language. The root layout provides a basic structure.
  if (!isMounted) {
    return (
      <LanguageContext.Provider value={value}>
        <html lang="ar" dir="rtl">
          {children}
        </html>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// This new client component will handle updating the DOM attributes
export const LanguageUpdater = ({ children }: { children: ReactNode }) => {
    const { language, dir } = useLanguage();
    const metadataContent = content[language].metadata;

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = dir;
        document.title = metadataContent.title;

        // Clean up previous meta tags if they exist
        document.querySelector('meta[name="description"]')?.remove();
        document.querySelector('meta[name="keywords"]')?.remove();
        
        // Add new meta tags
        const descriptionTag = document.createElement('meta');
        descriptionTag.name = 'description';
        descriptionTag.content = metadataContent.description;
        document.head.appendChild(descriptionTag);

        const keywordsTag = document.createElement('meta');
        keywordsTag.name = 'keywords';
        keywordsTag.content = metadataContent.keywords.join(', ');
        document.head.appendChild(keywordsTag);

    }, [language, dir, metadataContent]);

    return (
        <html lang={language} dir={dir}>
            {children}
        </html>
    )
}
