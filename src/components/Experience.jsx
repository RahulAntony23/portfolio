import { useState } from "react";
import { experience } from "../data/resume.js";

// Each job card has its OWN expanded/collapsed state.
// Because it is its own component, every instance gets independent state.
function Job({ job, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const visible = open ? job.points : job.points.slice(0, 2);

  return (
    <li className="timeline__item">
      <article className="card">
        <div className="job__head">
          <h3 className="job__role">{job.role}</h3>
          <span className="job__period">{job.period}</span>
        </div>
        <div className="job__company">
          {job.company} · {job.place}
        </div>

        <ul className="job__points">
          {visible.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        {job.points.length > 2 && (
          <button className="job__toggle" onClick={() => setOpen(!open)}>
            {open ? "Show less" : `Show all ${job.points.length}`}
          </button>
        )}
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section__eyebrow">Where I've worked</p>
        <h2 className="section__title">Experience</h2>

        <ul className="timeline">
          {experience.map((job, index) => (
            // The most recent job (index 0) starts expanded.
            <Job key={job.role + job.period} job={job} defaultOpen={index === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}
