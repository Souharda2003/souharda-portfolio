import "./Philosophy.css";

function Philosophy({ philosophy }) {

  return (

    <div className="philosophy-card">

      <span>

        {philosophy.title}

      </span>

      <blockquote>

        "{philosophy.quote}"

      </blockquote>

    </div>

  );

}

export default Philosophy;