import { certifications } from "../data/resume.js";

function CertCard({ cert }) {
  return (
    <div className={`card cert ${cert.featured ? "cert--featured" : ""}`}>
      <span className="cert__issuer">{cert.issuer}</span>
      <h3>{cert.title}</h3>
      <a href={cert.link} target="_blank" rel="noreferrer">
        View certificate
      </a>
    </div>
  );
}

export default function Certifications() {
  // Split one array into two lists with filter().
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section section--alt">
      <div className="container">
        <p className="section__eyebrow">Don't trust me, verify</p>
        <h2 className="section__title">Certifications</h2>

        <div className="certs__grid">
          {featured.map((c) => (
            <CertCard key={c.title} cert={c} />
          ))}
        </div>

        <h3 className="certs__sub">More learning</h3>
        <div className="certs__grid">
          {others.map((c) => (
            <CertCard key={c.title + c.issuer} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
