import { EmptyState } from "@/components/empty-state";

export default function KnowledgeBasePage() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <EmptyState
        title="Knowledge base is not available"
        description="Saved sources, notes, and retrieved documents will appear here in a later stage."
      />
    </div>
  );
}
