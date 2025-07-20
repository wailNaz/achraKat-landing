"use client";

import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  const { language } = useLanguage();
  const t = content[language].loading;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <LoaderCircle className="h-16 w-16 animate-spin text-primary" />
      <p className="mt-4 text-lg text-foreground">{t.text}</p>
    </div>
  );
}
