import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { sections, profile } from "../data/resume.js";

// PROPS: data passed from parent to child. Destructured here in the parameter list.
// Props are read-only: a child never changes them, it calls a function prop
// (onToggleTheme) and lets the parent change its own state.
export default function Navbar({ activeId, theme, onToggleTheme }) {
  // Local state: only the Navbar cares whether the mobile menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand">
          {profile.name.split(" ")[0]}
          <span>.</span>
        </a>

        {/* Conditional CSS class: template string + ternary */}
        <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
          {/* Rendering a LIST: map() turns data into elements. `key` must be unique and stable. */}
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={activeId === s.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle colour theme">
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="icon-btn navbar__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
