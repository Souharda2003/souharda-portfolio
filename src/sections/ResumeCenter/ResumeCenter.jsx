import "./ResumeCenter.css";

import ResumeHeader from "../../components/resume/ResumeHeader";
import ResumeGrid from "../../components/resume/ResumeGrid";

function ResumeCenter(){

return(

<section

id="resume"

className="resume-section"

>

<div className="resume-container">

<ResumeHeader/>

<ResumeGrid/>

</div>

</section>

);

}

export default ResumeCenter;