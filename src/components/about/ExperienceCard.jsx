function ExperienceCard({experience}){

return(

<div className="experience-card">

<h2>

{experience.value}

</h2>

<p>

{experience.title}

</p>

</div>

)

}

export default ExperienceCard;