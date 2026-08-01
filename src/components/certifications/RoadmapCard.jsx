function RoadmapCard({item}){

return(

<div className="roadmap-card">

<div className="roadmap-icon">

{item.icon}

</div>

<h3>

{item.title}

</h3>

<span

className={`roadmap-status

${item.status.toLowerCase().replace(" ","-")}`}

>

{item.status}

</span>

</div>

);

}

export default RoadmapCard;