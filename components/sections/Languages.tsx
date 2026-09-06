'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { languages } from '@/data/profile';

export default function Languages() {
  return (
    <section id="languages" className="section-padding bg-[#F7F7F5]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">14</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Languages</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-[#101114]">
            Languages.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <AnimatedSection key={language.name} delay={index * 0.1}>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#101114]">
                  {language.name}
                </h3>
                <p className="text-sm text-[#71717A] mt-1">{language.level}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
