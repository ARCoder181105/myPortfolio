'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';

interface ProjectsProps {
  data: PortfolioConfig['projects'];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">Work</span>
            <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent mt-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white/90 mb-20"
          >
            Featured Projects
          </motion.h2>

          {/* Projects list */}
          <div className="space-y-24">
            {data.map((project, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isReversed ? 'direction-rtl' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative group ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                      {/* Featured ribbon */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/20 text-violet-300 text-xs font-medium">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      )}

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,10%,4%)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    </div>

                    {/* Glow behind */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/[0.05] to-blue-600/[0.05] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  </div>

                  {/* Details */}
                  <div className={isReversed ? 'lg:order-1 lg:text-right' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Project number */}
                      <span className="text-xs font-mono text-violet-400/60 tracking-wider mb-3 block">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      <p className="text-sm text-white/35 leading-relaxed mb-6 max-w-md">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 mb-8 ${isReversed ? 'lg:justify-end' : ''}`}>
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-3 py-1 rounded-full border border-white/[0.06] text-white/40 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className={`flex gap-4 ${isReversed ? 'lg:justify-end' : ''}`}>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 hover:text-violet-400 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                          <span className="w-0 group-hover/link:w-4 h-px bg-violet-400 transition-all duration-300" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 hover:text-violet-400 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                          <span className="w-0 group-hover/link:w-4 h-px bg-violet-400 transition-all duration-300" />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}