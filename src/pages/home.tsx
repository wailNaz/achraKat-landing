import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { Partners } from "@/components/sections/partners";
import { FAQ } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
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
  );
}
