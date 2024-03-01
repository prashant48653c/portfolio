import React from 'react'

const Skill = () => {
  let skills=[
 
    {
      name:"HTML5",
      img:"https://www.svgrepo.com/show/303205/html-5-logo.svg",
      
    },{
      name:"CSS3",
      img:"https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg",
    
    },{
      name:"JS",
      img:"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
   
    },{
      name:"Tailwind",
      img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    
    },   {
      name:"React",
      img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      
    },{
      name:"Next",
      img:"https://cdn.worldvectorlogo.com/logos/next-js.svg",
       
    },{
      name:"Node",
      img:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
     
    },{
      name:"Express",
      img:"https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
     
    },{
      name:"MongoDB",
      img:"https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
     
    },{
      name:"Typescript",
      img:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
     
    },{
      name:"React Native",
      img:"https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
     
    },{
      name:"Git",
      img:"https://www.svgrepo.com/show/303548/git-icon-logo.svg",
     
    },{
      name:"Firebase",
      img:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
     
    },{
      name:"Material UI",
      img:"https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
     
    },{
      name:"Vite",
      img:"/vite.svg",
     
    },
  ]
  return (
    <div className='d-boxs'>
    <h4>🛠️ Skills & Tools</h4>


<div className="skill-grid">
  {
    skills.map((skill,i)=>{
      return(
<div  className="skill-box">
        <img src={skill.img} alt="" />
        
      </div>
      )
    })
  }

</div>
    
    </div>
  )
}

export default Skill