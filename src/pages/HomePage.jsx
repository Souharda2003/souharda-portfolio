import Layout from "../components/layout/Layout";

import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Education from "../sections/Education/Education";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import WhyMe from "../sections/WhyMe/WhyMe";
import Achievements from "../sections/Achievements/Achievements"
import Certifications from "../sections/Certifications/Certifications";
import Contact from "../sections/Contact/Contact";
import ResumeCenter from "../sections/ResumeCenter/ResumeCenter";
function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <WhyMe />
      <Achievements />
      <Certifications />
      <Contact/>
      <ResumeCenter/>
    </Layout>
  );
}
export default HomePage;