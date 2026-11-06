import { useState, useMemo } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/resume.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // Build the list of filter buttons from the data itself.
  // useMemo caches the result and only recomputes if its dependencies change.
  const allTags = useMemo(() => {
    const tags = new Set(projects.flatMap((p) => p.tags));
    return ["All", ...tags];
  }, []);

  // DERIVED STATE: don't store the filtered list in state, compute it from `filter`.
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section__eyebrow">Things I've built</p>
        <h2 className="section__title">Projects</h2>

        <div className="filters">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter ${filter === tag ? "active" : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {shown.map((p) => (
            <article className="card project" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a className="project__link" href={p.link} target="_blank" rel="noreferrer">
                Open project <FiArrowUpRight style={{ verticalAlign: "-2px" }} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
