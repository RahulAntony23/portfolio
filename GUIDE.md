# React Refresher: learn it by reading your own portfolio

Work through the lessons in order. Each one points at a real file in this project.
After each lesson, do the "Try it" exercise before moving on.

## 0. Run it

```bash
npm install
npm run dev        # open the URL it prints (usually http://localhost:5173)
```

Vite is the dev server and bundler. Edit a file, save, and the browser updates instantly.

## 1. What React actually is

React turns **data into UI**. You describe what the screen should look like for the current data, and React updates the real DOM when the data changes.

Project layout:

```
src/
  main.jsx            entry point: mounts <App /> into index.html's #root
  App.jsx             root component
  data/resume.js      all your content (plain JS objects/arrays)
  hooks/              custom hooks
  components/         one file per UI piece
  index.css           styling
```

`main.jsx` is the only place React touches the page:
`ReactDOM.createRoot(document.getElementById("root")).render(<App />)`.

## 2. Components and JSX  (`Footer.jsx`, `Skills.jsx`)

A **component** is a function that returns UI. Its name starts with a capital letter.

```jsx
export default function Footer() {
  return <footer>© {new Date().getFullYear()}</footer>;
}
```

**JSX** looks like HTML but is JavaScript. Rules to remember:

- Return one root element (or a fragment `<>...</>`).
- `class` is written `className`; `for` is `htmlFor`.
- Put JavaScript expressions inside `{ }`.
- Every tag closes: `<img />`, `<input />`.

**Try it:** in `Footer.jsx`, add your city from `profile.location`.

## 3. Props: passing data down  (`Navbar.jsx`, `About.jsx`)

Props are a component's inputs, like function arguments.

```jsx
<StatCard value="3+" label="Years building software" />

function StatCard({ value, label }) { ... }   // destructure the props object
```

Rules: props flow **down** (parent to child) and are **read-only**. To let a child ask the parent to change something, the parent passes a **function** as a prop, as `App` does with `onToggleTheme`.

**Try it:** add a `highlight` prop to `StatCard` that adds a CSS class when true.

## 4. Rendering lists with `map` and `key`  (`Skills.jsx`, `Navbar.jsx`)

```jsx
{skillGroups.map((group) => (
  <div key={group.title}>...</div>
))}
```

`key` must be **unique among siblings and stable** (an id or title, not usually the array index). React uses it to track which item is which.

**Try it:** add a new skill group in `data/resume.js` and watch a card appear with zero component changes. That is the payoff of separating data from UI.

## 5. State with `useState`  (`Experience.jsx`, `Header.jsx`)

State is memory that belongs to a component. Changing it re-renders.

```jsx
const [open, setOpen] = useState(false);
<button onClick={() => setOpen(!open)}>...</button>
```

Key rules:

1. Never mutate state directly (`open = true` does nothing). Always call the setter.
2. The setter schedules a re-render; the new value is visible on the **next** render.
3. When the new value depends on the old one, use the function form: `setOpen(o => !o)`.
4. Each component **instance** has its own state. That is why every `Job` card expands independently.

**Try it:** make Experience start with all jobs collapsed.

## 6. Conditional rendering  (`Header.jsx`, `Experience.jsx`, `Contact.jsx`)

Three patterns you will use constantly:

```jsx
{failed ? <Initials /> : <img />}          // either/or
{job.points.length > 2 && <button />}      // show only if true
className={active ? "active" : ""}         // conditional class
```

## 7. Events  (`Navbar.jsx`, `Projects.jsx`)

Pass a **function**, do not call it: `onClick={() => setFilter(tag)}`.
Writing `onClick={setFilter(tag)}` would run it during render, a classic bug.

## 8. Derived state  (`Projects.jsx`)

Do not store something in state if you can compute it from other state.

```jsx
const shown = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));
```

Only `filter` is state. `shown` is calculated every render. Fewer states means fewer bugs.

`useMemo` (used for `allTags`) caches an expensive calculation. It is an optimization, not a requirement. Reach for it only when something is actually slow.

## 9. Forms: controlled inputs  (`Contact.jsx`)

```jsx
const [values, setValues] = useState({ name: "", email: "", ... });

<input name="name" value={values.name} onChange={handleChange} />

const handleChange = (e) => {
  const { name, value } = e.target;
  setValues(prev => ({ ...prev, [name]: value }));
};
```

