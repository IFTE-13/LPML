import type { LeadershipMember, Department } from "../../../lib/types/team";

import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";
import me from "@/assets/me.png";

export const leadership: LeadershipMember[] = [
  {
    name: "Sophia Bennett",
    role: "Chief Executive Officer",
    photo: me,
    bio: "20+ years transforming property management with a focus on long-term stewardship and client relationships.",
    linkedin: "#",
    email: "sophia@livora.nl",
  },
  {
    name: "James Anderson",
    role: "Chief Financial Officer",
    photo: one,
    bio: "15+ years of financial expertise driving sustainable growth and investment strategies.",
    linkedin: "#",
    email: "james@livora.nl",
  },
  {
    name: "Dr. Maria Garcia",
    role: "Chief Technology Officer",
    photo: two,
    bio: "12+ years in proptech, leading digital innovation and AI-driven property solutions.",
    linkedin: "#",
    email: "maria@livora.nl",
  },
];

export const departments: Department[] = [
  {
    title: "Property Management",
    description:
      "Ensuring every property is maintained to the highest standards with responsive care.",
    members: [
      {
        name: "Daniel Voss",
        role: "Senior Property Manager",
        photo: three,
        specialty: "Maintenance operations & tenant relations",
        experience: "12 years",
        email: "daniel@livora.nl",
        linkedin: "#",
      },
      {
        name: "Emma Wilson",
        role: "Property Manager",
        photo: me,
        specialty: "Property inspections & lease management",
        experience: "8 years",
        email: "emma@livora.nl",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Valuation & Advisory",
    description:
      "Precision valuations backed by deep market intelligence and data analytics.",
    members: [
      {
        name: "Mireille Dubois",
        role: "Lead Valuation Specialist",
        photo: two,
        specialty: "Market analysis & property valuations",
        experience: "15 years",
        email: "mireille@livora.nl",
        linkedin: "#",
      },
      {
        name: "Tomás Alves",
        role: "Senior Analyst",
        photo: one,
        specialty: "Data analytics & market forecasting",
        experience: "6 years",
        email: "tomas@livora.nl",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Sales & Acquisitions",
    description:
      "Strategic acquisitions and seamless sales transactions for optimal returns.",
    members: [
      {
        name: "Lisa Chen",
        role: "Director of Sales",
        photo: three,
        specialty: "Luxury residential & commercial sales",
        experience: "18 years",
        email: "lisa@livora.nl",
        linkedin: "#",
      },
      {
        name: "Michael Okonkwo",
        role: "Senior Sales Agent",
        photo: me,
        specialty: "First-time buyers & investment",
        experience: "7 years",
        email: "michael@livora.nl",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Design & Planning",
    description:
      "Architectural vision and spatial planning expertise for exceptional spaces.",
    members: [
      {
        name: "Sarah Mitchell",
        role: "Head of Architecture",
        photo: two,
        specialty: "Residential design & space planning",
        experience: "14 years",
        email: "sarah@livora.nl",
        linkedin: "#",
      },
      {
        name: "Robert Park",
        role: "Senior Planner",
        photo: one,
        specialty: "Urban planning & development",
        experience: "10 years",
        email: "robert@livora.nl",
        linkedin: "#",
      },
    ],
  },
];