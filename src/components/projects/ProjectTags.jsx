function ProjectTags({ technologies }) {

return(

<div className="project-tags">

{

technologies.map((tech,index)=>(

<span

key={index}

className="project-tag"

>

{tech}

</span>

))

}

</div>

);

}

export default ProjectTags;