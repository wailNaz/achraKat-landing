import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const screenshots = [
  {
    src: "https://placehold.co/400x866.png",
    alt: "App Screenshot 1",
    dataAiHint: "app homescreen ecommerce"
  },
  {
    src: "https://placehold.co/400x866.png",
    alt: "App Screenshot 2",
    dataAiHint: "app product page"
  },
  {
    src: "https://placehold.co/400x866.png",
    alt: "App Screenshot 3",
    dataAiHint: "app payment plan"
  },
  {
    src: "https://placehold.co/400x866.png",
    alt: "App Screenshot 4",
    dataAiHint: "app profile page"
  },
];

export function AppScreenshotsSection() {
  return (
    <section id="screenshots" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            جولة في تطبيقنا
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
            اكتشف سهولة الاستخدام والتصميم الأنيق الذي يجمع كل ما تحتاجه في مكان واحد.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
            <CarouselContent>
                {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                        <div className="relative mx-auto w-[250px] h-[500px] sm:w-[300px] sm:h-[600px]">
                            <div className="relative z-10 h-full w-full rounded-[30px] sm:rounded-[40px] border-4 sm:border-8 border-gray-800 bg-gray-800 overflow-hidden shadow-2xl dark:border-gray-600">
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    width={400}
                                    height={866}
                                    className="object-cover w-full h-full"
                                    data-ai-hint={screenshot.dataAiHint}
                                />
                            </div>
                            <div className="absolute -left-1 top-16 h-12 w-1 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
                            <div className="absolute -left-1 top-32 h-12 w-1 rounded-l-lg bg-gray-700 dark:bg-gray-500"></div>
                            <div className="absolute -right-1 top-24 h-20 w-1 rounded-r-lg bg-gray-700 dark:bg-gray-500"></div>
                        </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary" />
            <CarouselNext className="right-0 sm:-right-12 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary" />
            </Carousel>
        </div>
      </div>
    </section>
  );
}
