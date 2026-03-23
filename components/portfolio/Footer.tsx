'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';
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

  return (
    <footer className="relative pb-28">
      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

      <div className="container px-6 md:px-12 mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Name & credit */}
          <p className="text-xs text-white/20 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-red-400/60 fill-current" /> by{' '}
            <span className="text-white/40 font-medium">{name}</span> © {currentYear}
          </p>

          {/* Right: Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: social.github, icon: <Github className="w-3.5 h-3.5" />, label: 'GitHub' },
              { href: social.linkedin, icon: <Linkedin className="w-3.5 h-3.5" />, label: 'LinkedIn' },
              { href: social.twitter, icon: <XIcon className="w-3.5 h-3.5" />, label: 'X' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/15 hover:text-violet-400 transition-colors duration-300"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}