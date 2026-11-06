import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useActiveSection from "./hooks/useActiveSection.js";
import { sections } from "./data/resume.js";


const sectionIds = sections.map((s) => s.id);

// App is the ROOT component. It owns the state that several children need
// (theme + active section) and passes it down as PROPS.
export default function App() {
  const activeId = useActiveSection(sectionIds);

  // Lazy initial state: the function runs only on the first render.
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    } catch {
      /* storage blocked: fall through to the default */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Whenever `theme` changes, sync it to the <html> tag (CSS reads it)
  // and remember it for the next visit.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
      <Navbar activeId={activeId} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
