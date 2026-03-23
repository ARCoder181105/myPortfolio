'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, FolderGit2, Briefcase, MessageSquare } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Contact', href: '#contact', icon: MessageSquare },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('#');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Detect active section
      const sections = navItems.map(i => i.href.replace('#', '')).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          return;
        }
      }
      setActiveSection('#');
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On mobile: Hide at top (!isScrolled), show when scrolled.
  // On desktop: Always show.
  const shouldShow = isMobile ? isScrolled : true;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.nav
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 z-50"
        >
      <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] shadow-2xl shadow-black/40">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;

          return (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`relative group flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-2 md:py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-violet-500/15 text-violet-400'
                  : 'text-white/40 hover:text-white/80 hover:bg-white/[0.04]'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {/* Show label on active or on larger screens */}
              <span
                className={`text-xs font-medium whitespace-nowrap transition-all duration-300 hidden md:block ${
                  isActive ? 'opacity-100 max-w-[80px]' : 'opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px]'
                }`}
              >
                {item.label}
              </span>

              {/* Active dot indicator */}
              {isActive && (
                <motion.div
                  layoutId="dock-active"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}