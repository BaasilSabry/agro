// SEO utility functions and structured data generators

export interface SEOProduct {
  name: string
  description: string
  image: string
  category: string
  brand: string
  offers?: {
    price: string
    priceCurrency: string
    availability: string
  }
}

export interface SEOService {
  name: string
  description: string
  provider: string
  serviceType: string
  areaServed: string
}

export function generateProductStructuredData(product: SEOProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    ...(product.offers && {
      "offers": {
        "@type": "Offer",
        "price": product.offers.price,
        "priceCurrency": product.offers.priceCurrency,
        "availability": product.offers.availability
      }
    })
  }
}

export function generateServiceStructuredData(service: SEOService) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider
    },
    "serviceType": service.serviceType,
    "areaServed": {
      "@type": "Place",
      "name": service.areaServed
    }
  }
}

export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// Common SEO constants
export const SEO_CONSTANTS = {
  SITE_NAME: "CROWNFIELD Agriculture",
  SITE_URL: "https://www.crown-field.com",
  DEFAULT_IMAGE: "/growing-sustainability--exporting-quality--leading.webp",
  COMPANY_DESCRIPTION: "Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support.",
  CONTACT_EMAIL: "info@crown-field.com",
  PHONE: "+94-XXX-XXXXXXX", // Replace with actual phone
  ADDRESS: {
    country: "Sri Lanka",
    locality: "Colombo", // Replace with actual city
    region: "Western Province", // Replace with actual region
  }
}

// Generate OpenGraph images with proper dimensions
export function generateOGImage(path: string, alt: string) {
  return {
    url: path,
    width: 1200,
    height: 630,
    alt: alt,
  }
}
