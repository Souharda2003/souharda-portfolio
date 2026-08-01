import "./Contact.css";

import ContactHeader from "../../components/contact/ContactHeader";

import ContactInfo from "../../components/contact/ContactInfo";

import ContactForm from "../../components/contact/ContactForm";
import ContactBottom from "../../components/contact/ContactBottom";
function Contact(){

return(

<section

id="contact"

className="contact-section"

>

<div className="contact-container">

<ContactHeader/>

<div className="contact-grid">
<ContactBottom/>
<ContactInfo/>

<ContactForm/>

</div>

</div>
<div className="contact-cta">

<h2>

Let's Create Something Meaningful Together 🚀

</h2>

<p>

Whether it's software engineering, AI, machine learning, data science, enterprise applications, or innovative full-stack solutions, I am always excited to collaborate on impactful projects.

</p>

</div>
</section>


);

}

export default Contact;