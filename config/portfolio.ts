export const portfolioConfig = {
  personal: {
    name: "Aditya Rana",
    title: "Full Stack Developer • Competitive Programmer",
    tagline: "Building intelligent, scalable, and impactful digital systems",
    bio: "Full-stack developer and competitive programmer skilled in modern web technologies, AI integrations, and backend architecture. I love building fast, scalable, and user-centric applications and solving complex technical problems.",
    email: "adityaranawork111@gmail.com",
    phone: "",
    location: "Pune, Maharashtra, India",
    avatar: "me.jpg",
    resume:
      "https://drive.google.com/file/d/1bkruanMwy-fELM2IBl-V2ER1QqDDL91P/view?usp=sharing",
  },

  social: {
    github: "https://github.com/ARCoder181105",
    linkedin: "https://linkedin.com/in/adityaranait",
    twitter: "https://x.com/rana61618",
    // website: "https://yourwebsite.com",
  },

  about: {
    introduction:
      "I'm a full-stack developer specializing in the MERN stack, backend systems, AI integrations, and scalable architectures. I’ve built production-ready platforms, automated workflow systems, and AI-powered applications that significantly reduce manual effort and improve user efficiency.",
    highlights: [
      "Finalist at Adobe India Hackathon 2025",
      "700+ DSA problems solved across Codeforces, LeetCode, CodeChef",
      "Experience building AI-powered automation systems",
      "Strong backend engineering & API integration expertise",
      "Mentor at GirlScript Summer of Code (GSSoC)",
    ],
  },

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Python", level: 80 },
        { name: "Go", level: 75 },
        { name: "Java", level: 70 },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 75 },
        { name: "Socket.io", level: 80 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Inngest", level: 80 },
        { name: "ChromaDB", level: 75 },
        { name: "n8n Automation", level: 80 },
        { name: "Adobe PDF Embed API", level: 75 },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Ticket Management System",
      description:
        "An automated ticketing system using Gemini AI for issue extraction, smart triaging, and category prediction. Includes automated background jobs, email workflows, and real-time dashboards.",
      image: "ai-agent.png",
      tags: ["MERN", "Gemini AI", "Inngest", "Tailwind", "WebSockets"],
      demoUrl: "https://full-stack-ai-agent-frontend.onrender.com/",
      githubUrl: "https://github.com/ARCoder181105/Full-Stack-AI-Agent",
      featured: true,
    },
    {
      id: 2,
      title: "Document Insight & Engagement System",
      description:
        "Converted PDF libraries into an AI-driven knowledge base with semantic search, contradiction detection, hybrid retrieval, Azure TTS summaries, and interactive PDF viewing. Fully dockerized for production deployment.",
      image: "pdf-rag.png",
      tags: ["React", "TypeScript", "Flask", "ChromaDB", "Azure TTS", "Docker"],
      demoUrl: "https://github.com/ARCoder181105/RAG-Powered-Doc-Explorer",
      githubUrl: "https://github.com/ARCoder181105/RAG-Powered-Doc-Explorer",
      featured: true,
    },
    {
      id: 3,
      title: "VolunFlow – Volunteer & NGO Platform",
      description:
        "A full-stack volunteer–NGO management system with real-time event discovery, GraphQL API, automated workflows (n8n), Cloudinary media support, and containerized backend.",
      image: "volunflow.png",
      tags: [
        "React",
        "Node.js",
        "GraphQL",
        "Prisma",
        "MongoDB",
        "Docker",
        "Cloudinary",
      ],
      demoUrl: "https://volunflow.onrender.com/",
      githubUrl: "https://github.com/ARCoder181105/VolunFlow",
      featured: true,
    },
    {
      id: 4,
      title: "SubTracker - Smart Subscription Manager",
      description:
        "A full-stack subscription tracking platform featuring automated email reminders, multi-currency support, and expense analytics. Built with React 19, Node.js, and secure OAuth authentication.",
      image: "subTracker.png",
      tags: [
        "React 19",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Passport.js",
        "NodeMailer",
      ],
      demoUrl: "https://subscription-tracker-frontend-1.onrender.com/",
      githubUrl:
        "https://github.com/ARCoder181105/Subscription-tracker-frontend",
      featured: true,
    },
    {
      id: 5,
      title: "LinkLy - Advanced URL Shortener",
      description:
        "A full-stack URL management platform featuring secure admin authentication, real-time click analytics, and visitor tracking. Includes a responsive dashboard for managing links and viewing traffic data.",
      image: "image.png",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      demoUrl: "https://url-shortner-react.onrender.com/",
      githubUrl: "https://github.com/ARCoder181105/url_shortner_react",
      featured: false,
    },
    {
      id: 6,
      title: "Tourist Safety Platform - Web3 Ecosystem",
      description:
        "A decentralized safety ecosystem combining real-time location tracking, emergency alerts, and immutable incident reporting on the Avalanche blockchain. Features a tourist web app and authority admin portal.",
      image:
        "tourist.png",
      tags: [
        "React",
        "Node.js",
        "Solidity",
        "Avalanche",
        "Socket.io",
        "MongoDB",
      ],
      demoUrl: "https://drive.google.com/file/d/1A71RU26qBpq1LqmqxfbW2v8UaIvZGQGZ/view?usp=sharing",
      githubUrl: "https://github.com/ARCoder181105/tourist-safety-project",
      featured: true,
    },
  ],

  experience: [
    {
      id: 1,
      company: "GirlScript Summer of Code (GSSoC)",
      position: "Mentor",
      location: "Remote",
      startDate: "July 2025",
      endDate: "Present",
      description:
        "Guiding open-source contributors, reviewing PRs, and helping developers build real-world projects.",
      achievements: [
        "Mentored contributors across multiple full-stack projects",
        "Reviewed technical PRs and maintained backend code quality",
      ],
    },
    {
      id: 2,
      company: "Adobe India Hackathon '25",
      position: "Hackathon Finalist",
      location: "India",
      startDate: "2025",
      endDate: "2025",
      description:
        "Selected among top teams nationally for building innovative AI-enabled document insight systems.",
      achievements: [
        "Implemented high-performance hybrid retrieval pipelines",
        "Designed scalable backend architecture under strict deadlines",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.E. in Computer Engineering",
      institution: "Army Institute of Technology, Pune",
      location: "Pune, Maharashtra",
      year: "2024 – 2028",
      description: "CGPA: 9.36",
    },
    {
      id: 2,
      degree: "XII (CBSE)",
      institution: "Army Public School, Bangalore",
      location: "Karnataka",
      year: "2023",
      description: "Percentage: 93.2%",
    },
  ],

  certifications: [
    "MERN Stack Developer Certification – Udemy",
    "Postman API Fundamentals Student Expert – Postman",
  ],
};

export type PortfolioConfig = typeof portfolioConfig;
