import achievementsData

from "../../data/achievementsData";

import AchievementCard

from "./AchievementCard";

function AchievementGrid(){

return(

<div className="achievement-grid">

{

achievementsData.map(item=>(

<AchievementCard

key={item.id}

achievement={item}

/>

))

}

</div>

);

}

export default AchievementGrid;