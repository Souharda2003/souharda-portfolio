import TimelineNode from "./TimelineNode";
import AchievementBadge from "./AchievementBadge";
import SubjectTags from "./SubjectTags";
import InstitutionHighlight from "./InstitutionHighlight";
import { motion } from "framer-motion";

import {

leftCard,

rightCard

} from "../../animations/educationVariants";

function TimelineCard({ item, index }) {

  return (

    <motion.div

variants={

index%2===0

?

leftCard

:

rightCard

}

whileHover={{

scale:1.03,

y:-6

}}

className={`timeline-item

${

index%2===0

?

"left"

:

"right"

}`}

>

      <TimelineNode status={item.status} />

      <div
        className={`timeline-card ${
          item.status === "Current"
            ? "current-card"
            : ""
        }`}
      >

        <span className="timeline-badge">

          {item.status}

        </span>

        <h3>{item.degree}</h3>

        {item.specialization && (

          <h4>{item.specialization}</h4>

        )}

        <p className="institution">

          {item.institution}

        </p>

        <p className="duration">

          {item.duration}

        </p>
        <AchievementBadge

text={item.achievement}

/>

<SubjectTags

subjects={item.subjects}

/>

{

item.highlight && (

<InstitutionHighlight/>

)

}
        <p>

          {item.description}

        </p>

      </div>

    </motion.div>

  );

}

export default TimelineCard;