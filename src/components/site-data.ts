import {
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  MapPinned,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";

export const navigation = [
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Florida Launch", href: "/florida-launch" },
  { label: "Trust & Safety", href: "/trust-safety" },
  { label: "About", href: "/about" },
];

export const workflowSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Review configured public sources for construction-relevant records.",
    detail: "Permits, planning records, and procurement notices",
    icon: Search,
  },
  {
    number: "02",
    title: "Verify",
    text: "Keep the public source link and evidence beside the opportunity.",
    detail: "Source URL, record context, and location",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Rank",
    text: "Organize records around trade fit, service area, and review priorities.",
    detail: "Explainable fit signals, not a black box",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Human review",
    text: "A person confirms the details, adds context, and decides the next step.",
    detail: "No autonomous outreach or fabricated contacts",
    icon: UserCheck,
  },
];

export const sourceTypes = [
  { title: "Permit records", text: "Public permit information where access and reuse are appropriate.", icon: FileSearch },
  { title: "Planning information", text: "Public agendas, applications, and planning records selected for the launch.", icon: MapPinned },
  { title: "Procurement notices", text: "Publicly posted solicitations and supporting procurement information.", icon: ExternalLink },
];

export const trustPrinciples = [
  {
    title: "Source-backed",
    text: "Opportunity context stays connected to a public record link for operator review.",
    meta: "Evidence captured",
    icon: ShieldCheck,
  },
  {
    title: "No fabricated contacts",
    text: "The launch does not invent people, roles, email addresses, or contact details.",
    meta: "Contact evidence required",
    icon: ClipboardCheck,
  },
  {
    title: "Human-reviewed workflows",
    text: "A person decides whether a record is relevant and what, if anything, happens next.",
    meta: "Operator decision",
    icon: UserCheck,
  },
  {
    title: "Scope stays explicit",
    text: "Florida construction is the launch focus. Source and county coverage will expand only when verified.",
    meta: "Launching soon",
    icon: Scale,
  },
];

export const launchAreas = ["Orange County", "Seminole County", "Osceola County", "Central Florida"];

export const constructionTrades = [
  "General contracting",
  "Division 09 — Finishes",
  "Concrete and masonry",
  "Mechanical, electrical, and plumbing",
  "Site work and civil",
  "Specialty trades",
];

export const faqs = [
  [
    "Is GrowthAgent AI live nationwide?",
    "No. GrowthAgent AI is launching in Florida for construction teams through an early-access and pilot process.",
  ],
  [
    "Which public sources are included?",
    "The launch is evaluating selected permit, planning, and procurement sources. A source is described as active only after its workflow has been verified.",
  ],
  [
    "Does the platform create contact information?",
    "No. GrowthAgent AI does not fabricate names, roles, email addresses, or phone numbers. Contact details require source evidence and review.",
  ],
  [
    "Does it contact opportunities automatically?",
    "No autonomous outreach is promised for the Florida launch. The current website describes discovery, evidence, ranking, and human review.",
  ],
  [
    "Is the demonstration record real?",
    "No. Records shown on this website are clearly labeled Demonstration Data and illustrate the review experience without representing production activity.",
  ],
  [
    "How do I request early access?",
    "Share your trade, Florida service area, and the kinds of public opportunities you want to review. Requests are reviewed by a person.",
  ],
];
