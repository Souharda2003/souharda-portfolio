function SocialButton({

icon,

title,

link

}){

return(

<a

href={link}

target="_blank"

rel="noopener noreferrer"

className="social-btn"

>

{icon}

<span>

{title}

</span>

</a>

);

}

export default SocialButton;