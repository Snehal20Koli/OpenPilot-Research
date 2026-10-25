"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      ) : null}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 flex-col border-r border-white/10 bg-[#0a1020] p-5 lg:static ${
          open ? "flex" : "hidden lg:flex"
        }`}
      >
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
            Open source
          </p>
          <h1 className="mt-2 text-lg font-semibold tracking-tight text-white">
            OpenPilot Research
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            An AI research agent workspace. Core investigation features are still
            being built.
          </p>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`rounded-lg border px-3 py-2.5 text-sm transition ${
                  active
                    ? "border-indigo-400/40 bg-indigo-500/15 text-white"
                    : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="mt-6 text-xs leading-5 text-slate-500">
          Stage: initial skeleton. No fabricated results or citations.
        </p>
      </aside>
    </>
  );
}
