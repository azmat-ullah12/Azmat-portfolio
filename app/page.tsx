import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Recommendations from '@/components/sections/Recommendations';
import Research from '@/components/sections/Research';
import Blogs from '@/components/sections/Blogs';
import Projects from '@/components/sections/Projects';
import CreativePortfolio from '@/components/sections/CreativePortfolio';
import Skills from '@/components/sections/Skills';
import FreelanceMarketplaces from '@/components/sections/FreelanceMarketplaces';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Internships from '@/components/sections/Internships';
import Certifications from '@/components/sections/Certifications';
import Presentations from '@/components/sections/Presentations';
import Languages from '@/components/sections/Languages';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Recommendations />
        <Research />
        <Blogs />
        <Projects />
        <CreativePortfolio />
        <Skills />
        <FreelanceMarketplaces />
        <Education />
        <Achievements />
        <Internships />
        <Certifications />
        <Presentations />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
