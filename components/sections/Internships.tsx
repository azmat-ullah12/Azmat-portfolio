'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { internships } from '@/data/profile';

export default function Internships() {
  return (
    <section id="internships" className="section-padding bg-[#160D24] border-y border-[#26173B]/50">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">12</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Internships & Fellowships</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-14 text-white">
            Learning through practice.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#26173B] border border-[#26173B] rounded-xl overflow-hidden shadow-[0_0_30px_-5px_rgba(124,58,237,0.1)]">
          {internships.map((internship, index) => (
            <div key={index} className="bg-[#130A21] p-6 md:p-8 hover:bg-[#1D1231] transition-colors duration-300">
              <AnimatedSection delay={index * 0.1}>
                <div className="text-[11px] text-[#8B5CF6] font-semibold uppercase tracking-wider mb-3">
                  {internship.year}
                </div>
                <h3 className="font-heading text-base font-semibold mb-0.5 text-white">
                  {internship.organization}
                </h3>
                {internship.program && (
                  <p className="text-sm text-[#A1A1AA]">{internship.program}</p>
                )}
                {internship.role && (
                  <p className="text-sm text-[#A78BFA] font-medium mt-1">{internship.role}</p>
                )}
                {internship.focus && internship.focus.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {internship.focus.map((area, i) => (
                      <span key={i} className="text-[12px] text-[#A1A1AA] bg-[#160D24] border border-[#26173B] px-2.5 py-1 rounded-md">
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
