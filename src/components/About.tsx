import { Brain, TrendingUp, Users, Presentation, Target, Award, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function About() {
  const cardStyles = [
    {
      icon: Brain,
      color: "from-blue-500/5 to-indigo-500/5 border-slate-200/50 dark:border-slate-800/50",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Target,
      color: "from-emerald-500/5 to-teal-500/5 border-slate-200/50 dark:border-slate-800/50",
      iconColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      icon: Users,
      color: "from-indigo-500/5 to-violet-500/5 border-slate-200/50 dark:border-slate-800/50",
      iconColor: "text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: Presentation,
      color: "from-amber-500/5 to-orange-500/5 border-slate-200/50 dark:border-slate-800/50",
      iconColor: "text-amber-600 dark:text-amber-400"
    }
  ];

  const whyHireCards = personalInfo.whyHireMe.map((item, idx) => ({
    ...item,
    ...cardStyles[idx % cardStyles.length]
  }));

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#070A12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
            Professional Summary
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
        </div>

        {/* Top Split: Narrative Narrative Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              Bridging physical operations and software systems with rigorous, data-backed insights.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              {personalInfo.summary}
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Primary Skill Focus
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Dual core specialization in <strong>Business/Product Specifications</strong> (BRDs, JIRA backlogs, user journey modeling) and <strong>Operational Analytics</strong> (Python data pipelines, exploratory analytics, star-schema Power BI modeling).
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 flex flex-col justify-between h-full">
              <h4 className="font-mono text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-4">
                Core Competencies
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Business Analysis", desc: "SOPs, BRDs, Requirement Scopes" },
                  { label: "Product Analytics", desc: "Conversion Funnels, JIRA Backlog" },
                  { label: "Data Analytics", desc: "Python (Pandas), SQL Queries, ETL" },
                  { label: "Data Visualization", desc: "Interactive Power BI & Excel Dashboards" },
                  { label: "Stakeholder Coordination", desc: "Devs, QA, and Ops alignment" }
                ].map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block leading-tight">
                        {comp.label}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {comp.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Hire Me Grid */}
        <div>
          <div className="flex flex-col items-start text-left mb-12">
            <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
              Value Proposition
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Why Hire Me?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              I match robust analytical modeling with strict technical writing, ensuring development teams never suffer from ambiguous requirement gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyHireCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 rounded-3xl bg-gradient-to-br ${card.color} border border-slate-200 dark:border-slate-800/80 shadow-sm relative overflow-hidden group flex flex-col justify-between`}
              >
                {/* Background glow node */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-full blur-xl transition-all duration-300" />
                
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/50 shadow-sm mb-4 ${card.iconColor}`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h4>
                  
                  {/* Desc */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Key Metric Badge */}
                <div className="flex items-center justify-between border-t border-slate-200/30 dark:border-slate-800/40 pt-4 mt-auto">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                    Measurable Result
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-900 dark:text-slate-100 bg-white/70 dark:bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-200/50 dark:border-slate-800/60 shadow-sm">
                    {card.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
