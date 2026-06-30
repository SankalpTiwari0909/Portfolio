import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { educationData, certificationsData } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#070A12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                Academic Background
              </span>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Education History
              </h2>
              <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
            </div>

            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm relative overflow-hidden"
                >
                  {/* Decorative icon background */}
                  <div className="absolute -top-4 -right-4 text-slate-100 dark:text-slate-950 pointer-events-none">
                    <GraduationCap className="w-24 h-24 stroke-[0.5]" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 uppercase mb-4">
                    Bachelor Degree
                  </span>

                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {edu.college}
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  {/* GPA */}
                  <div className="mt-4 p-3 bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/60 rounded-xl inline-block">
                    <span className="text-xs text-slate-500 block leading-none">Academic Performance</span>
                    <span className="text-base font-extrabold font-mono text-blue-600 dark:text-blue-400 block mt-1">
                      {edu.gpa}
                    </span>
                  </div>

                  {/* Coursework list */}
                  <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/60">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
                      Relevant Coursework Specialties
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-lg"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                Professional Credentials
              </span>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Licenses & Certifications
              </h2>
              <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificationsData.map((cert, idx) => {
                let badgeColorStyle = 'border-blue-200 text-blue-700 bg-blue-50/50 dark:border-blue-900/30 dark:text-blue-400 dark:bg-blue-950/20';
                if (cert.issuer === 'Oracle') {
                  badgeColorStyle = 'border-rose-200 text-rose-700 bg-rose-50/50 dark:border-rose-900/30 dark:text-rose-400 dark:bg-rose-950/20';
                } else if (cert.issuer === 'TATA') {
                  badgeColorStyle = 'border-purple-200 text-purple-700 bg-purple-50/50 dark:border-purple-900/30 dark:text-purple-400 dark:bg-purple-950/20';
                }

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group"
                  >
                    <div>
                      {/* Badge / Issuer */}
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold font-mono tracking-wide border uppercase mb-4 ${badgeColorStyle}`}>
                        {cert.issuer} Certified
                      </span>
                      
                      {/* Name */}
                      <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    {/* Verification Icon tag */}
                    <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-200/30 dark:border-slate-800/40 text-[10px] font-mono text-slate-400">
                      <Award className="w-4 h-4 text-slate-400" />
                      <span>Verified ID Secure</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
