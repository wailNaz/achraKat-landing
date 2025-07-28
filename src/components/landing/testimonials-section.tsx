"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = content[language].testimonials;
  const testimonials = t.items;

  return (
    <motion.section
      id="testimonials"
      className="w-full py-20 md:py-32 bg-background rounded-3xl shadow-lg md:shadow-xl md:rounded-[2.5rem] mx-auto max-w-7xl px-4 md:px-8"
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
              src="/illustration-testimonials.svg"
              alt="Testimonials section illustration"
              width={320}
              height={220}
              className="rounded-2xl shadow-xl object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card className="bg-background border border-border rounded-xl p-6 relative overflow-hidden">
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-14 w-14 border-2 border-primary">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.dataAiHint}
                      />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-bold text-lg text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-start">
                    "{testimonial.testimonial}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
