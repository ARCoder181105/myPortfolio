'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PortfolioConfig } from '@/config/portfolio';

interface HeroProps {
  data: PortfolioConfig['personal'];
  social: PortfolioConfig['social'];
}

// Custom X (Twitter) Logo component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Hero({ data, social }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                  {data.name}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 mb-4">
                  {data.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
                  {data.tagline}
                </p>
                <p className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                  {data.bio}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
              >
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  {data.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Mail className="w-4 h-4" />
                  {data.email}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                {data.resume && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={data.resume} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 mt-8 justify-center md:justify-start"
              >
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}