export interface OfficeLocation {
  id: string;
  name: string;
  badge?: string;
  country: string;
  addressLines: string[];
  fullAddress: string;
  phone: {
    display: string;
    raw: string; // Used for tel: links
  };
  whatsapp?: {
    display: string;
    number: string;
    link: string;
  };
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface CompanyInfo {
  brandName: string;
  tagline: string;
  subTagline: string;
  domain: string;
  offices: {
    india: OfficeLocation;
    dubai: OfficeLocation;
  };
  primaryContact: {
    phoneDisplay: string;
    phoneLink: string;
    whatsappDisplay: string;
    whatsappNumber: string;
    whatsappLink: string;
  };
}

export const COMPANY_DATA: CompanyInfo = {
  brandName: "Realty FM",
  tagline: "Your Finance Manager",
  subTagline: "Most Trusted Real Estate Advisory Partner",
  domain: "https://realtyfm.com",

  // Quick-access global contact channels
  primaryContact: {
    phoneDisplay: "+91 99103 74156",
    phoneLink: "tel:+919910374156",
    whatsappDisplay: "+91 70420 80055",
    whatsappNumber: "917042080055",
    whatsappLink: "https://wa.me/917042080055?text=Hello%20Realty%20FM%2C%20I%20would%20like%20to%20inquire%20about%20luxury%20real%20estate%20properties.",
  },

  offices: {
    india: {
      id: "india-hq",
      name: "India Headquarters",
      badge: "Headquarters",
      country: "India",
      addressLines: [
        "B 625, Alphathum",
        "Sector-90, Noida",
        "Uttar Pradesh, India",
      ],
      fullAddress: "B 625, Alphathum, Sector-90, Noida, UP, India",
      phone: {
        display: "+91 99103 74156",
        raw: "+919910374156",
      },
      whatsapp: {
        display: "+91 70420 80055",
        number: "917042080055",
        link: "https://wa.me/917042080055?text=Hello%20Realty%20FM%20India%20Team%2C%20I%20would%20like%20to%20connect%20regarding%20property%20advisory.",
      },
    },

    dubai: {
      id: "dubai-desk",
      name: "Dubai Global Desk",
      badge: "International Office",
      country: "United Arab Emirates",
      addressLines: [
        "B 3003, Latifa Tower",
        "Sheikh Zayed Rd",
        "Dubai, UAE",
      ],
      fullAddress: "B 3003, Latifa Tower, Sheikh Zayed Rd, Dubai, UAE",
      phone: {
        display: "+971 52 651 9798",
        raw: "+971526519798",
      },
    },
  },
};

/**
 * Pre-formatted WhatsApp link generator with custom property interest
 */
export function getWhatsAppInquiryLink(projectName?: string): string {
  const base = `https://wa.me/${COMPANY_DATA.primaryContact.whatsappNumber}`;
  const message = projectName
    ? `Hello Realty FM, I am interested in scheduling a consultation for ${projectName}.`
    : `Hello Realty FM, I would like to inquire about your advisory services.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}