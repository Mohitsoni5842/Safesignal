import { useState } from "react";
import { CalendarDays, Mail, MapPin, Play, UserRound } from "lucide-react";

const fieldClass =
  "min-w-0 flex-1 bg-transparent text-xs font-medium text-slate-800 outline-none placeholder:text-slate-400";

export default function Planner({ journey, onCreate }) {
  const [form, setForm] = useState({
    dest: journey.dest,
    time: journey.time,
    cname: journey.cname,
    cemail: journey.cemail || "",
  });

  const setField = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  return (
    <div className="dashboard-card h-full rounded-xl border border-blue-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">
          <MapPin size={25} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-base font-bold">Plan a journey</h2>
          <p className="mt-0.5 text-xs leading-4 text-slate-500">
            Tell us where you&apos;re going and who to keep informed. It only takes a minute.
          </p>
        </div>
      </div>

      <form
        className="space-y-2.5"
        onSubmit={(event) => {
          event.preventDefault();
          onCreate(form);
        }}
      >
        <label className="planner-field flex items-center gap-2.5">
          <MapPin size={17} className="shrink-0 text-slate-500" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] leading-3 text-slate-500">Destination</span>
            <input
              aria-label="Destination"
              className={fieldClass}
              value={form.dest}
              onChange={setField("dest")}
              placeholder="Where are you going?"
              required
            />
          </span>
          <span className="text-slate-400" aria-hidden="true">⌄</span>
        </label>

        <label className="planner-field flex items-center gap-2.5">
          <CalendarDays size={17} className="shrink-0 text-slate-500" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] leading-3 text-slate-500">Expected arrival</span>
            <input
              aria-label="Expected arrival"
              type="time"
              className={fieldClass}
              value={form.time}
              onChange={setField("time")}
              required
            />
          </span>
        </label>

        <label className="planner-field flex items-center gap-2.5">
          <UserRound size={17} className="shrink-0 text-slate-500" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] leading-3 text-slate-500">Start Destination</span>
            <input
              aria-label="Start Destination"
              className={fieldClass}
              value={form.cname}
              onChange={setField("cname")}
              placeholder="Where are you starting from?"
              required
            />
          </span>
          <span className="text-slate-400" aria-hidden="true">⌄</span>
        </label>

        <label className="planner-field flex items-center gap-2.5">
          <Mail size={17} className="shrink-0 text-slate-500" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] leading-3 text-slate-500">Contact email</span>
            <input
              aria-label="Contact email"
              type="email"
              className={fieldClass}
              value={form.cemail}
              onChange={setField("cemail")}
              placeholder="Optional"
            />
          </span>
          <span className="text-slate-400" aria-hidden="true">⌄</span>
        </label>

        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Play size={14} fill="currentColor" aria-hidden="true" />
          Start journey
        </button>
      </form>
    </div>
  );
}
