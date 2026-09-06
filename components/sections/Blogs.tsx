'use client';

import { blogPosts } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Blogs() {
  if (!blogPosts || blogPosts.length === 0) return null;

  return (
    <section id="writing" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-accent-blue tracking-wider">05</span>
            <div className="h-px bg-soft-gray flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-mid-gray font-medium">Writing</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold">
            Thoughts & essays.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {blogPosts.map((post, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group border-b border-soft-gray/40 py-6 hover:bg-accent-blue/[0.02] -mx-4 px-4 transition-colors duration-300 rounded-lg cursor-default"
            >
              <div className="block cursor-default">
                <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 items-center">
                  <div className="text-sm text-mid-gray font-medium">
                    {post.year}
                  </div>
                  <div>
                    <h4 className="font-heading text-base md:text-lg font-semibold group-hover:text-accent-blue transition-colors text-navy">
                      {post.title}
                    </h4>
                    {post.publication && (
                      <div className="text-sm text-mid-gray mt-1">
                        {post.publication}
                      </div>
                    )}
                  </div>
                  <div>
                    {post.type === 'magazine' && (
                      <span className="inline-block text-[10px] uppercase tracking-wider bg-accent-blue/10 text-accent-blue rounded-md px-2.5 py-0.5 font-medium">
                        Magazine
                      </span>
                    )}
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
