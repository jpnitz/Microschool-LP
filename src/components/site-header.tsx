import Link from "next/link";
import { pageLinks } from "@/lib/mock-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(251,247,239,0.86)] backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid size-11 place-items-center rounded-2xl bg-[var(--brand)] text-xl font-black text-white">
            M
          </span>
          <span>
            <span className="block text-lg font-black tracking-[-0.04em]">MicroSchool</span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
              Home-first planner
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {pageLinks.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-primary hidden sm:inline-flex" href="/planner">
          Generate week
        </Link>
      </div>
    </header>
  );
}
