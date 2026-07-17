"use client";

import { useState } from "react";
import { CheckCircle2, LockKeyhole } from "lucide-react";

export function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-2xl border border-white/15 bg-[#090d14] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      aria-describedby="form-disclosure"
    >
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
        <input name="serviceArea" required className="ga-field" placeholder="For example: Orange County or Central Florida" />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
        What should we watch for?
        <textarea name="watchFor" rows={5} className="ga-field resize-y" placeholder="Project types, public agencies, delivery methods, locations, or other review priorities" />
      </label>
      <button type="submit" className="ga-button mt-6 w-full justify-center py-3.5">
        Request Early Access
      </button>
      <p id="form-disclosure" className="mt-4 flex gap-2 text-xs leading-5 text-slate-500">
        <LockKeyhole className="mt-0.5 size-3.5 shrink-0 text-[#42d6c7]" aria-hidden="true" />
        Early-access requests are reviewed by a person. This V2 preview does not transmit or store form data until an owner-approved submission service is connected.
      </p>
      {submitted ? (
        <div role="status" className="mt-4 flex gap-2 rounded-xl border border-[#42d6c7]/30 bg-[#42d6c7]/[0.07] p-4 text-sm leading-6 text-slate-200">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#42d6c7]" aria-hidden="true" />
          Preview confirmed: no information was sent. Connect an approved form endpoint before public launch.
        </div>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete, required = false }: { label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-200">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required={required} className="ga-field" />
    </label>
  );
}
