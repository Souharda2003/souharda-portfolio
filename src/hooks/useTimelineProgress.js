import { useEffect, useState } from "react";

export default function useTimelineProgress(){

const [progress,setProgress]=useState(0);

useEffect(()=>{

const handleScroll=()=>{

const section=document.getElementById("education");

if(!section) return;

const rect=section.getBoundingClientRect();

const windowHeight=window.innerHeight;

const total=rect.height+windowHeight;

const current=windowHeight-rect.top;

let percentage=(current/total)*100;

percentage=Math.max(0,Math.min(100,percentage));

setProgress(percentage);

};

window.addEventListener("scroll",handleScroll);

handleScroll();

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

return progress;

}