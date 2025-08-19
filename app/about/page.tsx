import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CompanyOverview } from "@/components/company-overview"
import { MissionVisionValues } from "@/components/mission-vision-values"
import { MilestonesTimeline } from "@/components/milestones-timeline"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CompanyOverview />
        <MissionVisionValues />
        <MilestonesTimeline />
        {/* <TeamSection /> */}
      </main>
      <Footer />
    </div>
  )
}
