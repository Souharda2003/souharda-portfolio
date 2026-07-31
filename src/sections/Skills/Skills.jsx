import "./Skills.css";

import SkillsHeader from "../../components/skills/SkillsHeader";
import SkillsGrid from "../../components/skills/SkillsGrid";


function Skills(){

return(

<section

id="skills"

className="skills-section"

>

<div

className="skills-container"

>

<SkillsHeader/>

<SkillsGrid/>

</div>

</section>

);

}

export default Skills;