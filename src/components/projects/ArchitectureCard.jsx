function ArchitectureCard({architecture}){

return(

<div className="architecture-card">

<h3>

Architecture

</h3>

<ul>

{

architecture.map((item,index)=>(

<li key={index}>

✔ {item}

</li>

))

}

</ul>

</div>

);

}

export default ArchitectureCard;