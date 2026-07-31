function TimelineStep({

step

}){

return(

<div className="timeline-step">

<div className="timeline-dot"/>

<div>

<h4>

{step.year}

</h4>

<p>

{step.title}

</p>

</div>

</div>

);

}

export default TimelineStep;