'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { languages } from '@/data/profile';

export default function Languages() {
  return (
    <section id="languages" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">15</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Languages</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-white">
            Languages.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <AnimatedSection key={language.name} delay={index * 0.1}>
              <div className="bg-[#160D24] border border-[#26173B] p-6 rounded-xl">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {language.name}
                </h3>
                <p className="text-sm text-[#A1A1AA] mt-1">{language.level}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
