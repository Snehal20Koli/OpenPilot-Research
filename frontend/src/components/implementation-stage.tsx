"use client";

import { useResearchStatus } from "@/lib/use-research-status";

export function ImplementationStage() {
  const { state, status, error, load } = useResearchStatus();

  return (
    <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
      <h3 className="text-base font-semibold text-white">Implementation stage</h3>
      {state === "loading" ? (
        <p className="mt-3 text-sm text-slate-400">Loading current stage…</p>
      ) : null}
      {state === "error" ? (
        <div className="mt-3">
          <p className="text-sm text-rose-300">
            {error ?? "Could not load research status."}
          </p>
          <button
            type="button"
            onClick={() => void load()}
            className="mt-3 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-200 hover:border-indigo-400/40"
          >
            Retry
          </button>
        </div>
      ) : null}
      {status ? (
        <div className="mt-3">
          <p className="text-sm font-medium text-indigo-200">{status.label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {status.description}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <StageList title="In place" items={status.implemented} />
            <StageList title="Upcoming" items={status.upcoming} />
          </div>
        </div>
      ) : null}
    </section>
  );
}

function StageList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
        {title}
      </p>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
