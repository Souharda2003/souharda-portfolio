import "./Projects.css";

import ProjectsHeader from "../../components/projects/ProjectsHeader";

import FeaturedProject from "../../components/projects/FeaturedProject";

import ProjectGrid from "../../components/projects/ProjectGrid";

function Projects(){

return(

<section

id="projects"

className="projects-section"

>

<div className="projects-container">

<ProjectsHeader/>

<FeaturedProject/>

<ProjectGrid/>

</div>

</section>

);

}

export default Projects;