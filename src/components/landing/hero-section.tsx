import { Button } from '@/components/ui/button';
import { ArrowLeft, Apple } from 'lucide-react';
import { HeroVisual } from './hero-visual';

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.668 11.696l-2.83-2.83-3.237-3.237c-.36-.36-1.02-.36-1.38 0L9.43 9.42l5.448 5.448 4.41-4.41c.36-.36.72-.84.38-1.162zM9.43 9.42L3.58 15.27c-1.32 1.32-1.32 3.465 0 4.785 1.32 1.32 3.465 1.32 4.785 0l5.85-5.85-5.785-5.785zm1.185 10.035l4.38-4.38-5.445-5.445L5.16 14.02c-.36.36-.84.72-1.162.38-1.104-1.104-.38-2.67.9-3.945l7.155-7.155c.36-.36.36-1.02 0-1.38L8.82.73c-1.545-1.545-4.11-1.2-5.655.345-1.635 1.635-1.89 4.29-.54 5.64l3.105 3.105-6.09 6.09c-1.32 1.32-1.32 3.465 0 4.785 1.32 1.32 3.465 1.32 4.785 0l3.705-3.705z" />
    </svg>
);


export function HeroSection() {
  return (
    <section id="home" className="w-full pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-primary via-blue-400 to-accent">
              أشرقت: تسوّق اليوم، وادفع غداً
            </h1>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground mb-8">
              تجربة تسوق فريدة بالتقسيط السهل والمريح. كل ما تحتاجه في متناول يدك مع خطط دفع مرنة تناسب ميزانيتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 text-lg rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <Apple className="ml-2 h-6 w-6" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="h-14 text-lg rounded-full bg-background/70 backdrop-blur-sm shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:-translate-y-1">
                <GooglePlayIcon className="ml-2 h-6 w-6 text-[#4285F4]" />
                Google Play
              </Button>
            </div>
            <a href="#features" className="group inline-flex items-center mt-8 text-primary font-semibold hover:text-accent transition-colors">
              اكتشف المزيد
              <ArrowLeft className="mr-2 h-5 w-5 transform transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
             <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
