'use client';

import { useState } from 'react';
import { portfolioItems, portfolioCategories } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ImageIcon } from 'lucide-react';

export default function CreativePortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  if (!portfolioItems || portfolioItems.length === 0) return null;

  const categories = ['All', ...portfolioCategories];
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="creative" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-[#8B5CF6] tracking-wider">07</span>
            <div className="h-px bg-[#26173B] flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A78BFA] font-medium">Creative & Digital Work</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-10 text-white">
            Creative portfolio.
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-md ${
                  activeCategory === category
                    ? 'bg-[#7C3AED] text-white shadow-[0_0_15px_-3px_rgba(124,58,237,0.4)]'
                    : 'text-[#A1A1AA] hover:text-white bg-[#160D24] border border-[#26173B]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFirst = index === 0;
            return (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className={`group rounded-xl overflow-hidden flex flex-col bg-[#160D24] border border-[#26173B] hover:border-[#8B5CF6]/40 transition-all duration-300 ${isFirst ? 'sm:col-span-2' : ''}`}
              >
                <div className={`w-full bg-[#130A21] overflow-hidden flex items-center justify-center ${isFirst ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-[#A1A1AA]/30 group-hover:scale-[1.02] transition-transform duration-500">
                      <ImageIcon className="w-8 h-8 mb-2" />
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-wider text-[#8B5CF6] font-medium mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[13px] text-[#A1A1AA] line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
