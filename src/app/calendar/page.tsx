import { PageHero } from "@/components/page-hero";
import { activityMatches, calendarEvents } from "@/lib/mock-data";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function CalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Generated lessons autofill the week and reflow when parents edit."
        description="The calendar models engine-created lessons, parent-added events, AI educational-value checks, and activity logs that offset future weekly budgets."
      >
        <div className="soft-card p-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Reflow status
          </p>
          <p className="mt-3 text-2xl font-black tracking-[-0.04em]">Targets preserved</p>
          <p className="mt-1 text-[var(--muted)]">PE offset applied from parent log</p>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Sample week</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                Autofilled schedule
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="pill">Weather-aware outdoor blocks</span>
              <span className="pill">Editable events</span>
            </div>
          </div>
          <div className="calendar-grid">
            {days.map((day) => (
              <div className="calendar-day" key={day}>
                <div className="flex items-center justify-between">
                  <h3 className="font-black">{day}</h3>
                  <button
                    className="rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-black text-[var(--brand-dark)]"
                    type="button"
                  >
                    Edit
                  </button>
                </div>
                {calendarEvents
                  .filter((event) => event.day === day)
                  .map((event) => (
                    <div className={`event event-${event.mode}`} key={`${event.day}-${event.title}`}>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                        {event.time} · {event.minutes}m
                      </p>
                      <p className="mt-2 font-black leading-5">{event.title}</p>
                      <p className="mt-1 text-xs font-bold text-[var(--muted)]">
                        {event.subject} · {event.source}
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-6">
            <p className="eyebrow">Add found event</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              Parent events can earn educational credit.
            </h2>
            <form className="mt-6 grid gap-4">
              <div className="field">
                <label htmlFor="event-name">Event or activity</label>
                <input defaultValue="Farmers market price comparison" id="event-name" />
              </div>
              <div className="field">
                <label htmlFor="event-notes">Notes for AI matching</label>
                <textarea
                  defaultValue="Maya compared prices by weight and estimated the best value for apples."
                  id="event-notes"
                />
              </div>
              <button className="button button-primary" type="button">
                Evaluate educational value
              </button>
            </form>
          </div>

          <div>
            <p className="eyebrow">Activity-to-standard matching</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">
              AI returns real standard codes, confidence, and offset hours.
            </h2>
            <div className="mt-6 grid gap-4">
              {activityMatches.map((match) => (
                <article className="soft-card p-5" key={match.activity}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-black text-[var(--brand-dark)]">
                        {match.subject} · {match.matchedStandard}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.03em]">
                        {match.activity}
                      </h3>
                    </div>
                    <span className="pill">{match.creditedHours}h credit</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    Confidence {match.confidence} · Assessment value: {match.assessmentValue}
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
