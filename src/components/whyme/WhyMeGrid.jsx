import whyMeData from "../../data/whyMeData";

import WhyCard from "./WhyCard";

function WhyMeGrid(){

return(

<div className="why-grid">

{

whyMeData.map(item=>(

<WhyCard

key={item.id}

item={item}

/>

))

}

</div>

);

}

export default WhyMeGrid;