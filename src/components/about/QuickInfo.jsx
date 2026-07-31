import "./QuickInfo.css";

function QuickInfo({items}){

return(

<div className="quick-info-grid">

{

items.map(item=>(

<div

key={item.id}

className="quick-card"

>

<div className="quick-icon">

{item.icon}

</div>

<div>

<h4>{item.title}</h4>

<p>{item.value}</p>

</div>

</div>

))

}

</div>

)

}

export default QuickInfo;