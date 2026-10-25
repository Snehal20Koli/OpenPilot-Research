type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-300">
        Not implemented yet
      </p>
      <h2 className="mt-3 text-lg font-semibold text-slate-100">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
        {description}
      </p>
    </section>
  );
}
