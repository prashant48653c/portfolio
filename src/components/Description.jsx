 
import React from 'react'

const Description = () => {

  let projects=[
    {
      name:"GufSuff 💬",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio temporibus facere, quia delectus sunt molestias sit excepturi tenetur nobis deleniti.",
      img:"https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vdjIvcmVzaXplOmZpdDoxMjAwLzEqUmNJLWdobUhoLVBjNEpERGVua01BZy5qcGVn.jpeg?width=600&height=600"
    },
    {
      name:"Streamzone 💬",
      desc:"Developed Streamzone, a YouTube clone, using Material UI for UI, Axios for YouTube API integration, and Redux Toolkit for state management. Completed in 2079.",
      img:"https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vdjIvcmVzaXplOmZpdDoxMjAwLzEqUmNJLWdobUhoLVBjNEpERGVua01BZy5qcGVn.jpeg?width=600&height=600"
    },
    {
      name:"DexGame 💬",
      desc:"Developed DexGames, a game store web app, with Chakra UI for UI, Axios for RAWG API integration, Redux Toolkit for state management, and Firebase for user authentication.",
      img:"https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vdjIvcmVzaXplOmZpdDoxMjAwLzEqUmNJLWdobUhoLVBjNEpERGVua01BZy5qcGVn.jpeg?width=600&height=600"
    },
    {
      name:"DayThought 💬",
      desc:"Developed DayThought, a blogging web app, utilizing Material UI for responsiveness. Created APIs and endpoints, managed state and ensured security with JWT authentication",
      img:"https://creatorspace.imgix.net/sites/ogimages/aHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vdjIvcmVzaXplOmZpdDoxMjAwLzEqUmNJLWdobUhoLVBjNEpERGVua01BZy5qcGVn.jpeg?width=600&height=600"
    },
  ]
  return (
    <div className='d-boxs'>
      <h4>🎯 Projects</h4>

<div className="d-box-container">

{
  projects.map((project,i)=>{
    return (
<div className="d-box">
       <h6> {project.name} </h6>
       <p>{project.desc}</p>
       <img src={project.img} alt="" />
      </div>
    )
  })
}


    

 

       

</div>
     



    </div>
  )
}

export default Description