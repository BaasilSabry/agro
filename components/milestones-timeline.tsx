import { CheckCircle } from "lucide-react"

const milestones = [
  {
    year: "2025",
    title: "Launched Equipment Import Operations",
    description:
      "Established partnerships with international suppliers to bring modern farming equipment to Sri Lankan farmers.",
  },
  {
    year: "2025",
    title: "Partnered with Local Farming Unions",
    description:
      "Built strong relationships with farming communities across Sri Lanka to ensure direct farmer support and fair pricing.",
  },
  {
    year: "2025",
    title: "Built Brand & Online Presence",
    description:
      "Developed our digital platform and brand identity to connect with customers and showcase our sustainable practices.",
  },
  {
    year: "2025",
    title: "Investing in Sustainable Technology",
    description:
      "Committed to research and development of eco-friendly farming solutions and sustainable agriculture technologies.",
  },
]

export function MilestonesTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key milestones that have shaped EverGreen into the sustainable agriculture leader we are today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-evergreen-light"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-evergreen-orange rounded-full flex items-center justify-center z-10">
                  <CheckCircle size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="ml-8 bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-sm font-semibold text-evergreen-orange mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-evergreen-dark mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
