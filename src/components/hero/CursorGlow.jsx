import "./CursorGlow.css";
import useMousePosition from "../../hooks/useMousePosition";

function CursorGlow() {

    const { x, y } = useMousePosition();

    return (

        <div

            className="cursor-glow"

            style={{

                left:x,

                top:y

            }}

        />

    );

}

export default CursorGlow;