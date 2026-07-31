function SubjectTags({ subjects = [] }) {

    return (

        <div className="subject-tags">

            {subjects.map((subject, index) => (

                <span
                    key={index}
                    className="subject-tag"
                >
                    {subject}
                </span>

            ))}

        </div>

    );

}

export default SubjectTags;