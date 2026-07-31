import "./HeroButtons.css";

function HeroButtons({ buttons }) {
  return (
    <div className="hero-buttons">
      <a
        href={buttons.primary.link}
        className="btn btn-primary"
      >
        {buttons.primary.text}
      </a>

      <a
        href={buttons.secondary.link}
        className="btn btn-secondary"
      >
        {buttons.secondary.text}
      </a>
    </div>
  );
}

export default HeroButtons;