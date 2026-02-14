"use client";

import * as React from "react";

type Variant = "default" | "secondary" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className = "", variant = "default", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    default:
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90",
    secondary:
      "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-90",
    ghost: "bg-transparent hover:bg-[hsl(var(--accent))]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
