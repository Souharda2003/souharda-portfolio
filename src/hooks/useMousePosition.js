import { useEffect, useState } from "react";

function useMousePosition() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    let animationFrame;

    function handleMouseMove(event) {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}

export default useMousePosition;