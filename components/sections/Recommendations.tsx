'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Recommendations() {
  return (
    <section id="recommendations" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-[#8B5CF6] tracking-wider">15</span>
            <div className="h-px bg-[#26173B] flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] font-medium">
              Recommendations & Endorsements
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 text-white">
            What people say about me.
          </h2>
          <p className="text-[#A1A1AA] text-sm md:text-base max-w-2xl mb-12">
            Formal recommendation letter and endorsement acknowledging academic excellence, leadership, and professional dedication.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative group max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#160D24] border border-[#26173B] hover:border-[#8B5CF6]/40 transition-all duration-500 shadow-[0_0_30px_-5px_rgba(124,58,237,0.2)]">
            <a
              href="/images/recommendation.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-zoom-in"
              title="Click to view full size recommendation letter"
            >
              <img
                src="/images/recommendation.jpg"
                alt="Recommendation Letter for Azmat Ullah"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
