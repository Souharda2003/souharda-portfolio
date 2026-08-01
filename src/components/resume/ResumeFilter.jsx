import categories

from "../../data/resumeCategories";

function ResumeFilter({

active,

setActive

}){

return(

<div className="resume-filter">

{

categories.map(

(category)=>(

<button

key={category}

onClick={()=>

setActive(category)

}

className={

active===category

?

"active-filter"

:

""

}

>

{category}

</button>

)

)

}

</div>

);

}

export default ResumeFilter;