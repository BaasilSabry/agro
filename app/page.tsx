"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ImageSlider } from "@/components/image-slider"
import { PageLoader } from "@/components/loading-spinner"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load time and ensure all components are ready
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Adjust this delay as needed

    // Also hide loader when page is fully loaded
    const handleLoad = () => {
      setIsLoading(false)
    }

    if (document.readyState === 'complete') {
      setIsLoading(false)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ImageSlider />
      </main>
      <Footer />
    </div>
  )
}
