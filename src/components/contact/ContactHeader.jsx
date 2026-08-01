import contactData from "../../data/contactData";

function ContactHeader(){

return(

<div className="contact-header">

<p>

Get In Touch

</p>

<h2>

{contactData.title}

</h2>

<p>

{contactData.subtitle}

</p>

<div className="roles">

{

contactData.roles.map(

(role,index)=>(

<span key={index}>

{role}

</span>

)

)

}

</div>

</div>

);

}

export default ContactHeader;