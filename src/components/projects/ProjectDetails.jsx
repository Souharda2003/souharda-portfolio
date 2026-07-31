import ChallengeList from "./ChallengeList";
import FutureRoadmap from "./FutureRoadmap";
import ProjectTimeline from "./ProjectTimeline";
function ProjectDetails({ project }) {

return(

<div className="project-details">

<ChallengeList

items={project.challenges}

/>

<FutureRoadmap

items={project.futureRoadmap}

/>
<ProjectTimeline

timeline={project.timeline}

/>
</div>

);

}

export default ProjectDetails;