function ProjectButtons({project}){

return(

<div className="project-buttons">

<a
  href={project.liveDemo}
  target="_blank"
  rel="noopener noreferrer"
  className="live-btn"
  aria-label={`Open ${project.name} Live Demo`}
>
  Live Demo
</a>

</div>

);

}

export default ProjectButtons;