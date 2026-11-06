import { useState, useEffect } from "react";

// A CUSTOM HOOK: a plain function whose name starts with "use" and which calls
// other hooks. It lets us reuse stateful logic (here: "which section is on screen?")
// without copy-pasting it into every component.
//
// This is what links the Navbar to the page sections, like your old site did.
export default function useActiveSection(sectionIds) {
  // useState: remember a value between renders. Changing it re-renders the component.
  const [activeId, setActiveId] = useState(sectionIds[0]);

  // useEffect: run code AFTER render, for things outside React (DOM, timers, APIs).
  // The dependency array [sectionIds] says: re-run only if sectionIds changes.
  useEffect(() => {
    // IntersectionObserver is a browser API that tells us when an element
    // enters or leaves the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Trigger when a section crosses the middle band of the screen.
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // CLEANUP: the function we return runs when the component unmounts
    // (or before the effect re-runs). Always undo what you set up.
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
