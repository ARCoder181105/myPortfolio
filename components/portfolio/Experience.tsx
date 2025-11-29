'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TiltCard } from '@/components/ui/tilt-card';
import { PortfolioConfig } from '@/config/portfolio';

interface ExperienceProps {
  data: PortfolioConfig['experience'];
  education: PortfolioConfig['education'];
  certifications: PortfolioConfig['certifications'];
}

export function Experience({ data, education, certifications }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-12 rounded-full"></div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Work Experience
            </h3>
            <div className="space-y-6">
              {data.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TiltCard>

                    <Card className="border-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                              {job.position}
                            </h4>
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                              <Briefcase className="w-4 h-4" />
                              {job.company}
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {job.startDate} - {job.endDate}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          {job.description}
                        </p>
                        <div className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700 dark:text-slate-300">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>

                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TiltCard>
                    <Card className="border-2 shadow-lg">
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </div>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Certifications
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <Card className="border-2 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-3">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
