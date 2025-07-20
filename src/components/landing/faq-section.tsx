"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

export function FaqSection() {
  const { language } = useLanguage();
  const t = content[language].faq;
  const faqItems = t.items;

  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <AccordionTrigger className="p-6 text-lg font-semibold text-start hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground text-base text-start">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
