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

              {/* Floating WhatsApp Badge */}
              <motion.a
                href="https://api.whatsapp.com/send?phone=923454050692&text=Hello%20Azmat,%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp — Available for work"
                className="absolute bottom-6 left-6 right-6 bg-[#160D24]/95 backdrop-blur-md rounded-xl p-4 flex items-center justify-between border border-[#26173B] hover:border-[#25D366]/60 transition-all duration-300 z-10 group cursor-pointer shadow-xl"
                animate={{
                  y: [0, 3, 0],
                  scale: [1, 0.985, 1],
                  boxShadow: [
                    '0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 0 0px rgba(37, 211, 102, 0)',
                    '0 14px 30px -5px rgba(0, 0, 0, 0.5), 0 0 16px rgba(37, 211, 102, 0.35)',
                    '0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 0 0px rgba(37, 211, 102, 0)',
                  ],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-[#25D366] transition-colors">
                      Available for work
                    </p>
                    <p className="text-[12px] text-[#A1A1AA] mt-0.5">
                      Actively seeking new opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 shrink-0 ml-2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
              </motion.a>
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
