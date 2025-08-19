import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Ishantha Wijewickrama",
    position: "Founder",
    image: "/sri-lankan-businessman.png",
    description:
      "Visionary leader with extensive experience in sustainable agriculture and international trade operations.",
  },
  {
    name: "Sachin Wijewickrama",
    position: "Director",
    image: "/sri-lankan-businesswoman.png",
    description:
      "Strategic director focused on business development and operational excellence in agricultural exports.",
  },
  {
    name: "Priyangi Wijewickrama",
    position: "Managing Director",
    image: "/sri-lankan-business-woman.png",
    description: "Operations expert managing day-to-day business activities and farmer relationship development.",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-evergreen-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-evergreen-dark mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate professionals dedicated to advancing sustainable agriculture in Sri Lanka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl bg-white overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-evergreen-dark mb-2">{member.name}</h3>
                <p className="text-evergreen-orange font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
