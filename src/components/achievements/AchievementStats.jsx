import { useInView } from "react-intersection-observer";
import AnimatedCounter from "../common/AnimatedCounter";
import { achievementStats } from "../../data/achievementsData";

function AchievementStats() {

  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className="achievement-stats"
    >
      {achievementStats.map((item, index) => (

        <div
          key={index}
          className="achievement-stat"
        >

          <h2>

            {typeof item.value === "number" ? (

              inView ? (

                <AnimatedCounter
                  end={Number(item.value)}
                  decimals={String(item.value).includes(".") ? 2 : 0}
                  suffix={item.suffix}
                />

              ) : (

                `0${item.suffix}`

              )

            ) : (

              item.value

            )}

          </h2>

          <p>{item.title}</p>

        </div>

      ))}
    </div>
  );
}

export default AchievementStats;