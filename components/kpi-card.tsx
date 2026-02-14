export function KpiCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border bg-[hsl(var(--card))] p-5">
      <div className="text-sm text-[hsl(var(--muted-foreground))]">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      {hint ? (
        <div className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">{hint}</div>
      ) : null}
    </div>
  );
}
