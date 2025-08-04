import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "كيف يمكنني التسجيل في المنصة؟",
    answer: "يمكنك التسجيل بسهولة من خلال تحميل التطبيق وإنشاء حساب جديد باستخدام بريدك الإلكتروني أو رقم هاتفك. العملية بسيطة وتستغرق أقل من دقيقتين.",
  },
  {
    question: "ما هي شروط الشراكة؟",
    answer: "نرحب بجميع التجار وأصحاب الأعمال للانضمام كشركاء. تحتاج إلى سجل تجاري ساري المفعول ووثائق الهوية. نوفر تدريباً مجانياً ودعماً فنياً متكاملاً.",
  },
  {
    question: "كم المدة المطلوبة للتوصيل؟",
    answer: "نوفر خدمة توصيل سريعة خلال 24 ساعة داخل المدن الرئيسية، وخلال 2-3 أيام عمل للمناطق النائية. يمكنك تتبع طلبك لحظة بلحظة من خلال التطبيق.",
  },
  {
    question: "هل يمكنني إرجاع المنتجات؟",
    answer: "نعم، نوفر سياسة إرجاع مرنة خلال 14 يوماً من تاريخ الاستلام. يجب أن تكون المنتجات في حالتها الأصلية. الإرجاع مجاني للعيوب الصناعية.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل جميع وسائل الدفع: البطاقات الائتمانية، مدى، أبل باي، ستك باي، والدفع عند الاستلام. جميع المعاملات محمية بأعلى معايير الأمان.",
  },
  {
    question: "كيف أتواصل مع خدمة العملاء؟",
    answer: "يمكنك التواصل معنا عبر الدردشة المباشرة في التطبيق، أو الاتصال على الرقم المجاني، أو إرسال بريد إلكتروني. فريق الدعم متاح 24/7 لمساعدتك.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-light-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center shadow-lg"
            >
              <HelpCircle className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold text-dark-gray mb-4 font-cairo">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-medium-gray font-tajawal">
            إجابات على أهم الأسئلة حول منصة أشرقت
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-2xl px-6 py-2 card-shadow border-none"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-6">
                    <span className="text-lg font-medium text-dark-gray font-cairo">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-right pb-6">
                    <p className="text-medium-gray font-tajawal leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
