'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { presentations } from '@/data/profile';

export default function Presentations() {
  return (
    <section id="presentations" className="section-padding bg-[#160D24] border-y border-[#26173B]/50">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">13</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Presentations</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-10 text-white">
            Selected presentations.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {presentations.map((presentation, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="py-5 border-b border-[#26173B] last:border-0 flex items-start gap-6">
                <div className="text-sm text-[#8B5CF6] font-medium w-16 shrink-0 mt-0.5">
                  {presentation.year}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {presentation.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] mt-1">
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
