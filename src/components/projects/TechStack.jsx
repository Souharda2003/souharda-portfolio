function TechStack({stack}){

return(

<div className="tech-stack">

{

stack.map((tech,index)=>(

<span

key={index}

className="tech-chip"

>

{tech}

</span>

))

}

</div>

);

}

export default TechStack;