import aboutData from "../../data/aboutData";
import StrengthCard from "./StrengthCard";
import "./StrengthSection.css";

function StrengthSection(){

return(

<section className="strength-section">

<h2>

Core Strengths

</h2>

<p className="strength-subtitle">

The qualities that define my approach to software engineering and continuous learning.

</p>

<div className="strength-grid">

{

aboutData.strengths.map((strength)=>(

<StrengthCard

key={strength.id}

strength={strength}

/>

))

}

</div>

</section>

);

}

export default StrengthSection;