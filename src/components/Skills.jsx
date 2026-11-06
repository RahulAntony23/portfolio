import { skillGroups } from "../data/resume.js";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <p className="section__eyebrow">What I work with</p>
        <h2 className="section__title">Skills</h2>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
