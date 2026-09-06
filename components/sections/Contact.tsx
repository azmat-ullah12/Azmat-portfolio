'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { profileLinks, personalInfo } from '@/data/profile';
import { Mail, Github, Linkedin, Twitter, ArrowRight, Download, BookOpen, GraduationCap, Globe, Briefcase, ShoppingBag } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0D0717] border-t border-[#26173B] text-white">
      <div className="section-narrow">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-heading font-bold text-[#8B5CF6]">16</span>
            <div className="h-px w-12 bg-[#8B5CF6]/30"></div>
            <span className="text-sm font-heading tracking-widest uppercase text-[#A78BFA]">Get in touch</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
            <span className="text-white block">Have a project, research idea,</span>
            <span className="text-[#8B5CF6] block mt-2">or opportunity?</span>
          </h2>
          
          <p className="text-lg text-[#A1A1AA] mb-14 max-w-2xl">
            I am currently open to new opportunities, collaborations, and research discussions. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="mb-10">
              <div className="text-[11px] uppercase tracking-widest text-[#A78BFA] mb-3">
                Email me
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-lg text-white hover:text-[#8B5CF6] transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-[#8B5CF6]" />
                {personalInfo.email}
              </a>
              <div className="text-[11px] uppercase tracking-widest text-[#A78BFA] mb-3 mt-6">
                Phone
              </div>
              <a 
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="text-lg text-white hover:text-[#8B5CF6] transition-colors inline-flex items-center gap-2 mb-10"
              >
                {personalInfo.phone}
              </a>
            </div>
            
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#A78BFA] mb-3">
                Connect
              </div>
              <div className="flex flex-col gap-1">
                {[
                  { name: 'LinkedIn', icon: Linkedin, url: profileLinks.linkedin },
                  { name: 'ResearchGate', icon: BookOpen, url: profileLinks.researchgate },
                  { name: 'Google Scholar', icon: GraduationCap, url: profileLinks.googleScholar },
                  { name: 'ORCID', icon: Globe, url: profileLinks.orcid },
                  { name: 'Upwork', icon: Briefcase, url: profileLinks.upwork },
                  { name: 'Fiverr', icon: Briefcase, url: profileLinks.fiverr },
                  { name: 'eBay Storefront', icon: ShoppingBag, url: profileLinks.ebay },
                  { name: 'Cyber World Insight', icon: Globe, url: profileLinks.cwi },
                  { name: 'Portfolio', icon: BookOpen, url: profileLinks.portfolio },
                ].map((link) => {
                  const isFilled = link.url && link.url.length > 0;
                  const Icon = link.icon;

                  return isFilled ? (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-2.5 text-[#A1A1AA] hover:text-[#8B5CF6] transition-colors"
                    >
                      <Icon className="w-5 h-5 text-[#8B5CF6]/70 group-hover:text-[#8B5CF6]" />
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <div key={link.name} className="flex items-center gap-3 py-2.5 text-[#A1A1AA]/30">
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                      <span className="text-[11px] text-[#A1A1AA]/20 uppercase ml-2 tracking-wider">Coming soon</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="border border-[#26173B] rounded-xl p-8 bg-[#160D24] shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)] flex flex-col items-start">
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Resume & CV
              </h3>
              <p className="text-[#A1A1AA] text-sm mb-8 leading-relaxed">
                Download my full curriculum vitae to see detailed academic history, 
                complete publication record, and all professional experiences.
              </p>
              <a 
                href={personalInfo.cvUrl || '#'} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-3 rounded-md hover:bg-[#5B21B6] transition-all duration-300 font-medium w-full sm:w-auto shadow-[0_0_20px_-3px_rgba(124,58,237,0.4)]"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
