'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Loader2, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
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
    message: ''
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

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: "Message Sent! ✨",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: data.email,
      href: `mailto:${data.email}`,
    },
    {
      icon: <XIcon className="w-5 h-5" />,
      label: 'X (Twitter)',
      value: '@rana61618',
      href: social.twitter,
      external: true,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Aditya Rana',
      href: social.linkedin,
      external: true,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: data.location,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[hsl(222,47%,6%)] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4"
            >
              <MessageSquare className="w-4 h-4" />
              Contact
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-blue-500 to-indigo-500 rounded-2xl" />
                <div className="relative m-[1px] bg-white dark:bg-slate-900/95 rounded-2xl p-8 backdrop-blur-xl h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                    Contact Information
                  </h3>

                  <div className="space-y-5 flex-grow">
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                            {item.label}
                          </h4>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.external ? '_blank' : undefined}
                              rel={item.external ? 'noopener noreferrer' : undefined}
                              className="text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-5 bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-xl border border-violet-500/10">
                    <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                      I&apos;m always interested in hearing about new projects and
                      opportunities. Feel free to reach out!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-blue-500 to-indigo-500 rounded-2xl" />
                <div className="relative m-[1px] bg-white dark:bg-slate-900/95 rounded-2xl p-8 backdrop-blur-xl h-full">
                  <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-violet-500 focus:ring-violet-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-violet-500 focus:ring-violet-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="w-full bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-violet-500 focus:ring-violet-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={4}
                        required
                        className="w-full resize-none bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-violet-500 focus:ring-violet-500/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}