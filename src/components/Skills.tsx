import React, { useState } from 'react';
import {
  FileSpreadsheet,
  FileText,
  ListTodo,
  Users,
  Activity,
  CheckSquare,
  Database,
  BarChart3,
  Terminal,
  Table,
  Layers,
  Fingerprint,
  TrendingUp,
  Split,
  Trello,
  Cpu,
  Github,
  Code
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';

// Custom dynamic icon resolver
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  FileText,
  ListTodo,
  Users,
  Activity,
  CheckSquare,
  Database,
  BarChart3,
  Terminal,
  Table,
  Layers,
  Fingerprint,
  TrendingUp,
  Split,
  Trello,
  Cpu,
  Github,
  Code
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Business Analysis', 'Data Analytics', 'Product Analytics', 'Tools & Tech'];

  const filteredSkills = skillsData.filter(
    (skill) => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#090D16] transition-colors duration-300 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
            Skill Taxonomy
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Interactive Competency Matrix
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold font-mono tracking-wide transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.iconName] || Code;
              
              // Custom category badges
              let categoryColor = 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/40';
              if (skill.category === 'Data Analytics') {
                categoryColor = 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/40';
              } else if (skill.category === 'Product Analytics') {
                categoryColor = 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/40';
              } else if (skill.category === 'Tools & Tech') {
                categoryColor = 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/40';
              }

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Header: Icon & Proficiency percentage */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-extrabold font-mono text-slate-850 dark:text-slate-150">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Title & Category */}
                    <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-wide border uppercase mb-2 ${categoryColor}`}>
                      {skill.category}
                    </span>
                    <h4 className="text-base font-display font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  {/* Progressive Skill Meter */}
                  <div className="mt-auto">
                    <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
