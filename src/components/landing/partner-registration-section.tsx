"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAddCollaborator } from "@/hooks/useCollaborators";
import { collaborator, emptyCollaborator } from "@/types/collaboratorType";

const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^([+]?[s0-9]+)?[0-9]{10,}$/),
  email: z.string().email(),
  // category: z.string({ required_error: t_form.validation.category_required }),
  // tradeRegister: z.any().refine((files) => files?.length == 1, t_form.validation.tradeRegister_required),
});

export function PartnerRegistrationSection() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = content[language].partnerRegistration;
  const t_form = t.form;
  const addCollaboratorMutation = useAddCollaborator();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "sadasd",
      phone: "0541533070",
      email: "adsa@asdas.com",
    },
  });

  async function onSubmit(values: {
    name: string;
    phone: string;
    email: string;
  }) {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      // formData.append("category", values.category);
      // formData.append("tradeRegister", values.tradeRegister[0]);
      const newCollab: collaborator = {
        ...emptyCollaborator,
        name: values.name,
        number: values.phone,
        email: values.email,
      };

      await addCollaboratorMutation.mutateAsync(newCollab);

      toast({
        title: t_form.toast.success.title,
        description: t_form.toast.success.description,
        variant: "default",
      });
    } catch (e) {
      // form.reset();
      toast({
        title: t_form.toast.error.title,
        description: t_form.toast.error.description,
        variant: "destructive",
      });
    }
  }

  return (
    <motion.section
      id="partner-registration"
      className="w-full py-20 md:py-32 bg-background rounded-3xl shadow-lg md:shadow-xl md:rounded-[2.5rem] mx-auto max-w-7xl px-4 md:px-8"
      initial={{ opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-0 md:px-0">
        <div className="text-center mb-16">
          <div className="relative w-full flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight heading-underline animate-underline-inview">
              {t.title}
            </h2>
            <div
              className="brand-blob brand-blob-blue"
              style={{
                top: "-4vw",
                left: "-6vw",
                width: "12vw",
                height: "12vw",
              }}
            />
            <div
              className="brand-blob brand-blob-yellow"
              style={{
                top: "10vw",
                right: "-8vw",
                width: "10vw",
                height: "10vw",
              }}
            />
          </div>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground text-lg md:text-xl font-medium">
            {t.subtitle}
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src="/illustration-partner.svg"
              alt="Partner Registration section illustration"
              width={320}
              height={220}
              className="rounded-2xl shadow-xl object-contain"
            />
          </div>
        </div>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Card className="bg-background border border-border rounded-xl w-full">
            <CardHeader>
              <CardTitle className="text-primary text-2xl md:text-3xl font-bold leading-relaxed max-w-xl mx-auto text-center md:text-left mb-4">
                {t_form.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto text-center md:text-left mb-6">
                {t_form.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          {t_form.fields.name.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t_form.fields.name.placeholder}
                            {...field}
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          {t_form.fields.phone.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t_form.fields.phone.placeholder}
                            {...field}
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          {t_form.fields.email.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t_form.fields.email.placeholder}
                            {...field}
                            className="rounded-xl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/*
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          {t_form.fields.category.label}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="rounded-xl">
                              <SelectValue
                                placeholder={t_form.fields.category.placeholder}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {t_form.fields.category.options.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tradeRegister"
                    render={({ field: { onChange, value, ...rest } }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">
                          {t_form.fields.tradeRegister.label}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="file"
                              className="rounded-xl pl-12 rtl:pr-12 rtl:pl-4 file:mr-4 rtl:file:ml-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                              accept=".pdf,.png,.jpg,.jpeg"
                              onChange={(e) => onChange(e.target.files)}
                              {...rest}
                            />
                            <Upload className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  */}
                  <Button
                    type="submit"
                    className="w-full text-lg rounded-xl bg-primary text-primary-foreground font-bold btn-brand-hover flex items-center justify-center py-4 sm:py-0 transition-all duration-300"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      t_form.submitButton.submitting
                    ) : (
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
        </motion.div>
      </div>
    </motion.section>
  );
}
