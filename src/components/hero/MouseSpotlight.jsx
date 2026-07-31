import "./MouseSpotlight.css";

import useMousePosition from "../../hooks/useMousePosition";

function MouseSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="mouse-spotlight"
      style={{
        transform: `translate(${x - 250}px, ${y - 250}px)`,
      }}
    />
  );
}

export default MouseSpotlight;