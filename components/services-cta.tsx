import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 bg-evergreen-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r border border-gray-200 from-evergreen-dark to-evergreen-medium rounded-3xl p-12 text-center text-white shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-6">Ready to Transform Your Agricultural Business?</h2>
          <p className="text-xl mb-8 max-w-2xl text-gray-600 mx-auto ">
            Partner with EverGreen to access sustainable farming solutions, modern equipment, and global market
            opportunities that drive growth and support environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-evergreen-orange  hover:bg-evergreen-orange-light text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/products">
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-white hover:text-evergreen-dark font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Get Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
