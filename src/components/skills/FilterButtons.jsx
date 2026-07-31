function FilterButtons({
    categories,
    selected,
    onSelect
}) {

    return (

        <div className="filter-buttons">

            {
                categories.map(category => (

                    <button
                        key={category}
                        className={
                            selected === category
                                ? "active"
                                : ""
                        }
                        onClick={() => onSelect(category)}
                    >
                        {category}
                    </button>

                ))
            }

        </div>

    );

}

export default FilterButtons;