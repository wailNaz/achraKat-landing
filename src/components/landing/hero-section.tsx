import { Button } from '@/components/ui/button';
import { PhoneMockup } from './phone-mockup';
import { ArrowLeft, Apple } from 'lucide-react';

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.445 12.665L15.333 9.777C15.937 9.173 16 8.217 16 7.667C16 5.667 14.333 4 12.333 4C11.556 4 10.778 4.222 10.111 4.667L4.667 10.111C4.222 10.778 4 11.556 4 12.333C4 14.333 5.667 16 7.667 16C8.217 16 9.173 15.937 9.777 15.333L12.445 12.665Z"/>
        <path d="M12.445 12.665L9.777 15.333C9.173 15.937 8.217 16 7.667 16C5.667 16 4 14.333 4 12.333C4 11.556 4.222 10.778 4.667 10.111L10.111 4.667C10.778 4.222 11.556 4 12.333 4C14.333 4 16 5.667 16 7.667C16 8.217 15.937 9.173 15.333 9.777L12.445 12.665Z" stroke="#4285F4" stroke-width="1.5"/>
        <path d="M12.445 12.665L15.333 9.777C15.937 9.173 16 8.217 16 7.667C16 5.667 14.333 4 12.333 4C11.556 4 10.778 4.222 10.111 4.667L4.667 10.111C4.222 10.778 4 11.556 4 12.333C4 14.333 5.667 16 7.667 16C8.217 16 9.173 15.937 9.777 15.333L12.445 12.665Z" transform="rotate(90 12 12)" stroke="#34A853" stroke-width="1.5"/>
        <path d="M12.445 12.665L15.333 9.777C15.937 9.173 16 8.217 16 7.667C16 5.667 14.333 4 12.333 4C11.556 4 10.778 4.222 10.111 4.667L4.667 10.111C4.222 10.778 4 11.556 4 12.333C4 14.333 5.667 16 7.667 16C8.217 16 9.173 15.937 9.777 15.333L12.445 12.665Z" transform="rotate(180 12 12)" stroke="#FBBC05" stroke-width="1.5"/>
        <path d="M12.445 12.665L15.333 9.777C15.937 9.173 16 8.217 16 7.667C16 5.667 14.333 4 12.333 4C11.556 4 10.778 4.222 10.111 4.667L4.667 10.111C4.222 10.778 4 11.556 4 12.333C4 14.333 5.667 16 7.667 16C8.217 16 9.173 15.937 9.777 15.333L12.445 12.665Z" transform="rotate(270 12 12)" stroke="#EA4335" stroke-width="1.5"/>
    </svg>
);


export function HeroSection() {
  return (
    <section id="home" className="w-full pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-primary via-accent to-primary-foreground">
              أشرقت: تسوّق اليوم، وادفع غداً
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground mb-8">
              تجربة تسوق فريدة بالتقسيط السهل والمريح. كل ما تحتاجه في متناول يدك مع خطط دفع مرنة تناسب ميزانيتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 text-lg rounded-full shadow-lg hover:shadow-primary/50 transition-shadow">
                <Apple className="ml-2 h-6 w-6" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="h-14 text-lg rounded-full bg-background/70 backdrop-blur-sm shadow-lg hover:shadow-accent/50 transition-shadow">
                <GooglePlayIcon className="ml-2 h-6 w-6" />
                Google Play
              </Button>
            </div>
            <a href="#features" className="group inline-flex items-center mt-8 text-primary font-semibold hover:text-accent transition-colors">
              اكتشف المزيد
              <ArrowLeft className="mr-2 h-5 w-5 transform transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
          <div className="relative flex items-center justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
