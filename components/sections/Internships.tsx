'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { internships } from '@/data/profile';

export default function Internships() {
  return (
    <section id="internships" className="section-padding bg-[#F7F7F5]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">12</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Internships & Fellowships</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-14 text-[#101114]">
            Learning through practice.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E3]/30 border border-[#E5E5E3]/30">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white p-6 md:p-8">
              <AnimatedSection delay={index * 0.1}>
                <div className="text-[11px] text-[#7C3AED] font-semibold uppercase tracking-wider mb-3">
                  {internship.year}
                </div>
                <h3 className="font-heading text-base font-semibold mb-0.5 text-[#101114]">
                  {internship.organization}
                </h3>
                {internship.program && (
                  <p className="text-sm text-[#71717A]">{internship.program}</p>
                )}
                {internship.role && (
                  <p className="text-sm text-[#7C3AED] font-medium mt-1">{internship.role}</p>
                )}
                {internship.focus && internship.focus.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {internship.focus.map((area, i) => (
                      <span key={i} className="text-[12px] text-[#71717A] bg-[#F7F7F5] px-2.5 py-1 rounded-md">
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
