'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';

interface AboutProps {
  data: PortfolioConfig['about'];
}

export function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[hsl(222,47%,6%)] relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              About Me
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Who I Am
            </h2>
          </div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-indigo-500 rounded-2xl" />
            <div className="relative m-[1px] bg-white dark:bg-slate-900/95 rounded-2xl p-8 md:p-10 backdrop-blur-xl">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
                {data.introduction}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {data.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-500/5 transition-colors duration-300 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
