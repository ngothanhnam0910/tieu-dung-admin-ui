import * as React from "react";

type Variant = "default" | "success" | "info" | "warning" | "destructive";

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-1 text-xs";

  const variants: Record<Variant, string> = {
    default: "bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]",
    success: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
    info: "bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-500/30",
    warning: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    destructive: "bg-red-500/15 text-red-700 dark:text-red-300 border-red-500/30",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
