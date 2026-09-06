'use client';

import { publications } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

export default function Research() {
  const featured = publications.find(p => p.featured) || publications[0];
  const others = publications.filter(p => p !== featured);

  return (
    <section id="research" className="section-padding bg-off-white">
      <div className="section-narrow">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-accent-blue tracking-wider">04</span>
            <div className="h-px bg-soft-gray flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-mid-gray font-medium">Research & Publications</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-16">
            Academic & clinical research.
          </h2>
        </AnimatedSection>

        {featured && (
          <AnimatedSection delay={0.1} className="mb-16">
            <div className="bg-navy rounded-xl p-10 md:p-14">
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#a78bfa] border border-[#a78bfa]/20 px-3 py-1 rounded-md mb-6">
                Featured Research
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                {featured.title}
              </h3>
              <p className="text-white/50 mb-8 max-w-2xl">
                {featured.authors}
              </p>
              {featured.doi && (
                <a
                  href={featured.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-blue text-white px-5 py-2.5 rounded-md hover:bg-accent-blue/90 transition-colors text-sm font-medium"
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
              className="group border-b border-soft-gray/40 py-6 md:py-8"
            >
              <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 items-start">
                <div className="font-heading text-lg font-bold text-accent-blue pt-1">
                  {pub.year}
                </div>
                <div>
                  <h4 className="font-heading text-base md:text-lg font-semibold group-hover:text-accent-blue transition-colors text-navy">
                    {pub.title}
                  </h4>
                  <div className="text-sm text-mid-gray mt-2">
                    {pub.authors}
                  </div>
                  {pub.journal && (
                    <div className="text-sm text-mid-gray/60 italic mt-1">
                      {pub.journal}
                    </div>
                  )}
                </div>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-soft-gray/40 flex items-center justify-center group-hover:border-accent-blue group-hover:text-accent-blue transition-all mt-1"
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
