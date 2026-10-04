export interface Project {
  id: string;
  slug: string;
  title: string;
  developer: string;
  location: string;
  tagline: string;
  description: string;
  sizeRange: string;
  configurations: string[];
  features: string[];
  priceRange?: string;
  status: "Pre-Launch" | "Under Construction" | "Ready to Move" | "Delivered";
  type: "Luxury Residential" | "Premium Apartments" | "Plotted Development" | "Resort Living";
  image?: string;
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  // --- Text Listed Projects ---
  {
    id: "gaur-chrysalis",
    slug: "gaur-chrysalis",
    title: "Gaur Chrysalis",
    developer: "Gaurs Group",
    location: "Greater Noida West",
    tagline: "Ultra-luxury modern urban living crafted to perfection",
    description:
      "Gaur Chrysalis represents signature upscale residences equipped with world-class amenities, expansive landscapes, and pristine architectural craftsmanship.",
    sizeRange: "1,450 - 2,800 sq. ft.",
    configurations: ["3 BHK", "4 BHK", "Penthouse"],
    features: ["Infinity Pool", "Clubhouse", "Balcony Deck", "Smart Automation"],
    priceRange: "₹1.85 Cr - ₹3.50 Cr",
    status: "Pre-Launch",
    type: "Luxury Residential",
    image: "/2banner.jpg",
    featured: true,
  },
  {
    id: "gaur-alaris",
    slug: "gaur-alaris",
    title: "Gaur Alaris",
    developer: "Gaurs Group",
    location: "Yamuna Expressway, Sector 22D",
    tagline: "Elevated high-rise living along the booming growth corridor",
    description:
      "Positioned along the prime Yamuna Expressway corridor, Gaur Alaris offers an avant-garde lifestyle with close proximity to the upcoming International Airport.",
    sizeRange: "1,200 - 2,400 sq. ft.",
    configurations: ["2 BHK", "3 BHK", "Balcony"],
    features: ["Expressway Frontage", "Clubhouse", "Sky Lounge", "24/7 Concierge"],
    priceRange: "₹1.15 Cr - ₹2.40 Cr",
    status: "Under Construction",
    type: "Premium Apartments",
    image: "/banner_1.png",
    featured: true,
  },
  {
    id: "ace-parkway",
    slug: "ace-parkway",
    title: "Ace Parkway",
    developer: "ACE Group",
    location: "Sector 150, Noida",
    tagline: "Art-Deco inspired luxury amidst green sports sanctuary",
    description:
      "Ace Parkway blends classic Art-Deco elegance with modern luxury in Noida's greenest enclave, offering pristine sports facilities and manicured gardens.",
    sizeRange: "1,085 - 3,220 sq. ft.",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    features: ["51 Sports Amenities", "Art Deco Facade", "Balcony", "Temperature Pool"],
    priceRange: "₹1.60 Cr - ₹4.20 Cr",
    status: "Ready to Move",
    type: "Luxury Residential",
    image: "/ace-terra-banner.webp",
    featured: true,
  },
  {
    id: "ace-arte",
    slug: "ace-arte",
    title: "Ace Arte",
    developer: "ACE Group",
    location: "Yamuna Expressway",
    tagline: "Artisanal architectural grandeur along prime avenues",
    description:
      "Ace Arte is designed for connoisseurs of architectural brilliance, pairing artistic aesthetic design with high-end luxury specifications.",
    sizeRange: "1,350 - 2,650 sq. ft.",
    configurations: ["3 BHK", "4 BHK", "Balcony"],
    features: ["Designer Club", "Private Balconies", "Zen Gardens", "High Ceilings"],
    priceRange: "₹1.40 Cr - ₹2.95 Cr",
    status: "Under Construction",
    type: "Luxury Residential",
    image: "/banner3.png",
  },
  {
    id: "northwind-sanctuary",
    slug: "northwind-sanctuary",
    title: "Northwind Sanctuary",
    developer: "Northwind Group",
    location: "Greater Noida",
    tagline: "Holistic wellness residences nestled in peaceful nature",
    description:
      "A boutique wellness sanctuary integrating biophilic designs, clean air tech, and bespoke rejuvenation amenities for peaceful living.",
    sizeRange: "1,500 - 3,100 sq. ft.",
    configurations: ["3 BHK", "4 BHK", "Villas"],
    features: ["Wellness Spa", "Aroma Gardens", "Meditation Pavilions", "Balcony Deck"],
    priceRange: "₹1.90 Cr - ₹4.50 Cr",
    status: "Pre-Launch",
    type: "Luxury Residential",
    image: "/banner1.png",
  },
  {
    id: "hero-homes",
    slug: "hero-homes",
    title: "Hero Homes",
    developer: "Hero Realty",
    location: "Sector 104, Gurugram",
    tagline: "Eco-centric living backed by iconic legacy trust",
    description:
      "Hero Homes combines wellness, technology, and environmental responsibility, crafting vibrant communities with pristine open green parks.",
    sizeRange: "1,099 - 1,689 sq. ft.",
    configurations: ["2 BHK", "3 BHK", "Balcony"],
    features: ["Oxygen Points", "Smart Key Entry", "Solar Lighting", "Clubhouse"],
    priceRange: "₹1.35 Cr - ₹2.10 Cr",
    status: "Ready to Move",
    type: "Premium Apartments",
    image: "/banner1 (2).png",
  },
  {
    id: "eldeco-7peaks",
    slug: "eldeco-7peaks",
    title: "Eldeco 7Peaks",
    developer: "Eldeco Group",
    location: "Greater Noida",
    tagline: "Panoramic scenic living across high-rise landmark towers",
    description:
      "Eldeco 7Peaks stands as an engineering marvel with multi-tower architecture offering unhindered skyline vistas and resort-tier recreational lounges.",
    sizeRange: "1,250 - 2,750 sq. ft.",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    features: ["Sky Deck", "Olympic Length Pool", "Double Height Lobby", "Balcony"],
    priceRange: "₹1.25 Cr - ₹3.10 Cr",
    status: "Under Construction",
    type: "Premium Apartments",
    image: "/eldeco_7_peaks.webp",
  },

  // --- Screenshot 1 Projects ---
  {
    id: "vvip-addresses",
    slug: "vvip-addresses",
    title: "VVIP Addresses",
    developer: "VVIP Spaces",
    location: "Rajnagar Extension, Ghaziabad",
    tagline: "VVIP Spaces is a reputable real estate brand",
    description:
      "VVIP Spaces is a reputable real estate brand known for timely delivery, modern clubhouse amenities, and spacious family-centric homes.",
    sizeRange: "1,200 - 2,500 sq. ft.",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    features: ["Balcony", "Clubhouse", "Sports Courts", "24/7 Security"],
    priceRange: "₹95 L - ₹1.85 Cr",
    status: "Ready to Move",
    type: "Premium Apartments",
    image: "/pg18.webp",
  },
  {
    id: "nimbus-the-palm-village",
    slug: "nimbus-the-palm-village",
    title: "Nimbus The Palm Village",
    developer: "Nimbus Group",
    location: "Yamuna Expressway, Greater Noida",
    tagline: "Explore Nimbus The Palm Village situated in prime hub",
    description:
      "Explore Nimbus The Palm Village situated along key arterial links, offering a blend of natural greenery, wide balconies, and smart infrastructure.",
    sizeRange: "1,050 - 2,200 sq. ft.",
    configurations: ["2 BHK", "3 BHK"],
    features: ["Balcony", "Palm Landscaping", "Clubhouse", "Jogging Track"],
    priceRange: "₹85 L - ₹1.70 Cr",
    status: "Under Construction",
    type: "Premium Apartments",
    image: "/pg15.webp",
  },
  {
    id: "purvanchal-yamuna",
    slug: "purvanchal-yamuna",
    title: "Purvanchal Yamuna",
    developer: "Purvanchal Projects",
    location: "Yamuna Expressway",
    tagline: "Purvanchal Yamuna Expressway is a benchmark of quality",
    description:
      "Purvanchal Yamuna Expressway is a premier residential destination offering high-grade construction quality, panoramic balconies, and swift transit access.",
    sizeRange: "1,100 - 2,400 sq. ft.",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    features: ["Balcony", "Gated Security", "Landscaped Central Park", "Gymnasium"],
    priceRange: "₹98 L - ₹2.10 Cr",
    status: "Under Construction",
    type: "Premium Apartments",
    image: "/pg8.webp",
  },

  // --- Screenshot 2 Projects ---
  {
    id: "nirala-trio",
    slug: "nirala-trio",
    title: "Nirala Trio",
    developer: "Nirala World",
    location: "Sector 2, Greater Noida West",
    tagline: "Explore Nirala Trio in Sector 2, an exciting address",
    description:
      "Explore Nirala Trio in Sector 2, an exciting new development combining contemporary architecture with serene balconies and elevated lifestyle hubs.",
    sizeRange: "1,100 - 1,700 sq. ft.",
    configurations: ["2 BHK", "3 BHK"],
    features: ["Balcony", "Swimming Pool", "Green Park", "Multi-tier Security"],
    priceRange: "₹80 L - ₹1.45 Cr",
    status: "Under Construction",
    type: "Premium Apartments",
    image: "/pg1.webp",
  },
  {
    id: "ace-hanei",
    slug: "ace-hanei",
    title: "ACE HAN'EI",
    developer: "ACE Group",
    location: "Sector 12, Greater Noida West",
    tagline: "The essence of 'Han'ei', a Japanese word for prosperity",
    description:
      "The essence of 'Han'ei', a Japanese word embodying prosperity and blooming life. A sanctuary with Japanese-themed Zen landscapes and elite club suites.",
    sizeRange: "1,100 - 1,800 sq. ft.",
    configurations: ["3 BHK", "4 BHK"],
    features: ["Balcony", "Zen Garden", "Japanese Themed Club", "Eco Features"],
    priceRange: "₹1.45 Cr - ₹2.60 Cr",
    status: "Pre-Launch",
    type: "Luxury Residential",
    image: "/ace-terra-banner.webp",
    featured: true,
  },
  {
    id: "ats-homekraft-plots-yamuna",
    slug: "ats-homekraft-plots-yamuna",
    title: "ATS Homekraft Plots, Yamuna",
    developer: "ATS Homekraft",
    location: "Yamuna Expressway",
    tagline: "When considering the purchase of a master-planned plot",
    description:
      "When considering the purchase of a signature plotted property, ATS Homekraft Plots on Yamuna Expressway delivers unmatched security and layout flexibility.",
    sizeRange: "900 - 2,700 sq. ft.",
    configurations: ["Residential Plots", "Custom Villa Plots"],
    features: ["Balcony / Veranda Design Option", "Gated Township", "Underground Cabling", "Wide Avenues"],
    priceRange: "₹75 L - ₹2.25 Cr",
    status: "Under Construction",
    type: "Plotted Development",
    image: "/gallery-1.webp",
  },

  // --- Screenshot 3 Projects ---
  {
    id: "godrej-palm-retreat",
    slug: "godrej-palm-retreat",
    title: "Godrej Palm Retreat",
    developer: "Godrej Properties",
    location: "Sector 150, Noida",
    tagline: "Godrej Palm Retreat is a premium resort-style sanctuary",
    description:
      "Godrej Palm Retreat is a premium resort-style residence offering low-rise, low-density living centered around a tropical lifestyle and palm gardens.",
    sizeRange: "600 - 2,500 sq. ft.",
    configurations: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
    features: ["1BHK Options Available", "Balcony", "Resort Pool", "Clubhouse"],
    priceRange: "₹85 L - ₹3.20 Cr",
    status: "Under Construction",
    type: "Resort Living",
    image: "/pg40.webp",
    featured: true,
  },
  {
    id: "estate-128",
    slug: "estate-128",
    title: "Estate 128",
    developer: "Max Estates",
    location: "Sector 128, Noida Expressway",
    tagline: "Estate 128 Noida is thoughtfully crafted for well-being",
    description:
      "Estate 128 Noida is thoughtfully crafted around holistic well-being, featuring sprawling balconies, panoramic golf views, and bespoke concierge hospitality.",
    sizeRange: "1,200 - 2,000 sq. ft.",
    configurations: ["3 BHK", "4 BHK"],
    features: ["Balcony", "Direct Expressway Connectivity", "Golf Views", "Wellness Club"],
    priceRange: "₹3.80 Cr - ₹6.50 Cr",
    status: "Under Construction",
    type: "Luxury Residential",
    image: "/pg36.webp",
    featured: true,
  },
  {
    id: "sobha-36",
    slug: "sobha-36",
    title: "Sobha 36",
    developer: "Sobha Limited",
    location: "Sector 36, Greater Noida",
    tagline: "Sobha Sector 36 presents a selection of exquisite residences",
    description:
      "Sobha Sector 36 presents a selection of ultra-luxury residences distinguished by Sobha's unmatched in-house German engineering and build quality.",
    sizeRange: "600 - 1,800 sq. ft.",
    configurations: ["2 BHK", "3 BHK"],
    features: ["Balcony", "German Engineering Finish", "Grand Clubhouse", "High-Speed Elevators"],
    priceRange: "₹1.40 Cr - ₹2.75 Cr",
    status: "Pre-Launch",
    type: "Luxury Residential",
    image: "/pg31.webp",
  },
];

// Helper search and filter utility functions
export function getAllProjects(): Project[] {
  return PROJECTS_DATA;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS_DATA.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function searchProjects(query: string, filters?: { status?: string; type?: string }): Project[] {
  const cleanQuery = query.trim().toLowerCase();

  return PROJECTS_DATA.filter((project) => {
    const matchesQuery =
      !cleanQuery ||
      project.title.toLowerCase().includes(cleanQuery) ||
      project.developer.toLowerCase().includes(cleanQuery) ||
      project.location.toLowerCase().includes(cleanQuery) ||
      project.tagline.toLowerCase().includes(cleanQuery) ||
      project.configurations.some((c) => c.toLowerCase().includes(cleanQuery));

    const matchesStatus = !filters?.status || project.status === filters.status;
    const matchesType = !filters?.type || project.type === filters.type;

    return matchesQuery && matchesStatus && matchesType;
  });
}