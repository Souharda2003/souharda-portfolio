import{

FaGithub,

FaLinkedin,

FaEnvelope

}

from "react-icons/fa";

import contactData

from "../../data/contactData";

import SocialButton from "./SocialButton";

function SocialLinks(){

return(

<div className="social-links">

<SocialButton

icon={<FaGithub/>}


link={contactData.github}

/>

<SocialButton

icon={<FaLinkedin/>}

link={contactData.linkedin}

/>

<SocialButton

icon={<FaEnvelope/>}

link={`mailto:${contactData.email}`}

/>

</div>

);

}

export default SocialLinks;