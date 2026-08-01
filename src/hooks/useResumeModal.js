import { useState } from "react";

export default function useResumeModal(){

const [open,setOpen]=

useState(false);

const [selected,setSelected]=

useState(null);

function openModal(){

setOpen(true);

}

function closeModal(){

setOpen(false);

}

return{

open,

selected,

setSelected,

openModal,

closeModal

};

}