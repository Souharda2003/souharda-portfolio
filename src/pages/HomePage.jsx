import Layout from "../components/layout/Layout";

import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Education from "../sections/Education/Education";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import WhyMe from "../sections/WhyMe/WhyMe";
import Achievements from "../sections/Achievements/Achievements"
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
    </Layout>
  );
}

export default HomePage;