import { useMemo, useState } from "react";

export default function useSkillFilter(data){

const [search,setSearch]=useState("");

const [category,setCategory]=

useState("All");

const categories=[

"All",

...data.map(item=>item.title)

];

const filtered=useMemo(()=>{

return data

.filter(item=>

category==="All"

||

item.title===category

)

.map(item=>({

...item,

skills:item.skills.filter(skill=>

skill.name

.toLowerCase()

.includes(

search.toLowerCase()

)

)

}))

.filter(item=>

item.skills.length>0

);

},[data,category,search]);

return{

search,

setSearch,

category,

setCategory,

categories,

filtered

};

}