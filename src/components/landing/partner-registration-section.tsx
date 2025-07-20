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
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'يجب أن يتكون الاسم من حرفين على الأقل.' }),
  phone: z.string().regex(/^([+]?[s0-9]+)?[0-9]{10,}$/, { message: 'الرجاء إدخال رقم هاتف صالح.' }),
  email: z.string().email({ message: 'الرجاء إدخال بريد إلكتروني صالح.' }),
  category: z.string({ required_error: 'الرجاء اختيار فئة العمل.' }),
  tradeRegister: z.any().refine((files) => files?.length == 1, 'الرجاء تحميل ملف السجل التجاري.'),
});

export function PartnerRegistrationSection() {
  const { toast } = useToast();
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
        title: 'تم إرسال طلبك بنجاح!',
        description: 'سيتم مراجعة طلبك وسيتم التواصل معك قريبًا.',
        variant: 'default',
      });
      form.reset();
    } else {
      toast({
        title: 'حدث خطأ',
        description: result.message || 'لم نتمكن من إرسال طلبك. الرجاء المحاولة مرة أخرى.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="partner-registration" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              انضم إلينا كشريك
            </h2>
            <p className="text-lg text-muted-foreground">
              وسّع نطاق عملك وانضم إلى شبكة شركاء أشرقت. قدم منتجاتك لملايين المستخدمين واستفد من حلول الدفع المبتكرة التي نقدمها.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>وصول لقاعدة عملاء واسعة</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>زيادة مبيعاتك وأرباحك</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>تسويق ودعم مستمر</span>
              </li>
            </ul>
          </div>

          <Card className="shadow-2xl bg-card/60 backdrop-blur-sm border-border/60">
            <CardHeader>
              <CardTitle>نموذج تسجيل الشركاء</CardTitle>
              <CardDescription>املأ النموذج أدناه لبدء عملية الشراكة معنا.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>اسم العمل</FormLabel><FormControl><Input placeholder="اسم شركتك" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>رقم الهاتف</FormLabel><FormControl><Input type="tel" placeholder="05xxxxxxxx" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>البريد الإلكتروني</FormLabel><FormControl><Input type="email" placeholder="partner@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="category" render={({ field }) => (
                    <FormItem>
                      <FormLabel>فئة العمل</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="اختر فئة" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="electronics">إلكترونيات</SelectItem>
                          <SelectItem value="fashion">أزياء</SelectItem>
                          <SelectItem value="furniture">أثاث</SelectItem>
                          <SelectItem value="other">أخرى</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="tradeRegister" render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel>السجل التجاري (PDF/Image)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input type="file" className="pl-12 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => onChange(e.target.files)} {...rest} />
                          <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" className="w-full text-lg h-14 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'جاري الإرسال...' : (
                      <>
                        <Send className="ml-2 h-5 w-5" />
                        إرسال الطلب
                      </>
                    )}
                  </Button>
                </form>
              </Form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                سيتم مراجعة طلبك من قبل الإدارة وسيتم إرسال بريد إلكتروني عند الموافقة.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
