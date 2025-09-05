// Optional: Sitemap index for future expansion
import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.crown-field.com'
  
  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}

// Uncomment and rename this file to sitemap-index.ts if you need multiple sitemaps
