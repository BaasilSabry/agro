import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFDF9]">
      <Navigation />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="self-start">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </div>
  )
}
