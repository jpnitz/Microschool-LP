import Link from "next/link";
import { StatCard } from "@/components/stat-card";
import { generatedLessons, weeklyBudgets } from "@/lib/mock-data";

const features = [
  {
    title: "Profiles feed everything",
    text: "Grade and ZIP live on the student profile, so planning screens stop asking parents to re-type the same context."
  },
  {
    title: "Standards become doable activities",
    text: "The planner translates current standards into one-subject home lessons, with field trips only when they add real value."
  },
  {
    title: "Offsets honor real learning",
    text: "Logged activities and parent-found events can be matched to standards and credited against the weekly hour budget."
  }
];

const stages = [
  "Budget hours by subject",
  "Subtract logged offsets",
  "Read current standard pointers",
  "Generate home-first lessons",
  "Autofill and reflow calendar"
];

export default function Home() {
  const totalHours = weeklyBudgets.reduce((sum, budget) => sum + budget.hours, 0);
  const offsetHours = weeklyBudgets.reduce((sum, budget) => sum + budget.offset, 0);
  const tripCount = generatedLessons.filter((lesson) => lesson.mode === "Field trip").length;

  return (
    <>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="pill">CIS 576 capstone prototype</span>
            <h1 className="display mt-6">
              Plan a whole week of home-first learning.
            </h1>
            <p className="subhead mt-6 max-w-2xl">
              MicroSchool turns a child&apos;s grade, ZIP, curriculum, and current
              standard pointers into a standards-aligned weekly plan for home educators,
              co-ops, and microschools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button button-primary" href="/planner">
                Generate sample week
              </Link>
              <Link className="button button-secondary" href="/profile">
                Set up profiles
              </Link>
            </div>
          </div>
          <div className="card overflow-hidden p-6">
            <div className="rounded-[1.5rem] bg-[var(--brand-dark)] p-5 text-white">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--brand-light)]">
                This week for Maya
              </p>
              <div className="mt-6 grid gap-3">
                {generatedLessons.slice(0, 4).map((lesson) => (
                  <div
                    className="rounded-2xl bg-white/10 p-4 backdrop-blur"
                    key={`${lesson.subject}-${lesson.title}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black">{lesson.subject}</p>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[var(--brand-dark)]">
                        {lesson.minutes}m
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/78">{lesson.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid-auto">
          <StatCard label="Weekly budget" value={`${totalHours}h`} detail="Across Math, ELA, Science, PE, and custom Gardening." />
          <StatCard label="Real-life offsets" value={`${offsetHours}h`} detail="Logged activities reduce what the engine must generate." />
          <StatCard label="Field trips" value={`${tripCount}/week`} detail="Only high-value candidates spend the weekly trip quota." />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow">Product surface</p>
            <h2 className="headline mt-3">A multi-page app shaped by the PRD.</h2>
          </div>
          <div className="mt-10 grid-auto">
            {features.map((feature) => (
              <article className="soft-card p-6" key={feature.title}>
                <h3 className="text-2xl font-black tracking-[-0.04em]">{feature.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card grid gap-8 p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Weekly lesson engine</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">
                Hours become a calendar parents can edit.
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                This frontend slice models the engine contract and UX decisions, leaving
                Supabase persistence, AI calls, weather, and scored assessments as explicit
                next implementation seams.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {stages.map((stage, index) => (
                <div className="rounded-2xl bg-[var(--panel-strong)] p-4" key={stage}>
                  <p className="text-3xl font-black text-[var(--brand)]">{index + 1}</p>
                  <p className="mt-3 text-sm font-bold leading-5">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
