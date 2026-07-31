function StrengthCard({ strength }) {

return(

<div className="strength-card">

<div className="strength-icon">

{strength.icon}

</div>

<h3>

{strength.title}

</h3>

<p>

{strength.description}

</p>

</div>

);

}

export default StrengthCard;