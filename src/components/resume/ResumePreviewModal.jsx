function ResumePreviewModal({

file,

onClose

}){

if(!file) return null;

return(

<div className="resume-modal">

<div className="resume-modal-content">

<button

onClick={onClose}

>

✕

</button>

<iframe

src={file}

title="Resume Preview"

/>

</div>

</div>

);

}

export default ResumePreviewModal;