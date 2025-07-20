import { Download, ShoppingCart, CreditCard, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: <Download className="h-10 w-10 text-primary" />,
    title: 'حمّل التطبيق',
    description: 'ابدأ رحلتك بتنزيل تطبيق أشرقت من متجر التطبيقات الخاص بك مجانًا.',
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: 'اختر منتجاتك',
    description: 'تصفح آلاف المنتجات من شركائنا الموثوقين واختر ما يناسب احتياجاتك.',
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'اختر خطة التقسيط',
    description: 'اختر خطة الدفع الأنسب لك بكل سهولة وشفافية وبدون فوائد خفية.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'استمتع بمشترياتك',
    description: 'استلم منتجاتك فورًا واستمتع بتجربة تسوق عصرية ومريحة.',
  },
];

export function ExplanationSection() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            كيف يعمل التطبيق؟
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            ثلاث خطوات بسيطة لتجربة تسوق لم يسبق لها مثيل.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-card/50 border-border/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
