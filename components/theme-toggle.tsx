"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const KEY = "td_theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = (localStorage.getItem(KEY) as Theme | null) ?? null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const t: Theme = prefersDark ? "dark" : "light";
    setTheme(t);
    applyTheme(t);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(KEY, next);
    applyTheme(next);
  }

  return (
    <Button variant="secondary" onClick={toggle} aria-label="Chuyển giao diện">
      {theme === "dark" ? "Sáng" : "Tối"}
    </Button>
  );
}
