import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "모던 웹 스타터킷",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </>
  )
}
