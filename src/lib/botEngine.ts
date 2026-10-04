import { COMPANY_DATA } from "@/data/company";
import { PROJECTS_DATA, Project } from "@/data/projects";

export interface BotResponse {
  text: string;
  matchedProjects?: Project[];
  suggestedActions?: { label: string; action: string }[];
}

export function generateBotResponse(input: string): BotResponse {
  const query = input.toLowerCase().trim();

  // 1. Office, Location & Address Inquiries
  if (
    query.includes("office") ||
    query.includes("address") ||
    query.includes("headquarter") ||
    query.includes("hq") ||
    query.includes("location") ||
    query.includes("where")
  ) {
    if (query.includes("dubai")) {
      return {
        text: `Our **Dubai Global Desk** is located at:\n${COMPANY_DATA.offices.dubai.fullAddress}\n\nDirect Desk Line: ${COMPANY_DATA.offices.dubai.phone.display}`,
        suggestedActions: [
          { label: "Call Dubai Desk", action: `tel:${COMPANY_DATA.offices.dubai.phone.raw}` },
          { label: "India HQ Info", action: "tell me about India headquarters" },
        ],
      };
    }

    return {
      text: `**Realty FM Corporate Desks:**\n\n• **India HQ**: ${COMPANY_DATA.offices.india.fullAddress}\n• **Dubai Global Desk**: ${COMPANY_DATA.offices.dubai.fullAddress}`,
      suggestedActions: [
        { label: "Call India Desk", action: COMPANY_DATA.primaryContact.phoneLink },
        { label: "WhatsApp Desk", action: COMPANY_DATA.primaryContact.whatsappLink },
      ],
    };
  }

  // 2. Phone, WhatsApp & Direct Contact
  if (
    query.includes("phone") ||
    query.includes("call") ||
    query.includes("contact") ||
    query.includes("whatsapp") ||
    query.includes("number")
  ) {
    return {
      text: `You can reach our senior advisory desks directly via:\n\n• **Phone / Calling**: ${COMPANY_DATA.primaryContact.phoneDisplay}\n• **WhatsApp Direct Desk**: ${COMPANY_DATA.primaryContact.whatsappDisplay}\n• **Dubai Desk**: ${COMPANY_DATA.offices.dubai.phone.display}`,
      suggestedActions: [
        { label: "Start WhatsApp Chat", action: COMPANY_DATA.primaryContact.whatsappLink },
        { label: "Call Now", action: COMPANY_DATA.primaryContact.phoneLink },
      ],
    };
  }

  // 3. Founder, Leadership & Company Background
  if (
    query.includes("founder") ||
    query.includes("owner") ||
    query.includes("anirudh") ||
    query.includes("poddar") ||
    query.includes("about") ||
    query.includes("realty fm")
  ) {
    return {
      text: `**Realty FM** is led by founder **Anirudh Poddar**. We operate as a premier property finance manager and residential real estate advisory firm with over **50+ experienced consultants** and a track record of serving **2,000+ satisfied clients** across top developments.`,
      suggestedActions: [
        { label: "View Portfolio", action: "show me projects" },
        { label: "Schedule Consultation", action: "/contact" },
      ],
    };
  }

  // 4. Project-Specific Direct Match
  const matchedProject = PROJECTS_DATA.find(
    (p) =>
      query.includes(p.title.toLowerCase()) ||
      query.includes(p.slug.toLowerCase()) ||
      (p.title.toLowerCase().includes("ace") && query.includes(p.title.toLowerCase().replace("ace ", "")))
  );

  if (matchedProject) {
    return {
      text: `**${matchedProject.title}** by *${matchedProject.developer}*:\n\n• **Location**: ${matchedProject.location}\n• **Status**: ${matchedProject.status} (${matchedProject.type})\n• **Configurations**: ${matchedProject.configurations.join(", ")}\n• **Size Range**: ${matchedProject.sizeRange}\n• **Indicative Price**: ${matchedProject.priceRange || "Available on request"}\n\n*Key Highlights*: ${matchedProject.features.join(", ")}`,
      matchedProjects: [matchedProject],
      suggestedActions: [
        { label: `Inquire for ${matchedProject.title}`, action: `https://wa.me/${COMPANY_DATA.primaryContact.whatsappNumber}?text=Inquiring%20about%20${encodeURIComponent(matchedProject.title)}` },
        { label: "Browse All Projects", action: "show me all projects" },
      ],
    };
  }

  // 5. Developer Portfolio Inquiries (Gaurs, ACE, Sobha, Godrej, Max, Nirala, etc.)
  const developerQuery = PROJECTS_DATA.filter((p) =>
    query.includes(p.developer.toLowerCase()) ||
    (p.developer.toLowerCase().includes("gaur") && query.includes("gaur")) ||
    (p.developer.toLowerCase().includes("ace") && query.includes("ace")) ||
    (p.developer.toLowerCase().includes("sobha") && query.includes("sobha")) ||
    (p.developer.toLowerCase().includes("godrej") && query.includes("godrej")) ||
    (p.developer.toLowerCase().includes("max") && query.includes("max"))
  );

  if (developerQuery.length > 0) {
    const list = developerQuery.map((p) => `• **${p.title}** (${p.location}) - ${p.configurations.join(", ")}`).join("\n");
    return {
      text: `Here are the curated developments under that developer group:\n\n${list}`,
      matchedProjects: developerQuery,
      suggestedActions: [
        { label: "Connect with Advisor", action: COMPANY_DATA.primaryContact.whatsappLink },
      ],
    };
  }

  // 6. Generic Projects Listing
  if (query.includes("project") || query.includes("flat") || query.includes("apartment") || query.includes("portfolio") || query.includes("plot")) {
    const sample = PROJECTS_DATA.slice(0, 4)
      .map((p) => `• **${p.title}** (${p.developer}) - ${p.location}`)
      .join("\n");

    return {
      text: `We advise on 16+ premier developments across Noida, Greater Noida, and Yamuna Expressway including:\n\n${sample}\n\n...and many more. Ask me about any specific project (e.g. *Gaur Chrysalis*, *Ace Parkway*, *Estate 128*).`,
      suggestedActions: [
        { label: "Explore Gaur Projects", action: "tell me about Gaur projects" },
        { label: "Explore ACE Projects", action: "tell me about ACE projects" },
        { label: "Full Portfolio Page", action: "/portfolio" },
      ],
    };
  }

  // Fallback default response
  return {
    text: `I can assist you with details on any of our **16+ curated developments** (Gaur, ACE, Sobha, Max Estates, Godrej), schedule a private consultation, or share office coordinates for our Noida HQ and Dubai Desk.`,
    suggestedActions: [
      { label: "Top Projects", action: "show me projects" },
      { label: "Office Locations", action: "where are your offices?" },
      { label: "WhatsApp Desk", action: COMPANY_DATA.primaryContact.whatsappLink },
    ],
  };
}