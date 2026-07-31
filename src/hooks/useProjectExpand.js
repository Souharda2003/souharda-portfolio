import { useState } from "react";

export default function useProjectExpand(){

const [expanded,setExpanded]=

useState(false);

const toggle=()=>

setExpanded(prev=>!prev);

return{

expanded,

toggle

};

}