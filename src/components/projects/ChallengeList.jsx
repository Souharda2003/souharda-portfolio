function ChallengeList({

items

}){

return(

<div className="challenge-list">

<h3>

Challenges & Solutions

</h3>

{

items.map((item,index)=>(

<div

key={index}

className="challenge-card"

>

<h4>

{item.title}

</h4>

<p>

{item.solution}

</p>

</div>

))

}

</div>

);

}

export default ChallengeList;