function ResumeBadge({

resume

}){

return(

<div className="resume-badge">

<span>

ATS {resume.ats}%

</span>

<span>

{resume.version}

</span>

<span>

{resume.updated}

</span>

</div>

);

}

export default ResumeBadge;