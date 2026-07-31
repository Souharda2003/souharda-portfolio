import skillsData from "../../data/skillsData";
import SkillCategory from "./SkillCategory";
import SkillsToolbar from "./SkillsToolbar";
import EmptySkills from "./EmptySkills";
import useSkillFilter from "../../hooks/useSkillFilter";

function SkillsGrid() {

    const {
        search,
        setSearch,
        category,
        setCategory,
        categories,
        filtered
    } = useSkillFilter(skillsData);

    return (
        <>

            <SkillsToolbar
                categories={categories}
                selected={category}
                search={search}
                onSearch={(e) => setSearch(e.target.value)}
                onSelect={setCategory}
            />

            {
                filtered.length === 0 ? (

                    <EmptySkills />

                ) : (

                    <div className="skills-grid">

                        {
                            filtered.map((category) => (

                                <SkillCategory
                                    key={category.id}
                                    category={category}
                                />

                            ))
                        }

                    </div>

                )
            }
 
        </>
    );

}

export default SkillsGrid;