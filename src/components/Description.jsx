 
import React from 'react'

const Description = () => {

  let projects=[
    {
      name:"GufSuff 💬",
      desc:"GuffSuff is a real-time messaging website built with the MERN stack and Socket io.",
      img:"https://t4.ftcdn.net/jpg/05/11/87/37/360_F_511873784_NLmIMOcuwo9JTuoXJNyR0jQSQOUXUvFk.jpg",
      link:"https://gufsuff.netlify.app/",
      time:"Aug-Sep"
    },
    {
      name:"Streamzone 🎬",
      desc:"A video streaming application built with React utilizing YouTube API",
      img:"https://stripe-camo.global.ssl.fastly.net/461f0b7deb2d032b33e1885dc64b8c36a58093617db119cd526def5058df919d/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878546c51795232464d4f556c334f584a5959324a6166475a735833526c63335266646c464453586b344d57643255545a574d6e5246636e64705a324643576b526f30307264686166444474",
      link:"https://streamzone25.netlify.app/",
      time:"Jan-Feb"

    },
    {
      name:"DexGame 🎮",
      desc:"Built under React, a game distribution application powered by RAWG API",
      img:"/dex.png",
      link:"https://dexgame.netlify.app/",
      time:"March-April"

    },
    {
      name:"DayThought 💡",
      desc:"A full stack blog application utiliizing MERN that enables to write and connect your thoughts",
      img:"/day.png",
      time:"May-June",
      link:"https://github.com/prashant48653c/DayThought"

    },
  ]
  return (
    <div className='d-boxs'>
      <h4>🎯 Projects</h4>

<div className="d-box-container">

{
  projects.map((project,i)=>{
    return (
<div key={i} className="d-box">
  <em style={{fontSize:".8rem",color:"grey"}} >{project.time}</em>
       <h6> {project.name} </h6>
       <p>{project.desc}</p>
       <a target='_blank' href={project.link}>
       <img src={project.img} alt="" />
       </a>
      </div>
    )
  })
}


    

 

       

</div>
     



    </div>
  )
}

export default Description