"use client";

import { useApiHealth } from "@/lib/use-api-health";

const STATUS_STYLES = {
  loading: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  connected: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  error: "border-rose-400/30 bg-rose-400/10 text-rose-200",
} as const;

const STATUS_LABELS = {
  loading: "Checking API",
  connected: "API connected",
  error: "API unavailable",
} as const;

export function ApiStatus() {
  const { state, appName, error, check, apiUrl } = useApiHealth();

  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <div className="hidden text-right text-xs text-slate-400 sm:block">
        <p className="font-medium text-slate-300">{apiUrl}</p>
        <p>{appName ?? "OpenPilot Research API"}</p>
      </div>
      <div
        role="status"
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${STATUS_STYLES[state]}`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            state === "connected"
              ? "bg-emerald-400"
              : state === "loading"
                ? "bg-amber-300"
                : "bg-rose-400"
          }`}
        />
        {STATUS_LABELS[state]}
      </div>
      {state === "error" ? (
        <button
          type="button"
          onClick={() => void check()}
          className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-indigo-400/40 hover:text-white"
        >
          Retry
        </button>
      ) : null}
      {error ? (
        <p className="w-full text-right text-xs text-rose-300/90">{error}</p>
      ) : null}
    </div>
  );
}
