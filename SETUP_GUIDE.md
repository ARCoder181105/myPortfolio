# Portfolio Website Setup Guide

## Overview
This is a modern, fully-featured portfolio website built with Next.js, React, TypeScript, and Framer Motion. The website features smooth animations, responsive design, and a modular component architecture for easy customization.

## Features
- Modern, clean design with smooth animations
- Fully responsive across all devices
- Modular component architecture
- Easy content editing through a single configuration file
- Sections: Hero, About, Skills, Projects, Experience, Education, Contact
- Smooth scrolling navigation
- Professional color scheme (emerald green accents)
- Built with shadcn/ui components
- Type-safe with TypeScript

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Your Content
Edit the `/config/portfolio.ts` file to add your personal information:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",                    // Change to your name
    title: "Full Stack Developer",        // Your professional title
    tagline: "...",                        // Your tagline
    bio: "...",                            // Brief bio
    email: "your.email@example.com",      // Your email
    phone: "+1 (555) 123-4567",           // Your phone
    location: "San Francisco, CA",         // Your location
    avatar: "...",                         // Your profile picture URL
  },

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    website: "https://yourwebsite.com",
  },

  // ... update other sections
}
```

### 3. Update Project Images
Replace the Pexels stock photo URLs in the `projects` section with your own project screenshots.

### 4. Run Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:3000`

## File Structure

```
project/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── components/
│   ├── portfolio/           # Portfolio-specific components
│   │   ├── Hero.tsx         # Hero section with intro
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills with progress bars
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── Experience.tsx   # Work experience & education
│   │   ├── Contact.tsx      # Contact form & info
│   │   ├── Navigation.tsx   # Sticky navigation bar
│   │   └── Footer.tsx       # Footer with links
│   └── ui/                  # Reusable UI components (shadcn/ui)
├── config/
│   └── portfolio.ts         # ALL YOUR CONTENT GOES HERE
├── hooks/
│   └── use-toast.ts         # Toast notifications
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Customization Guide

### Changing Colors
The site uses emerald green as the primary accent color. To change this:

1. Search for `emerald-` in all component files
2. Replace with your preferred Tailwind color (e.g., `blue-`, `purple-`, `teal-`)

Example:
```tsx
// Before
className="bg-emerald-600 hover:bg-emerald-700"

// After
className="bg-blue-600 hover:bg-blue-700"
```

### Adding New Projects
Edit `/config/portfolio.ts`:

```typescript
projects: [
  {
    id: 5,  // Increment the ID
    title: "New Project Name",
    description: "Project description...",
    image: "https://your-image-url.com/image.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/you/project",
    featured: true,  // Shows "Featured" badge
  },
  // ... other projects
]
```

### Adding Work Experience
Edit the `experience` array in `/config/portfolio.ts`:

```typescript
experience: [
  {
    id: 4,
    company: "New Company Name",
    position: "Job Title",
    location: "City, State",
    startDate: "Jan 2024",
    endDate: "Present",
    description: "Brief description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  // ... other experiences
]
```

### Modifying Skills
Update the `skills` array with your own skill categories and proficiency levels:

```typescript
skills: [
  {
    category: "Your Category",
    items: [
      { name: "Skill Name", level: 90 },  // level: 0-100
      // ... more skills
    ],
  },
]
```

## Component Architecture

Each section is a standalone component that receives data from the config file:

- **Hero**: Eye-catching introduction with profile picture and social links
- **About**: Brief introduction and highlights
- **Skills**: Categorized skills with animated progress bars
- **Projects**: Project showcase with images, descriptions, and links
- **Experience**: Work history, education, and certifications
- **Contact**: Contact information and message form
- **Navigation**: Sticky header with smooth scroll navigation
- **Footer**: Site footer with quick links and social media

## Animations

The site uses Framer Motion for smooth animations:
- Fade in on scroll (viewport-triggered)
- Staggered animations for lists
- Hover effects on cards and buttons
- Smooth page transitions

## Responsive Design

The site is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (zero configuration needed)

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Other Platforms
This is a standard Next.js app and can be deployed to any platform that supports Node.js applications.

## Troubleshooting

### Development server won't start
```bash
# Clear dependencies and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Animations not working
Make sure Framer Motion is installed:
```bash
npm install framer-motion
```

### Images not loading
- Check that image URLs are valid and accessible
- For local images, place them in the `/public` folder
- Update image paths in `/config/portfolio.ts`

## Support

For issues or questions:
1. Check the file structure matches the guide
2. Verify all dependencies are installed
3. Check browser console for errors
4. Ensure `/config/portfolio.ts` has valid TypeScript syntax

## Technologies Used

- **Next.js 13**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **shadcn/ui**: High-quality React components
- **Lucide React**: Icon library

## License

This portfolio template is free to use and customize for personal or commercial projects.

---

**Happy coding!** Make this portfolio your own by customizing the content and colors to match your personal brand.
