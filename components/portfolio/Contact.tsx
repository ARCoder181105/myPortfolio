'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Github, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PortfolioConfig } from '@/config/portfolio';

interface ContactProps {
  data: PortfolioConfig['personal'];
  social: PortfolioConfig['social'];
}

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Contact({ data, social }: ContactProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed');

      toast({
        title: 'Message sent ✨',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/[0.04] rounded-full blur-[150px]" />

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-medium">Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white/90 mb-4"
          >
            Let&apos;s work{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm text-white/30 mb-4"
          >
            {data.email}
          </motion.p>

          {/* Social orbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-12"
          >
            {[
              { href: social.github, icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: social.linkedin, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: social.twitter, icon: <XIcon className="w-4 h-4" />, label: 'X' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
                aria-label={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 text-left"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-white/25 font-medium mb-2 ml-1">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus:border-violet-500/40 focus:ring-violet-500/10 rounded-xl h-12"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-white/25 font-medium mb-2 ml-1">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus:border-violet-500/40 focus:ring-violet-500/10 rounded-xl h-12"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-white/25 font-medium mb-2 ml-1">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus:border-violet-500/40 focus:ring-violet-500/10 rounded-xl h-12"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-white/25 font-medium mb-2 ml-1">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
                className="bg-white/[0.03] border-white/[0.06] text-white placeholder:text-white/15 focus:border-violet-500/40 focus:ring-violet-500/10 resize-none rounded-xl"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-3.5 rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <span className="relative text-white flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}