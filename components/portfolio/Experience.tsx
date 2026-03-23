'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';
import { useState } from 'react';

interface ExperienceProps {
  data: PortfolioConfig['experience'];
  education: PortfolioConfig['education'];
  certifications: PortfolioConfig['certifications'];
}

export function Experience({ data, education, certifications }: ExperienceProps) {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[120px]" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">Journey</span>
            <div className="w-12 h-px bg-gradient-to-r from-violet-500 to-transparent mt-3" />
          </motion.div>

          {/* ===== WORK EXPERIENCE ===== */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white/90 mb-12"
            >
              Experience
            </motion.h2>

            <div className="space-y-4">
              {data.map((job, index) => {
                const isExpanded = expandedJob === job.id;

                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                      className={`relative rounded-2xl border transition-all duration-500 cursor-pointer group ${
                        isExpanded
                          ? 'bg-white/[0.04] border-violet-500/20'
                          : 'bg-white/[0.02] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]'
                      }`}
                    >
                      {/* Left accent bar */}
                      <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-500 ${
                        isExpanded
                          ? 'bg-gradient-to-b from-violet-500 to-blue-500'
                          : 'bg-white/[0.06] group-hover:bg-violet-500/30'
                      }`} />

                      <div className="p-6 pl-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-white/90">{job.position}</h3>
                            <p className="text-sm text-violet-400 font-medium">{job.company}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1.5 text-xs text-white/30 bg-white/[0.03] px-3 py-1 rounded-full">
                              <Calendar className="w-3 h-3" />
                              {job.startDate} – {job.endDate}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-white/30 bg-white/[0.03] px-3 py-1 rounded-full">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-white/30 leading-relaxed mb-3">{job.description}</p>

                        {/* Expandable achievements */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 border-t border-white/[0.04] space-y-2">
                            {job.achievements.map((ach, achIndex) => (
                              <div key={achIndex} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-white/50">{ach}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Expand indicator */}
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs text-white/20">{isExpanded ? 'Collapse' : 'See achievements'}</span>
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="text-white/20 text-xs"
                          >
                            ▼
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ===== EDUCATION ===== */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white/90 mb-12"
            >
              Education
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-6 hover:bg-white/[0.04] hover:border-violet-500/15 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white/90 mb-1">{edu.degree}</h4>
                      <p className="text-sm text-violet-400/80 font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-white/25 mb-2">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{edu.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{edu.year}</span>
                      </div>
                      <p className="text-sm font-medium text-white/50">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ===== CERTIFICATIONS ===== */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white/90 mb-8"
            >
              Certifications
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/20 transition-all duration-300"
                >
                  <Award className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span className="text-sm text-white/50">{cert}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
