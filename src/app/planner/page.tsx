import { PageHero } from "@/components/page-hero";
import { StatCard } from "@/components/stat-card";
import { generatedLessons, students, weeklyBudgets } from "@/lib/mock-data";

export default function PlannerPage() {
  const remainingHours = weeklyBudgets.reduce(
    (sum, budget) => sum + Math.max(budget.hours - budget.offset, 0),
    0
  );
  const homeLessons = generatedLessons.filter((lesson) => lesson.mode === "Home").length;
  const outdoorLessons = generatedLessons.filter((lesson) => lesson.mode !== "Home").length;

  return (
    <>
      <PageHero
        eyebrow="Lesson planner"
        title="Generate one-subject lessons from hours, pointers, and home-first rules."
        description="The original single-lesson field-trip generator remains available as the manual path. The new default generates a full day or week from student budgets and subject state."
      >
        <div className="soft-card p-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Planning for
          </p>
          <p className="mt-3 text-2xl font-black tracking-[-0.04em]">{students[0].name}</p>
          <p className="mt-1 text-[var(--muted)]">
            Grade {students[0].grade} · ZIP {students[0].zip}
          </p>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container grid-auto">
          <StatCard
            detail="After real activity offsets are subtracted from weekly budgets."
            label="Remaining"
            value={`${remainingHours}h`}
          />
          <StatCard
            detail="Home is the default when distance is 0 or local options are weak."
            label="Home lessons"
            value={`${homeLessons}`}
          />
          <StatCard
            detail="Includes PE outdoors; PE does not count against trip quota."
            label="Outdoor/trips"
            value={`${outdoorLessons}`}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card p-6">
            <p className="eyebrow">Weekly engine controls</p>
            <div className="form-grid mt-6">
              <div className="field">
                <label htmlFor="student">Student</label>
                <select defaultValue={students[0].name} id="student">
                  {students.map((student) => (
                    <option key={student.name}>{student.name}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="distance">Travel distance</label>
                <select defaultValue="5 miles" id="distance">
                  <option>0 miles</option>
                  <option>5 miles</option>
                  <option>15 miles</option>
                  <option>30 miles</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="trips">Max field trips / week</label>
                <select defaultValue="1" id="trips">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="block">Lesson block size</label>
                <select defaultValue="45-60 minutes" id="block">
                  <option>30-45 minutes</option>
                  <option>45-60 minutes</option>
                  <option>60-75 minutes</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {weeklyBudgets.map((budget) => (
                <div className="rounded-2xl bg-white p-4" key={budget.group}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-black">{budget.group}</span>
                    <span className="text-sm font-black text-[var(--brand-dark)]">
                      {Math.max(budget.hours - budget.offset, 0)}h to fill
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Budget {budget.hours}h · Offset {budget.offset}h
                  </p>
                </div>
              ))}
            </div>
            <button className="button button-primary mt-6 w-full" type="button">
              Generate week
            </button>
          </aside>

          <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Generated lesson queue</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                  Home-first with selective trips
                </h2>
              </div>
              <span className="pill">One subject per lesson</span>
            </div>
            <div className="grid gap-4">
              {generatedLessons.map((lesson) => (
                <article className="soft-card p-5" key={lesson.title}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-black text-[var(--brand-dark)]">
                        {lesson.subject} · {lesson.standard}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                        {lesson.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[var(--muted)]">
                      {lesson.mode} · {lesson.minutes}m
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{lesson.value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card grid gap-6 p-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Manual single lesson</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
                Existing field-trip generator remains intact.
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                Parents can still pick a specific standard, ZIP, and distance to generate
                one lesson without using weekly automation.
              </p>
            </div>
            <form className="form-grid">
              <div className="field">
                <label htmlFor="manual-standard">Standard</label>
                <input defaultValue="4.NF.B.3" id="manual-standard" />
              </div>
              <div className="field">
                <label htmlFor="manual-zip">ZIP</label>
                <input defaultValue={students[0].zip} id="manual-zip" />
              </div>
              <div className="field">
                <label htmlFor="manual-distance">Distance</label>
                <select defaultValue="0 miles" id="manual-distance">
                  <option>0 miles</option>
                  <option>5 miles</option>
                  <option>15 miles</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="manual-mode">Mode</label>
                <select defaultValue="Home resources" id="manual-mode">
                  <option>Home resources</option>
                  <option>Local field trip</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
