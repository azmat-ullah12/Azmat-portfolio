'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { education } from '@/data/profile';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">09</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Education</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-14 text-[#101114]">
            Academic background.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {education.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="border-b border-[#E5E5E3]/40 py-6 md:py-8 last:border-0">
                <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-8 items-baseline">
                  <div className="font-heading text-lg font-bold text-[#101114]">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-0.5 text-[#101114]">
                      {item.degree}
                    </h3>
                    <p className="text-[#71717A] text-sm mb-2">{item.institution}</p>
                    
                    {(item.grade || (item.highlights && item.highlights.length > 0)) && (
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        {item.grade && (
                          <span className="inline-block text-sm text-[#71717A] bg-[#F7F7F5] px-2 py-0.5 rounded">
                            {item.grade}
                          </span>
                        )}
                        {item.highlights?.map((highlight, hIndex) => (
                          <span key={hIndex} className="text-[#7C3AED] font-semibold text-sm">
                            {highlight.replace(/🥇|🥈|🥉|⭐|🏆/g, '').trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {item.thesis && (
                      <p className="text-sm text-[#71717A]/60 italic mt-2">
                        Thesis: {item.thesis}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
