'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/data/profile';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#160D24] border-y border-[#26173B]/50">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">07</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Skills & Services</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-white">
            What I can help with.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.1}>
              <div className="py-6 md:py-8 group cursor-default border-b border-[#26173B] last:border-0 hover:bg-[#1D1231] -mx-4 px-4 rounded-lg transition-colors duration-300">
                <div className="grid md:grid-cols-[40px_250px_1fr] gap-4 md:gap-6 items-start">
                  <div className="text-sm text-[#8B5CF6] font-heading font-bold mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-white group-hover:text-[#A78BFA] transition-colors mt-0.5">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[13px] text-[#A1A1AA] bg-[#130A21] border border-[#26173B] px-3 py-1.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
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
