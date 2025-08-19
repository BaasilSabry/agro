"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/sri-lankan-pepper-plantation.png",
    title: "Pepper Plantation",
    description: "Lush pepper vines in the Central Highlands",
  },
  {
    src: "/sri-lanka-rice-fields.png",
    title: "Golden Paddy Fields",
    description: "Terraced rice fields during harvest season",
  },
  {
    src: "/sri-lanka-corn-plantation.png",
    title: "Corn Plantation",
    description: "Healthy corn crops in Uva Province",
  },
  {
    src: "/farmers-at-work-local-farmers-tending-to-their-cro.png",
    title: "Farmers at Work",
    description: "Local farmers tending to their crops",
  },
  {
    src: "/modern-equipment-advanced-farming-machinery-in-act.png",
    title: "Modern Equipment",
    description: "Advanced farming machinery in action",
  },
  {
    src: "/sustainable-practices--sustainable-practices-eco-f.png",
    title: "Sustainable Practices",
    description: "Eco-friendly farming techniques",
  },
  {
    src: "pepper-harvest--pepper-harvest-hand-picking-premiu.png",
    title: "Pepper Harvest",
    description: "Hand-picking premium peppercorns",
  },
  {
    src: "/rice-processing--rice-processing-traditional-rice-.png",
    title: "Rice Processing",
    description: "Traditional rice processing methods",
  },
  {
    src: "/corn-harvest--corn-harvest-fresh-corn-ready-for-ma.png",
    title: "Corn Harvest",
    description: "Fresh corn ready for market",
  },
]

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Close button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </Button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-200">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
