import "./TimelineProgress.css";
import useTimelineProgress from "../../hooks/useTimelineProgress";

function TimelineProgress(){

const progress=useTimelineProgress();

return(

<div className="timeline-progress">

<div

className="timeline-progress-fill"

style={{

height:`${progress}%`

}}

></div>

</div>

);

}

export default TimelineProgress;