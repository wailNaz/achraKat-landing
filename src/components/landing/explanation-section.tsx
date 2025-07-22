"use client";

import { Download, ShoppingCart, CreditCard, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

export function ExplanationSection() {
  const { language } = useLanguage();
  const t = content[language].explanation;

  const features = [
    {
      icon: <Download className="h-10 w-10 text-primary" />,
      title: t.steps[0].title,
      description: t.steps[0].description,
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: t.steps[1].title,
      description: t.steps[1].description,
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: t.steps[2].title,
      description: t.steps[2].description,
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: t.steps[3].title,
      description: t.steps[3].description,
    },
  ];

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
