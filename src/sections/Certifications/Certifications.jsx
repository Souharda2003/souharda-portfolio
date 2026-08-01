import "./Certifications.css";

import CertificationHeader from "../../components/certifications/CertificationHeader";
import CurrentLearning from "../../components/certifications/CurrentLearning";
import LearningRoadmap from "../../components/certifications/LearningRoadmap";
import LearningFocus from "../../components/certifications/LearningFocus";
import LearningQuote from "../../components/certifications/LearningQuote";

function Certifications(){

return(

<section

id="certifications"

className="cert-section"

>

<div className="cert-container">

<CertificationHeader/>

<CurrentLearning/>

<LearningRoadmap/>

<LearningFocus/>

<LearningQuote/>

</div>

</section>

);

}

export default Certifications;