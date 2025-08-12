import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAddCollaborator } from "@/hooks/useCollaborators";
import { supabase } from "@/lib/supabase/config/supabase";
import { useSubCategoriesQuery } from "@/hooks/useSubCategories";

type SubCategory = {
  id: string;
  imageUrl?: string;
  nameAr?: string;
  nameFr?: string;
  nameEn?: string;
  categoryId?: string;
};

export function Partners() {
  const addCollaborator = useAddCollaborator();
  const { toast } = useToast();
  const { data: subData } = useSubCategoriesQuery();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    justificalofWork: "",
    justificalofWorkFile: null as File | null,
  });
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    if (subData) setSubCategories(subData);
  }, [subData]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  function getJustificationOfWorkPath(file: File): string {
    const ext = file.name.split(".").pop() || "jpg";
    return `justificationOfwork/${Math.floor(Math.random() * 1000000)}.${ext}`;
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
    const { data } = await supabase.storage
      .from("achrakat")
      .upload(path, file, { cacheControl: "3600", upsert: false });
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/achrakat/${data?.path}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const publicPath = await uploadImageToStorage(
        formData.justificalofWorkFile!,
        formData.justificalofWork
      );
      await addCollaborator.mutateAsync({
        name: formData.companyName,
        email: formData.email,
        number: formData.phone,
        justificalofWork: publicPath,
        subCategories: selectedIds,
      });
      toast({
        title: "تم إرسال طلب الشراكة",
        description: "سنتواصل معك قريباً",
      });
    } catch {
      setIsLoading(false);
      toast({
        title: "خطأ في إرسال الطلب",
        description: "يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive",
      });
    }
    setFormData({
      companyName: "",
      email: "",
      phone: "",
      justificalofWork: "",
      justificalofWorkFile: null,
    });
    setSelectedIds([]);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">انضم كشريك</h2>
            <p className="text-xl mb-8">
              ابدأ رحلتك التجارية معنا واحصل على عمولات مجزية ودعم متكامل
            </p>
            <Card className="p-6 space-y-8">
              <CardContent className="p-0 space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="companyName">اسم الشركة</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="justificalofWork">إثبات العمل</Label>
                    <Input
                      id="justificalofWork"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileChange(file);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                    />
                  </div>

                  {/* Subcategories Section */}
                  <div>
                    <Label>اختر الفئات الفرعية</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {subCategories.map((sub) => {
                        const isSelected = selectedIds.includes(sub.id);
                        return (
                          <div
                            key={sub.id}
                            onClick={() => toggleSelect(sub.id)}
                            className={`cursor-pointer border rounded-md p-1 flex flex-col items-center transition ${
                              isSelected
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-400"
                            }`}
                          >
                            {sub.imageUrl ? (
                              <img
                                src={sub.imageUrl}
                                alt={sub.nameEn || "SubCategory"}
                                className="w-8 h-8 object-cover rounded mb-0.5"
                              />
                            ) : (
                              <div className="w-8 h-8 bg-gray-200 rounded mb-0.5" />
                            )}
                            <p className="text-[10px] text-center leading-tight">
                              {sub.nameEn ||
                                sub.nameFr ||
                                sub.nameAr ||
                                "Unnamed"}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    {isLoading ? "جاري الإرسال..." : "إرسال طلب الشراكة"}
                  </Button>
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
              <h3 className="text-2xl font-bold mb-4">شراكة نجاح</h3>
              <p>
                انضم إلى شبكة الشركاء المميزين واحصل على دعم شامل لتنمية أعمالك
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
