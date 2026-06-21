import Link from "next/link";
import { pageLinks } from "@/lib/mock-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(255,253,248,0.74)] py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="mb-3 text-2xl font-black tracking-[-0.05em]">MicroSchool</div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            Prototype website for the CIS 576 capstone scope: profile, curriculum, baseline,
            weekly lesson engine, calendar reflow, and activity-to-standard matching.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm font-bold text-[var(--muted)] sm:grid-cols-3">
          {pageLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/planner">Manual lesson</Link>
        </div>
      </div>
    </footer>
  );
}
