'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { certifications } from '@/data/profile';
import { FileText } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">12</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Certifications</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-[#101114]">
            Continuous learning.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className="block bg-[#F7F7F5] rounded-lg overflow-hidden group hover:bg-[#F5F3FF]/50 transition-all duration-300"
              >
                <div className="aspect-[3/2] bg-gradient-to-br from-[#F7F7F5] to-[#F5F3FF]/20 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-[#71717A]/15 group-hover:text-[#7C3AED]/20 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-[13px] font-medium text-[#101114] leading-snug line-clamp-2">
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
