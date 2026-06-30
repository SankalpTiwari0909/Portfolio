import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Phone, MessageSquare, Check, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#070A12] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Context / LinkedIn Integration */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-bold font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Let's Collaborate
              </h2>
              <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded mt-3" />
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Are you a technical recruiter, engineering director, or lead analyst looking for a high-performing Business / Product Analyst? I'm actively seeking early career opportunities in Noida, Bangalore, remote settings, or hybrid roles.
            </p>

            {/* Quick Connection Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Email Direct</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-slate-800 dark:text-white hover:text-blue-600 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Phone Number</span>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-slate-800 dark:text-white hover:text-emerald-600 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Premium Panel Card */}
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Linkedin className="w-24 h-24 text-white" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-base flex items-center justify-center shadow-inner">
                  ST
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">Sankalp Tiwari</h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono">Product Analyst / Business Analyst</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Connect on LinkedIn for real-time discussion on product analytics, JIRA backlogs, and Power BI dashboards. Let's discuss interview scheduling!
              </p>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
                id="contact-linkedin-panel-btn"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: High Quality Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="recruiter-contact-form"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-5 h-5 text-blue-500" />
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                        Send Message Directly
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-extrabold font-mono uppercase text-slate-400 tracking-wider block mb-2">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Hiring Manager"
                          className="w-full text-sm py-3 px-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-extrabold font-mono uppercase text-slate-400 tracking-wider block mb-2">
                          Your Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. Recruiter@company.com"
                          className="w-full text-sm py-3 px-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-extrabold font-mono uppercase text-slate-400 tracking-wider block mb-2">
                        Message Content
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Discuss project requirements, open roles, or interview availability..."
                        className="w-full text-sm py-3 px-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 dark:text-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                      id="submit-contact-btn"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Analyst Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 animate-bounce">
                      <Check className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-2 justify-center mb-2">
                      <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                        Inquiry Received successfully!
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                      Thank you for reaching out. Sankalp Tiwari has been notified of your recruiter message and will respond within 2-4 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs font-bold border border-slate-200 dark:border-slate-700 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
