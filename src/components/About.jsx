import { profile, stats, education, volunteering } from "../data/resume.js";

// A small reusable component. It takes ONE job: render a stat card.
// Splitting UI into small components is the core habit of React.
function StatCard({ value, label }) {
  return (
    <div className="card stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <p className="section__eyebrow">Get to know me</p>
        <h2 className="section__title">About</h2>

        <div className="about__grid">
          <div>
            <p>{profile.summary}</p>
            <p>{profile.summary2}</p>

            <div className="about__facts">
              <div>
                <h4>Education</h4>
                <p>
                  {education.degree}, {education.school} ({education.year})
                </p>
              </div>
              <div>
                <h4>Volunteering</h4>
                <p>
                  {volunteering.role}, {volunteering.org}. {volunteering.text}
                </p>
              </div>
            </div>
          </div>

          <div className="stats">
            {stats.map((s) => (
              // Spread syntax passes every field of `s` as a prop: value=... label=...
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
