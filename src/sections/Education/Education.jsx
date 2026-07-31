import "./Education.css";

import EducationHeader from "../../components/education/EducationHeader";
import { motion } from "framer-motion";

import {
  containerVariant,
  headerVariant
} from "../../animations/educationVariants";
import Timeline from "../../components/education/Timeline";

function Education(){

return(

<section

id="education"

className="education-section"

>

<motion.div
className="education-container"
variants={containerVariant}
initial="hidden"
whileInView="show"
viewport={{
once:true,
amount:.25
}}
>
<motion.div
variants={headerVariant}
>

<EducationHeader/>

</motion.div>

<Timeline/>

</motion.div>

</section>

)

}

export default Education;