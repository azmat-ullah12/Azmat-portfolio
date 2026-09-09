'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { achievements } from '@/data/profile';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#0D0717]">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">10</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Achievements</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-14 text-white">
            Recognition & milestones.
          </h2>
        </AnimatedSection>

        <div className="flex flex-col">
          {achievements.map((achievement, index) => {
            const isGold = achievement.title.toLowerCase().includes('gold') || achievement.title.toLowerCase().includes('first');
            
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="py-8 border-b border-[#26173B] last:border-0">
                  {isGold && <div className="w-8 h-1 bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6] rounded-full mb-4"></div>}
                  <h3 className={`font-heading font-bold text-white mb-2 ${isGold ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                    {achievement.title}
                  </h3>
                  {achievement.description && (
                    <p className="text-lg text-[#A1A1AA] mb-2">{achievement.description}</p>
                  )}
                  {achievement.detail && (
                    <p className="text-sm text-[#A1A1AA]/60">{achievement.detail}</p>
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
