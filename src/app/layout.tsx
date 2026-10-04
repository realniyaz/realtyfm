import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import RealtyChatbot from "@/components/chat/RealtyChatbot";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0d0e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://realtyfm.com"),
  title: {
    default: "Realty FM — Most Trusted Real Estate Advisory Partner",
    template: "%s | Realty FM",
  },
  description:
    "Realty FM is your premier real estate and finance advisory partner, delivering curated luxury residences, prime commercial properties, and strategic portfolio solutions.",
  keywords: [
    "Realty FM",
    "Real Estate Advisory",
    "Luxury Properties Delhi NCR",
    "Commercial Real Estate",
    "Gaur Chrysalis",
    "Gaur Alaris",
    "Ace Parkway",
    "Ace Arte",
    "Property Investment Advisor",
  ],
  authors: [{ name: "Realty FM", url: "https://realtyfm.com" }],
  creator: "Realty FM",
  publisher: "Realty FM",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://realtyfm.com",
  },
  openGraph: {
    title: "Realty FM — Most Trusted Real Estate Advisory Partner",
    description:
      "Expert real estate advisory and strategic wealth management for luxury living and high-yield properties.",
    url: "https://realtyfm.com",
    siteName: "Realty FM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Realty FM — Your Finance Manager & Real Estate Advisory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realty FM — Most Trusted Real Estate Advisory Partner",
    description:
      "Strategic luxury real estate consulting and advisory services across premier residential and commercial destinations.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Schema for Real Estate / Financial Advisory Agency
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Realty FM",
    alternateName: "Realty FM - Your Finance Manager",
    url: "https://realtyfm.com",
    logo: "https://realtyfm.com/logo.jpeg",
    description:
      "Most trusted real estate advisory partner providing end-to-end luxury residence acquisition, investment management, and consultation.",
    priceRange: "₹₹₹₹",
    areaServed: ["Delhi NCR", "Noida", "Greater Noida", "Yamuna Expressway", "Gurugram"],
    knowsAbout: [
      "Luxury Real Estate",
      "High-Yield Commercial Assets",
      "Property Wealth Advisory",
      "Real Estate Finance",
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0c0d0e] text-[#f8f9fa] antialiased selection:bg-[#b89246]/20 selection:text-[#d4ab47]">
        <Navbar/>
        {children}
        <Footer/>
        <RealtyChatbot/>
      </body>
    </html>
  );
}