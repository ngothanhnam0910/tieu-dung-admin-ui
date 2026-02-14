import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLink } from "@/components/nav-link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <aside className="hidden md:block border-r bg-[hsl(var(--card))]">
          <div className="p-5">
            <Link href="/dashboard" className="font-semibold tracking-tight">
              Tạp hoá Online • Admin
            </Link>
            <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
              UI demo quản lý bán hàng
            </p>
          </div>
          <nav className="px-3 pb-6">
            <NavLink href="/dashboard">Tổng quan</NavLink>
            <NavLink href="/products">Sản phẩm</NavLink>
            <NavLink href="/orders">Đơn hàng</NavLink>
            <div className="mt-4 px-3 text-xs uppercase text-[hsl(var(--muted-foreground))]">
              Sắp có
            </div>
            <NavLink href="#" disabled>
              Khách hàng
            </NavLink>
            <NavLink href="#" disabled>
              Báo cáo
            </NavLink>
          </nav>
        </aside>

        <div className="min-w-0">
          <header className="sticky top-0 z-10 border-b bg-[hsl(var(--background))]/80 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/60">
            <div className="container-page flex h-14 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="md:hidden">
                  <Link href="/dashboard" className="font-semibold">
                    Admin
                  </Link>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <span>Quản lý</span>
                  <span className="opacity-40">/</span>
                  <span className="text-[hsl(var(--foreground))]">Bán hàng</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <input
                    className="h-9 w-64 rounded-md border bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
                    placeholder="Tìm kiếm (demo)"
                  />
                </div>
                <ThemeToggle />
                <div className="h-9 w-9 rounded-full border grid place-items-center text-xs bg-[hsl(var(--card))]">
                  NAM
                </div>
              </div>
            </div>
          </header>

          <main className="container-page py-6">{children}</main>

          <footer className="container-page py-10 text-sm text-[hsl(var(--muted-foreground))]">
            UI demo • Next.js + Tailwind • Light/Dark
          </footer>
        </div>
      </div>
    </div>
  );
}
