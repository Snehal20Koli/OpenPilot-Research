import { EmptyState } from "@/components/empty-state";

export default function AgentTracesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <EmptyState
        title="Agent traces are not available"
        description="Tool calls, planning steps, and run diagnostics will be shown here once the research agent exists."
      />
    </div>
  );
}
