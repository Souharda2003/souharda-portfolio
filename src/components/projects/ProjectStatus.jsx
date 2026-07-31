function ProjectStatus({ status }) {

return(

<span className={`project-status ${status.toLowerCase().replace(/\s+/g,"-")}`}>

{status}

</span>

);

}

export default ProjectStatus;