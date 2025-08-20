"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, Award, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/sri-lankan-pepper-plantation.png",
    title: "Premium Pepper",
    description: "High-quality black pepper from the hills of Sri Lanka",
    features: ["Hand-picked at peak ripeness", "Organic certification"],
    origin: "Central Highlands, Sri Lanka",
    badge: "Premium Export",
    cta: "Explore Our Pepper",
    price: "$12.50/kg",
  },
  {
    image: "/sri-lanka-rice-fields.png",
    title: "Golden Paddy Fields",
    description: "Sustainable rice cultivation supporting local communities",
    features: ["Non-GMO varieties", "Superior cooking qualities"],
    origin: "Central Highlands, Sri Lanka",
    badge: "Best Seller",
    cta: "Discover Rice Products",
    price: "$8.75/kg",
  },
  {
    image: "/sri-lanka-corn-plantation.png",
    title: "Fresh Corn",
    description: "Nutritious corn grown with sustainable farming practices",
    features: ["Exceptional sweetness", "Rich in vitamins"],
    origin: "Central Highlands, Sri Lanka",
    badge: "Seasonal Special",
    cta: "View Corn Selection",
    price: "$5.99/kg",
  },
]

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const slideDuration = 5000 // Duration in milliseconds

  // Reset timer
  const resetAndStartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        nextSlide()
      }
    }, slideDuration)
  }

  useEffect(() => {
    resetAndStartTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const changeSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    resetAndStartTimer()
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    resetAndStartTimer()
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    resetAndStartTimer()
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section className="py-20 bg-evergreen-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-4">Our Premium Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the finest agricultural products from Sri Lanka, grown with care and sustainability
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">

          <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700",
                  index === currentSlide 
                    ? "opacity-100 translate-x-0 z-10" 
                    : index < currentSlide 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-evergreen-orange text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {slide.badge}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="flex items-center mb-3 text-evergreen-light">
                    <Award size={16} className="mr-2" />
                    <span className="text-sm font-medium">{slide.origin}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">{slide.title}</h3>
                  <p className="text-base md:text-lg text-gray-200 mb-4 max-w-xl">{slide.description}</p>
                  
                  <div className="flex flex-wrap items-center mb-6 gap-4">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Leaf size={14} className="mr-1.5 text-evergreen-light flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    <div className="bg-evergreen-orange/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {slide.price}
                    </div>
                  </div>
                  
                  <Button className="bg-evergreen-orange hover:bg-evergreen-orange/90 text-white rounded-full group flex items-center gap-2 transition-all hover:gap-3 px-6">
                    {slide.cta}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg rounded-full h-10 w-10"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft size={20} className="text-evergreen-dark" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg rounded-full h-10 w-10"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight size={20} className="text-evergreen-dark" />
          </Button>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots indicator */}
            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentSlide 
                      ? "bg-evergreen-orange w-5" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  onClick={() => changeSlide(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Autoplay control */}
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePause}
              className="text-evergreen-dark hover:text-evergreen-orange flex items-center gap-1.5 text-sm"
            >
              {isPaused ? (
                <>
                  <Play size={14} className="text-evergreen-orange" /> 
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause size={14} className="text-evergreen-orange" /> 
                  <span>Pause</span>
                </>
              )}
            </Button>
          </div>

          {/* Slide counter */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </section>
  )
}
