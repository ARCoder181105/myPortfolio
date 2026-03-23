'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';

interface FooterProps {
  social: PortfolioConfig['social'];
  name: string;
}

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer({ social, name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-[hsl(222,47%,4%)] text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Branding */}
            <div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">
                {name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building exceptional digital experiences with modern web
                technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-slate-300">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-violet-500 transition-all duration-300 rounded-full" />
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-slate-300">Connect</h4>
              <div className="flex gap-3">
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 hover:border-transparent hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-current" /> by {name} © {currentYear}
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}