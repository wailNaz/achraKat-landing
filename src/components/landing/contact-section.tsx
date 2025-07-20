"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';

export function ContactSection() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">{t.title}</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-12">
          {t.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">{t.email.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@achrakat.com" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                {t.email.address}
              </a>
            </CardContent>
          </Card>
          <Card className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">{t.phone.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+966123456789" className="text-lg text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                {t.phone.number}
              </a>
            </CardContent>
          </Card>
          <Card className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">{t.office.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                {t.office.address}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">{t.social.title}</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
              <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" /></a>
            </Button>
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
              <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" /></a>
            </Button>
            <Button variant="outline" size="icon" className="group rounded-full w-12 h-12 border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110">
              <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
