
function ScreenshotGallery({

images

}){
return(

<div className="gallery-grid">

{

images.map((image,index)=>(

<img

key={index}

src={image}

alt={`ERP Screenshot ${index+1}`}

loading="lazy"

decoding="async"

fetchPriority="low"
className="gallery-image"

/>

))

}

</div>

);

}

export default ScreenshotGallery;