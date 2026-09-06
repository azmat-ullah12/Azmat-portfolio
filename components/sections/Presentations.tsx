'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { presentations } from '@/data/profile';

export default function Presentations() {
  return (
    <section id="presentations" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">14</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Presentations</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-[#101114]">
            Selected presentations.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {presentations.map((presentation, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="py-5 border-b border-[#E5E5E3]/30 last:border-0 flex items-start gap-6">
                <div className="text-sm text-[#7C3AED] font-medium w-16 shrink-0 mt-0.5">
                  {presentation.year}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#101114]">
                    {presentation.title}
                  </h3>
                  <p className="text-sm text-[#71717A] mt-1">
                    {presentation.venue}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
