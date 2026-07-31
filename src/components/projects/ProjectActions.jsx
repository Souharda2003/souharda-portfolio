function ProjectActions({ project }) {
  return (
    <div className="project-actions">

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          Live Demo
        </a>
      )}

      {project.github && (
        <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="project-btn secondary"
  aria-label={`Open ${project.name} GitHub Repository`}
>
  GitHub
</a>
      )}

    </div>
  );
}

export default ProjectActions;