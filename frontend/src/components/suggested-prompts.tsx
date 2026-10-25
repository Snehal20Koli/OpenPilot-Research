import { SUGGESTED_PROMPTS } from "@/lib/nav";

type SuggestedPromptsProps = {
  onSelect: (prompt: string) => void;
};

export function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
  return (
    <div className="mt-6 border-t border-white/10 pt-5">
      <h4 className="text-sm font-medium text-slate-200">Suggested prompts</h4>
      <p className="mt-1 text-xs text-slate-500">
        These fill the question field only. They do not start a research run.
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onSelect(prompt)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-sm text-slate-300 transition hover:border-indigo-400/40 hover:text-white"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
