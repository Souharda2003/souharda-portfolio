import "./Hero.css";

import { motion } from "framer-motion";
import FloatingCards from "../../components/hero/FloatingCards";
import heroData from "../../data/heroData";
import MouseSpotlight from "../../components/hero/MouseSpotlight";
import HeroButtons from "../../components/hero/HeroButtons";
import TypingText from "../../components/hero/TypingText";
import AvailabilityBadge from "../../components/hero/AvailabilityBadge";
import SocialLinks from "../../components/hero/SocialLinks";
import ScrollIndicator from "../../components/hero/ScrollIndicator";
import HeroBackground from "../../components/hero/HeroBackground";
import AuroraBackground from "../../components/hero/AuroraBackground";
import Particles from "../../components/hero/Particles";
import CursorGlow from "../../components/hero/CursorGlow";
import NoiseOverlay from "../../components/hero/NoiseOverlay";

import {
  fadeUp,
  fadeRight,
  staggerContainer,
} from "../../animations/motionVariants";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <NoiseOverlay/>
      <AuroraBackground/>
      <Particles/>
      <CursorGlow/>
      <MouseSpotlight/>
    <FloatingCards/>
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="hero-greeting"
          >
            {heroData.greeting}
          </motion.span>


          <motion.h1 variants={fadeUp}>
            {heroData.name}
          </motion.h1>

          <motion.div variants={fadeUp}>
            <TypingText
              words={heroData.typingRoles}
            />
          </motion.div>

          <motion.p variants={fadeUp}>
            {heroData.description}
          </motion.p>

          <motion.div variants={fadeUp}>
            <AvailabilityBadge
              status={heroData.availability.status}
            />
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <HeroButtons
              buttons={heroData.buttons}
              />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SocialLinks
              socials={heroData.socials}
            />
          </motion.div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="hero-image"
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-sphere">

<HeroBackground />
          </div>
          <div className="image-wrapper">
            <img
              src={heroData.image}
              alt={heroData.name}
            />
          </div>
        </motion.div>

      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;