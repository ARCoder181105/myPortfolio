export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    tagline: "Building exceptional digital experiences",
    bio: "Passionate developer with expertise in modern web technologies. I create elegant solutions to complex problems and love turning ideas into reality through clean, efficient code.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",
  },

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    website: "https://yourwebsite.com",
  },

  about: {
    introduction: "I'm a passionate full-stack developer with over 5 years of experience in building web applications. I specialize in React, Next.js, and Node.js, with a strong focus on creating user-friendly interfaces and scalable backend systems.",
    highlights: [
      "5+ years of professional experience",
      "Led multiple successful projects from concept to deployment",
      "Strong focus on performance and user experience",
      "Continuous learner and tech enthusiast",
    ],
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
        { name: "Jest", level: 85 },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduled posting, and engagement metrics.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, weather alerts, and interactive maps.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "TypeScript", "API Integration", "Mapbox"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
  ],

  experience: [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      startDate: "Jan 2022",
      endDate: "Present",
      description: "Leading frontend development team, architecting scalable React applications, and mentoring junior developers.",
      achievements: [
        "Improved application performance by 40%",
        "Led migration to Next.js, reducing load times by 60%",
        "Mentored 5 junior developers",
      ],
    },
    {
      id: 2,
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      location: "Remote",
      startDate: "Mar 2020",
      endDate: "Dec 2021",
      description: "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL.",
      achievements: [
        "Built 3 production applications from scratch",
        "Implemented CI/CD pipeline reducing deployment time by 50%",
        "Collaborated with design team to improve UX",
      ],
    },
    {
      id: 3,
      company: "StartUp Ventures",
      position: "Junior Developer",
      location: "New York, NY",
      startDate: "Jun 2018",
      endDate: "Feb 2020",
      description: "Worked on various frontend projects and learned modern web development practices.",
      achievements: [
        "Contributed to 10+ client projects",
        "Learned React and modern JavaScript",
        "Participated in agile development process",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      year: "2014 - 2018",
      description: "Focused on software engineering and web development. Graduated with honors.",
    },
  ],

  certifications: [
    "AWS Certified Developer - Associate",
    "MongoDB Certified Developer",
    "Google Analytics Certified",
  ],
};

export type PortfolioConfig = typeof portfolioConfig;
