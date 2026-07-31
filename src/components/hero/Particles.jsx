import "./Particles.css";
import { useMemo } from "react";

function Particles() {

    const particles = useMemo(() => {

        return Array.from({ length: 30 }, (_, index) => ({

            id: index,

            // eslint-disable-next-line react-hooks/purity
            left: Math.random() * 100,

            // eslint-disable-next-line react-hooks/purity
            size: 2 + Math.random() * 5,

            // eslint-disable-next-line react-hooks/purity
            delay: Math.random() * 8,

            // eslint-disable-next-line react-hooks/purity
            duration: 8 + Math.random() * 8,

            // eslint-disable-next-line react-hooks/purity
            opacity: .15 + Math.random() * .35

        }));

    }, []);

    return (

        <div className="particles">

            {

                particles.map((particle) => (

                    <span

                        key={particle.id}

                        className="particle"

                        style={{

                            left: `${particle.left}%`,

                            width: `${particle.size}px`,

                            height: `${particle.size}px`,

                            opacity: particle.opacity,

                            animationDelay: `${particle.delay}s`,

                            animationDuration:

                                `${particle.duration}s`

                        }}

                    />

                ))

            }

        </div>

    );

}

export default Particles;