'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navItems, personalInfo, profileLinks } from '@/data/profile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 flex items-center ${
        isScrolled ? 'bg-[#0D0717]/85 backdrop-blur-xl border-b border-[#26173B]' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="font-heading text-sm font-bold tracking-tight uppercase text-white hover:text-[#A78BFA] transition-colors">
          {personalInfo.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[13px] font-medium text-[#A1A1AA] hover:text-white transition-colors py-2"
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href={personalInfo.cvUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#A1A1AA] hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </a>
          <a
            href="#contact"
            className="bg-[#7C3AED] text-white text-[13px] font-medium px-5 py-2 rounded-md hover:bg-[#5B21B6] transition-all duration-300 shadow-[0_0_20px_-3px_rgba(124,58,237,0.4)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1 -mr-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 h-[calc(100vh-4rem)] bg-[#0D0717] border-t border-[#26173B] p-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-2xl font-heading font-semibold ${
                    activeSection === item.href.substring(1) ? 'text-[#8B5CF6]' : 'text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-8 flex flex-col gap-4 mt-auto border-t border-[#26173B]"
              >
                <a
                  href={personalInfo.cvUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-[#A1A1AA] py-3 rounded-md border border-[#26173B]"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#7C3AED] text-white text-center text-sm font-medium py-3 rounded-md hover:bg-[#5B21B6] transition-colors"
                >
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
