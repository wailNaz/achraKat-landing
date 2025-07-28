"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';
import { handleContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

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
    <motion.section
      id="contact"
      className="w-full py-20 md:py-32 bg-background rounded-3xl shadow-lg md:shadow-xl md:rounded-[2.5rem] mx-auto max-w-7xl px-4 md:px-8"
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-0 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">{t.title}</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          <Card className="bg-background border border-border rounded-xl">
              <CardHeader>
                <CardTitle className="text-primary">{t_form.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{t_form.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem><FormLabel className="text-muted-foreground">{t_form.fields.name.label}</FormLabel><FormControl><Input placeholder={t_form.fields.name.placeholder} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel className="text-muted-foreground">{t_form.fields.email.label}</FormLabel><FormControl><Input type="email" placeholder={t_form.fields.email.placeholder} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem><FormLabel className="text-muted-foreground">{t_form.fields.subject.label}</FormLabel><FormControl><Input placeholder={t_form.fields.subject.placeholder} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                    )} />
                     <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel className="text-muted-foreground">{t_form.fields.message.label}</FormLabel><FormControl><Textarea placeholder={t_form.fields.message.placeholder} {...field} rows={5} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" className="w-full text-lg rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/80 transition-colors flex items-center justify-center" disabled={form.formState.isSubmitting}>
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
              <Card className="text-center bg-background border border-border rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-blue-50 rounded-full p-3 w-fit"><Mail className="h-8 w-8 text-primary" /></div>
                  <CardTitle className="mt-4 text-primary">{t.email.title}</CardTitle>
                </CardHeader>
                <CardContent><a href={`mailto:${t.email.address}`} className="text-lg text-muted-foreground hover:text-primary transition-colors">{t.email.address}</a></CardContent>
              </Card>
              <Card className="text-center bg-background border border-border rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-blue-50 rounded-full p-3 w-fit"><Phone className="h-8 w-8 text-primary" /></div>
                  <CardTitle className="mt-4 text-primary">{t.phone.title}</CardTitle>
                </CardHeader>
                <CardContent><a href={`tel:${t.phone.number.replace(/\s/g, '')}`} className="text-lg text-muted-foreground hover:text-primary transition-colors" dir="ltr">{t.phone.number}</a></CardContent>
              </Card>
              <Card className="text-center bg-background border border-border rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-blue-50 rounded-full p-3 w-fit"><MapPin className="h-8 w-8 text-primary" /></div>
                  <CardTitle className="mt-4 text-primary">{t.office.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-lg text-muted-foreground">{t.office.address}</p></CardContent>
              </Card>
               <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-2xl font-bold mb-4 text-center text-primary">{t.social.title}</h3>
                  <div className="flex justify-center gap-4">
                      <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></a>
                      <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
                      <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
                  </div>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
