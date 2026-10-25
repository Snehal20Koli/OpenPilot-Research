"use client";

import { usePathname } from "next/navigation";
import { ApiStatus } from "@/components/api-status";
import { NAV_ITEMS } from "@/lib/nav";

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const current =
    NAV_ITEMS.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
    ) ?? NAV_ITEMS[0];

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b1220]/90 px-4 py-4 backdrop-blur sm:px-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="mt-0.5 rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden"
            aria-label="Open navigation"
          >
            <span className="block h-0.5 w-4 bg-current" />
            <span className="mt-1 block h-0.5 w-4 bg-current" />
            <span className="mt-1 block h-0.5 w-4 bg-current" />
          </button>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              {current.label}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-400">
              {current.description}
            </p>
          </div>
        </div>
        <ApiStatus />
      </div>
    </header>
  );
}
