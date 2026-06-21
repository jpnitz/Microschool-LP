import { PageHero } from "@/components/page-hero";
import { educator, students } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Login & profile"
        title="Student grade and ZIP become shared planning context."
        description="This page models authentication-adjacent profile management for parents, facilitators, and students. Downstream pages pull the selected student's grade and ZIP automatically."
      >
        <div className="soft-card p-5">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Signed in as
          </p>
          <p className="mt-3 text-2xl font-black tracking-[-0.04em]">{educator.name}</p>
          <p className="mt-1 text-[var(--muted)]">{educator.role}</p>
        </div>
      </PageHero>

      <section className="section-tight">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form className="card p-6">
            <p className="eyebrow">Parent / facilitator</p>
            <div className="form-grid mt-6">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input defaultValue={educator.name} id="name" />
              </div>
              <div className="field">
                <label htmlFor="role">Role</label>
                <select defaultValue={educator.role} id="role">
                  <option>Home educator</option>
                  <option>Co-op parent</option>
                  <option>Microschool facilitator</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input defaultValue={educator.email} id="email" type="email" />
              </div>
            </div>
            <button className="button button-primary mt-6" type="button">
              Save profile
            </button>
          </form>

          <div className="grid gap-4">
            {students.map((student) => (
              <article className="card p-6" key={student.name}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="eyebrow">Student</p>
                    <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                      {student.name}
                    </h2>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{student.learningStyle}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="pill">Grade {student.grade}</span>
                    <span className="pill">ZIP {student.zip}</span>
                  </div>
                </div>
              </article>
            ))}
            <form className="soft-card p-6">
              <p className="text-xl font-black tracking-[-0.04em]">Add another student</p>
              <div className="form-grid mt-5">
                <div className="field">
                  <label htmlFor="student-name">Name</label>
                  <input id="student-name" placeholder="Student name" />
                </div>
                <div className="field">
                  <label htmlFor="grade">Grade</label>
                  <select id="grade" defaultValue="">
                    <option disabled value="">
                      Select grade
                    </option>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="zip">ZIP</label>
                  <input id="zip" inputMode="numeric" placeholder="37206" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
