'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { achievements } from '@/data/profile';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#7C3AED]">11</span>
            <div className="h-px w-12 bg-[#7C3AED]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#71717A]">Achievements</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-14 text-[#101114]">
            Recognition & milestones.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {achievements.map((achievement, index) => {
            const isGold = achievement.title.toLowerCase().includes('gold') || achievement.title.toLowerCase().includes('first');
            
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="py-8 border-b border-[#E5E5E3]/40 last:border-0">
                  {isGold && <div className="w-8 h-1 bg-[#7C3AED] rounded-full mb-4"></div>}
                  <h3 className={`font-heading font-bold text-[#101114] mb-2 ${isGold ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                    {achievement.title}
                  </h3>
                  {achievement.description && (
                    <p className="text-lg text-[#71717A] mb-2">{achievement.description}</p>
                  )}
                  {achievement.detail && (
                    <p className="text-sm text-[#71717A]/60">{achievement.detail}</p>
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
