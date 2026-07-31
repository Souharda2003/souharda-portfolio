import aboutData from "../../data/aboutData";
import "./AboutStats.css";

function Statistics(){

return(

<section className="statistics-section">

<h2>

Highlights

</h2>

<div className="statistics-grid">

{

aboutData.statistics.map(item=>(

<div

key={item.id}

className="statistics-card"

>

<h3>

{item.number}

</h3>

<p>

{item.title}

</p>

</div>

))

}

</div>

</section>

);

}

export default Statistics;