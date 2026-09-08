'use client';

import { blogPosts } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Blogs() {
  if (!blogPosts || blogPosts.length === 0) return null;

  return (
    <section id="writing" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-[#8B5CF6] tracking-wider">05</span>
            <div className="h-px bg-[#26173B] flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] font-medium">Writing</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white">
            Thoughts & essays.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {blogPosts.map((post, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group border-b border-[#26173B] py-6 hover:bg-[#160D24] -mx-4 px-4 transition-colors duration-300 rounded-lg"
            >
              {post.link ? (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 items-center">
                    <div className="text-sm text-[#A1A1AA] font-medium">
                      {post.year}
                    </div>
                    <div>
                      <h4 className="font-heading text-base md:text-lg font-semibold group-hover:text-[#A78BFA] transition-colors text-white">
                        {post.title}
                      </h4>
                      {post.publication && (
                        <div className="text-sm text-[#A1A1AA] mt-1">
                          {post.publication}
                        </div>
                      )}
                    </div>
                    <div>
                      {post.type === 'magazine' && (
                        <span className="inline-block text-[10px] uppercase tracking-wider bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 rounded-md px-2.5 py-0.5 font-medium">
                          Magazine
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="block">
                  <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 items-center">
                    <div className="text-sm text-[#A1A1AA] font-medium">
                      {post.year}
                    </div>
                    <div>
                      <h4 className="font-heading text-base md:text-lg font-semibold text-white">
                        {post.title}
                      </h4>
                      {post.publication && (
                        <div className="text-sm text-[#A1A1AA] mt-1">
                          {post.publication}
                        </div>
                      )}
                    </div>
                    <div>
                      {post.type === 'magazine' && (
                        <span className="inline-block text-[10px] uppercase tracking-wider bg-[#7C3AED]/20 text-[#A78BFA] border border-[#7C3AED]/30 rounded-md px-2.5 py-0.5 font-medium">
                          Magazine
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
