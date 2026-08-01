function ResumeSearch({

search,

setSearch

}){

return(

<div className="resume-search">

<input

type="text"

placeholder="Search Resume..."

value={search}

onChange={(e)=>

setSearch(

e.target.value

)

}

/>

</div>

);

}

export default ResumeSearch;