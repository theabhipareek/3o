import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ConquerSection } from "@/components/conquer-section"
import { FeaturesSection } from "@/components/features-section"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseSection } from "@/components/why-choose-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ConquerSection />
      <FeaturesSection />
      <WhatsAppSection />
      <TestimonialsSection />
      <WhyChooseSection />
    </>
  )
}

