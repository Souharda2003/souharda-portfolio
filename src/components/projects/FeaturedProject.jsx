import projectsData from "../../data/projectsData";

import TechStack from "./TechStack";

import FeatureList from "./FeatureList";
import FeaturedRibbon from "./FeaturedRibbon";
import ProjectButtons from "./ProjectButtons";
import ScreenshotGallery from "./ScreenshotGallery";
import ProjectStats from "./ProjectStats";
import ArchitectureCard from "./ArchitectureCard";
import ModuleGrid from "./ModuleGrid";
import LiveStatus from "./LiveStatus";
import ExpandButton from "./ExpandButton";
import ProjectDetails from "./ProjectDetails";
import useProjectExpand from "../../hooks/useProjectExpand";
function FeaturedProject(){

const project=

projectsData.featured;
const{

expanded,

toggle

}=

useProjectExpand();
return(

<div className="featured-project">

<div className="featured-left">
<FeaturedRibbon/>
<span className="featured-label">

⭐ Featured Project

</span>

<h2>

{project.name}

</h2>
<h4>

{project.subtitle}

</h4>
<LiveStatus

status={project.status}

/>

<p>

{project.description}

</p>
<TechStack

stack={project.technologies}

/>
<ProjectStats

stats={project.statistics}

/>

<ArchitectureCard

architecture={project.architecture}

/>

<ModuleGrid

modules={project.modules}

/>

<FeatureList

features={project.features}

/>

<ProjectButtons

project={project}

/>
<ExpandButton

expanded={expanded}

onClick={toggle}

/>

{

expanded && (

<ProjectDetails

project={project}

/>

)
}

</div>

<div className="featured-right">

<ScreenshotGallery

images={project.screenshots}
/>

</div>
</div>

);

}

export default FeaturedProject;