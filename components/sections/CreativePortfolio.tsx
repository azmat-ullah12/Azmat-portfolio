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
    <section id="creative" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-accent-blue tracking-wider">07</span>
            <div className="h-px bg-soft-gray flex-1 max-w-[40px]"></div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-mid-gray font-medium">Creative & Digital Work</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-10">
            Creative portfolio.
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[13px] font-medium transition-colors rounded-md ${
                  activeCategory === category
                    ? 'bg-navy text-white'
                    : 'text-mid-gray hover:text-navy bg-transparent'
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
                className={`group rounded-lg overflow-hidden flex flex-col ${isFirst ? 'sm:col-span-2' : ''}`}
              >
                <div className={`w-full bg-off-white bg-gradient-to-br from-off-white to-accent-blue/5 overflow-hidden flex items-center justify-center ${isFirst ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-mid-gray/30 group-hover:scale-[1.02] transition-transform duration-500">
                      <ImageIcon className="w-8 h-8 mb-2" />
                    </div>
                  )}
                </div>
                
                <div className="pt-4 pb-2 px-4">
                  <div className="text-[11px] uppercase tracking-wider text-accent-blue font-medium mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-navy mb-1">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[13px] text-mid-gray line-clamp-2">
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
