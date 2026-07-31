function ProjectStats({stats}){

return(

<div className="project-stats">

{

stats.map((item,index)=>(

<div

key={index}

className="stat-card"

>

<h3>

{item.value}

</h3>

<p>

{item.title}

</p>

</div>

))

}

</div>

);

}

export default ProjectStats;