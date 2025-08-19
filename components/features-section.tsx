import { Card, CardContent } from "@/components/ui/card"
import { Truck, Wrench, Users } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Export & Import Services",
    description:
      "Connecting Sri Lankan farmers to global markets with efficient export services and importing quality agricultural equipment.",
  },
  {
    icon: Wrench,
    title: "Agricultural Equipment",
    description:
      "Providing modern farming tools and equipment to enhance productivity and support sustainable farming practices.",
  },
  {
    icon: Users,
    title: "Farmer Support",
    description:
      "Empowering local farmers with training, resources, and direct market access to improve their livelihoods.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive agricultural solutions that support sustainability and drive growth across Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-evergreen-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-evergreen-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
