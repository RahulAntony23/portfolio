import { useState } from "react";
import { FiLinkedin, FiGithub, FiMail, FiDownload } from "react-icons/fi";
import { profile } from "../data/resume.js";

// Avatar shows your photo, and falls back to initials if the image file is missing.
// This demonstrates state + event handlers (onError) + conditional rendering.
function Avatar() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="avatar">
      {failed ? (
        <span className="avatar__initials">{initials}</span>
      ) : (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setFailed(true)} />
      )}
    </div>
  );
}

export default function Header() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__hello">Hi, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            {profile.title} · {profile.tagline}
          </p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#contact">
              <FiMail /> Let's Talk
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl} download>
              <FiDownload /> Get Resume
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <Avatar />
        </div>
      </div>
    </section>
  );
}
