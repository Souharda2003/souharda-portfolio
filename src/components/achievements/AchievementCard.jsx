function AchievementCard({achievement}){

return(

<div

className={`achievement-card

${achievement.highlight?"highlight":""}`}

>

<div className="achievement-icon">

{achievement.icon}

</div>

<span className="achievement-category">

{achievement.category}

</span>

<h3>

{achievement.title}

</h3>

<h4>

{achievement.subtitle}

</h4>

<p className="achievement-date">

{achievement.date}

</p>

<p>

{achievement.description}

</p>

</div>

);

}

export default AchievementCard;