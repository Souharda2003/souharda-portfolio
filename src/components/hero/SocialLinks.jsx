import "./SocialLinks.css";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

function SocialLinks({ socials }) {

    function getIcon(icon) {

        switch (icon) {

            case "github":
                return <FaGithub />;

            case "linkedin":
                return <FaLinkedin />;

            case "mail":
                return <FaEnvelope />;

            default:
                return null;
        }

    }

    return (

        <div className="social-links">

            {socials.map((item) => (

                <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                >

                    {getIcon(item.icon)}

                </a>

            ))}

        </div>

    );

}

export default SocialLinks;