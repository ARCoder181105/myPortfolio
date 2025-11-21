'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PortfolioConfig } from '@/config/portfolio';

interface AboutProps {
  data: PortfolioConfig['about'];
}

export function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12 rounded-full"></div>

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {data.introduction}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {data.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
