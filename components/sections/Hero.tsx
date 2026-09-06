'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats } from '@/data/profile';

export default function Hero() {
  const headlineText = personalInfo.headline.replace('meaningful work.', '').trim();

  return (
    <section id="home" className="bg-white min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 px-6 md:px-12 w-full overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#71717A] mb-6 font-medium">
              {personalInfo.tagline}
            </div>
            <h1 className="font-heading font-bold leading-[1.02] tracking-tight text-[clamp(2.5rem,6vw,5.5rem)] text-[#101114] mb-8">
              {headlineText}{' '}
              <span className="text-[#7C3AED]">meaningful work.</span>
            </h1>
            <p className="text-[15px] md:text-base text-[#71717A] leading-relaxed mb-10 max-w-lg">
              {personalInfo.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#5B21B6] transition-colors"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-[#101114]/10 text-[#101114] px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#101114] hover:text-white transition-colors"
              >
                View Projects
              </a>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#71717A]/50 mt-8 uppercase tracking-wider font-medium">
              <MapPin className="w-3.5 h-3.5" />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm aspect-[3/4] rounded-xl bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE]/30 relative flex items-center justify-center p-8 shadow-sm">
              <div className="absolute w-20 h-20 rounded-full bg-[#7C3AED]/10 -top-6 -right-6 blur-2xl"></div>

              {/* Profile Photo */}
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} — professional portrait`}
                className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg shadow-md shadow-[#101114]/[0.06] p-4 flex items-start gap-3 border-none z-10">
                <CheckCircle2 className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#101114]">Available for work</p>
                  <p className="text-[12px] text-[#71717A] mt-0.5">Actively seeking new opportunities.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-0 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 relative">
            {stats.map((stat, i) => (
              <div key={i} className="relative flex flex-col items-center md:items-start md:px-6">
                <div className="font-heading text-2xl md:text-3xl font-bold text-[#101114]">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#71717A] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                {i !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-[#E5E5E3]"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
