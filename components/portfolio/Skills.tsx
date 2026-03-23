'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PortfolioConfig } from '@/config/portfolio';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

interface SkillsProps {
  data: PortfolioConfig['skills'];
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="w-5 h-5" />,
  'Frontend': <Layout className="w-5 h-5" />,
  'Backend': <Server className="w-5 h-5" />,
  'Databases': <Database className="w-5 h-5" />,
  'Tools & Others': <Wrench className="w-5 h-5" />,
};

export function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-[hsl(222,47%,5%)] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

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
              <Code2 className="w-4 h-4" />
              Technical Skills
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg bg-white/80 dark:bg-white/5 backdrop-blur-xl hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
                        {categoryIcons[category.category] || <Code2 className="w-5 h-5" />}
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
