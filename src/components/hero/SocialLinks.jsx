import "./SocialLinks.css";

import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import {
    SiLeetcode
} from "react-icons/si";

function SocialLinks({ socials }) {

    function getIcon(icon) {

        switch (icon) {

            case "github":
                return <FaGithub />;

            case "linkedin":
                return <FaLinkedin />;

            case "leetcode":
                return <SiLeetcode />;

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
                    rel="noopener noreferrer"
                    aria-label={item.name}
                >

                    {getIcon(item.icon)}

                </a>

            ))}

        </div>
    );
}

export default SocialLinks;