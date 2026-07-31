function FutureRoadmap({

items

}){

return(

<div className="future-roadmap">

<h3>

Future Roadmap

</h3>

<ul>

{

items.map((item,index)=>(

<li key={index}>

✔ {item}

</li>

))

}

</ul>

</div>

);

}

export default FutureRoadmap;