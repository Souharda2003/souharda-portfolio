function SkillBadge({ level }) {

  return (

    <div className="skill-progress">

      <div

        className="skill-progress-fill"

        style={{

          width:`${level}%`

        }}

      >

      </div>

    </div>

  );

}

export default SkillBadge;