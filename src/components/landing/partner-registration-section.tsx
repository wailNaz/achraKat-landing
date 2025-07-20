"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { handlePartnerRegistration } from '@/lib/actions';
import { Upload, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/lib/content';


export function PartnerRegistrationSection() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = content[language].partnerRegistration;
  const t_form = t.form;

  const formSchema = z.object({
    name: z.string().min(2, { message: t_form.validation.name_min }),
    phone: z.string().regex(/^([+]?[s0-9]+)?[0-9]{10,}$/, { message: t_form.validation.phone_invalid }),
    email: z.string().email({ message: t_form.validation.email_invalid }),
    category: z.string({ required_error: t_form.validation.category_required }),
    tradeRegister: z.any().refine((files) => files?.length == 1, t_form.validation.tradeRegister_required),
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('phone', values.phone);
    formData.append('email', values.email);
    formData.append('category', values.category);
    formData.append('tradeRegister', values.tradeRegister[0]);

    const result = await handlePartnerRegistration(formData);

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
    <section id="partner-registration" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.subtitle}
            </p>
            <ul className="space-y-4 text-lg">
              {t.benefits.map((benefit, index) => (
                 <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span>{benefit}</span>
                 </li>
              ))}
            </ul>
          </div>

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
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>{t_form.fields.phone.label}</FormLabel><FormControl><Input type="tel" placeholder={t_form.fields.phone.placeholder} {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>{t_form.fields.email.label}</FormLabel><FormControl><Input type="email" placeholder={t_form.fields.email.placeholder} {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="category" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t_form.fields.category.label}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder={t_form.fields.category.placeholder} /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {t_form.fields.category.options.map(option => (
                             <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="tradeRegister" render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>{t_form.fields.tradeRegister.label}</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="file" className="pl-12 rtl:pr-12 rtl:pl-4 file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => onChange(e.target.files)} {...rest} />
                          <Upload className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
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
              <p className="text-xs text-muted-foreground mt-4 text-center">
                {t_form.note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
