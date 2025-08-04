import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, CreditCard, Percent, Handshake } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "توصيل سريع وآمن إلى باب منزلك في أقل من 24 ساعة",
    color: "bg-primary-blue",
  },
  {
    icon: CreditCard,
    title: "دفع آمن",
    description: "خيارات دفع متعددة وآمنة مع حماية كاملة للبيانات",
    color: "bg-soft-green",
  },
  {
    icon: Percent,
    title: "عروض حصرية",
    description: "اكتشف عروض وخصومات حصرية يومياً على أفضل المنتجات",
    color: "bg-warm-yellow",
  },
  {
    icon: Handshake,
    title: "شراكات مربحة",
    description: "انضم كشريك واحصل على عمولات مجزية ودعم متكامل",
    color: "bg-purple-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-gray mb-4 font-cairo">
            مميزات منصة أشرقت
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto font-tajawal">
            اكتشف لماذا يختار آلاف المستخدمين والشركاء منصة أشرقت لتسوقهم وشراكاتهم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="bg-light-blue border-none card-shadow h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-dark-gray mb-4 font-cairo">
                    {feature.title}
                  </h3>
                  <p className="text-medium-gray font-tajawal leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
