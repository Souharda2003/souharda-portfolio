import "../../sections/WhyMe/WhyMe.css";
function HighlightCard() {
  return (
    <div className="highlight-card">

      <div className="highlight-header">

        <div className="highlight-icon">
          ⭐
        </div>

        <div>
          <h3>What Sets Me Apart</h3>
          <p className="highlight-subtitle">
            Qualities that define my approach to software development.
          </p>
        </div>

      </div>

      <div className="highlight-list">

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Full-Stack Web Development</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Enterprise Software Development</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Artificial Intelligence & Data Science</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Strong Computer Science Fundamentals</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Clean Code & Scalable Architecture</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Responsive & Modern UI Design</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Problem Solving & Analytical Thinking</span>
        </div>

        <div className="highlight-item">
          <span className="check-icon">✔</span>
          <span>Continuous Learning & Growth Mindset</span>
        </div>

      </div>

    </div>
  );
}

export default HighlightCard;