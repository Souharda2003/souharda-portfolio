import SkillCard from "./SkillCard";
import CategoryBadge from "./CategoryBadge";
import SkillChip from "./SkillChip";
import "./SkillsEffects.css";

function SkillCategory({ category }) {

  return (

    <div
className="skill-category"

>

      <div className="category-header">

        <div className="category-left">

          <span className="category-icon">

            {category.icon}

          </span>

          <div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

          </div>

        </div>

        <CategoryBadge
          count={category.skills.length}
        />

      </div>

      <div className="chips-container">

        {

          category.skills.map((skill,index)=>(

            <SkillChip

              key={index}

              name={skill.name}

            />

          ))

        }

      </div>

      <div className="skills-list">

        {

          category.skills.map((skill,index)=>(

            <SkillCard

              key={index}

              skill={skill}

            />

          ))

        }

      </div>

    </div>

  );

}

export default SkillCategory;