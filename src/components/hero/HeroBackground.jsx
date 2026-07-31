import "./HeroBackground.css";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
function Sphere(){
return(
<Float
speed={2}
rotationIntensity={0.7}
floatIntensity={0.7}
>
<mesh>
<icosahedronGeometry args={[1.65,1]}  />
<meshStandardMaterial

color="#6C63FF"

wireframe
transparent

opacity={0.45}

/>

</mesh>

</Float>

)

}

export default function HeroBackground(){

return(

<div className="hero-background">

<Canvas

dpr={[1,2]}

frameloop="always"

gl={{

antialias:true,

alpha:true,

powerPreference:"high-performance"

}}

camera={{

position:[0,0,6],

fov:50

}}

>

<ambientLight intensity={1.2}/>

<directionalLight
transparent

opacity={0.45}
/>

<Sphere/>

</Canvas>

</div>

)

}