import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export default function Navbar({ isDarkMode, toggleDarkMode, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 cursor-pointer"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center font-display font-bold text-white dark:text-slate-900 shadow-md group-hover:scale-105 transition-transform">
            ST
          </div>
          <span className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight hidden sm:inline-block">
            Sankalp<span className="text-blue-600 dark:text-blue-400">Tiwari</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/40 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-slate-950 dark:text-white font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                id={`nav-link-${item.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-slate-200/50 dark:border-slate-800/50 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 cursor-pointer"
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Quick Contact CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium text-sm py-2 px-4 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
            id="navbar-cta"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/50 dark:border-slate-700/50 cursor-pointer"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-left text-base font-medium ${
                    activeSection === item.id
                      ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                  <span className="text-xs text-slate-400">0{navItems.indexOf(item) + 1}</span>
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 text-white font-medium text-center shadow-sm"
                  id="mobile-navbar-cta"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
