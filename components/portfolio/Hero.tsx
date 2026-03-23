'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, FileText, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        // Blink cursor after done typing
        setTimeout(() => {
          const blinkInterval = setInterval(() => {
            setShowCursor(prev => !prev);
          }, 530);
          return () => clearInterval(blinkInterval);
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-[3px] h-[1em] ml-1 bg-gradient-to-b from-violet-500 to-blue-500 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
    </span>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => `${Math.round(v)}+`);
  const [display, setDisplay] = useState('0+');

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: 'easeOut',
    });
    const unsubscribe = rounded.on('change', v => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [target, count, rounded]);

  return <span>{display}</span>;
}

export function Hero({ data, social }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[hsl(222,47%,6%)]">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.3),transparent_70%)]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className="relative animate-float"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-blue-500 to-indigo-500 p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-950">
                    <img
                      src={data.avatar}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Glow behind avatar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-blue-500 to-indigo-500 blur-2xl opacity-30 dark:opacity-20 -z-10 scale-110" />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full flex items-center gap-1.5 shadow-lg shadow-violet-500/25"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">Available</span>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm md:text-base font-medium text-violet-600 dark:text-violet-400 mb-3 tracking-wider uppercase"
                >
                  Hello, I&apos;m
                </motion.p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text leading-tight">
                  {data.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  <TypingText text={data.title} />
                </h2>
                <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
                  {data.tagline}
                </p>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    <AnimatedCounter target={700} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">DSA Problems</div>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">
                    <AnimatedCounter target={6} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Projects</div>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">9.36</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">CGPA</div>
                </div>
              </motion.div>

              {/* Location & email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start text-sm text-slate-500 dark:text-slate-400"
              >
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  {data.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-violet-500" />
                  {data.email}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-3 justify-center md:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300"
                  asChild
                >
                  <a href="#projects">View Projects</a>
                </Button>
                {data.resume && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300"
                    asChild
                  >
                    <a href={data.resume} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                )}
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex gap-3 mt-8 justify-center md:justify-start"
              >
                {[
                  { href: social.github, icon: <Github className="w-5 h-5" /> },
                  { href: social.linkedin, icon: <Linkedin className="w-5 h-5" /> },
                  { href: social.twitter, icon: <XIcon className="w-5 h-5" /> },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400">Scroll</span>
          <ArrowDown className="w-4 h-4 text-violet-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}