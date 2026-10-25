import { EmptyState } from "@/components/empty-state";

export function RecentInvestigations() {
  return (
    <section>
      <div className="mb-3">
        <h3 className="text-base font-semibold text-white">
          Recent investigations
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          History is empty until the research pipeline and persistence are added.
        </p>
      </div>
      <EmptyState
        title="No investigations yet"
        description="Completed research runs will appear here. This skeleton does not invent past sessions, citations, or agent output."
      />
    </section>
  );
}
