import GoogleMap from "./GoogleMap";

import AvailabilityCard from "./AvailabilityCard";

import ResumeCard from "./ResumeCard";

import SocialLinks from "./SocialLinks";

function ContactBottom(){

return(

<div className="contact-bottom">

<GoogleMap/>

<div className="contact-right-panel">

<AvailabilityCard/>

<ResumeCard/>

<SocialLinks/>

</div>

</div>

);

}

export default ContactBottom;