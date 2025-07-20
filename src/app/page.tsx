import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ExplanationSection } from '@/components/landing/explanation-section';
import { PartnerRegistrationSection } from '@/components/landing/partner-registration-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExplanationSection />
        <PartnerRegistrationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
