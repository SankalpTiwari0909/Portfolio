import { useEffect, useState } from 'react';
import { FileText, Linkedin, Github, TrendingUp, ArrowRight, Sparkles, Database, ShieldAlert, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Hero() {
  const [typedRole, setTypedRole] = useState('');
  const roles = [
    'Business Analyst',
    'Product Analyst',
    'Data Analyst'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(currentFullRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentFullRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentFullRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRoleIndex]);

  const stats = [
    { value: '10K+', label: 'Orders Processed', icon: Database, color: 'text-blue-500 bg-blue-500/10' },
    { value: '40%', label: 'Analysis Speedup', icon: TrendingUp, color: 'text-emerald-500 bg-emerald-500/10' },
    { value: '35%', label: 'Delivery Optimization', icon: BarChart3, color: 'text-indigo-500 bg-indigo-500/10' },
    { value: '22%', label: 'Fewer Complaints', icon: ShieldAlert, color: 'text-rose-500 bg-rose-500/10' },
  ];

  const [recruiterRole, setRecruiterRole] = useState<'BA' | 'PA' | 'DA'>('BA');

  const recruiterPitches = {
    BA: {
      title: "Business Analyst",
      pitch: "I translate ambiguous operations into clear JIRA tickets, PRDs, and user stories to keep development aligned.",
      metric: "100% On-Schedule Sprints",
      highlight: "8+ Agile Sprints | UAT Testing",
      actionText: "See Trendevo Case Study",
      targetId: "projects"
    },
    PA: {
      title: "Product Analyst",
      pitch: "I map complex user behavior funnels, track content densities, and analyze engagement patterns to guide licensing.",
      metric: "15%-30% Conversion Gains",
      highlight: "Funnel Analysis | Conversational UX",
      actionText: "See Prime Video Insights",
      targetId: "projects"
    },
    DA: {
      title: "Data Analyst",
      pitch: "I clean and query transactional datasets using Python/SQL and build interactive, decision-ready Power BI models.",
      metric: "40% Faster Analysis Cycles",
      highlight: "SQL Joins | Pandas EDA | DAX",
      actionText: "See Logistics Optimizer",
      targetId: "projects"
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-[#090D16] transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-100 -z-20" />
      
      {/* Animated blob overlays for premium look */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-600/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Context / Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/40 mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-blue-800 dark:text-blue-300 uppercase font-mono">
              Recruiter-Focused Portfolio
            </span>
          </motion.div>

          {/* Name & Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-4"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-16 flex items-center mb-6"
          >
            <p className="text-2xl sm:text-3xl font-display font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
              An aspiring{' '}
              <span className="text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400 pr-1 animate-pulse">
                {typedRole}
              </span>
            </p>
          </motion.div>

          {/* Recruiter Fast-Pass Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 mb-8 shadow-sm flex flex-col gap-4 relative overflow-hidden text-left"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/50 pb-3">
              <span className="text-[10px] font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                ⚡ RECRUITER FAST-PASS
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Click tabs to switch pitch & metrics
              </span>
            </div>

            {/* Quick selectors */}
            <div className="grid grid-cols-3 gap-2">
              {(['BA', 'PA', 'DA'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => setRecruiterRole(role)}
                  className={`py-2 px-1 sm:px-3 rounded-xl text-xs font-semibold font-mono tracking-tight transition-all border cursor-pointer text-center ${
                    recruiterRole === role
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  id={`fastpass-tab-${role.toLowerCase()}`}
                >
                  {role === 'BA' ? '💼 BA' : role === 'PA' ? '📈 PA' : '📊 DA'}
                </button>
              ))}
            </div>

            {/* Selected Role details */}
            <div className="bg-slate-50 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-100 dark:border-slate-850 flex flex-col gap-2 min-h-[100px] justify-center">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                "{recruiterPitches[recruiterRole].pitch}"
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50 mt-1">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {recruiterPitches[recruiterRole].metric}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                  {recruiterPitches[recruiterRole].highlight}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10 w-full"
          >
            <button
              onClick={() => scrollToSection('resume')}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              id="hero-cta-resume"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white font-semibold py-3.5 px-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all active:scale-95 cursor-pointer"
              id="hero-cta-contact"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
            <div className="flex gap-3 items-center ml-0 sm:ml-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shadow-sm"
                title="LinkedIn Profile"
                id="hero-link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shadow-sm"
                title="GitHub Profile"
                id="hero-link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full border-t border-slate-200 dark:border-slate-800/80 pt-8"
          >
            <p className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Proven Project Highlights (Resume Metrics)
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5 mb-1">
                    <stat.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Visualizer */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md aspect-square bg-slate-100 dark:bg-slate-900/40 rounded-3xl p-6 border border-slate-200 dark:border-slate-800/60 shadow-xl overflow-hidden group flex flex-col justify-between"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Simulated Live Analytics Dashboard */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                  Operational Simulator Active
                </span>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            {/* Interactive Grid & Line Chart Visual */}
            <div className="relative flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 overflow-hidden shadow-inner flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Active SLA Breach Index</span>
                  <span className="text-xl font-display font-semibold text-slate-900 dark:text-white">-22.4%</span>
                </div>
                <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-semibold">
                  +35% EFF
                </div>
              </div>

              {/* Custom SVG line chart inside dashboard */}
              <div className="w-full h-32 relative">
                <svg viewBox="0 0 100 40" className="w-full h-full text-blue-500 dark:text-blue-400 overflow-visible">
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  
                  {/* Chart lines */}
                  <motion.path
                    d="M0,35 Q15,10 30,28 T60,5 T90,22 T100,2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <path
                    d="M0,35 Q15,10 30,28 T60,5 T90,22 T100,2 L100,40 L0,40 Z"
                    fill="url(#chartGradient)"
                    className="opacity-10 dark:opacity-20"
                  />
                  
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  
                  {/* Floating Glowing Node */}
                  <circle cx="60" cy="5" r="2" fill="#2563EB" className="animate-ping" />
                  <circle cx="60" cy="5" r="1.5" fill="#2563EB" />
                </svg>
              </div>

              {/* Small mini counters inside widget */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-center border-r border-slate-100 dark:border-slate-800/80">
                  <span className="text-[9px] text-slate-400 block font-mono uppercase">MySQL DB</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">10ms Query</span>
                </div>
                <div className="text-center border-r border-slate-100 dark:border-slate-800/80">
                  <span className="text-[9px] text-slate-400 block font-mono uppercase">User UAT</span>
                  <span className="text-xs font-bold text-emerald-500">98.4% Acc</span>
                </div>
                <div className="text-center">
                  <span className="text-[9px] text-slate-400 block font-mono uppercase">JIRA Sprint</span>
                  <span className="text-xs font-bold text-blue-500">8 Compl</span>
                </div>
              </div>
            </div>

            {/* Profile Avatar and Details Card overlay */}
            <div className="mt-4 flex items-center justify-between gap-4 bg-white dark:bg-slate-950 p-3 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center font-display text-sm tracking-wide border-2 border-white dark:border-slate-900 shadow">
                  ST
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Sankalp Tiwari</h4>
                  <p className="text-[10px] text-slate-400 font-mono leading-none mt-1">Noida, Uttar Pradesh</p>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold font-mono tracking-wide">
                AVAILABLE FOR HIRE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
