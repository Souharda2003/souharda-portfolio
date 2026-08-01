import ResumeBadge from "./ResumeBadge";

import ResumeActions from "./ResumeActions";
function ResumeCard({

resume

}){

return(

<div

className={`resume-card

${resume.featured ? "featured-resume" : ""}`}

>

<div

className="resume-icon"

style={{

background:resume.color

}}

>

{resume.icon}

</div>
{resume.featured && (

<div className="ats-badge">

ATS Friendly

</div>

)}

<div className="resume-role">

{resume.role}

</div>
<h3>

{resume.title}

</h3>

<p>

{resume.description}

</p>

<div className="resume-skills">

{

resume.skills.map(

(skill,index)=>(

<span

key={index}

className="resume-skill"

>

{skill}

</span>

)

)

}

</div>

<ResumeBadge

resume={resume}

/>

<ResumeActions

file={resume.file}

onPreview={()=>{}}

/>
</div>

);

}

export default ResumeCard;