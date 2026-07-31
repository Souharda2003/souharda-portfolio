import SkillProgressCircle from "./SkillProgressCircle";

function SkillCard({ skill }) {

  return (

    <div className="skill-card">

      <div>

       <div className="skill-title">

<h4>

{skill.name}

</h4>

{

skill.featured &&

<span className="featured-tag">

Featured

</span>

}

</div>

        <p className="experience-level">

{skill.experience}

</p>
      </div>

      <SkillProgressCircle

        level={skill.level}

      />

    </div>

  );

}

export default SkillCard;