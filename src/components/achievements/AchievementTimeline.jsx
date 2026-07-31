import {

achievementTimeline

}

from "../../data/achievementsData";

import TimelineStep

from "./TimelineStep";

function AchievementTimeline(){

return(

<div className="achievement-timeline">

<h3>

Journey Timeline

</h3>

<div className="timeline-scroll">

<div className="timeline-row">

{

achievementTimeline.map((step,index)=>(

<TimelineStep

key={index}

step={step}

/>

))

}

</div>

</div>

</div>

);

}

export default AchievementTimeline;