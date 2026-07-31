import SearchBox from "./SearchBox";
import FilterButtons from "./FilterButtons";

function SkillsToolbar({
    categories,
    selected,
    search,
    onSearch,
    onSelect
}) {

    return (

        <div className="skills-toolbar">

            <SearchBox
                value={search}
                onChange={onSearch}
            />

            <FilterButtons
                categories={categories}
                selected={selected}
                onSelect={onSelect}
            />

        </div>

    );

}

export default SkillsToolbar;