import { useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = ""
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {Number(count).toFixed(decimals)}
      {suffix}
    </>
  );
}

export default AnimatedCounter;