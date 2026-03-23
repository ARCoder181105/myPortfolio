'use client';

import { motion } from 'framer-motion';
import { PortfolioConfig } from '@/config/portfolio';

interface AboutProps {
  data: PortfolioConfig['about'];
}

export function About({ data }: AboutProps) {
  const highlights = data.highlights;

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">About</span>
            <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent mt-3" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: Pull-quote intro */}
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-snug text-white/90 mb-8"
              >
                I build{' '}
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  production-ready platforms
                </span>
                , automated workflow systems, and{' '}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  AI-powered applications
                </span>{' '}
                that solve real problems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-base text-white/30 leading-relaxed max-w-2xl"
              >
                {data.introduction}
              </motion.p>
            </div>

            {/* Right: Highlight cards */}
            <div className="lg:col-span-2 grid gap-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-violet-500/20 transition-all duration-500"
                >
                  {/* Number */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-violet-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <span className="text-xs font-bold text-violet-400 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
