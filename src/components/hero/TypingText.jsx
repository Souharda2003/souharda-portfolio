import { Typewriter } from "react-simple-typewriter";

import "./TypingText.css";

function TypingText({ words }) {
  return (
    <div className="typing-text">
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={40}
        delaySpeed={1800}
      />
    </div>
  );
}

export default TypingText;