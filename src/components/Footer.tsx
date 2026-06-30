import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#090D16] border-t border-slate-200/50 dark:border-slate-850/50 py-12 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
        <div>
          <span className="font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sankalp<span className="text-blue-600 dark:text-blue-400">Tiwari</span>
          </span>
          <p className="text-xs text-slate-400 mt-2 font-mono">
            Early-Career Business Analyst | Product Analyst | Data Analyst
          </p>
          <p className="text-[10px] text-slate-500 mt-1">
            &copy; {new Date().getFullYear()} Sankalp Tiwari. All rights reserved.
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-end">
          <div className="flex gap-4 items-center">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
              id="footer-link-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              title="GitHub"
              id="footer-link-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Email"
              id="footer-link-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
            id="footer-back-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
