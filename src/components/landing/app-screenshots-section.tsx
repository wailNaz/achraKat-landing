"use client";

import * as React from "react";
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
import { motion } from 'framer-motion';

const userAppScreenshots = [
	{
		src: "/illustration-app-screenshot.svg",
		alt: "App Screenshot Illustration",
		dataAiHint: "app homescreen ecommerce illustration"
	},
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
							<div className="relative mx-auto w-[250px] h-[500px] sm:w-[300px] sm:h-[600px] bg-background border border-border rounded-xl flex items-center justify-center">
								<Image
									src={screenshot.src}
									alt={screenshot.alt}
									width={400}
									height={866}
									className="object-cover w-full h-full rounded-xl"
									data-ai-hint={screenshot.dataAiHint}
								/>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-0 sm:-left-12 text-primary border-primary hover:bg-primary/10 hover:text-primary rounded-xl" />
			<CarouselNext className="right-0 sm:-right-12 text-primary border-primary hover:bg-primary/10 hover:text-primary rounded-xl" />
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
							<div className="bg-background border border-border rounded-xl flex items-center justify-center">
								<BrowserMockup {...screenshot} />
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-0 -bottom-10 sm:-left-12 sm:top-1/2 text-primary border-primary hover:bg-primary/10 hover:text-primary rounded-xl" />
			<CarouselNext className="right-0 -bottom-10 sm:-right-12 sm:top-1/2 text-primary border-primary hover:bg-primary/10 hover:text-primary rounded-xl" />
		</Carousel>
	</div>
);

export function AppScreenshotsSection() {
	const { language } = useLanguage();
	const t = content[language].screenshots;
	return (
		<motion.section
			id="app-screenshots"
			className="w-full py-20 md:py-32 bg-transparent rounded-3xl shadow-lg md:shadow-xl md:rounded-[2.5rem] mx-auto max-w-7xl px-4 md:px-8"
			initial={{ opacity: 0, y: 48, scale: 0.98 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<div className="container mx-auto px-0 md:px-0">
				<div className="text-center mb-16">
					<div className="relative w-full flex flex-col items-center">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight drop-shadow-md heading-underline animate-underline-inview mb-4 sm:mb-5 md:mb-7">
							{t.title}
						</h2>
						<div className="h-4 sm:h-5 md:h-6" /> {/* Extra space below heading for underline separation */}
						<div className="brand-blob brand-blob-blue" style={{top: '-3vw', left: '-5vw', width: '10vw', height: '10vw'}} />
						<div className="brand-blob brand-blob-yellow" style={{top: '8vw', right: '-7vw', width: '8vw', height: '8vw'}} />
						<div className="brand-blob brand-blob-red" style={{bottom: '-6vw', left: '20vw', width: '7vw', height: '7vw'}} />
					</div>
					<p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-2xl">
						{t.subtitle}
					</p>
				</div>
				<Tabs defaultValue="user-app" className="w-full max-w-4xl mx-auto">
					<TabsList className="grid w-full grid-cols-2 h-12 p-1.5 bg-background/80 border border-border rounded-xl mb-8 backdrop-blur-sm">
						<TabsTrigger value="user-app" className="text-lg h-full rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:font-bold transition-colors">
							{t.userAppTab}
						</TabsTrigger>
						<TabsTrigger value="partner-panel" className="text-lg h-full rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:font-bold transition-colors">
							{t.partnerPanelTab}
						</TabsTrigger>
					</TabsList>
					<TabsContent value="user-app">
						<UserAppCarousel />
					</TabsContent>
					<TabsContent value="partner-panel">
						<PartnerPanelCarousel />
					</TabsContent>
				</Tabs>
			</div>
		</motion.section>
	);
}
