import {

learningFocus

}

from "../../data/certificationData";

import LearningChip

from "./LearningChip";

function LearningFocus(){

return(

<div className="learning-focus">

<h3>

Current Learning Focus

</h3>

<div className="learning-chip-grid">

{

learningFocus.map(

(skill,index)=>(

<LearningChip

key={index}

skill={skill}

/>

)

)

}

</div>

</div>

);

}

export default LearningFocus;