'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { PortfolioConfig } from '@/config/portfolio';
import { useEffect, useState } from 'react';

interface HeroProps {
  data: PortfolioConfig['personal'];
  social: PortfolioConfig['social'];
}

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => `${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2.5, ease: 'easeOut' });
    const unsub = rounded.on('change', v => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [target, count, rounded, suffix]);

  return <span>{display}</span>;
}

// Stagger each character
function StaggeredText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero({ data, social }: HeroProps) {
  const nameParts = data.name.split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/[0.07] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[100px]" />

      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/[0.04] hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 left-16 w-20 h-20 rounded-full border border-violet-500/10 hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-violet-400/40 animate-float hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-1/3 left-[10%] w-3 h-3 rounded-full bg-blue-400/30 animate-float-delayed hidden lg:block"
      />

      <div className="container relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name — large display */}
            <div className="mb-6">
              <h1 className="font-display font-bold tracking-tight leading-[0.9]">
                <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[110px] text-white">
                  <StaggeredText text={nameParts[0] || ''} delay={0.2} />
                </span>
                <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-[110px] text-violet-400">
                  <StaggeredText text={nameParts[1] || ''} delay={0.6} />
                </span>
              </h1>

              {/* Animated gradient line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-1 w-32 lg:w-48 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full origin-left mt-4 mx-auto lg:mx-0 animate-gradient-x"
              />
            </div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/50 font-light mb-4 tracking-wide"
            >
              {data.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="text-sm md:text-base text-white/30 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {data.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex gap-4 sm:gap-8 mb-10 justify-center lg:justify-start flex-wrap"
            >
              {[
                { value: 700, label: 'DSA Problems' },
                { value: 6, label: 'Projects' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left flex-1 min-w-[100px] sm:min-w-0 sm:flex-none">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
              <div className="text-center lg:text-left flex-1 min-w-[100px] sm:min-w-0 sm:flex-none">
                <div className="text-2xl md:text-3xl font-display font-bold text-white">9.36</div>
                <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mt-1">CGPA</div>
              </div>
            </motion.div>

            {/* CTA + Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative px-8 py-3 rounded-full text-sm font-medium overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <span className="relative text-white">Get In Touch</span>
              </a>

              <div className="flex items-center gap-4">
                {[
                  { href: social.github, icon: <Github className="w-4 h-4" /> },
                  { href: social.linkedin, icon: <Linkedin className="w-4 h-4" /> },
                  { href: social.twitter, icon: <XIcon className="w-4 h-4" /> },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 animate-float-slow">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl blur-3xl scale-110" />

              {/* Photo card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
                className="absolute -bottom-3 -left-3 px-4 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/70 font-medium">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 rounded-full bg-violet-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}