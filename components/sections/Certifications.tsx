'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { certifications } from '@/data/profile';
import { FileText } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">13</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Certifications</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-white">
            Continuous learning.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className="block bg-[#160D24] border border-[#26173B] rounded-xl overflow-hidden group hover:border-[#8B5CF6]/40 hover:bg-[#1D1231] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(124,58,237,0.1)]"
              >
                <div className="aspect-[3/2] bg-[#130A21] flex items-center justify-center">
                  <FileText className="w-12 h-12 text-[#A1A1AA]/20 group-hover:text-[#8B5CF6]/40 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-[13px] font-medium text-white group-hover:text-[#A78BFA] transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
