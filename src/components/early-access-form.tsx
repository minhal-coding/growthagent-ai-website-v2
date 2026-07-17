import { Eye, LockKeyhole } from "lucide-react";

export function EarlyAccessForm({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-labelledby="early-access-preview-title"
      className={`border border-white/15 bg-[#090d14] shadow-[0_30px_90px_rgba(0,0,0,0.3)] ${compact ? "rounded-[1.7rem] p-4" : "rounded-2xl p-5 sm:p-7"}`}
    >
      <div id="form-disclosure" role="note" className="mb-5 rounded-xl border border-[#f2c94c]/45 bg-[#d4af37]/[0.08] p-3.5 text-xs font-semibold leading-5 text-slate-100">
        <span className="flex items-start gap-2.5">
          <LockKeyhole className="mt-0.5 size-4 shrink-0 text-[#f2c94c]" aria-hidden="true" />
          <span><strong id="early-access-preview-title" className="text-white">Preview only</strong> — nothing entered here is sent, stored, or reviewed. Do not enter personal information.</span>
        </span>
      </div>
      <fieldset disabled aria-describedby="form-disclosure">
        <legend className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#42d6c7]">
          <Eye className="size-4" aria-hidden="true" />
          Early Access Preview
        </legend>
        <div className={compact ? "grid gap-3" : "grid gap-5 sm:grid-cols-2"}>
          <Field label="Name" name="name" autoComplete="name" required compact={compact} />
          <Field label="Work email" name="email" type="email" autoComplete="email" required compact={compact} />
          <Field label="Company" name="company" autoComplete="organization" required compact={compact} />
          <label className={`grid text-sm font-semibold text-slate-200 ${compact ? "gap-1.5 text-xs" : "gap-2"}`}>
            Primary trade
            <select name="trade" required defaultValue="" className={`ga-field ${compact ? "!min-h-10 !py-2 text-xs" : ""}`}>
              <option value="" disabled>Select your primary trade</option>
              <option>General contracting</option>
              <option>Division 09 — Finishes</option>
              <option>Concrete and masonry</option>
              <option>Mechanical, electrical, and plumbing</option>
              <option>Site work and civil</option>
              <option>Other specialty trade</option>
            </select>
          </label>
        </div>
        {!compact ? (
          <>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
              Florida service area
              <input name="serviceArea" className="ga-field" placeholder="Example only — future intake topic" />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
              What should a future intake ask?
              <textarea name="watchFor" rows={5} className="ga-field resize-y" placeholder="Example only — project types, agencies, locations, or review priorities" />
            </label>
          </>
        ) : null}
        <button type="button" disabled className={`ga-button w-full cursor-not-allowed justify-center opacity-70 ${compact ? "mt-4 !min-h-10 py-2 text-xs" : "mt-6 py-3.5"}`}>
          Early Access Preview
        </button>
      </fieldset>
      <p className={`${compact ? "mt-3 text-[0.68rem] leading-5" : "mt-4 text-sm leading-6"} text-slate-400`}>No external form endpoint is connected. Enabling collection requires owner-approved privacy, retention, contact, and processing terms.</p>
    </section>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false, compact = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean; compact?: boolean }) {
  return (
    <label className={`grid font-semibold text-slate-200 ${compact ? "gap-1.5 text-xs" : "gap-2 text-sm"}`}>
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required={required} className={`ga-field ${compact ? "!min-h-10 !py-2 text-xs" : ""}`} placeholder="Example only" />
    </label>
  );
}
