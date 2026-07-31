import "./About.css";

import AboutImage from "../../components/about/AboutImage";
import AboutContent from "../../components/about/AboutContent";
import QuickInfo from "../../components/about/QuickInfo";
import Highlights from "../../components/about/Highlights";
import CareerCard from "../../components/about/CareerCard";
import Philosophy from "../../components/about/Philosophy";
import StrengthSection from "../../components/about/StrengthSection";
import LanguageSection from "../../components/about/LanguageSection";
import Statistics from "../../components/about/Statistics";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <section id="about" className="about-section">

    <div
        className="about-container"
       
    >

        <div className="about-left">
          <AboutImage />
        </div>

        <div className="about-right">
          <AboutContent />
        </div>

       </div>

      {/* Information Cards */}
      <div className="about-bottom">

        <QuickInfo items={aboutData.quickInfo} />

        <Highlights items={aboutData.highlights} />

        <CareerCard career={aboutData.careerGoal} />

        <Philosophy philosophy={aboutData.philosophy} />

      </div>

      {/* Other Sections */}
      <StrengthSection />

      <LanguageSection />

      <Statistics />

    </section>
  );
}

export default About;