import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const screenshots = [
  {
    title: "واجهة التسوق",
    description: "تصفح المنتجات بسهولة",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "كتالوج المنتجات",
    description: "اكتشف منتجات متنوعة",
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "واجهة الدفع",
    description: "عملية دفع آمنة وسريعة",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "لوحة الشراكة",
    description: "إدارة شراكتك بسهولة",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "تتبع الطلبات",
    description: "تابع طلباتك لحظة بلحظة",
    gradient: "from-red-400 to-red-600",
  },
  {
    title: "العروض والخصومات",
    description: "اكتشف أفضل العروض",
    gradient: "from-yellow-400 to-yellow-600",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-gray mb-4 font-cairo">
            معرض التطبيق
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto font-tajawal">
            شاهد واجهة التطبيق البسيطة والأنيقة المصممة خصيصاً للمستخدم العربي
          </p>
        </motion.div>

        <div className="flex overflow-x-auto space-x-6 space-x-reverse pb-4 scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-64 group"
            >
              <Card className="bg-white p-4 rounded-3xl shadow-2xl">
                {/* Phone mockup */}
                <div className="relative">
                  <div className="w-full h-96 bg-gray-900 rounded-2xl p-2">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                      {/* Screen content mockup */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-lg"></div>
                          </div>
                          <h4 className="font-bold mb-2 font-cairo">{screenshot.title}</h4>
                          <p className="text-sm opacity-90 font-tajawal">{screenshot.description}</p>
                        </div>
                      </div>
                      {/* Phone status bar */}
                      <div className="absolute top-2 left-4 right-4 h-6 bg-black/10 rounded-full"></div>
                      {/* Phone home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black/30 rounded-full"></div>
                    </div>
                  </div>
                  {/* Phone shadow */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-black/10 rounded-full blur-lg"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
