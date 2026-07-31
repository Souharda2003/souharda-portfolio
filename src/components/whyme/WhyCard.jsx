function WhyCard({item}){

return(

<div className="why-card">

<div className="why-icon">

{item.icon}

</div>

<h3>

{item.title}

</h3>

<p>

{item.description}

</p>

</div>

);

}

export default WhyCard;