import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver quality agricultural products while supporting sustainability and empowering farmers across Sri Lanka through innovative solutions and fair trade practices.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading name in green agriculture, connecting the world to natural, responsibly grown produce while fostering sustainable farming communities.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Sustainability, Integrity, Innovation, Community Support, and Quality guide every decision we make and every relationship we build.",
  },
]

export function MissionVisionValues() {
  return (
    <section className="py-20 bg-evergreen-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-4">What Drives Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core principles shape our approach to sustainable agriculture and community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-evergreen-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-evergreen-dark mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
