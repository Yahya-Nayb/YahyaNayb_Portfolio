'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yahya-nayb/',
    icon: Linkedin,
    color: 'hover:text-blue-500',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/212624502806',
    icon: MessageCircle,
    color: 'hover:text-emerald-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Yahya-Nayb',
    icon: Github,
    color: 'hover:text-neutral-400',
  },
  {
    name: 'Gmail',
    href: 'mailto:yahyanayb08@gmail.com',
    icon: Mail,
    color: 'hover:text-red-500',
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        {/* Social Icons Row */}
        <div className="flex items-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-white transition-colors duration-300 ${link.color}`}
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6 md:w-7 md:h-7" />
            </motion.a>
          ))}
        </div>

        {/* Copyright & Location */}
        <div className="text-center space-y-2">
          <p className="text-neutral-500 text-xs md:text-sm font-light tracking-wide">
            © 2026 Yahya Nayb. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
