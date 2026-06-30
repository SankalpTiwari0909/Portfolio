import { useState } from 'react';
import { Download, FileText, ExternalLink, Printer, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function ResumeViewer() {
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const handlePrint = () => {
    window.print();
  };

  // Mock download of a formatted text file representing Sankalp's Resume
  const handleDownload = () => {
    const resumeText = `
SANKALP TIWARI
Uttar Pradesh, India | +91-8650270818 | sankalptiwari09092003@gmail.com
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

SUMMARY
Business Analyst & Product Analyst with hands-on experience in requirement gathering, stakeholder management, and Agile project coordination (JIRA, user stories, UAT) on a live supply-chain and delivery platform, paired with strong data analysis skills in Python, SQL, Excel, and Power BI. Skilled at translating ambiguous business needs into clear documentation, SOPs, and data-backed insights that support cross-functional decision-making.

SKILLS
- Business Analysis & Product: Requirement Gathering, BRD/FRD, User Stories, Stakeholder Management, JIRA, Agile/Scrum, UAT & Feature Validation, Process Documentation, SOP Creation
- Data Analysis & BI: Power BI, Advanced Excel, SQL (MySQL), EDA, ETL, DAX, Data Modeling, Data Visualization, Data Storytelling
- Programming & Tools: Python (Pandas, NumPy, Matplotlib, Seaborn, Plotly), C, Java, Git, HTML/CSS
- AI/ML Exposure: IBM Watson Assistant, AI Chatbots, Natural Language Processing (NLP), Recommendation Systems

EXPERIENCE
Product Analyst Trainee | JVFPL (Sbzee), Noida, India (Mar - Jul 2026)
- Conducted requirement gathering from different departments and managed stakeholder communication.
- Created and managed JIRA sprints, tickets, user stories, and bug reports.
- Coordinated cross-functionally with developers, QA, operations, and business teams.
- Conducted UAT testing and feature validation, authored user manuals.

AI Intern | IBM, Remote (Jun - Aug 2025)
- Built Librica, an AI-powered book recommendation platform.
- Scoped requirements for a custom chatbot (Ink Seer) using IBM Watson Assistant.

PROJECTS
Trendevo - Trend Forecasting Platform
- Designed multi-dimensional Power BI dashboard tracking trends by region/generation.
- Collected and validated scraped trend datasets.

Amazon Prime Video Catalog Analysis
- Developed Power BI dashboard (6+ visuals) analyzing genre/rating trends across 100+ countries.
- Improved regional targeting by 15-30%.

Fast Delivery Agents Performance Optimization
- Conducted EDA on 10,000+ orders across 4 platforms using Python.
- Cut analysis time by 40%, delivery efficiency improved by 35%, negative feedback reduced by 22%.

EDUCATION
B.Tech in Computer Science | Dr. A. P. J. Abdul Kalam Technical University (2022 - 2026)
- CGPA: 7.8/10

CERTIFICATIONS
- Getting Started with AI (IBM)
- Database for Developers (Oracle)
- Data Visualization for Business Insights (TATA)
    `;

    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Sankalp_Tiwari_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="py-24 bg-slate-50 dark:bg-[#090D16] transition-colors duration-300 relative">
      {/* Background grid overlays */}
      <div className="absolute inset-0 grid-bg-light dark:grid-bg-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-12">
          <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Interactive Resume Viewer
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
        </div>

        {/* Toolbar / Control Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 flex flex-wrap gap-4 items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
              Sankalp_Tiwari_CV.pdf (Interactive Model)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Zoom controls */}
            <div className="hidden sm:flex items-center gap-2 border-r border-slate-200 dark:border-slate-800 pr-4 mr-2">
              <button
                onClick={() => setZoomLevel(Math.max(80, zoomLevel - 10))}
                className="px-2 py-1 text-xs font-mono font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 cursor-pointer"
              >
                A-
              </button>
              <span className="text-xs font-mono text-slate-400 font-bold">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(Math.min(120, zoomLevel + 10))}
                className="px-2 py-1 text-xs font-mono font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 cursor-pointer"
              >
                A+
              </button>
            </div>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              title="Print Resume"
              id="print-resume-btn"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Open Raw Text */}
            <button
              onClick={() => {
                const win = window.open();
                if (win) {
                  win.document.write(`<pre style="font-family: monospace; padding: 20px;">
                    SANKALP TIWARI
                    Noida, India | +91-8650270818 | sankalptiwari09092003@gmail.com
                    
                    EXPERIENCE
                    Product Analyst Trainee - JVFPL Sbzee (2026)
                    AI Intern - IBM (2025)
                    
                    PROJECTS
                    - Trendevo Analytics Platform
                    - Amazon Prime Video Analysis
                    - Fast Delivery performance Optimizer
                    
                    EDUCATION
                    B.Tech Computer Science (Dr. A.P.J. Abdul Kalam Technical University, Lucknow)
                  </pre>`);
                  win.document.close();
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer"
              id="open-raw-text-btn"
            >
              <ExternalLink className="w-4 h-4" />
              Open Raw Text
            </button>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-3.5 rounded-xl shadow-md cursor-pointer active:scale-95 transition-all"
              id="download-resume-btn"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Paper Container */}
        <div className="overflow-x-auto pb-4">
          <motion.div
            style={{ scale: zoomLevel / 100, transformOrigin: 'top center' }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-full min-w-[700px] max-w-[850px] mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-lg p-10 sm:p-12 text-slate-800 dark:text-slate-200 text-left"
          >
            {/* Document Header */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-3xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2 font-mono uppercase tracking-wider">
                  {personalInfo.title}
                </p>
              </div>

              {/* Contact grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  Uttar Pradesh, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  linkedin.com/in/sankalp-tiwari...
                </span>
              </div>
            </div>

            {/* Document Content Sections */}
            <div className="space-y-6 text-sm">
              {/* Summary */}
              <div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-850 pb-1.5 mb-2.5">
                  Executive Summary
                </h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Core Skill Taxonomies */}
              <div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-850 pb-1.5 mb-2.5">
                  Expertise & Skillsets
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono block">Business Analysis & Product:</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-normal block mt-1">
                      Requirement Gathering · BRD/FRD · User Stories · Stakeholder Management · JIRA · Agile/Scrum · UAT & Feature Validation · Process Documentation · SOP Creation
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono block">Data Analysis & BI:</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-normal block mt-1">
                      Power BI · Advanced Excel · SQL (MySQL) · EDA · ETL · DAX · Data Modeling · Data Visualization · Data Storytelling
                    </span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-850 pb-1.5 mb-4">
                  Professional Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start font-display">
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Product Analyst Trainee</h4>
                        <span className="text-xs font-bold text-slate-500">JVFPL (Sbzee) — Noida, India</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">Mar – Jul 2026</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      <li>Conducted requirement gathering from different departments and managed stakeholder communication to align business needs with product goals.</li>
                      <li>Created and managed JIRA sprints, tickets, user stories, and bug reports for tracking features and issues.</li>
                      <li>Coordinated cross-functionally with developers, QA, operations, and business teams to support Agile product delivery.</li>
                      <li>Conducted UAT testing and feature validation, and contributed to process improvement through documentation, and user manual creation.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start font-display">
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base">AI Intern</h4>
                        <span className="text-xs font-bold text-slate-500">IBM — Remote</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">Jun – Aug 2025</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                      <li>Built Librica, an AI-powered book recommendation platform, scoping requirements for a custom chatbot (Ink Seer) using IBM Watson Assistant for intent/entity recognition and NLP-driven genre recommendations, with a responsive HTML/CSS frontend.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Strategic Projects */}
              <div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-850 pb-1.5 mb-4">
                  Selected Case Studies & Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Trendevo – Trend Forecasting & Analytics Platform</h4>
                    <ul className="list-disc pl-4 space-y-1 mt-1 text-xs text-slate-600 dark:text-slate-400">
                      <li>Designed and integrated an interactive dashboard for a B2B/B2C trend forecasting platform across month, region, generation, color shade, and product category dimensions.</li>
                      <li>Directed data collection, cleaning, and validation from web-scraped sources (Instagram posts, hashtags, fashion runway images) to build a reliable trend dataset in MongoDB.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Amazon Prime Video Movies & TV Shows Analysis</h4>
                    <ul className="list-disc pl-4 space-y-1 mt-1 text-xs text-slate-600 dark:text-slate-400">
                      <li>Developed a Power BI dashboard (6+ visuals: KPI cards, bar/line/pie charts, map views) analyzing genre trends and parental ratings across 100+ countries, improving regional targeting by 15–30%.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Fast Delivery Agents Performance Optimization</h4>
                    <ul className="list-disc pl-4 space-y-1 mt-1 text-xs text-slate-600 dark:text-slate-400">
                      <li>Conducted exploratory data analysis (EDA) on 10,000+ orders across 4 quick-commerce platforms, cutting analysis time by 40% and improving delivery efficiency by 35%.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-extrabold uppercase font-mono tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-850 pb-1.5 mb-2.5">
                  Academic Credentials
                </h3>
                <div className="flex justify-between items-start text-xs font-display">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Bachelor of Technology — Computer Science</span>
                    <span className="text-slate-500">Dr. A. P. J. Abdul Kalam Technical University — Lucknow, Uttar Pradesh</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block font-mono">Nov 2022 – Jun 2026</span>
                    <span className="font-extrabold text-blue-600 dark:text-blue-400 font-mono">CGPA: 7.8/10</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
