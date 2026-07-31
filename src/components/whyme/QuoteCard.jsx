import "../../sections/WhyMe/WhyMe.css";
import { quote } from "../../data/whyMeData";

function QuoteCard() {
  return (
    <div className="quote-card">

      <div className="quote-header">

        <div className="quote-icon">
          💡
        </div>

        <div>
          <h3>Personal Philosophy</h3>

          <p className="quote-subtitle">
            The mindset that guides every project I build.
          </p>
        </div>

      </div>

      <div className="quote-body">

        <span className="quote-open">❝</span>

        <p className="quote-text">
          {quote.text}
        </p>

        <div className="quote-footer">

          <div className="quote-line"></div>

          <div>

            <h4>{quote.author}</h4>

            <p>{quote.role}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default QuoteCard;