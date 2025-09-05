import { Metadata } from "next"
import { SEO_CONSTANTS } from "./seo"

interface PageMetadataOptions {
  title: string
  description: string
  keywords?: string[]
  image?: string
  imageAlt?: string
  path?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = SEO_CONSTANTS.DEFAULT_IMAGE,
  imageAlt = "CROWNFIELD - Sustainable Agriculture",
  path = "",
  noIndex = false
}: PageMetadataOptions): Metadata {
  const fullUrl = `${SEO_CONSTANTS.SITE_URL}${path}`
  
  return {
    title,
    description,
    keywords: [...keywords, "sustainable agriculture", "Sri Lanka", "CROWNFIELD"],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} | ${SEO_CONSTANTS.SITE_NAME}`,
      description,
      url: fullUrl,
      siteName: SEO_CONSTANTS.SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SEO_CONSTANTS.SITE_NAME}`,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

// Predefined metadata for common pages
export const pageMetadata = {
  home: generatePageMetadata({
    title: "CROWNFIELD - Sustainable Agriculture | Sri Lanka",
    description: "Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support.",
    keywords: ["sustainable agriculture", "Sri Lanka agriculture", "organic farming", "quality produce export"],
    path: "/",
  }),
  
  about: generatePageMetadata({
    title: "About Us - Our Story & Mission",
    description: "Learn about CROWNFIELD's journey in sustainable agriculture, our mission to support farmers, and our commitment to quality produce export from Sri Lanka.",
    keywords: ["about CROWNFIELD", "company history", "sustainable agriculture mission", "farmer support"],
    image: "/farmers-at-work-local-farmers-tending-to-their-cro.webp",
    imageAlt: "CROWNFIELD farmers at work",
    path: "/about",
  }),
  
  products: generatePageMetadata({
    title: "Agricultural Products - Premium Rice, Corn & Pepper",
    description: "Discover CROWNFIELD's premium agricultural products including organic rice, fresh corn, quality pepper, and other sustainable produce from Sri Lanka for global export.",
    keywords: ["premium rice Sri Lanka", "organic corn export", "quality pepper", "agricultural products"],
    image: "/corn-harvest--corn-harvest-fresh-corn-ready-for-ma.webp",
    imageAlt: "CROWNFIELD agricultural products - premium rice, corn and pepper",
    path: "/products",
  }),
  
  services: generatePageMetadata({
    title: "Agricultural Services - Farming Solutions & Export Support",
    description: "CROWNFIELD offers comprehensive agricultural services including sustainable farming solutions, crop consultation, export assistance, and farmer training programs in Sri Lanka.",
    keywords: ["agricultural services", "farming solutions", "crop consultation", "export assistance"],
    image: "/modern-equipment-advanced-farming-machinery-in-act.webp",
    imageAlt: "CROWNFIELD agricultural services and modern farming equipment",
    path: "/services",
  }),
  
  gallery: generatePageMetadata({
    title: "Gallery - Our Agricultural Journey in Pictures",
    description: "Explore CROWNFIELD's gallery showcasing our sustainable farming practices, premium crops, modern equipment, and agricultural achievements in Sri Lanka.",
    keywords: ["agriculture gallery", "farming photos", "crop images", "sustainable farming pictures"],
    image: "/sri-lanka-rice-fields.webp",
    imageAlt: "CROWNFIELD agriculture gallery - farming in Sri Lanka",
    path: "/gallery",
  }),
  
  contact: generatePageMetadata({
    title: "Contact Us - Get in Touch with CROWNFIELD Agriculture",
    description: "Contact CROWNFIELD for agricultural partnerships, product inquiries, export opportunities, and farming solutions. Reach out to our team in Sri Lanka today.",
    keywords: ["contact CROWNFIELD", "agricultural partnerships", "product inquiries", "export opportunities"],
    path: "/contact",
  }),
}
