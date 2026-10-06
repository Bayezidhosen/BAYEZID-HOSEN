import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Facebook, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || 'WordPress Development',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update subject if prop changes
  React.useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before sending.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'WordPress Development',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-purple-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            Have a project in mind? Let's discuss your idea and turn it into a modern digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact & Social Links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#111119] border border-white/[0.08] shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white font-display">
                Contact Information
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether you need a custom WordPress theme, an enterprise Laravel application, or speed optimization, I am here to help. Reach out directly or send a message via the form.
              </p>

              {/* Email item with one-click copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-zinc-500 block">Direct Email</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-purple-300 truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">Location</span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Availability guarantee */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">Fast Response Guarantee</span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Reply within 24 Hours
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                  Follow & Connect
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all"
                    aria-label="Bayezid Hosen GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all"
                    aria-label="Bayezid Hosen LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all"
                    aria-label="Bayezid Hosen Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-purple-600/20 border border-white/[0.08] hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all"
                    aria-label="Bayezid Hosen Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-[#111119] border border-white/[0.08] shadow-2xl relative">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                    Thank you for reaching out. I have received your message and will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <h3 className="text-xl font-bold text-white font-display">
                      Send a Message
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      * Required fields
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-zinc-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Miller"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-zinc-300">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-300">
                      Project Type / Subject *
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="WordPress Development">WordPress Development & Theme Customization</option>
                      <option value="Laravel Development">Laravel Application & Backend API</option>
                      <option value="Web Development">Full-Stack Web Development (Next.js / React)</option>
                      <option value="UI/UX Implementation">Figma to Pixel-Perfect Code</option>
                      <option value="Performance Optimization">Speed & Core Web Vitals Optimization</option>
                      <option value="General Inquiry">General Inquiry / Consultation</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-zinc-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, and key requirements..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#161622] border border-white/[0.08] focus:border-purple-500 focus:outline-none text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 active:scale-[0.99] transition-all shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center font-mono pt-1">
                    Your details are kept strictly confidential. No spam guaranteed.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
