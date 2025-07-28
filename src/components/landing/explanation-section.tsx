"use client";

import * as React from "react";

import { Download, ShoppingCart, CreditCard, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <motion.section
      id="features"
      className="w-full py-20 md:py-32 bg-transparent rounded-3xl shadow-lg md:shadow-xl md:rounded-[2.5rem] mx-auto max-w-7xl px-4 md:px-8"
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-0 md:px-0">
        <div className="text-center mb-20">
          <div className="relative w-full flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight drop-shadow-md heading-underline animate-underline-inview mb-4 sm:mb-5 md:mb-7">
              {t.title}
            </h2>
            <div className="h-4 sm:h-5 md:h-6" /> {/* Extra space below heading for underline separation */}
            <div className="brand-blob brand-blob-blue" style={{top: '-4vw', left: '-6vw', width: '12vw', height: '12vw'}} />
            <div className="brand-blob brand-blob-yellow" style={{top: '10vw', right: '-8vw', width: '10vw', height: '10vw'}} />
          </div>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg md:text-2xl font-medium">
            {t.subtitle}
          </p>
          <div className="flex justify-center mt-10">
            <Image
              src="/illustration-explanation.svg"
              alt="Explanation section illustration"
              width={340}
              height={240}
              className="rounded-2xl shadow-xl object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
            >
              <Card className="text-center p-7 bg-background/80 border border-border rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer backdrop-blur-sm">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {React.cloneElement(feature.icon, { className: 'h-10 w-10 text-primary' })}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
