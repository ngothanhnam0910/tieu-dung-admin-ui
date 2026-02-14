"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const pathname = usePathname();
  const active = !disabled && (pathname === href || pathname.startsWith(href + "/"));

  const base =
    "block rounded-lg px-3 py-2 text-sm transition-colors";

  const cls = disabled
    ? `${base} text-[hsl(var(--muted-foreground))] opacity-60 cursor-not-allowed`
    : active
      ? `${base} bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-medium`
      : `${base} text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]`;

  if (disabled) return <div className={cls}>{children}</div>;

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
