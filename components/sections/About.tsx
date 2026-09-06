'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, aboutDescription, areasOfFocus } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="bg-[#160D24] border-y border-[#26173B]/50 pt-24 md:pt-32 pb-24 px-6 md:px-12 w-full">
      <div className="w-full max-w-[1360px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="text-[#8B5CF6] font-heading text-sm font-bold">01</span>
            <span className="w-12 h-px bg-[#8B5CF6]/30"></span>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#A78BFA] font-medium">About</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] max-w-3xl text-white">
            A multidisciplinary profile with a research mindset.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-6 text-[16px] text-[#A1A1AA] leading-[1.8]">
              <p>{aboutDescription}</p>
              <p>
                My story is about the intersection of education, research, data,
                projects, digital creative work, and entrepreneurship &mdash; and
                how they connect to create meaningful impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#A78BFA] font-medium mb-5">
              Areas of Focus
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {areasOfFocus.map((area, index) => (
                <span
                  key={index}
                  className="bg-[#130A21] border border-[#26173B] text-[#EDE9FE] rounded-md px-3.5 py-1.5 text-[13px] font-medium hover:border-[#8B5CF6] hover:bg-[#7C3AED]/10 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
