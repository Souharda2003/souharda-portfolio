import aboutData from "../../data/aboutData";

import FloatingBadge from "./FloatingBadge";

import ExperienceCard from "./ExperienceCard";

function AboutImage(){

return(

<div className="about-image">

<FloatingBadge

text={aboutData.badge.text}

/>

<div className="about-image-wrapper">

<img

src={aboutData.image}

alt={aboutData.personal.name}

/>

</div>

<ExperienceCard

experience={aboutData.experience}

/>

</div>

)

}

export default AboutImage;