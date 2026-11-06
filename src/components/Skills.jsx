const skillGroups = [
  {
    title: "Concepts",
    items: [
      { name: "Data Structures", level: "Experienced", icon: "▣" },
      { name: "Algorithms", level: "Experienced", icon: "⟡" },
      { name: "Object Oriented Programming", level: "Experienced", icon: "◫" },
      { name: "Database Management System", level: "Experienced", icon: "▤" },
      { name: "Web Design", level: "Intermediate", icon: "◧" },
      { name: "App Development", level: "Intermediate", icon: "▥" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Java", level: "Experienced", icon: "☕" },
      { name: "Python", level: "Experienced", icon: "◈" },
      { name: "JavaScript", level: "Experienced", icon: "JS" },
      { name: "MySQL", level: "Intermediate", icon: "▦" },
      { name: "HTML + CSS", level: "Experienced", icon: "<>" },
      { name: "GO / C#", level: "Intermediate", icon: "{}" },
    ],
  },
  {
    title: "Technologies",
    items: [
      { name: "React", level: "Experienced", icon: "⟲" },
      { name: "Flutter", level: "Experienced", icon: "⌁" },
      { name: "Node.JS", level: "Experienced", icon: "◍" },
      { name: "PHP", level: "Experienced", icon: "◐" },
      { name: "MongoDB", level: "Intermediate", icon: "◌" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="skills-shell">
        <aside className="skills-rail" aria-label="Quick navigation">
          <button className="rail-btn active" aria-label="Home">⌂</button>
          <button className="rail-btn" aria-label="Menu">◌</button>
          <button className="rail-btn" aria-label="Code">✦</button>
          <button className="rail-btn" aria-label="Projects">▣</button>
          <button className="rail-btn" aria-label="Info">◍</button>
        </aside>

        <div className="skills-content">
          <div className="skills-header">
            <p className="skills-kicker">What I Do</p>
            <h2 className="skills-title">My Skills</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skills-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span className="skill-icon" aria-hidden="true">{item.icon}</span>
                      <div className="skill-copy">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-level">{item.level}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