React state is the single source of truth for what is in the input. `{ ...prev, [name]: value }` copies the old object and overrides one key, because state objects must be replaced, not edited.

`e.preventDefault()` in `handleSubmit` stops the browser reloading the page.

## 10. Refs with `useRef`  (`Contact.jsx`)

A ref holds a value that **persists across renders without causing one**. Its most common use is a handle to a DOM element:

```jsx
const formRef = useRef(null);
<form ref={formRef}> ...
emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, ...)
```

`formRef.current` is the real `<form>` DOM node after mount.

## 11. Effects with `useEffect`  (`App.jsx`, `useActiveSection.js`)

Effects run **after** render and are for syncing with things outside React: the DOM, browser APIs, timers, network.

```jsx
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);
```

The **dependency array** controls when it runs:

| Array     | Runs                          |
|-----------|-------------------------------|
| omitted   | after every render            |
| `[]`      | once, after the first render  |
| `[theme]` | first render + when `theme` changes |

**Cleanup:** return a function to undo setup (`observer.disconnect()`). It runs on unmount and before the effect re-runs. Forgetting cleanup causes leaks and duplicate listeners.

Note: in dev, `<React.StrictMode>` runs effects twice on purpose to expose missing cleanups. This is normal.

## 12. Custom hooks  (`hooks/useActiveSection.js`)

A custom hook is a function starting with `use` that calls other hooks. It packages reusable **stateful logic**.

`useActiveSection(ids)` returns the id of the section currently on screen. It combines `useState` + `useEffect` + the browser's `IntersectionObserver`. This is the modern replacement for how you linked the navbar to the pages in your 2024 version.

Rules of Hooks: call hooks only at the top level of a component or hook (never inside `if`, loops, or nested functions), and only from React functions.

## 13. Lifting state up and how the navbar is linked  (`App.jsx` + `Navbar.jsx`)

Two components need the same information, so the **closest common parent** owns it:

```
App  (owns: activeId via hook, theme via useState)
 ├─ Navbar   gets activeId, theme, onToggleTheme  -> highlights link, shows sun/moon
 └─ main
     ├─ Header   <section id="home">
     ├─ About    <section id="about">
     └─ ...
```

The link between the navbar and sections is the shared `id`: `sections` in `data/resume.js` lists ids, the navbar renders `href="#about"`, and each section component has `id="about"`. The hook watches those ids and reports which is visible.

## 14. Environment variables and EmailJS

1. Create a free account at emailjs.com, add an email service, and create a template.
2. In the template, use variables matching the input names: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`.
3. Copy `.env.example` to `.env` and fill in your Service ID, Template ID, and Public Key.
4. Restart `npm run dev` (Vite only reads `.env` at startup).

Vite exposes only variables prefixed with `VITE_`, via `import.meta.env`. The EmailJS public key is designed to be public; do not put private keys in front-end code.

## 15. Theming without re-rendering everything  (`index.css`)

Colors live in CSS variables (`--bg`, `--accent`...). `App` sets `data-theme="dark"` on `<html>`, and CSS swaps the whole palette. React changes one attribute, and CSS does the rest.

## Where to go next

Exercises, in rough order of difficulty:

1. Add a "Volunteering" card to `Experience`.
2. Add a `Reveal` component that fades sections in using `IntersectionObserver` (reuse what you learned in lesson 12).
3. Move `useState` + `localStorage` for the theme into a `useLocalStorage` custom hook.
4. Add React Router for a `/projects/:slug` detail page.
5. Add TypeScript (`npm create vite@latest` with the `react-ts` template shows the setup).
6. Write a test for `Projects` filtering with Vitest + React Testing Library.

## Common mistakes checklist

- Calling a function in an event prop instead of passing it.
- Mutating state (`arr.push(x)`) instead of making a new array.
- Missing or index-based `key` on lists that reorder.
- Missing dependencies in `useEffect` arrays.
- Putting derived values in state.
- Forgetting to restart Vite after editing `.env`.

## Before you deploy

- Put your photo at `public/profile.jpg` and your resume at `public/Rahul_Antony_Resume.pdf`.
- Fill in the real GitHub URL, project links, and the older certificate links in `src/data/resume.js` (search for `#` and `TODO`).
- Add EmailJS keys to your host's environment settings (Netlify: Site settings, Environment variables), then `npm run build` and deploy the `dist` folder.
