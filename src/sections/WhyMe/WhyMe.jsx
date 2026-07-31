import "./WhyMe.css";

import WhyMeHeader from "../../components/whyme/WhyMeHeader";
import WhyMeGrid from "../../components/whyme/WhyMeGrid";
import WhyStats from "../../components/whyme/WhyStats";

import HighlightCard from "../../components/whyme/HighlightCard";

import SkillHighlights from "../../components/whyme/SkillHighlights";

import QuoteCard from "../../components/whyme/QuoteCard";
function WhyMe(){

return(

<section

id="why-me"

className="why-section"

>

<div className="why-container">

<WhyMeHeader/>

<WhyMeGrid/>
<WhyStats/>

<div className="why-bottom-grid">

<HighlightCard/>

<QuoteCard/>

</div>

<SkillHighlights/>
</div>

</section>

);

}

export default WhyMe;