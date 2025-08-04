import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك",
      description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@achraKat.com",
      color: "text-primary-blue",
    },
    {
      icon: Phone,
      label: "رقم الهاتف",
      value: "+966 50 123 4567",
      color: "text-soft-green",
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: "الرياض، المملكة العربية السعودية",
      color: "text-warm-yellow",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark-gray mb-6 font-cairo">
              تواصل معنا
            </h2>
            <p className="text-xl text-medium-gray mb-8 font-tajawal">
              نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو دعم
            </p>

            <Card className="p-6 card-shadow">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-dark-gray font-cairo">
                        الاسم
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue font-tajawal"
                        placeholder="أدخل اسمك"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-dark-gray font-cairo">
                        البريد الإلكتروني
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue font-tajawal"
                        placeholder="أدخل بريدك الإلكتروني"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-dark-gray font-cairo">
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue font-tajawal"
                      placeholder="أدخل رقم هاتفك"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-dark-gray font-cairo">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue resize-none font-tajawal"
                      placeholder="اكتب رسالتك هنا"
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full gradient-bg text-white py-3 rounded-xl text-lg font-medium hover:shadow-xl transition-all duration-300 font-tajawal"
                    >
                      إرسال الرسالة
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Support illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-md mx-auto bg-gradient-to-br from-primary-blue/20 to-green-500/20 rounded-3xl shadow-2xl p-8 mb-8"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-blue to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-soft-green rounded-full flex items-center justify-center shadow-md">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4 font-cairo">
                نحن هنا لمساعدتك
              </h3>
              <p className="text-medium-gray font-tajawal">
                فريق دعم متخصص متاح على مدار الساعة لمساعدتك
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center bg-white rounded-xl p-4 card-shadow"
                >
                  <info.icon className={`${info.color} text-xl ml-4 flex-shrink-0`} />
                  <div className="text-right">
                    <div className="text-sm text-medium-gray font-tajawal">{info.label}</div>
                    <div className="text-dark-gray font-cairo font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
