/* eslint-disable no-unused-vars */
import contactData from "../../data/contactData";

import ContactCard from "./ContactCard";
import{

MdEmail,

MdLocationOn,

MdPhone

}

from "react-icons/md";

import{

FaGithub,

FaLinkedin

}

from "react-icons/fa";
function ContactInfo(){

return(

<div className="contact-info">
<ContactCard

icon={<MdEmail/>}

title="Email"

value={contactData.email}

/>

<ContactCard

icon={<MdPhone/>}

title="Phone"

value={contactData.phone}

/>

<ContactCard

icon={<FaGithub/>}

title="GitHub"

value={contactData.github}

/>

<ContactCard

icon={<FaLinkedin/>}

title="LinkedIn"

value={contactData.linkedin}

/>

<ContactCard

icon={<MdLocationOn/>}

title="Location"

value={contactData.location}

/>
</div>

);

}

export default ContactInfo;