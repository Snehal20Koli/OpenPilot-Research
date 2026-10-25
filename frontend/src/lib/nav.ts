import type { NavItem } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Overview",
    description: "Workspace status and a starting point for new investigations.",
  },
  {
    href: "/research",
    label: "New Research",
    description: "Compose a research question for the agent.",
  },
  {
    href: "/history",
    label: "Research History",
    description: "Past investigations will appear here once persistence is added.",
  },
  {
    href: "/knowledge",
    label: "Knowledge Base",
    description: "Saved sources and notes will live here.",
  },
  {
    href: "/traces",
    label: "Agent Traces",
    description: "Step-by-step agent activity will be recorded here.",
  },
];

export const SUGGESTED_PROMPTS = [
  "Compare retrieval-augmented generation architectures for long-form research.",
  "What evaluation metrics are used for multi-agent research systems?",
  "Summarize open challenges in citation-backed AI research assistants.",
];
