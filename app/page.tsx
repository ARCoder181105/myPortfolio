'use client';

import { portfolioConfig } from '@/config/portfolio';
import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Experience } from '@/components/portfolio/Experience';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      <Hero data={portfolioConfig.personal} social={portfolioConfig.social} />
      <About data={portfolioConfig.about} />
      <Skills data={portfolioConfig.skills} />
      <Projects data={portfolioConfig.projects} />
      <Experience
        data={portfolioConfig.experience}
        education={portfolioConfig.education}
        certifications={portfolioConfig.certifications}
      />
      <Contact data={portfolioConfig.personal} social = {portfolioConfig.social} />
      <Footer social={portfolioConfig.social} name={portfolioConfig.personal.name} />
    </main>
  );
}
