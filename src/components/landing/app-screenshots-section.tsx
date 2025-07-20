"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import { BrowserMockup } from "./browser-mockup";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";

const userAppScreenshots = [
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

const partnerPanelScreenshots = [
  {
    src: "https://placehold.co/1024x640.png",
    alt: "Partner Panel Screenshot 1",
    dataAiHint: "dashboard analytics charts"
  },
  {
    src: "https://placehold.co/1024x640.png",
    alt: "Partner Panel Screenshot 2",
    dataAiHint: "product management list"
  },
  {
    src: "https://placehold.co/1024x640.png",
    alt: "Partner Panel Screenshot 3",
    dataAiHint: "order management table"
  },
  {
    src: "https://placehold.co/1024x640.png",
    alt: "Partner Panel Screenshot 4",
    dataAiHint: "partner profile settings"
  },
];

const UserAppCarousel = () => (
    <div className="relative flex justify-center items-center mt-12">
        <Carousel
        opts={{
            align: "start",
            loop: true,
        }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
        <CarouselContent>
            {userAppScreenshots.map((screenshot, index) => (
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
);

const PartnerPanelCarousel = () => (
    <div className="relative flex justify-center items-center mt-12">
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-xl lg:max-w-3xl"
        >
            <CarouselContent>
                {partnerPanelScreenshots.map((screenshot, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <BrowserMockup {...screenshot} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -bottom-10 sm:-left-12 sm:top-1/2 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary" />
            <CarouselNext className="right-0 -bottom-10 sm:-right-12 sm:top-1/2 text-primary border-primary/50 hover:bg-primary/10 hover:text-primary" />
        </Carousel>
    </div>
);


export function AppScreenshotsSection() {
  const { language } = useLanguage();
  const t = content[language].screenshots;
  return (
    <section id="screenshots" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-400">
            {t.title}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>

        <Tabs defaultValue="user-app" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 h-12 p-1.5">
                <TabsTrigger value="user-app" className="text-lg h-full">{t.userAppTab}</TabsTrigger>
                <TabsTrigger value="partner-panel" className="text-lg h-full">{t.partnerPanelTab}</TabsTrigger>
            </TabsList>
            <TabsContent value="user-app">
                <UserAppCarousel />
            </TabsContent>
            <TabsContent value="partner-panel">
                <PartnerPanelCarousel />
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
