"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, User, AtSign, Type } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { handleContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = content[language].contact;
  const t_form = t.contactForm;

  const formSchema = z.object({
    name: z.string().min(2, { message: t_form.validation.name_min }),
    email: z.string().email({ message: t_form.validation.email_invalid }),
    subject: z.string().min(5, { message: t_form.validation.subject_min }),
    message: z.string().min(10, { message: t_form.validation.message_min }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleContactForm(values);

    if (result.success) {
      toast({
        title: t_form.toast.success.title,
        description: t_form.toast.success.description,
        variant: 'default',
      });
      form.reset();
    } else {
      toast({
        title: t_form.toast.error.title,
        description: result.message || t_form.toast.error.description,
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">{t.title}</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <Card className="shadow-2xl bg-card/60 backdrop-blur-sm border-border/60">
                <CardHeader>
                  <CardTitle>{t_form.title}</CardTitle>
                  <CardDescription>{t_form.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>{t_form.fields.name.label}</FormLabel><FormControl><Input placeholder={t_form.fields.name.placeholder} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>{t_form.fields.email.label}</FormLabel><FormControl><Input type="email" placeholder={t_form.fields.email.placeholder} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem><FormLabel>{t_form.fields.subject.label}</FormLabel><FormControl><Input placeholder={t_form.fields.subject.placeholder} {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                       <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel>{t_form.fields.message.label}</FormLabel><FormControl><Textarea placeholder={t_form.fields.message.placeholder} {...field} rows={5} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <Button type="submit" className="w-full text-lg h-14 bg-gradient-to-r from-primary to-yellow-400 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? t_form.submitButton.submitting : (
                          <>
                            <Send className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                            {t_form.submitButton.default}
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit"><Mail className="h-8 w-8 text-primary" /></div>
                    <CardTitle className="mt-4">{t.email.title}</CardTitle>
                  </CardHeader>
                  <CardContent><a href={`mailto:${t.email.address}`} className="text-lg text-muted-foreground hover:text-primary transition-colors">{t.email.address}</a></CardContent>
                </Card>
                <Card className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit"><Phone className="h-8 w-8 text-primary" /></div>
                    <CardTitle className="mt-4">{t.phone.title}</CardTitle>
                  </CardHeader>
                  <CardContent><a href={`tel:${t.phone.number.replace(/\s/g, '')}`} className="text-lg text-muted-foreground hover:text-primary transition-colors" dir="ltr">{t.phone.number}</a></CardContent>
                </Card>
                <Card className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit"><MapPin className="h-8 w-8 text-primary" /></div>
                    <CardTitle className="mt-4">{t.office.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-lg text-muted-foreground">{t.office.address}</p></CardContent>
                </Card>
                 <div className="mt-8 pt-8 border-t border-border/30">
                    <h3 className="text-2xl font-bold mb-4 text-center">{t.social.title}</h3>
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
        </div>
      </div>
    </section>
  );
}
