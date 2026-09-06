'use client';

import { projects } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Projects() {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="section-padding bg-[#160D24] border-y border-[#26173B]/50">
      <div className="section-narrow">
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-[#8B5CF6] tracking-wider">06</span>
            <div className="h-px bg-[#26173B] flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] font-medium">Projects</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white">
            Selected projects & initiatives.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {projects.map((project, index) => {
            return (
              <AnimatedSection
                key={index}
                delay={0.1}
                className="mb-16 md:mb-24 last:mb-0"
              >
                <div className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] mb-4 font-semibold">
                  Project {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] mb-4 text-white">
                  {project.title}
                </h3>
                
                {project.subtitle && (
                  <div className="text-[#A78BFA] text-base mb-3 font-medium">
                    {project.subtitle}
                  </div>
                )}
                
                {project.description && (
                  <p className="text-[#A1A1AA] text-[15px] leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>
                )}
                
                {project.role && (
                  <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#8B5CF6] font-medium mb-6">
                    {project.role}
                  </div>
                )}
                
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.responsibilities.map((resp, rIndex) => (
                      <span key={rIndex} className="text-[13px] text-[#A1A1AA] bg-[#130A21] border border-[#26173B] px-3 py-1.5 rounded-md">
                        {resp}
                      </span>
                    ))}
                  </div>
                )}

                <div className="aspect-[16/9] w-full bg-[#130A21] border border-[#26173B] rounded-xl flex items-center justify-center mt-8 overflow-hidden group shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)]">
                  <span className="text-2xl md:text-4xl font-heading font-bold text-white/10 uppercase tracking-widest text-center px-4 group-hover:scale-105 group-hover:text-[#8B5CF6]/20 transition-all duration-700">
                    {project.title}
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
