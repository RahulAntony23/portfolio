// ONE place for all your content.
// Components never hard-code text: they receive this data and render it.
// To update the site after a job change, you only edit this file.

export const profile = {
  name: "Rahul Antony J",
  title: "Full Stack Engineer",
  tagline: "Cloud-certified · Microservices · AI tooling",
  location: "Bangalore, India",
  email: "rahulantony003@gmail.com",
  phone: "+91 8861083150",
  whatsapp: "https://wa.me/918861083150",
  linkedin: "https://linkedin.com/in/rahul-antony-7a83b320b",
  github: "https://github.com/", // TODO: put your real GitHub profile URL here
  resumeUrl: "/Rahul_Antony_Resume.pdf", // put the PDF in the /public folder
  photo: "/profile.jpg", // put your photo in the /public folder
  summary:
    "Cloud Certified Full Stack Engineer specializing in scalable microservices, cloud infrastructure, and AI tool integrations. Proficient in building robust RESTful APIs, web applications, and database optimization, with hands-on experience on AWS, Azure, Docker, and Kafka.",
  summary2:
    "I enjoy working with cross-functional teams in Agile environments to bridge complex AI backend infrastructure with seamless frontend developer tooling.",
};

// Navbar + scroll-spy both read from this list.
// `id` must match the id="" of the <section> in each component.
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "3+", label: "Years building software" },
  { value: "3", label: "Cloud certifications" },
  { value: "Gold", label: "Java Star, HackerRank" },
  { value: "100+", label: "LeetCode problems solved" },
];

export const experience = [
  {
    role: "Software Engineer II",
    company: "Capgemini",
    place: "Bangalore, India",
    period: "Dec 2025 – Present",
    points: [
      "Engineered Google Apps Script integrations to automate complex internal document workflows, significantly reducing manual data entry and processing time.",
      "Developed a containerized full-stack chatbot using Docker, with a Python-powered Retrieval-Augmented Generation (RAG) backend and a responsive Angular frontend.",
      "Architected a Python/FastAPI service and a TypeScript extension that securely log AI usage metrics and surface real-time, contextual prompt suggestions to developers.",
      "Mentored junior developers on React/Angular and Java best practices, and reviewed code to keep deliverables high quality.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Capgemini",
    place: "Bangalore, India",
    period: "Jan 2024 – Nov 2025",
    points: [
      "Optimized NVIDIA NAO firmware using gNMI for Spring Network Servers, improving stability and reducing telemetry latency.",
      "Designed and deployed Kafka middleware to streamline data pipelines between server instances and Docker apps, cutting communication latency by 120 ms.",
      "Built a containerized proof-of-concept text-summarizing LLM tool with Python, PyTorch, Transformer models, and Docker.",
      "Architected modular React UI components and integrated applets to enable independent deployment.",
      "Implemented HighCharts and AG Grid for the NVIDIA Ethernet interface, enabling advanced sorting and filtering for large-scale data.",
    ],
  },
  {
    role: "Full Stack Engineer (Apprenticeship)",
    company: "Crezam",
    place: "Bangalore, India",
    period: "Oct 2023 – Jan 2024",
    points: [
      "Maintained Crezam's Flutter frontend and reduced app load time by 3 seconds for a smoother user experience.",
      "Refactored the UI into reusable widgets and optimized widget trees, cutting cold-start time by 15% for daily users.",
      "Improved backend performance with Spring Boot REST services and robust error handling, lowering average API response times.",
      "Optimized database operations with Redis to speed up reads and writes and keep the platform stable during peak traffic.",
      "Redesigned state management with Riverpod, defining clear provider hierarchies to reduce debugging cycles and regressions.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Angular", "React", "Svelte", "Spring Boot", "Node.js", "FastAPI", "Flask", "Flutter"],
  },
  {
    title: "DevOps & Cloud",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Kafka"],
  },
  {
    title: "Backend & Architecture",
    items: ["Microservices", "Event-Driven Architecture", "REST APIs", "gRPC / gNMI", "Redis"],
  },
  {
    title: "AI & ML",
    items: ["PyTorch", "RAG", "LLMs", "Transformers"],
  },
];

// Links for the projects are placeholders: replace "#" with your repo / demo URLs.
export const projects = [
  {
    title: "CZMAPP",
    description: "A community thread-sharing mobile app built with Flutter.",
    tags: ["Flutter", "Dart", "Mobile"],
    link: "#",
  },
  {
    title: "CZMAPP Server",
    description:
      "Backend for CZMAPP using Spring Boot, MySQL, and JPA for REST APIs and data handling.",
    tags: ["Spring Boot", "MySQL", "JPA"],
    link: "#",
  },
  {
    title: "Q'Do'or Registration Server",
    description:
      "Client registration service for the Q'Do'or project, written with Node.js and Express.",
    tags: ["Node.js", "Express"],
    link: "#",
  },
  {
    title: "Q'Do'or Mobile App",
    description: "Flutter app for QR-based deployment, part of the Q'Do'or project.",
    tags: ["Flutter", "QR"],
    link: "#",
  },
];

export const certifications = [
  {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    link: "https://learn.microsoft.com/en-us/users/rahulantony-5390/credentials/72641e21455ced34",
    featured: true,
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/3199bb37-ece4-4034-a453-3cf81a811322/public_url",
    featured: true,
  },
  {
    title: "Professional Cloud Network Engineer",
    issuer: "Google Cloud",
    link: "https://www.credly.com/badges/26a6c2b2-0c7b-43d6-887b-95657d19f09b/linked_in",
    featured: true,
  },
  { title: "Java", issuer: "HackerRank", link: "#" },
  { title: "JavaScript", issuer: "HackerRank", link: "#" },
  { title: "Python for Data Science", issuer: "Coursera", link: "#" },
  { title: "Artificial Intelligence", issuer: "IBM", link: "#" },
  { title: "Frontend Development", issuer: "Edyoda", link: "#" },
  { title: "Cybersecurity", issuer: "Cisco Networking Academy", link: "#" },
];

export const education = {
  degree: "B.E. in Computer Science",
  school: "Presidency University, Bangalore",
  year: "November 2023",
};

export const volunteering = {
  role: "Technical Volunteer",
  org: "Best People Foundation, Bengaluru",
  text: "Set up Raspberry Pi infrastructure in government schools and taught introductory Python to underprivileged students, helping bridge the digital divide.",
};
