import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Sparkles } from "lucide-react";

const faqItems = [
  {
    question: "كيف يعمل تطبيق أشرقت؟",
    answer: "ببساطة، حمّل التطبيق، اختر منتجاتك من شركائنا، ثم اختر خطة التقسيط التي تناسبك. يمكنك استلام مشترياتك فورًا والدفع على دفعات شهرية مريحة.",
  },
  {
    question: "هل هناك أي فوائد أو رسوم خفية؟",
    answer: "نحن نؤمن بالشفافية الكاملة. جميع خطط التقسيط لدينا بدون فوائد أو رسوم خفية. المبلغ الذي تراه هو المبلغ الذي تدفعه، مقسم على دفعات.",
  },
  {
    question: "كيف يمكنني أن أصبح شريكًا في أشرقت؟",
    answer: "نرحب دائمًا بالشركاء الجدد! يمكنك ملء نموذج تسجيل الشركاء على موقعنا، وسيقوم فريقنا بمراجعة طلبك والتواصل معك في أقرب وقت ممكن لبدء الشراكة.",
  },
  {
    question: "ما هي المتاجر التي يمكنني التسوق منها؟",
    answer: "لدينا شبكة واسعة من الشركاء الموثوقين في مختلف الفئات مثل الإلكترونيات، الأزياء، الأثاث، وغيرها. يمكنك تصفح قائمة الشركاء كاملة داخل التطبيق.",
  },
  {
    question: "هل أحتاج إلى بطاقة ائتمان للاستفادة من الخدمة؟",
    answer: "لا تحتاج بالضرورة إلى بطاقة ائتمان. نحن نقدم خيارات دفع متنوعة لتناسب الجميع، بما في ذلك طرق الدفع الرقمية الأخرى. التفاصيل متوفرة في التطبيق.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            الأسئلة الشائعة
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            لديك أسئلة؟ لدينا إجابات. كل ما تحتاج لمعرفته حول أشرقت.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <AccordionTrigger className="p-6 text-lg font-semibold text-right hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
