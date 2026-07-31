import { useEffect, useState } from "react";

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}

export default useActiveSection;