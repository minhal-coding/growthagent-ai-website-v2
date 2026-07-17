import { Eye, LockKeyhole } from "lucide-react";

export function EarlyAccessForm() {
  return (
    <section
      aria-labelledby="early-access-preview-title"
      className="rounded-2xl border border-white/15 bg-[#090d14] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:p-7"
    >
      <div id="form-disclosure" role="note" className="mb-6 rounded-xl border border-[#f2c94c]/45 bg-[#d4af37]/[0.08] p-4 text-sm font-semibold leading-6 text-slate-100">
        <span className="flex items-start gap-3">
          <LockKeyhole className="mt-1 size-4 shrink-0 text-[#f2c94c]" aria-hidden="true" />
          <span><strong id="early-access-preview-title" className="text-white">Preview only</strong> — nothing entered here is sent, stored, or reviewed. Do not enter personal information.</span>
        </span>
      </div>
      <fieldset disabled aria-describedby="form-disclosure">
        <legend className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#42d6c7]">
          <Eye className="size-4" aria-hidden="true" />
          Early Access Preview
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
        <Field label="Company" name="company" autoComplete="organization" required />
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Primary trade
          <select name="trade" required defaultValue="" className="ga-field">
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
        <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
          Florida service area
          <input name="serviceArea" className="ga-field" placeholder="Example only — future intake topic" />
        </label>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
          What should a future intake ask?
          <textarea name="watchFor" rows={5} className="ga-field resize-y" placeholder="Example only — project types, agencies, locations, or review priorities" />
        </label>
        <button type="button" disabled className="ga-button mt-6 w-full cursor-not-allowed justify-center py-3.5 opacity-70">
          Preview Only
        </button>
      </fieldset>
      <p className="mt-4 text-sm leading-6 text-slate-400">No external form endpoint is connected. Enabling collection requires owner-approved privacy, retention, contact, and processing terms.</p>
    </section>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required={required} className="ga-field" placeholder="Example only" />
    </label>
  );
}
