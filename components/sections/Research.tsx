'use client';

import { publications } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export default function Research() {
  const featured = publications.find(p => p.featured) || publications[0];
  const others = publications.filter(p => p !== featured);

  return (
    <section id="research" className="section-padding bg-[#160D24] border-y border-[#26173B]/50">
      <div className="section-narrow">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-[#8B5CF6] tracking-wider">04</span>
            <div className="h-px bg-[#26173B] flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] font-medium">Research & Publications</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-16 text-white">
            Academic & educational research.
          </h2>
        </AnimatedSection>

        {featured && (
          <AnimatedSection delay={0.1} className="mb-16">
            <div className="bg-[#130A21] border border-[#26173B] rounded-xl p-10 md:p-14 shadow-[0_0_40px_-10px_rgba(124,58,237,0.2)]">
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#A78BFA] bg-[#7C3AED]/10 border border-[#A78BFA]/30 px-3 py-1 rounded-md mb-6">
                Featured Research
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                {featured.doi ? (
                  <a
                    href={featured.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A78BFA] transition-colors"
                  >
                    {featured.title}
                  </a>
                ) : (
                  featured.title
                )}
              </h3>
              <p className="text-[#A1A1AA] mb-8 max-w-2xl">
                {featured.authors}
              </p>
              {featured.doi && (
                <a
                  href={featured.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7C3AED] text-white px-5 py-2.5 rounded-md hover:bg-[#5B21B6] transition-all duration-300 text-sm font-medium shadow-[0_0_20px_-3px_rgba(124,58,237,0.4)]"
                >
                  Read Publication <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </AnimatedSection>
        )}

        <div className="flex flex-col">
          {others.map((pub, index) => (
            <AnimatedSection
              key={index}
              delay={0.2 + index * 0.1}
              className="group border-b border-[#26173B] py-6 md:py-8"
            >
              <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 items-start">
                <div className="font-heading text-lg font-bold text-[#8B5CF6] pt-1">
                  {pub.year}
                </div>
                <div>
                  <h4 className="font-heading text-base md:text-lg font-semibold text-white">
                    {pub.doi ? (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#A78BFA] transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h4>
                  <div className="text-sm text-[#A1A1AA] mt-2">
                    {pub.authors}
                  </div>
                  {pub.journal && (
                    <div className="text-sm text-[#A1A1AA]/60 italic mt-1">
                      {pub.journal}
                    </div>
                  )}
                </div>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#26173B] text-[#A1A1AA] flex items-center justify-center group-hover:border-[#8B5CF6] group-hover:text-[#8B5CF6] group-hover:bg-[#7C3AED]/10 transition-all mt-1"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
