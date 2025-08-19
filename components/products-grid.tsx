import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Award, Leaf } from "lucide-react"

const products = [
  {
    name: "Premium Black Pepper",
    origin: "Central Highlands, Sri Lanka",
    image: "/sri-lankan-pepper-plantation.png",
    description:
      "Our premium black pepper is grown in the misty hills of Sri Lanka's Central Highlands, where the perfect climate and soil conditions create the world's most aromatic and flavorful peppercorns. Hand-picked at peak ripeness and sun-dried using traditional methods.",
    features: [
      "Hand-picked at peak ripeness",
      "Sun-dried using traditional methods",
      "Rich aroma and bold flavor",
      "Organic certification available",
    ],
    specifications: {
      "Moisture Content": "12% max",
      "Piperine Content": "5-7%",
      Packaging: "25kg, 50kg bags",
      "Shelf Life": "3 years",
    },
  },
  {
    name: "Golden Paddy Rice",
    origin: "Central Highlands, Sri Lanka",
    image: "/sri-lanka-rice-fields.png",
    description:
      "Our golden paddy rice is cultivated in Sri Lanka's Central Highlands using sustainable farming practices. This premium variety offers excellent nutritional value and superior cooking qualities, making it perfect for both local and international markets.",
    features: [
      "Sustainable cultivation methods",
      "High nutritional value",
      "Superior cooking qualities",
      "Non-GMO varieties",
    ],
    specifications: {
      "Moisture Content": "14% max",
      "Broken Grains": "5% max",
      Packaging: "25kg, 50kg bags",
      Varieties: "Samba, Nadu, Keeri Samba",
    },
  },
  {
    name: "Sweet Corn",
    origin: "Central Highlands, Sri Lanka",
    image: "/sri-lanka-corn-plantation.png",
    description:
      "Fresh, sweet corn grown in the fertile soils of Sri Lanka's Central Highlands. Our corn is known for its exceptional sweetness, tender kernels, and vibrant color. Harvested at optimal maturity to ensure maximum flavor and nutritional content.",
    features: [
      "Exceptional sweetness",
      "Tender, juicy kernels",
      "Vibrant golden color",
      "Rich in vitamins and minerals",
    ],
    specifications: {
      "Moisture Content": "15-20%",
      "Sugar Content": "12-15%",
      Packaging: "Fresh, frozen, or dried",
      Season: "Year-round availability",
    },
  },
]

export function ProductsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-1 border-gray-200 shadow-md rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-0"
            >
              <div className={`grid grid-cols-1 h-full min-h-full  lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}> 
                {/* Image */}
                <div className={`relative h-full min-h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <CardContent
                  className={`p-8 lg:p-12 flex flex-col justify-center h-full min-h-full ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="flex items-center text-evergreen-orange mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm font-medium">{product.origin}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-evergreen-dark mb-4">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-evergreen-dark mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-evergreen-orange" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Leaf size={14} className="mr-2 text-evergreen-light flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-evergreen-dark mb-3">Specifications</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-500 font-medium">{key}</span>
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-evergreen-orange hover:bg-evergreen-orange-light text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-fit">
                    Request a Quote
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
