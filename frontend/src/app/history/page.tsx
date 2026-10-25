import { EmptyState } from "@/components/empty-state";

export default function ResearchHistoryPage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <EmptyState
        title="Research history is not available"
        description="Past investigations will be listed here after persistence is implemented. This page does not invent previous runs."
      />
    </div>
  );
}
