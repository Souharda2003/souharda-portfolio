function TimelineStep({step}){

return(

<div className="achievement-step">

<div className="achievement-dot"/>

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