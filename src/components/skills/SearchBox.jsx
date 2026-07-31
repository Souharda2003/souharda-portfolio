function SearchBox({ value, onChange }) {

    return (

        <input
        
            className="skill-search"
            placeholder="Search technologies..."
            value={value}
            onChange={onChange}
        />

    );

}

export default SearchBox;