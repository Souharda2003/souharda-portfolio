import { useState } from "react";

export default function useResumeSearch(){

const[search,setSearch]=

useState("");

return{

search,

setSearch

};

}