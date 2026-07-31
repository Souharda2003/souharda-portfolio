import { useEffect, useState } from "react";

function useScroll() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        function handleScroll() {

            if (window.scrollY > 50) {

                setScrolled(true);

            } else {

                setScrolled(false);

            }

        }

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    return scrolled;

}

export default useScroll;