'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { skillCategories } from '@/data/profile';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#F7F7F5]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">08</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Skills & Services</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-[#101114]">
            What I can help with.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.1}>
              <div className="py-6 md:py-8 group cursor-default border-b border-[#E5E5E3]/50 last:border-0 hover:bg-[#F5F3FF]/30 -mx-4 px-4 rounded-lg transition-colors duration-300">
                <div className="grid md:grid-cols-[40px_250px_1fr] gap-4 md:gap-6 items-start">
                  <div className="text-sm text-[#7C3AED] font-heading font-bold mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-[#101114] group-hover:text-[#7C3AED] transition-colors mt-0.5">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[13px] text-[#71717A] bg-white px-3 py-1.5 rounded-md shadow-sm"
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
