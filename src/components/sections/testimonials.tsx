import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمد",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "تجربة رائعة مع منصة أشرقت. التوصيل سريع والخدمة ممتازة. أنصح الجميع بتجربتها.",
    role: "عميل",
  },
  {
    name: "فاطمة أحمد",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b5c500c2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "أصبحت شريكة مع أشرقت منذ شهرين وحققت أرباحاً ممتازة. الدعم مستمر والنظام سهل.",
    role: "شريكة",
  },
  {
    name: "سعد العتيبي",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "أفضل منصة تسوق جربتها. الأسعار ممتازة والعروض مغرية. التطبيق سهل الاستخدام جداً.",
    role: "عميل",
  },
  {
    name: "نورا السلمي",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "خدمة عملاء ممتازة وتوصيل سريع. المنتجات عالية الجودة والأسعار تنافسية.",
    role: "عميلة",
  },
  {
    name: "خالد الأحمدي",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "انضممت كشريك العام الماضي وأنا راضٍ جداً عن النتائج. دعم مستمر وأرباح ممتازة.",
    role: "شريك",
  },
  {
    name: "ريم المطيري",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "تطبيق رائع وسهل الاستخدام. العروض اليومية مميزة والتوصيل دائماً في الموعد المحدد.",
    role: "عميلة",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-gray mb-4 font-cairo">
            آراء عملائنا
          </h2>
          <p className="text-xl text-medium-gray font-tajawal">
            اكتشف تجارب عملائنا وشركائنا مع منصة أشرقت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-light-blue border-none card-shadow h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-16 w-16 ml-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="font-cairo">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold text-dark-gray font-cairo">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-medium-gray font-tajawal mb-2">
                        {testimonial.role}
                      </p>
                      <div className="flex text-warm-yellow">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-medium-gray font-tajawal leading-relaxed italic">
                    "{testimonial.comment}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
