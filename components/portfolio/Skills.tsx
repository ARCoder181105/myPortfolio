'use client';

import { motion } from 'framer-motion';
import { PortfolioConfig } from '@/config/portfolio';

interface SkillsProps {
  data: PortfolioConfig['skills'];
}

export function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/[0.04] rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">Skills</span>
            <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent mt-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white/90 mb-16"
          >
            Tech I work with
          </motion.h2>

          <div className="space-y-12">
            {data.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIndex * 0.05 + skillIndex * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group relative px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-500/[0.06] transition-all duration-300 cursor-default"
                    >
                      <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300">
                        {skill.name}
                      </span>

                      {/* Subtle glow on hover */}
                      <div className="absolute inset-0 rounded-xl bg-violet-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
