'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats } from '@/data/profile';

export default function Hero() {
  const headlineText = personalInfo.headline.replace('meaningful work.', '').trim();

  return (
    <section id="home" className="bg-[#0D0717] min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 px-6 md:px-12 w-full overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#7C3AED]/15 via-[#7C3AED]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1360px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#A78BFA] mb-6 font-medium">
              {personalInfo.tagline}
            </div>
            <h1 className="font-heading font-bold leading-[1.02] tracking-tight text-[clamp(2.5rem,6vw,5.5rem)] text-white mb-8">
              {headlineText}{' '}
              <span className="text-[#8B5CF6]">meaningful work.</span>
            </h1>
            <p className="text-[15px] md:text-base text-[#A1A1AA] leading-relaxed mb-10 max-w-lg">
              {personalInfo.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-[#5B21B6] transition-all duration-300 shadow-[0_0_25px_-5px_rgba(124,58,237,0.4)]"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-[#26173B] text-white px-7 py-3.5 rounded-md text-sm font-medium hover:border-[#8B5CF6] hover:bg-[#7C3AED]/10 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#A1A1AA]/70 mt-8 uppercase tracking-wider font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
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
            <div className="w-full max-w-sm aspect-[3/4] rounded-xl bg-[#160D24] border border-[#26173B] relative flex items-center justify-center p-8 shadow-[0_0_50px_-10px_rgba(124,58,237,0.25)]">
              <div className="absolute w-24 h-24 rounded-full bg-[#7C3AED]/20 -top-6 -right-6 blur-2xl pointer-events-none" />

              {/* Profile Photo */}
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} — professional portrait`}
                className="absolute inset-0 w-full h-full object-cover object-top rounded-xl"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#160D24]/90 backdrop-blur-md rounded-lg shadow-xl p-4 flex items-start gap-3 border border-[#26173B] z-10">
                <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Available for work</p>
                  <p className="text-[12px] text-[#A1A1AA] mt-0.5">Actively seeking new opportunities.</p>
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
                <div className="font-heading text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#A1A1AA] uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                {i !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-[#26173B]"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
