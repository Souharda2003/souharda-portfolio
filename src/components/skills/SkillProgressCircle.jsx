
function SkillProgressCircle({ level }) {

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (level / 100) * circumference;

  return (

    <div className="progress-circle">

      <svg width="70" height="70">

        <circle

          cx="35"
          cy="35"
          r={radius}

          className="circle-bg"

        />

        <circle

          cx="35"
          cy="35"
          r={radius}

          className="circle-progress"

          strokeDasharray={circumference}

          strokeDashoffset={offset}

        />

      </svg>

      <span>

        {level}%

      </span>

    </div>

  );

}

export default SkillProgressCircle;