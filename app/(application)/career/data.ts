import type { JobOpening } from "../../../lib/types/career";

export const openings: JobOpening[] = [
  {
    id: "senior-property-manager",
    title: "Senior Property Manager",
    location: "Amsterdam, Netherlands",
    department: "Property Management",
    type: "Full Time",
    deadline: "30 September 2026",
    description:
      "Lead the management of a diverse portfolio of residential and commercial properties while maintaining the highest standards of client service.",

    responsibilities: [
      "Oversee daily property operations",
      "Coordinate maintenance and inspections",
      "Manage tenant relationships",
      "Prepare operational reports",
    ],

    requirements: [
      "5+ years of property management experience",
      "Strong communication skills",
      "Knowledge of Dutch property regulations",
      "Fluent in English",
    ],
  },

  {
    id: "valuation-specialist",
    title: "Valuation Specialist",
    location: "Rotterdam, Netherlands",
    department: "Valuation & Advisory",
    type: "Full Time",
    deadline: "15 October 2026",
    description:
      "Provide market-leading valuation services and investment insights for residential and commercial assets.",

    responsibilities: [
      "Conduct property valuations",
      "Prepare valuation reports",
      "Analyze market trends",
      "Advise clients on asset performance",
    ],

    requirements: [
      "Degree in Real Estate or Finance",
      "3+ years valuation experience",
      "Strong analytical mindset",
      "Excellent report writing skills",
    ],
  },

  {
    id: "sales-advisor",
    title: "Luxury Property Advisor",
    location: "The Hague, Netherlands",
    department: "Sales & Acquisitions",
    type: "Full Time",
    deadline: "01 November 2026",
    description:
      "Represent premium residential properties and guide clients through successful transactions.",

    responsibilities: [
      "Manage buyer relationships",
      "Conduct property viewings",
      "Negotiate transactions",
      "Support acquisition strategies",
    ],

    requirements: [
      "Experience in luxury real estate",
      "Strong interpersonal skills",
      "Negotiation expertise",
      "Client-focused mindset",
    ],
  },
];