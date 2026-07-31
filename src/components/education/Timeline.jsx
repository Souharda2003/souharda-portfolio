import educationData from "../../data/educationData";
import TimelineCard from "./TimelineCard";
import TimelineProgress from "./TimelineProgress";
function Timeline() {

  return (

    <div className="timeline">

      <TimelineProgress/>

      {

        educationData.timeline.map(

          (item,index)=>(

            <TimelineCard

              key={item.id}

              item={item}

              index={index}

            />

          )

        )

      }

    </div>

  );

}

export default Timeline;