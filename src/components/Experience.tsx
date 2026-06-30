import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#090D16] transition-colors duration-300 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-8 sm:pl-10 space-y-16">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[45px] sm:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center shadow-sm">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Experience Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md relative overflow-hidden group">
                {/* Background Shimmer hover effect */}
                <div className="absolute inset-0 animate-shimmer-light dark:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Left Side: Role details */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span className="px-2.5 py-1 text-[10px] font-bold font-mono tracking-wider text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-200/40 dark:border-blue-900/40 uppercase">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mt-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 pt-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology badging */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                      Tools & Frameworks Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Key business metrics cards */}
                <div className="lg:col-span-4 flex flex-col justify-center gap-4 lg:pl-6 lg:border-l border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider hidden lg:block">
                    Measurable Metrics
                  </span>
                  {exp.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-150 dark:border-slate-850 flex items-start gap-3.5"
                    >
                      <Award className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-lg font-display font-extrabold text-slate-900 dark:text-white block leading-tight">
                          {metric.value}
                        </span>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block mt-0.5">
                          {metric.label}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 block leading-tight mt-0.5">
                          {metric.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
