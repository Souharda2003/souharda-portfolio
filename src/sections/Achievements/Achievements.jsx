import "./Achievements.css";

import AchievementHeader

from "../../components/achievements/AchievementHeader";

import AchievementGrid

from "../../components/achievements/AchievementGrid";
import AchievementStats

from "../../components/achievements/AchievementStats";

import AchievementTimeline

from "../../components/achievements/AchievementTimeline";

import MedalBadge

from "../../components/achievements/MedalBadge";

import RecognitionCard

from "../../components/achievements/RecognitionCard";
function Achievements(){

return(

<section

id="achievements"

className="achievement-section"

>

<div className="achievement-container">

<AchievementHeader/>

<AchievementGrid/>
<AchievementStats/>

<MedalBadge/>

<div className="achievement-bottom">

<AchievementTimeline/>

<RecognitionCard/>

</div>
</div>

</section>

);

}

export default Achievements;