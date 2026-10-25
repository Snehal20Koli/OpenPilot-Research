import { ImplementationStage } from "@/components/implementation-stage";
import { RecentInvestigations } from "@/components/recent-investigations";
import { ResearchComposer } from "@/components/research-composer";

export default function OverviewPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <ImplementationStage />
      <ResearchComposer />
      <RecentInvestigations />
    </div>
  );
}
