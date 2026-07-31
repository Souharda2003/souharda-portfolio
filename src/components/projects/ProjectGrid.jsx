import projectsData from "../../data/projectsData";

import ProjectCard from "./ProjectCard";

function ProjectGrid(){

return(

<div className="project-grid">

{

projectsData.others.map(project=>(

<ProjectCard

key={project.id}

project={project}

/>

))

}

</div>

);

}

export default ProjectGrid;