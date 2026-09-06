'use client';

import React from 'react';
import { ArrowRight, Linkedin, BookOpen, GraduationCap, Globe, Briefcase, Mail, ShoppingBag } from 'lucide-react';
import { personalInfo, profileLinks } from '@/data/profile';

const socialItems = [
  { name: 'LinkedIn', icon: Linkedin, url: profileLinks.linkedin },
  { name: 'ResearchGate', icon: BookOpen, url: profileLinks.researchgate },
  { name: 'Google Scholar', icon: GraduationCap, url: profileLinks.googleScholar },
  { name: 'ORCID', icon: Globe, url: profileLinks.orcid },
  { name: 'Upwork', icon: Briefcase, url: profileLinks.upwork },
  { name: 'Fiverr', icon: Briefcase, url: profileLinks.fiverr },
  { name: 'eBay', icon: ShoppingBag, url: profileLinks.ebay },
  { name: 'Cyber World Insight', icon: Globe, url: profileLinks.cwi },
  { name: 'Portfolio', icon: BookOpen, url: profileLinks.portfolio },
];

export default function Footer() {
  return (
    <footer className="bg-[#101114] text-white py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16 xl:px-20 w-full">
      <div className="max-w-[1360px] mx-auto">
        {/* Top CTA */}
        <div className="mb-24 md:mb-32">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10 tracking-tight">
            Let&apos;s build something<br />
            <span className="text-[#8B5CF6]">meaningful.</span>
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#5B21B6] transition-colors"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 px-7 py-3.5 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
            >
              View My Research
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-heading font-bold text-lg tracking-tight">
              {personalInfo.name.toUpperCase()}
            </p>
            <p className="text-white/40 text-sm mt-1">
              Researcher · Educator · Digital Creator · Emerging Entrepreneur
            </p>
            <p className="text-[11px] text-white/20 mt-1">
              Research · Education · Data · Digital Creativity · Projects
            </p>
          </div>

          <div className="flex items-center gap-1">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 text-white/50 hover:text-[#7C3AED] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
            {/* Social links */}
            {socialItems.map((item) => {
              const Icon = item.icon;
              const isEmpty = !item.url;
              return (
                <a
                  key={item.name}
                  href={isEmpty ? '#' : item.url}
                  target={isEmpty ? undefined : '_blank'}
                  rel={isEmpty ? undefined : 'noopener noreferrer'}
                  className={`p-2.5 transition-colors ${
                    isEmpty
                      ? 'opacity-20 cursor-default pointer-events-none'
                      : 'text-white/50 hover:text-[#7C3AED]'
                  }`}
                  aria-label={item.name}
                  aria-disabled={isEmpty}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-[11px] text-white/20">
          © 2026 {personalInfo.name}
        </div>
      </div>
    </footer>
  );
}
