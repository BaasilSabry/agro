import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata.gallery

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  )
}
