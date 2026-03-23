'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, FolderGit2 } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PortfolioConfig } from '@/config/portfolio';

interface ProjectsProps {
  data: PortfolioConfig['projects'];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[hsl(222,47%,6%)] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4"
            >
              <FolderGit2 className="w-4 h-4" />
              Portfolio
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <TiltCard className="rounded-2xl">
                  <div className="h-full flex flex-col border border-slate-200/50 dark:border-white/5 rounded-2xl overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-violet-500 to-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold shadow-lg shadow-violet-500/25">
                          <Star className="w-3.5 h-3.5" />
                          Featured
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="flex-grow pb-4">
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20 border text-xs font-medium hover:bg-violet-500/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2 pb-6 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}