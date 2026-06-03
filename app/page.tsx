import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { EventCategories } from '@/components/event-categories'
import { WhyChooseUs } from '@/components/why-choose-us'
import { EventGallery } from '@/components/event-gallery'
import { Testimonials } from '@/components/testimonials'
import { HowItWorks } from '@/components/how-it-works'
import { PricingSection } from '@/components/pricing-section'
import { FAQSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <EventCategories />
      <WhyChooseUs />
      <EventGallery />
      <Testimonials />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
