const projectsData={
featured:{

id:1,

name:"Business ERP",

subtitle:"Enterprise Resource Planning Platform",

duration:"January 2026 – Present",

status:"Active Development",

liveDemo:"https://business-erp-pi.vercel.app",

github:

"https://github.com/Souharda2003/Business-ERP",

description:

"A modern enterprise resource planning platform built to streamline purchasing, inventory, sales, GST, accounting, reporting and analytics through a secure and scalable full-stack architecture.",

features: [

"User Authentication",

"Purchase Management",

"Sales Management",

"Inventory Management",

"GST Management",

"Accounting",

"Analytics Dashboard",

"Reports",

"PDF Export",

"Responsive Design",

"Secure REST API"

],
technologies:[

"React",

"Vite",

"Node.js",

"Express.js",

"MySQL",

"JWT",

"REST API"

],

statistics:[

{

title:"Modules",

value:"12+"

},

{

title:"REST APIs",

value:"40+"

},

{

title:"Database Tables",

value:"18+"

},

{

title:"Core Features",

value:"50+"

}

],
challenges: [

{
title:"Scalable Database Design",
solution:"Designed a normalized MySQL schema with modular tables."
},

{
title:"Authentication",
solution:"Implemented JWT authentication with role-based authorization."
},

{
title:"Dashboard Analytics",
solution:"Built reusable aggregation APIs for real-time business reports."
},

{
title:"Responsive UI",
solution:"Designed mobile-friendly React components with reusable layouts."
}

],

futureRoadmap:[

"AI-powered sales prediction",

"Inventory forecasting",

"Email notification system",

"Multi-company support",

"Cloud backup",

"Mobile application"

],
modules:[

"Authentication",

"Purchase",

"Sales",

"Inventory",

"GST",

"Accounting",

"Analytics",

"Reports",

"LC",

"Payment",

"Dashboard",

"User Management"

],

architecture:[

"Responsive React Frontend",

"Express REST API",

"MySQL Database",

"JWT Authentication"

],

screenshots: [
  "/images/projects/erp/login.webp",
  "/images/projects/erp/dashboard.webp",
  "/images/projects/erp/purchase.webp",
  "/images/projects/erp/sales.webp",
  "/images/projects/erp/reports.webp",
  "/images/projects/erp/analytics.webp"
],
timeline:[

{

year:"2026",

title:"Project Started"

},

{

year:"2026",

title:"Authentication Module"

},

{

year:"2026",

title:"ERP Dashboard"

},

{

year:"2026",

title:"Inventory & GST"

},

{

year:"Present",

title:"Active Development"

}

]
},
others: [

{
id:2,

name:"JARVIS AI",

subtitle:"Voice Controlled Desktop Assistant",

description:
"An intelligent Windows desktop assistant with wake-word detection, speech recognition, AI-powered conversation, and automation features.",

duration:"2026 - Present",

status:"In Progress",

technologies:[
"Python",
"SpeechRecognition",
"pyttsx3",
"Gemini AI"
],

github:"",
demo:""
},

{
id:3,

name:"Online Parking System",

subtitle:"Parking Management Platform",

description:
"A database-driven parking management system developed using Oracle 10g for vehicle registration, booking, and parking allocation.",

duration:"Academic Project",

status:"Completed",

technologies:[
"Oracle 10g",
"SQL",
"PL/SQL"
],

github:"",
demo:""
},

{
id:4,

name:"Dictionary Application",

subtitle:"Client Server Dictionary",

description:
"A TCP client-server dictionary application capable of retrieving word meanings through socket communication.",

duration:"Academic Project",

status:"Completed",

technologies:[
"C",
"Winsock",
"TCP/IP"
],

github:"",
demo:""
},

{
id:5,

name:"Online Quiz Application",

subtitle:"Desktop Examination System",

description:
"A Java Swing application with timer-based quizzes, score calculation, and review functionality.",

duration:"Academic Project",

status:"Completed",

technologies:[
"Java",
"Swing"
],

github:"",
demo:""
}

]

};

export default projectsData;