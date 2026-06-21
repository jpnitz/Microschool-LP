import { PageHero } from "@/components/page-hero";
import { standards, students } from "@/lib/mock-data";

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum & standards"
        title="Add official standards or generate custom curricula from interests."
        description="The PRD calls for grade-filtered Common Core / standards browsing plus custom, standalone AI-generated curricula that are ordered chronologically from the start."
      >
        <div className="soft-card p-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Active student
          </p>
          <p className="mt-3 text-2xl font-black tracking-[-0.04em]">{students[0].name}</p>
          <p className="mt-1 text-[var(--muted)]">
            Grade {students[0].grade} standards filtered automatically
          </p>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card p-6">
            <p className="eyebrow">Generate custom curriculum</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Parent-initiated interests become sequenced standards.
            </h2>
            <form className="mt-6 grid gap-4">
              <div className="field">
                <label htmlFor="interest">Interest prompt</label>
                <textarea
                  defaultValue="I'd like my child to study gardening with practical at-home projects."
                  id="interest"
                />
              </div>
              <div className="field">
                <label htmlFor="length">Sequence length</label>
                <select defaultValue="6 standards" id="length">
                  <option>4 standards</option>
                  <option>6 standards</option>
                  <option>10 standards</option>
                </select>
              </div>
              <button className="button button-primary" type="button">
                Draft custom standards
              </button>
            </form>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              Future seam: call an AI service, persist generated standards directly to
              curricula, then optionally cross-walk to official codes.
            </p>
          </aside>

          <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-3xl font-black tracking-[-0.05em]">Selected standards</h2>
              <div className="flex gap-2">
                <span className="pill">Grade {students[0].grade}</span>
                <span className="pill">{standards.length} active</span>
              </div>
            </div>
            <div className="grid gap-4">
              {standards.map((standard) => (
                <article className="soft-card p-5" key={standard.code}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-black text-[var(--brand-dark)]">
                        {standard.code} · {standard.subject}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                        {standard.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[var(--muted)]">
                      {standard.source}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    Group: {standard.group} · Sequence position {standard.sequence}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
