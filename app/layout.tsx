import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "CROWNFIELD - Sustainable Agriculture | Sri Lanka",
    template: "%s | CROWNFIELD - Sustainable Agriculture"
  },
  description:
    "Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support. Premium rice, corn, pepper, and sustainable farming solutions.",
  keywords: [
    "sustainable agriculture",
    "Sri Lanka agriculture",
    "organic farming",
    "rice export",
    "corn cultivation",
    "pepper farming",
    "sustainable farming",
    "agricultural products",
    "farmer support",
    "quality produce export",
    "CROWNFIELD",
    "eco-friendly farming",
    "agricultural innovation"
  ],
  authors: [{ name: "CROWNFIELD Agriculture" }],
  creator: "CROWNFIELD Agriculture",
  publisher: "CROWNFIELD Agriculture",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.crown-field.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CROWNFIELD - Sustainable Agriculture | Sri Lanka",
    description: "Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support.",
    url: "https://www.crown-field.com",
    siteName: "CROWNFIELD Agriculture",
    images: [
      {
        url: "/growing-sustainability--exporting-quality--leading.webp",
        width: 1200,
        height: 630,
        alt: "CROWNFIELD - Sustainable Agriculture in Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CROWNFIELD - Sustainable Agriculture | Sri Lanka",
    description: "Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support.",
    images: ["/growing-sustainability--exporting-quality--leading.webp"],
    creator: "@crownfield", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification IDs when available
    // google: "google-verification-code",
    // bing: "bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#22c55e" />
        
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CROWNFIELD Agriculture",
              "alternateName": "CROWNFIELD",
              "url": "https://www.crown-field.com",
              "logo": "https://www.crown-field.com/CORWNFILEDARGO.png",
              "description": "Growing Sustainability. Exporting Quality. Leading sustainable agriculture in Sri Lanka with quality produce export and farmer support.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressLocality": "Sri Lanka"
              },
              "sameAs": [
                // Add your social media URLs here
                // "https://www.facebook.com/crownfield",
                // "https://www.instagram.com/crownfield",
                // "https://www.linkedin.com/company/crownfield"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "founder": {
                "@type": "Person",
                "name": "CROWNFIELD Founder"
              },
              "foundingDate": "2020",
              "industry": "Agriculture",
              "numberOfEmployees": "50-100",
              "knowsAbout": [
                "Sustainable Agriculture",
                "Organic Farming",
                "Rice Cultivation",
                "Corn Production",
                "Pepper Farming",
                "Agricultural Export"
              ]
            })
          }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CROWNFIELD Agriculture",
              "image": "https://www.crown-field.com/CORWNFILEDARGO.png",
              "description": "Leading sustainable agriculture company in Sri Lanka specializing in quality produce export and farmer support.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressLocality": "Sri Lanka"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "7.8731",
                "longitude": "80.7718"
              },
              "url": "https://www.crown-field.com",
              "telephone": "+94-XXX-XXXXXXX",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
