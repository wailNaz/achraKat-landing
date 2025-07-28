"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { motion } from 'framer-motion';
import Image from 'next/image';

export function FaqSection() {
  const { language } = useLanguage();
  const t = content[language].faq;
  const faqItems = t.items;

  return (
    <motion.section
      id="faq"
      className="w-full py-20 md:py-32 bg-background rounded-3xl shadow-lg md:shadow-xl md:rounded-[2.5rem] mx-auto max-w-7xl px-4 md:px-8"
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-0 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg md:text-xl font-medium">
            {t.subtitle}
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src="/illustration-faq.svg"
              alt="FAQ section illustration"
              width={320}
              height={220}
              className="rounded-2xl shadow-xl object-contain"
            />
          </div>
        </div>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border rounded-xl">
                <AccordionTrigger className="p-6 text-lg font-bold text-primary text-start hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground text-base text-start">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
