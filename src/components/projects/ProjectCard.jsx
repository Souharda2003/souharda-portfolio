import ProjectStatus from "./ProjectStatus";
import ProjectTags from "./ProjectTags";
import ProjectActions from "./ProjectActions";

function ProjectCard({ project }) {

return(

<div className="project-card">



<h3>

{project.name}

</h3>

<h4>

{project.subtitle}

</h4>
<ProjectStatus

status={project.status}

/>
<p>

{project.description}

</p>

<p className="project-duration">

{project.duration}

</p>

<ProjectTags

technologies={project.technologies}

/>

<ProjectActions

project={project}

/>

</div>

);

}

export default ProjectCard;