import aboutData from "../../data/aboutData";

function AboutContent() {

  return (

    <div className="about-content">

      <span className="about-subtitle">

        ABOUT ME

      </span>

      <h2>

        {aboutData.personal.name}

      </h2>

      <h3>

        {aboutData.personal.title}

      </h3>

      <p>

        {aboutData.personal.shortTagline}

      </p>

      {

        aboutData.personal.description.map((paragraph,index)=>(

          <p key={index}>

            {paragraph}

          </p>

        ))

      }

    </div>

  );

}

export default AboutContent;