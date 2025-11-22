'use client';

import { Github, Linkedin, Heart } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';

interface FooterProps {
  social: PortfolioConfig['social'];
  name: string;
}

// Custom X (Twitter) Logo component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer({ social, name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                {name}
              </h3>
              <p className="text-slate-400">
                Building exceptional digital experiences with modern web
                technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#about"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{' '}
              by {name} © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}