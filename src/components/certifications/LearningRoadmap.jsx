import { learningRoadmap }

from "../../data/certificationData";

import RoadmapCard from "./RoadmapCard";

function LearningRoadmap(){

return(

<div className="roadmap-grid">

{

learningRoadmap.map(item=>(

<RoadmapCard

key={item.id}

item={item}

/>

))

}

</div>

);

}

export default LearningRoadmap;