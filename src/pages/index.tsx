import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AchraKat – Modern Platform for Smart Shopping</title>
        <meta
          name="description"
          content="AchraKat is a modern, elegant platform for easy and smart shopping. Discover features, partners, testimonials, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:title"
          content="AchraKat – Modern Platform for Smart Shopping"
        />
        <meta
          property="og:description"
          content="AchraKat is a modern, elegant platform for easy and smart shopping."
        />
        <meta property="og:image" content="/og-image.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/" />
        <meta
          property="twitter:title"
          content="AchraKat – Modern Platform for Smart Shopping"
        />
        <meta
          property="twitter:description"
          content="AchraKat is a modern, elegant platform for easy and smart shopping."
        />
        <meta property="twitter:image" content="/og-image.png" />
      </Head>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Features />
        <Gallery />
        <Partners />
        <FAQ />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
