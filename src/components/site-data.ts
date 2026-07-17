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
    text: "Evaluate candidate public-source workflows for construction-relevant records.",
    detail: "Permit, planning, and procurement source types under evaluation",
    icon: Search,
  },
  {
    number: "02",
    title: "Verify",
    text: "Design each opportunity view to preserve source context beside the record.",
    detail: "Example source slot, record context, and location",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Rank",
    text: "Explore how records could be organized around trade fit, service area, and review priorities.",
    detail: "Explainable fit signals, not a black box",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Human review",
    text: "Design for a person to confirm details, add context, and decide the next step.",
    detail: "No autonomous outreach or fabricated contacts are represented",
    icon: UserCheck,
  },
];

export const sourceTypes = [
  { title: "Permit-record categories", text: "Candidate public permit information whose access and reuse would need validation.", icon: FileSearch },
  { title: "Planning-information categories", text: "Candidate public agendas, applications, and planning records under evaluation.", icon: MapPinned },
  { title: "Procurement-notice categories", text: "Candidate publicly posted solicitations and supporting procurement information.", icon: ExternalLink },
];

export const trustPrinciples = [
  {
    title: "Designed to preserve source evidence",
    text: "The planned experience keeps an evidence slot beside each record for operator review.",
    meta: "Evidence required",
    icon: ShieldCheck,
  },
  {
    title: "No fabricated contacts",
    text: "No contacts are shown in this preview. Any future contact detail would require source evidence and review.",
    meta: "Contact evidence required",
    icon: ClipboardCheck,
  },
  {
    title: "Designed for human review",
    text: "The planned workflow keeps a person responsible for relevance and any next step.",
    meta: "Human decision required",
    icon: UserCheck,
  },
  {
    title: "Scope stays explicit",
    text: "Florida construction is the planned first market. Exact source and county coverage still requires verification.",
    meta: "Validation stage",
    icon: Scale,
  },
];

export const launchAreas = [
  "Illustrative Central Florida focus",
  "Example county-level validation",
  "Example municipal validation",
  "Example regional service-area conversation",
];

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
    "No. Florida construction is the planned first market, and availability, coverage, and launch timing remain unconfirmed.",
  ],
  [
    "Which public source types are under evaluation?",
    "The planned launch is evaluating permit, planning, and procurement source categories. No source is presented as active until its access and workflow are independently verified and owner-approved.",
  ],
  [
    "Would the planned product create contact information?",
    "No fabricated names, roles, email addresses, or phone numbers are shown or promised. Any future contact detail would require source evidence and review.",
  ],
  [
    "Does it contact opportunities automatically?",
    "No autonomous outreach is promised. The current website previews a planned workflow for evaluating records, evidence, organization, and human review.",
  ],
  [
    "Is the demonstration record real?",
    "No. Every example is labeled as fictional demonstration data and does not represent a live record, verified source, customer, contact, or production activity.",
  ],
  [
    "What is the early-access preview?",
    "The current page is a nonfunctional preview of the topics a future intake could cover. Nothing entered there is sent, stored, or reviewed.",
  ],
];
