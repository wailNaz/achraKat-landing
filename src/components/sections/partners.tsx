import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAddCollaborator } from "@/hooks/useCollaborators";
import { supabase } from "@/lib/supabase/config/supabase";

export function Partners() {
  const addCollaborator = useAddCollaborator();
  const [formData, setFormData] = useState<{
    companyName: string;
    email: string;
    phone: string;
    justificalofWork: string;
    justificalofWorkFile: File | null;
  }>({
    companyName: "",
    email: "",
    phone: "",
    justificalofWork: "",
    justificalofWorkFile: null,
  });

  const { toast } = useToast();

  function getJustificationOfWorkPath(file: File): string {
    const extension = file.name.split(".").pop() || "jpg";
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `justificationOfwork/${randomNumber}.${extension}`;
  }

  const handleFileChange = (file: File) => {
    const path = getJustificationOfWorkPath(file);
    setFormData((prev) => ({
      ...prev,
      justificalofWork: path,
      justificalofWorkFile: file,
    }));
  };

  const uploadImageToStorage = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from("achrakat")
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/achrakat/${data?.path}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const publicPath = await uploadImageToStorage(
        formData.justificalofWorkFile!,
        formData.justificalofWork
      );
      const formDataToSubmit = {
        name: formData.companyName,
        email: formData.email,
        number: formData.phone,
        justificalofWork: publicPath,
      };
      await addCollaborator.mutateAsync(formDataToSubmit);
      toast({
        title: "تم إرسال طلب الشراكة",
        description: "سنتواصل معك قريباً لاستكمال عملية التسجيل",
      });
    } catch (e) {
      console.error("Error submitting form:", e);
      toast({
        title: "خطأ في إرسال الطلب",
        description: "يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive",
      });
    }

    setFormData({
      companyName: "",
      justificalofWork: "",
      email: "",
      phone: "",
      justificalofWorkFile: null,
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark-gray mb-6 font-cairo">
              انضم كشريك
            </h2>
            <p className="text-xl text-medium-gray mb-8 font-tajawal">
              ابدأ رحلتك التجارية معنا واحصل على عمولات مجزية ودعم متكامل لنمو
              أعمالك
            </p>

            <Card className="p-6 card-shadow">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="companyName"
                      className="text-dark-gray font-cairo"
                    >
                      اسم الشركة
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue font-tajawal"
                      placeholder="أدخل اسم شركتك"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="justificalofWork"
                      className="text-dark-gray font-cairo"
                    >
                      إثبات العمل
                    </Label>
                    <Input
                      id="justificalofWork"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleFileChange(file);
                        }
                      }}
                      className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary-blue file:text-white hover:file:bg-blue-600 font-tajawal"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-dark-gray font-cairo"
                    >
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue font-tajawal"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-dark-gray font-cairo"
                    >
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="mt-2 rounded-xl border-gray-300 focus:ring-2 focus:ring-primary-blue font-tajawal"
                      placeholder="أدخل رقم هاتفك"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full gradient-bg text-white py-3 rounded-xl text-lg font-medium hover:shadow-xl transition-all duration-300 font-tajawal"
                    >
                      تقدم بطلب الشراكة
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
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-md mx-auto bg-gradient-to-br from-primary-blue/20 to-purple-500/20 rounded-3xl shadow-2xl p-8"
            >
              {/* Business collaboration illustration */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-blue to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="text-4xl text-white">🤝</div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-warm-yellow rounded-full flex items-center justify-center shadow-md">
                  <div className="text-2xl">💼</div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-soft-green rounded-full flex items-center justify-center shadow-md">
                  <div className="text-xl">📈</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4 font-cairo">
                شراكة نجاح
              </h3>
              <p className="text-medium-gray font-tajawal">
                انضم إلى شبكة الشركاء المميزين واحصل على دعم شامل لتنمية أعمالك
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
