import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-card/30 border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold ml-2">أشرقت</span>
            </Link>
            <p className="text-muted-foreground">
              تجربة تسوق فريدة بالتقسيط السهل والمريح.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">كيف نعمل</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">آراء العملاء</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#partner-registration" className="hover:text-primary transition-colors">تسجيل الشركاء</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} أشرقت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
