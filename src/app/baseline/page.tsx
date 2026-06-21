import { PageHero } from "@/components/page-hero";
import { subjectStates } from "@/lib/mock-data";

const methods = [
  {
    name: "Manual",
    detail: "Parent marks what the child already knows and sets the starting pointer."
  },
  {
    name: "App-generated diagnostic",
    detail: "Short quiz produces the subject pointer for Math or ELA."
  },
  {
    name: "Imported scores",
    detail: "Existing assessment results are translated into a starting standard."
  }
];

export default function BaselinePage() {
  return (
    <>
      <PageHero
        eyebrow="Baseline calibration"
        title="Math and ELA get calibrated starting points; other subjects use lighter rules."
        description="This screen models the per-student subject_state table from the PRD: current standard pointer, advancement method, and baseline source."
      >
        <div className="soft-card p-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Science note
          </p>
          <p className="mt-3 leading-7 text-[var(--muted)]">
            Science baseline remains deferred until assessments are stored, so it advances
            randomly within domain for this prototype.
          </p>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-6">
            <p className="eyebrow">Choose method</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Parent controls calibration per subject.
            </h2>
            <div className="mt-6 grid gap-4">
              {methods.map((method) => (
                <label className="soft-card flex gap-4 p-4" key={method.name}>
                  <input
                    className="mt-1 size-4 accent-[var(--brand)]"
                    defaultChecked={method.name === "App-generated diagnostic"}
                    name="method"
                    type="radio"
                  />
                  <span>
                    <span className="block font-black">{method.name}</span>
                    <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">
                      {method.detail}
                    </span>
                  </span>
                </label>
              ))}
            </div>
            <button className="button button-primary mt-6" type="button">
              Start calibration
            </button>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.05em]">
              Current subject pointers
            </h2>
            <div className="grid gap-4">
              {subjectStates.map((state) => (
                <article className="soft-card p-5" key={state.group}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-black text-[var(--brand-dark)]">{state.group}</p>
                      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                        {state.currentStandard}
                      </h3>
                    </div>
                    <span className="pill">{state.advancement}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    Baseline source: {state.baselineSource}
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
