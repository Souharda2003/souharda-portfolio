import aboutData from "../../data/aboutData";
import "./AboutStats.css";

function LanguageSection(){

return(

<section className="language-section">

<h2>

Languages

</h2>

<div className="language-grid">

{

aboutData.languages.map(language=>(

<div

key={language.id}

className="language-card"

>

<h3>

{language.language}

</h3>

<p>

{language.level}

</p>

</div>

))

}

</div>

</section>

);

}

export default LanguageSection;