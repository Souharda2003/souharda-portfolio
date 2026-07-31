import { softSkills }

from "../../data/whyMeData";

function SkillHighlights(){

return(

<div className="soft-skills">

<h3>

Core Professional Skills

</h3>

<div className="soft-skill-grid">

{

softSkills.map((skill,index)=>(

<span

key={index}

className="soft-skill"

>

{skill}

</span>

))

}

</div>

</div>

);

}

export default SkillHighlights;