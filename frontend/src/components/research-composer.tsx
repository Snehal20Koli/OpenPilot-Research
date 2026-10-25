
"use client";

import { useState } from "react";
import { SuggestedPrompts } from "@/components/suggested-prompts";
import { API_BASE_URL } from "@/lib/config";

type SearchResult = {
  title: string;
  link: string;
  snippet: string;
};

type ResearchReport = {
  question: string;
  answer: string;
  sources: SearchResult[];
  model?: string;
  error?: string;
};

export function ResearchComposer() {
  const [question, setQuestion] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const [report, setReport] = useState<ResearchReport | null>(null);
  const [loading, setLoading] = useState(false);

  async function startResearch() {
    const trimmed = question.trim();

    if (!trimmed) {
      setNotice("Enter a research question before starting.");
      return;
    }

    setLoading(true);
    setNotice(null);
    setReport(null);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/research/report`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: trimmed }),
        },
      );

      const data: ResearchReport = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error ?? "Research request failed.");
      }

      setReport(data);
      setNotice("Research report generated successfully.");
    } catch (error) {
      setNotice(
        error instanceof Error
          ? `Research failed: ${error.message}`
          : "Could not connect to the research backend.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-white">
          Research question
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Search the web and generate an AI research summary.
        </p>
      </div>

      <label className="sr-only" htmlFor="research-question">
        Research question
      </label>

      <textarea
        id="research-question"
        value={question}
        onChange={(event) => {
          setQuestion(event.target.value);
          setNotice(null);
          setReport(null);
        }}
        rows={5}
        placeholder="What should OpenPilot Research investigate?"
        className="w-full resize-y rounded-lg border border-white/10 bg-[#0b1220] px-3 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-indigo-400/60"
      />

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={startResearch}
          disabled={loading}
          className="rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Researching..." : "Start Research"}
        </button>

        <p className="text-xs text-slate-500">
          Uses web search and your local Gemma model.
        </p>
      </div>

      {notice && (
        <p className="mt-4 break-words rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-3 py-3 text-sm text-indigo-100">
          {notice}
        </p>
      )}

      {loading && (
        <p className="mt-4 text-sm text-slate-400">
          Searching sources and generating your report. This may take a
          minute.
        </p>
      )}

      {report && (
        <div className="mt-6 space-y-5">
          <article className="rounded-lg border border-white/10 bg-[#0b1220] p-4">
            <h4 className="text-base font-semibold text-white">
              Research report
            </h4>

            <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-300">
              {report.answer}
            </div>

            {report.model && (
              <p className="mt-4 text-xs text-slate-500">
                Generated using {report.model}
              </p>
            )}
          </article>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">
              Sources ({report.sources?.length ?? 0})
            </h4>

            {report.sources?.map((source, index) => (
              <article
                key={`${source.link}-${index}`}
                className="rounded-lg border border-white/10 bg-[#0b1220] p-4"
              >
                <a
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-300 hover:underline"
                >
                  [{index + 1}] {source.title}
                </a>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {source.snippet}
                </p>

                <p className="mt-2 break-all text-xs text-slate-500">
                  {source.link}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}

      <SuggestedPrompts
        onSelect={(prompt) => {
          setQuestion(prompt);
          setNotice(null);
          setReport(null);
        }}
      />
    </section>
  );
}
