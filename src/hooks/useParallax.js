import { useEffect, useState } from "react";

function useParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;

    function handleMouseMove(event) {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const x=

(event.clientX-window.innerWidth/2);

const y=

(event.clientY-window.innerHeight/2);
        setOffset({ x, y });
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return offset;
}

export default useParallax;