"use client";

import * as React from "react";
import { HeroVisual } from "./hero-visual";
import { useLanguage } from "@/context/language-context";
import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { AnimatedBackground } from "../animated-background";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section
      className="relative w-full pt-16 sm:pt-24 md:pt-52 pb-16 md:pb-36 bg-transparent overflow-hidden mx-auto max-w-7xl px-4 md:px-8"
      id="home"
    >
      <AnimatedBackground />
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-8 md:gap-20">
          
          {/* ✅ النصوص */}
          <motion.div
            className="text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4 leading-tight">
              {t.title}
            </h1>

            <p className="max-w-lg text-base sm:text-lg md:text-xl text-muted-foreground mb-6">
              {t.subtitle}
            </p>
          </motion.div>

          {/* ✅ صورة الهاتف */}
          <motion.div
            className="relative flex justify-center items-center order-2 lg:order-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              src="/illustration-hero.svg"
              alt="App Screenshot"
              width={250}
              height={300}
              className="w-[150px] sm:w-[200px] md:w-[280px] object-contain"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <HeroVisual />
            </div>
          </motion.div>

          {/* ✅ أزرار التحميل */}
          <div className="flex gap-4 justify-center lg:justify-start mt-6 flex-wrap">
            <a href="https://play.google.com/store" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 hover:scale-105 transition-transform"
              />
            </a>
            <a href="https://apps.apple.com" target="_blank">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
