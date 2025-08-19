import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(47, 93, 52, 0.4), rgba(47, 93, 52, 0.4)), url('/sri-lankan-farmland-sunrise.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Growing Sustainability.
          <br />
          <span className="text-evergreen-orange">Exporting Quality.</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in">
          Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link href="/contact">
            <Button className="bg-evergreen-orange hover:bg-evergreen-orange-light text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Contact Us for Orders
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-evergreen-dark font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
