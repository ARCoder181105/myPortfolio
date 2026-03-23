'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';

interface ExperienceProps {
  data: PortfolioConfig['experience'];
  education: PortfolioConfig['education'];
  certifications: PortfolioConfig['certifications'];
}

export function Experience({ data, education, certifications }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-[hsl(222,47%,5%)] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />

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
              <Briefcase className="w-4 h-4" />
              Journey
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Experience & Education
            </h2>
          </div>

          {/* ===== WORK EXPERIENCE ===== */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-indigo-500 opacity-30" />

              <div className="space-y-8">
                {data.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[12px] top-3 w-[15px] h-[15px] rounded-full bg-gradient-to-r from-violet-500 to-blue-500 border-4 border-white dark:border-[hsl(222,47%,5%)] z-10">
                      <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-20" />
                    </div>

                    <div className="relative rounded-2xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="relative bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl p-6 backdrop-blur-xl hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                              {job.position}
                            </h4>
                            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold text-sm mt-1">
                              <Briefcase className="w-3.5 h-3.5" />
                              {job.company}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                              <Calendar className="w-3.5 h-3.5" />
                              {job.startDate} – {job.endDate}
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                              <MapPin className="w-3.5 h-3.5" />
                              {job.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-600 dark:text-slate-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== EDUCATION ===== */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-indigo-500 opacity-30" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-[12px] top-3 w-[15px] h-[15px] rounded-full bg-gradient-to-r from-violet-500 to-blue-500 border-4 border-white dark:border-[hsl(222,47%,5%)] z-10" />

                    <div className="bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl p-6 backdrop-blur-xl hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-500">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm mb-3">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.year}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== CERTIFICATIONS ===== */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              Certifications
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl p-6 backdrop-blur-xl">
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-500/5 transition-colors duration-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
