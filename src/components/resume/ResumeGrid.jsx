import resumeData from "../../data/resumeData";

import ResumeCard from "./ResumeCard";

function ResumeGrid(){

return(

<div className="resume-grid">

{

resumeData.map((resume)=>(

<ResumeCard

key={resume.id}

resume={resume}

/>

))

}

</div>

);

}

export default ResumeGrid;