import useContactForm

from "../../hooks/useContactForm";

function ContactForm(){

const{

form,

loading,

handleChange,

handleSubmit

}

=

useContactForm();

return(

<form

className="contact-form"

onSubmit={handleSubmit}

>

<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your Name"

required

/>

<input

type="email"

name="email"

value={form.email}

onChange={handleChange}

placeholder="Your Email"

required

/>

<input

name="subject"

value={form.subject}

onChange={handleChange}

placeholder="Subject"

required

/>

<textarea

name="message"

rows="7"

value={form.message}

onChange={handleChange}

placeholder="Message"

required

/>

<button

type="submit"

disabled={loading}

>

{

loading

?

"Sending..."

:

"Send Message"

}

</button>

</form>

);

}

export default ContactForm;