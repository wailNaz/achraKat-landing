"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = content[language].testimonials;
  const testimonials = t.items;

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-primary/5 rounded-full opacity-50 blur-2xl"></div>
              <CardContent className="p-0 relative z-10">
                <div className="flex items-center mb-4">
                  <Avatar className="h-14 w-14 border-2 border-primary/50">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint}/>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="mr-4 rtl:mr-0 rtl:ml-4">
                    <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-muted-foreground italic text-start">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
