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
    const preloadHeroImage = () => {
      const img = new Image()
      img.src = '/growing-sustainability--exporting-quality--leading.webp'
      
      img.onload = () => {
        // Image is loaded, hide spinner
        setIsLoading(false)
      }
      
      img.onerror = () => {
        // If image fails to load, still hide spinner after a short delay
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }

    // Start preloading the hero image
    preloadHeroImage()

    // Fallback: hide loader after maximum 3 seconds regardless
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Also check if page is already loaded
    if (document.readyState === 'complete') {
      preloadHeroImage()
    }

    return () => {
      clearTimeout(fallbackTimer)
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
