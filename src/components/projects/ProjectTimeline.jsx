import TimelineStep

from "./TimelineStep";

function ProjectTimeline({

timeline

}){

return(

<div className="project-timeline">

<h3>

Development Timeline

</h3>

{

timeline.map((step,index)=>(

<TimelineStep

key={index}

step={step}

/>

))

}

</div>

);

}

export default ProjectTimeline;