import { highlights } from "../../data/whyMeData";

function WhyStats(){

return(

<div className="why-stats">

{

highlights.map((item,index)=>(

<div

key={index}

className="why-stat-card"

>

<h2>

{item.value}
</h2>
<p>
{item.title}
</p>
</div>
))
}
</div>
);

}

export default WhyStats;