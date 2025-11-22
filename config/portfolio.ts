export const portfolioConfig = {
  personal: {
    name: "Aditya Rana",
    title: "Full Stack Developer • Competitive Programmer",
    tagline: "Building intelligent, scalable, and impactful digital systems",
    bio: "Full-stack developer and competitive programmer skilled in modern web technologies, AI integrations, and backend architecture. I love building fast, scalable, and user-centric applications and solving complex technical problems.",
    email: "adityaranawork111@gmail.com",
    phone: "",
    location: "Pune, Maharashtra, India",
    avatar:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",
    resume: "https://drive.google.com/file/d/1bkruanMwy-fELM2IBl-V2ER1QqDDL91P/view?usp=sharing",
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
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["MERN", "Gemini AI", "Inngest", "Tailwind", "WebSockets"],
      demoUrl: "",
      githubUrl: "https://github.com/ARCoder181105",
      featured: true,
    },
    {
      id: 2,
      title: "Document Insight & Engagement System",
      description:
        "Converted PDF libraries into an AI-driven knowledge base with semantic search, contradiction detection, hybrid retrieval, Azure TTS summaries, and interactive PDF viewing. Fully dockerized for production deployment.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "TypeScript", "Flask", "ChromaDB", "Azure TTS", "Docker"],
      demoUrl: "",
      githubUrl: "https://github.com/ARCoder181105",
      featured: true,
    },
    {
      id: 3,
      title: "VolunFlow – Volunteer & NGO Platform",
      description:
        "A full-stack volunteer–NGO management system with real-time event discovery, GraphQL API, automated workflows (n8n), Cloudinary media support, and containerized backend.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: [
        "React",
        "Node.js",
        "GraphQL",
        "Prisma",
        "MongoDB",
        "Docker",
        "Cloudinary",
      ],
      demoUrl: "",
      githubUrl: "https://github.com/ARCoder181105",
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