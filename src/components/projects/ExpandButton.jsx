function ExpandButton({

expanded,

onClick

}){

return(

<button

className="expand-btn"

type="button"

onClick={onClick}

aria-expanded={expanded}

aria-label={

expanded

?

"Collapse Project Details"

:

"Expand Project Details"

}

>

{

expanded

?

"Show Less"

:

"View Case Study"

}

</button>

);

}

export default ExpandButton;