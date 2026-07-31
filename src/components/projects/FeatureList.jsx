function FeatureList({features}){

return(

<div className="feature-list">

{

features.map((feature,index)=>(

<div

key={index}

className="feature-item"

>

✔ {feature}

</div>

))

}

</div>

);

}

export default FeatureList;