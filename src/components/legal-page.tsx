import { PageIntro, PageShell } from "@/components/site-chrome";

type LegalPageProps = { kind: "privacy" | "terms" };

const privacySections = [
  ["Early-access preview", "The disabled V2 intake preview does not transmit, store, or route information for review. No contact endpoint is connected. An owner-approved processor, contact channel, retention schedule, and final privacy notice are required before public collection begins."],
  ["Public-source information", "The planned product may organize information from selected public permit, planning, and procurement sources. Source access, reuse terms, and data handling must be validated for each workflow."],
  ["Demonstration data", "Records shown on this website are fictional demonstration data and do not represent customer, contact, or production records."],
  ["AI-assisted review", "The planned workflow may use AI to summarize or organize public-source context. A person remains responsible for reviewing the source and deciding what happens next."],
  ["Optional Spline scene", "The product page contacts neither Spline nor unpkg.com by default. Only choosing “Load optional 3D scene” requests the externally hosted scene from prod.spline.design and may load supporting Spline modelling WebAssembly runtime assets from unpkg.com. Reduced-motion visitors receive the local fallback instead. Owner approval of the final dependency, licensing decision, and third-party disclosure is still required."],
  ["Changes before launch", "This notice will be updated before any public early-access form or production service collects personal information."],
];

const termsSections = [
  ["Preview status", "This website describes an early-access product direction for Florida construction opportunity intelligence. It is not a promise of availability, coverage, results, or a specific launch date."],
  ["Demonstration data", "Product records and interfaces on this website are demonstrations. They must not be treated as current projects, bid notices, contacts, or professional advice."],
  ["Public sources", "Availability and permitted use of public records can change. Each source and workflow must be reviewed before production use."],
  ["Human responsibility", "Users are responsible for confirming source information, determining relevance, and complying with applicable laws, procurement rules, and professional obligations."],
  ["No guarantee", "GrowthAgent AI does not guarantee opportunities, awards, contacts, revenue, or business outcomes."],
];

export function LegalPage({ kind }: LegalPageProps) {
  const privacy = kind === "privacy";
  const sections = privacy ? privacySections : termsSections;

  return (
    <PageShell>
      <main id="main-content">
        <PageIntro
          label="Legal"
          title={privacy ? "Privacy Notice" : "Terms of Use"}
          text={privacy ? "A plain-language notice for this early-access V2 preview." : "The conditions for using this early-access V2 website."}
        />
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold text-slate-400">Last updated: July 17, 2026</p>
            <div className="mt-8 border-y border-white/10">
              {sections.map(([title, body]) => (
                <section key={title} className="border-b border-white/10 py-7 last:border-b-0">
                  <h2 className="text-xl font-extrabold text-white">{title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-400">{body}</p>
                </section>
              ))}
            </div>
            <p className="mt-8 rounded-xl border border-[#e4bd45]/25 bg-[#e4bd45]/[0.05] p-5 text-sm leading-6 text-slate-400">
              Owner review is still required before launch, including final legal terms, privacy disclosures, source-use review, and any data-processing agreements.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
