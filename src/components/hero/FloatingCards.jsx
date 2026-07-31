import "./FloatingCards.css";

import heroData from "../../data/heroData";
import FloatingCard from "./FloatingCard";

import useParallax from "../../hooks/useParallax";

function FloatingCards() {

    const { x, y } = useParallax();

    return (

        <>

            {heroData.floatingCards.map(card => (

                <FloatingCard

                    key={card.id}

                    card={card}

                    mouseX={x}

                    mouseY={y}

                />

            ))}

        </>

    );

}

export default FloatingCards;