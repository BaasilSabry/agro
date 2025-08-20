import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Settings, Leaf, ArrowRight, Globe, Package, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Produce Export/Import",
    shortDescription: "Global market access for Sri Lankan agricultural products",
    fullDescription:
      "We facilitate seamless export and import operations, connecting Sri Lankan farmers to international markets while ensuring quality standards and fair pricing. Our comprehensive logistics network ensures your products reach global customers efficiently.",
    features: ["International market access", "Quality certification", "Logistics management", "Fair trade practices"],
    additionalIcon: Globe,
  },
  {
    icon: Settings,
    title: "Equipment Distribution",
    shortDescription: "Modern farming tools and machinery for enhanced productivity",
    fullDescription:
      "Access to cutting-edge agricultural equipment and machinery that enhances farming efficiency while supporting sustainable practices. We provide training, maintenance, and ongoing support for all equipment.",
    features: ["Modern farming equipment", "Training and support", "Maintenance services", "Financing options"],
    additionalIcon: Package,
  },
  {
    icon: Leaf,
    title: "Sustainable Farming Support",
    shortDescription: "Expert guidance for eco-friendly agricultural practices",
    fullDescription:
      "Comprehensive support for farmers transitioning to sustainable practices, including training, resource provision, and ongoing consultation to ensure both environmental responsibility and economic viability.",
    features: ["Sustainable practices training", "Resource provision", "Expert consultation", "Community building"],
    additionalIcon: Users,
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions that address every aspect of modern sustainable agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 rounded-2xl overflow-hidden bg-white flex flex-col"
            >
              <CardContent className="p-0 flex flex-col flex-1 flex-grow">
                {/* Header with gradient background */}
                <div className="bg-gradient-to-br from-evergreen-medium to-evergreen-dark p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={32} className="text-evergreen-orange" />
                    </div>
                    <h3 className="text-2xl font-bold text-evergreen-dark mb-2">{service.title}</h3>
                    <p className="text-black/90">{service.shortDescription}</p>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <service.additionalIcon size={80} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 flex-grow">
                  <div className="mb-auto">
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-none">{service.fullDescription}</p>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-evergreen-orange rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-evergreen-orange hover:bg-evergreen-orange-light text-white font-semibold py-3 rounded-full transition-all duration-300 group-hover:shadow-lg">
                        Learn More
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
