'use client';

import { experience } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-[#8B5CF6] tracking-wider">03</span>
            <div className="h-px bg-[#26173B] flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] font-medium">Experience</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white">
            Where I've worked.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {experience.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group border-b border-[#26173B] py-8 md:py-10 first:pt-0 -mx-6 px-6 rounded-lg hover:bg-[#160D24] transition-colors duration-300"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                <div className="mt-1">
                  <div className="text-sm text-[#8B5CF6] font-medium">
                    {item.period}
                  </div>
                  <div className="text-sm text-[#A1A1AA] mt-1 font-medium">
                    {item.organization}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#A1A1AA] leading-relaxed">
                    {item.responsibilities.join(', ')}
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
