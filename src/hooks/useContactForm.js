import { useState } from "react";

import toast from "react-hot-toast";

import { sendContactEmail }

from "../services/emailService";

export default function useContactForm(){

const [loading,setLoading]=

useState(false);

const [form,setForm]=

useState({

name:"",

email:"",

subject:"",

message:""

});

function handleChange(e){

setForm({

...form,

[e.target.name]:

e.target.value

});

}

async function handleSubmit(e){

e.preventDefault();

if(

!form.name ||

!form.email ||

!form.subject ||

!form.message

){

toast.error(

"Please fill all fields."

);

return;

}

try{

setLoading(true);

await sendContactEmail(form);

toast.success(

"Message sent successfully!"

);

setForm({

name:"",

email:"",

subject:"",

message:""

});

}

catch{

toast.error(

"Unable to send message."

);

}

finally{

setLoading(false);

}

}

return{

form,

loading,

handleChange,

handleSubmit

};

}