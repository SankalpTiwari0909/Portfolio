import { useState } from 'react';
import {
  Github,
  ExternalLink,
  Search,
  Filter,
  ArrowRight,
  Sparkles,
  Maximize2,
  Terminal,
  Database,
  TrendingUp,
  Cpu,
  Check,
  X,
  Play,
  Grid
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSimulatorProject, setActiveSimulatorProject] = useState<Project | null>(null);

  // Chatbot state for Librica AI simulation
  const [chatMessages, setChatMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hi! I am Ink Seer, Sankalp\'s NLP Recommendation Chatbot. What kind of books are you in the mood for today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Power BI Simulation state
  const [primeVideoGenre, setPrimeVideoGenre] = useState('All');
  const [primeVideoCountry, setPrimeVideoCountry] = useState('All');

  // Trendevo simulation state
  const [trendevoRegion, setTrendevoRegion] = useState('North America');
  const [trendevoGeneration, setTrendevoGeneration] = useState('Gen Z');

  // Delivery agent simulation state
  const [deliveryPlatform, setDeliveryPlatform] = useState('All');
  const [isRunningEda, setIsRunningEda] = useState(false);
  const [edaOutput, setEdaOutput] = useState<string[]>([]);

  const categories = ['All', 'Business Analysis', 'Data Analytics', 'Product Analytics', 'AI & Tech'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle chatbot interaction
  const handleChatSend = (customText?: string) => {
    const messageText = customText || chatInput;
    if (!messageText.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text: messageText }];
    setChatMessages(newMessages);
    setChatInput('');

    // Simulate Ink Seer response
    setTimeout(() => {
      let botResponse = 'I can help you find something great! Try saying something about mood, like "mysterious" or "cozy".';
      const textLower = messageText.toLowerCase();

      if (textLower.includes('cozy') || textLower.includes('comfort')) {
        botResponse = '🌲 [Ink Seer recommends]: "A Psalm for the Wild-Built" by Becky Chambers. It has a high cozy factor (98%) and features an optimistic solar-punk setting which aligns with your search!';
      } else if (textLower.includes('mystery') || textLower.includes('detective') || textLower.includes('thrill')) {
        botResponse = '🔍 [Ink Seer recommends]: "The Silent Patient" by Alex Michaelides. A gripping psychological thriller with 94% match accuracy for high-tempo mystery lovers.';
      } else if (textLower.includes('fantasy') || textLower.includes('magic')) {
        botResponse = '✨ [Ink Seer recommends]: "The Name of the Wind" by Patrick Rothfuss. A legendary tale of magic, music, and deep character development. Scored 96% for immersive worldbuilding.';
      } else if (textLower.includes('business') || textLower.includes('data')) {
        botResponse = '📊 [Ink Seer recommends]: "Storytelling with Data" by Cole Nussbaumer Knaflic. This fits Sankalp\'s exact skill set and offers fantastic visualization insights!';
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 700);
  };

  // Run EDA Script Simulation
  const runEdaScript = () => {
    if (isRunningEda) return;
    setIsRunningEda(true);
    setEdaOutput(['Initializing Python environment...', 'Loading Pandas, NumPy & Seaborn...']);

    const logs = [
      'Reading delivery_orders_dataset_10k.csv...',
      'Detected 10,000 records across: Zepto, Blinkit, Swiggy Instamart, JioMart.',
      'Checking for missing coordinates... 0 nulls.',
      'Plotting correlation matrix [Wait Time vs Distance vs Peak Window]...',
      'Plotting dark store preparation bottlenecks...',
      'Success! Explored 4 Quick-Commerce networks.',
      '------------------------------------------------',
      'KPI Analysis Report:',
      '  - 68% of delivery delays stem from Dark Store Packing Bottlenecks.',
      '  - Peak delay window identified: 6:30 PM - 8:00 PM.',
      '  - Action: Shift courier dispatch forward by 4.2 minutes.',
      '  - Estimated Efficiency Uplift: +35%. Estimated Complaint Reduction: -22%.'
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < logs.length) {
        setEdaOutput((prev) => [...prev, logs[logIdx]]);
        logIdx++;
      } else {
        clearInterval(interval);
        setIsRunningEda(false);
      }
    }, 450);
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#070A12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
              Portfolio Showpiece
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Strategic Case Studies
            </h2>
            <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm py-2 px-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-slate-200"
            />
          </div>
        </div>

        {/* Filter badging */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wide transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Custom category badges
              let categoryIcon = Database;
              if (project.category === 'Business Analysis') categoryIcon = Grid;
              if (project.category === 'Product Analytics') categoryIcon = TrendingUp;
              if (project.category === 'AI & Tech') categoryIcon = Cpu;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 dark:bg-slate-900/40 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Upper badge header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 uppercase">
                        <span className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-950 dark:hover:text-white shadow-sm transition-colors"
                          title="View Repository"
                          id={`project-${project.id}-github`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-6 font-mono">
                      {project.subtitle}
                    </p>

                    {/* Problem / Approach */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-[10px] font-mono font-extrabold uppercase text-slate-400 tracking-wider block mb-1">
                          Problem Statement
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Sparklines / Performance Badges */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between"
                          >
                            <span className="text-[10px] text-slate-400 font-mono leading-none">{m.label}</span>
                            <span className="text-xs font-bold font-mono text-blue-600 dark:text-blue-400">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/60 mt-auto flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-850 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-400">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveSimulatorProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 py-2 px-3.5 rounded-xl shadow transition-all active:scale-95 cursor-pointer"
                      id={`project-simulate-btn-${project.id}`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Simulate Live
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Simulation Modal overlay */}
        <AnimatePresence>
          {activeSimulatorProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSimulatorProject(null)}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[85vh] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col text-left"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-tight">
                        {activeSimulatorProject.title} Simulator
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        Experience direct operational outputs from this project.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveSimulatorProject(null)}
                    className="w-8 h-8 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800/80 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                    id="close-simulation-modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Metrics & Approach */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono font-extrabold uppercase text-slate-400 tracking-wider block mb-1">
                        Business Impact
                      </span>
                      <ul className="space-y-2">
                        {activeSimulatorProject.impact.map((imp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-extrabold uppercase text-slate-400 tracking-wider block mb-1">
                        Analyst Insight
                      </span>
                      <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-xs text-amber-700 dark:text-amber-300 leading-relaxed italic">
                        "{activeSimulatorProject.keyInsights[0]}"
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-extrabold uppercase text-slate-400 tracking-wider block mb-2">
                        Stack Badges
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeSimulatorProject.tools.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Simulated Live Playground widgets */}
                  <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-3xl p-5 overflow-hidden flex flex-col justify-between shadow-inner min-h-[340px]">
                    
                    {/* SIMULATOR 1: Trendevo */}
                    {activeSimulatorProject.id === 'trendevo' && (
                      <div className="flex flex-col justify-between h-full w-full">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                            <span className="text-xs font-mono font-bold text-blue-600">Active Trend Filters</span>
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">15,000 tags</span>
                          </div>

                          {/* Control Dropdowns */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div>
                              <label className="text-[9px] font-mono uppercase text-slate-400 font-extrabold block mb-1">Region</label>
                              <select
                                value={trendevoRegion}
                                onChange={(e) => setTrendevoRegion(e.target.value)}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
                              >
                                <option>North America</option>
                                <option>Europe</option>
                                <option>Asia-Pacific</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-[9px] font-mono uppercase text-slate-400 font-extrabold block mb-1">Generation</label>
                              <select
                                value={trendevoGeneration}
                                onChange={(e) => setTrendevoGeneration(e.target.value)}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
                              >
                                <option>Gen Z</option>
                                <option>Millennials</option>
                                <option>Gen X</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Responsive SVG Graph */}
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-44">
                          <span className="text-[10px] text-slate-400 font-bold block mb-1">
                            {trendevoRegion} Trend Score for {trendevoGeneration}
                          </span>
                          <div className="w-full h-24 relative">
                            <svg viewBox="0 0 100 30" className="w-full h-full text-blue-500">
                              <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(148,163,184,0.1)" strokeWidth="0.5" />
                              <path
                                d={
                                  trendevoGeneration === 'Gen Z'
                                    ? 'M0,25 C10,5 25,12 40,2 C55,20 70,10 90,28 L100,5'
                                    : trendevoGeneration === 'Millennials'
                                    ? 'M0,10 C15,22 30,5 50,28 C65,15 80,12 100,20'
                                    : 'M0,15 C20,15 40,22 60,5 C75,5 90,25 100,25'
                                }
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                            <span>Month: Mar</span>
                            <span>Peak Signal: {trendevoGeneration === 'Gen Z' ? 'Color #3B82F6 (94)' : 'Color #10B981 (88)'}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SIMULATOR 2: Delivery agents */}
                    {activeSimulatorProject.id === 'delivery-agents' && (
                      <div className="flex flex-col justify-between h-full w-full">
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-3">
                          <span className="text-xs font-mono font-bold text-emerald-500">Jupyter Terminal Optimizer</span>
                          <button
                            onClick={runEdaScript}
                            disabled={isRunningEda}
                            className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md disabled:opacity-50 cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            {isRunningEda ? 'Running...' : 'Run EDA Script'}
                          </button>
                        </div>

                        {/* Interactive Notebook Container */}
                        <div className="bg-slate-950 rounded-2xl p-4 flex-1 font-mono text-xs text-slate-300 border border-slate-800 overflow-y-auto max-h-[220px] flex flex-col justify-start space-y-1">
                          {edaOutput.length === 0 ? (
                            <span className="text-slate-500 italic">Click "Run EDA Script" to analyze 10,000 platform orders...</span>
                          ) : (
                            edaOutput.map((log, idx) => (
                              <div
                                key={idx}
                                className={
                                  log.startsWith('Success')
                                    ? 'text-emerald-400 font-bold'
                                    : log.startsWith('KPI') || log.startsWith('  -')
                                    ? 'text-blue-400'
                                    : 'text-slate-300'
                                }
                              >
                                {log.startsWith('  -') ? ' ' : ''}
                                {log}
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                    {/* SIMULATOR 3: Amazon Prime Video */}
                    {activeSimulatorProject.id === 'amazon-prime' && (
                      <div className="flex flex-col justify-between h-full w-full">
                        <div>
                          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                            <span className="text-xs font-mono font-bold text-blue-600">Simulated Power BI Catalog Filters</span>
                            <span className="text-[10px] text-slate-400 font-mono">100+ countries</span>
                          </div>

                          {/* Controls */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div>
                              <label className="text-[9px] font-mono uppercase text-slate-400 font-extrabold block mb-1">Catalog Genre</label>
                              <select
                                value={primeVideoGenre}
                                onChange={(e) => setPrimeVideoGenre(e.target.value)}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
                              >
                                <option>All</option>
                                <option>Action & Adventure</option>
                                <option>Documentary</option>
                                <option>Comedy</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-[9px] font-mono uppercase text-slate-400 font-extrabold block mb-1">Region Target</label>
                              <select
                                value={primeVideoCountry}
                                onChange={(e) => setPrimeVideoCountry(e.target.value)}
                                className="w-full text-xs p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
                              >
                                <option>All</option>
                                <option>North America</option>
                                <option>Latin America</option>
                                <option>Europe</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Interactive KPIs view */}
                        <div className="grid grid-cols-3 gap-3 mb-2">
                          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block mb-1">Catalog Size</span>
                            <span className="text-base font-bold text-slate-950 dark:text-white">
                              {primeVideoGenre === 'All' ? '8,400+' : primeVideoGenre === 'Comedy' ? '1,240' : '480'}
                            </span>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block mb-1">Target Gain</span>
                            <span className="text-base font-bold text-emerald-500">
                              {primeVideoCountry === 'All' ? '22.5%' : primeVideoCountry === 'Latin America' ? '30.0%' : '15.2%'}
                            </span>
                          </div>
                          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                            <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block mb-1">Audit Score</span>
                            <span className="text-base font-bold text-blue-500">94.8%</span>
                          </div>
                        </div>

                        <span className="text-[9px] font-mono text-slate-400 text-center leading-normal">
                          *Calculated using DAX: <code>RegionalUplift = CALCULATE(DIVIDE(TargetRegion, GlobalCatalog))</code>
                        </span>
                      </div>
                    )}

                    {/* SIMULATOR 4: Librica AI */}
                    {activeSimulatorProject.id === 'librica-ai' && (
                      <div className="flex flex-col justify-between h-full w-full">
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-3">
                          <span className="text-xs font-mono font-bold text-blue-600">Ink Seer Chatbot Dialogue</span>
                          <span className="text-[10px] font-mono bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded font-semibold">Watson NLP</span>
                        </div>

                        {/* Dialogue history scroll */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 flex-1 overflow-y-auto max-h-[160px] flex flex-col gap-2 border border-slate-200 dark:border-slate-800 text-xs mb-3">
                          {chatMessages.map((msg, idx) => (
                            <div
                              key={idx}
                              className={`p-2.5 rounded-2xl max-w-[85%] ${
                                msg.sender === 'bot'
                                  ? 'bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 mr-auto rounded-tl-none'
                                  : 'bg-blue-600 text-white ml-auto rounded-tr-none font-medium'
                              }`}
                            >
                              {msg.text}
                            </div>
                          ))}
                        </div>

                        {/* Interactive suggestion chips */}
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                          {['I want a cozy book', 'Recommend a dark fantasy', 'Help me learn data viz'].map((suggestion) => (
                            <button
                              key={suggestion}
                              onClick={() => handleChatSend(suggestion)}
                              className="text-[9px] font-semibold bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-full cursor-pointer text-slate-600 dark:text-slate-400"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>

                        {/* Input bar */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleChatSend();
                          }}
                          className="flex gap-2"
                        >
                          <input
                            type="text"
                            placeholder="Ask Ink Seer for a recommendation..."
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            className="flex-1 text-xs py-2 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700 dark:text-slate-200"
                          />
                          <button
                            type="submit"
                            className="bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
