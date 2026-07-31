import CountUp from "react-countup";

import { useInView }

from "react-intersection-observer";

function AnimatedCounter({

value,

title

}){

const{

ref,

inView

}=

useInView({

triggerOnce:true

});

const number=

parseInt(value);

const suffix=

value.replace(number,"");

return(

<div

ref={ref}

className="stat-card"

>

<h3>

{

inView

?

<CountUp

end={number}

duration={2}

/>

:

0

}

{suffix}

</h3>

<p>

{title}

</p>

</div>

);

}

export default AnimatedCounter;