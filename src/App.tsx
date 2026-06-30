import { useState, useEffect } from 'react';
import { MessageSquare, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { testimonialsData } from './data';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Load and apply theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  };

  // Track mouse coordinates for premium spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll progress and update active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll progress indicator
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress(window.scrollY / totalScrollHeight);
      }

      // 2. Section Tracker using threshold coordinates
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating Action Trigger
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-blue-600/30 dark:selection:bg-blue-400/30 transition-colors duration-300 ${
        isDarkMode ? 'dark bg-[#090D16] text-slate-200' : 'bg-slate-50 text-slate-800'
      }`}
      style={{
        // Inject mouse coordinates to css variables for spotlight calculation
        ['--mouse-x' as string]: `${mousePosition.x}px`,
        ['--mouse-y' as string]: `${mousePosition.y}px`,
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Mouse Following Glass Spotlight Layer */}
      <div className="fixed inset-0 pointer-events-none z-40 hidden md:block spotlight-light dark:spotlight-dark" />

      {/* Primary Sticky Header */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      {/* Main Core Layout Grid */}
      <main className="relative">
        <Hero />
        
        <About />
        
        <Experience />
        
        <Projects />
        
        <Skills />

        {/* Testimonials Carousel Section between Skills and Education */}
        <section className="py-20 bg-slate-50 dark:bg-[#090D16] border-t border-b border-slate-200/50 dark:border-slate-850/50 transition-colors duration-300 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                Recommendation Endorsements
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Professional Testimonials
              </h3>
              <div className="w-10 h-0.5 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonialsData.map((test, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md flex flex-col justify-between text-left relative overflow-hidden group"
                >
                  {/* Quotes Icon Background Overlay */}
                  <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-950 pointer-events-none">
                    <Quote className="w-16 h-16 stroke-[1.5]" />
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic mb-6">
                    "{test.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-bold">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">
                        {test.author}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono block">
                        {test.role} — {test.company}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Education />
        
        <ResumeViewer />
        
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Spotlight Trigger */}
      <AnimatePresence>
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center cursor-pointer"
          id="floating-contact-cta"
          title="Contact Sankalp Tiwari"
        >
          <MessageSquare className="w-5 h-5" />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
