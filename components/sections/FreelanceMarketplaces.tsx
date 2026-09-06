'use client';

import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { freelancePlatforms } from '@/data/profile';
import { ExternalLink, ArrowUpRight, Briefcase } from 'lucide-react';

function PlatformIcon({ platformId }: { platformId: string }) {
  if (platformId === 'fiverr') {
    return (
      <span className="w-10 h-10 rounded-lg bg-[#1DBF73]/10 text-[#1DBF73] font-heading font-bold text-lg flex items-center justify-center shrink-0">
        fi
      </span>
    );
  }
  if (platformId === 'upwork') {
    return (
      <span className="w-10 h-10 rounded-lg bg-[#14A800]/10 text-[#14A800] font-heading font-bold text-lg flex items-center justify-center shrink-0">
        Up
      </span>
    );
  }
  if (platformId === 'ebay') {
    return (
      <span className="w-10 h-10 rounded-lg bg-[#E53238]/10 text-[#E53238] font-heading font-bold text-base flex items-center justify-center shrink-0">
        eBay
      </span>
    );
  }
  return <Briefcase className="w-5 h-5 text-[#7C3AED]" />;
}

export default function FreelanceMarketplaces() {
  return (
    <section id="freelance" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">09</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">
              Freelance & Marketplaces
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#101114]">
            Freelance & Marketplace Profiles.
          </h2>
          <p className="text-[#71717A] text-base md:text-lg max-w-2xl mb-14 leading-relaxed">
            Professional freelancing, research consulting, data services, and e-commerce storefronts across major global platforms.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {freelancePlatforms.map((platform, index) => (
            <AnimatedSection key={platform.name} delay={index * 0.1}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between h-full bg-[#F7F7F5] border border-[#E5E5E3] hover:border-[#7C3AED]/40 rounded-xl p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <PlatformIcon platformId={platform.platformId} />
                    <span className="w-8 h-8 rounded-full border border-[#E5E5E3] group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED] text-[#71717A] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {platform.badge && (
                    <div className="inline-block bg-[#F5F3FF] text-[#7C3AED] text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md mb-3">
                      {platform.badge}
                    </div>
                  )}

                  <h3 className="font-heading text-xl font-bold text-[#101114] group-hover:text-[#7C3AED] transition-colors mb-1">
                    {platform.name}
                  </h3>

                  <p className="text-xs text-[#7C3AED] font-medium uppercase tracking-wider mb-3">
                    {platform.role}
                  </p>

                  <p className="text-sm text-[#71717A] leading-relaxed mb-6">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5E3]/60 flex items-center text-xs font-semibold text-[#101114] group-hover:text-[#7C3AED] transition-colors">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
