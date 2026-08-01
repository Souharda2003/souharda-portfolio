function ResumeActions({

file,

onPreview

}){

return(

<div className="resume-actions">

<button

onClick={onPreview}

>

Preview

</button>

<a

href={file}

download

>

Download

</a>

</div>

);

}

export default ResumeActions;