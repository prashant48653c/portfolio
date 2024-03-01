import React, { useState } from 'react'

const Job = () => {

const [currentJob,setCurrentJob]=useState('reyansh')
 
  return (
    <>
     <h4 className='heading'>💼 Experience</h4>
    <div className="d-boxs job-boxs">
   
       <ul className="job-list">
       <li onClick={()=>setCurrentJob("Froker")} >Froker</li>
        <li onClick={()=>setCurrentJob("reyansh")} >Reyansh Infosys</li>
       </ul>


{
  currentJob == 'Froker' &&
 (
  <div className="job-desc">
  <div className="job-profile">
      <h3>🌐 Web Developer <span> <a style={{fontSize:"1rem",color:"grey"}} href="https://www.froker.in/">@Froker</a></span></h3>
      <p className="date">2024 January - Present</p>
  </div>

  <ul className="job-desc-list">
<li>Worked on Frontend technology while implementing the UI</li>
<li>Implemented website design and enhanced interactivity.</li>
<li>Conducted testing tasks to ensure website functionality and quality.</li>
<li>Created and implemented API calls </li>
  </ul>
 </div>
)
 
      }
 
{
  currentJob == 'reyansh'&& 
  (
<div className="job-desc">
        <div className="job-profile">
            <h3>Software Engineer</h3>
            <p className="date">2024 May - June</p>
        </div>

        <ul className="job-desc-list">
<li>Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS</li>
<li>Implemented website design and enhanced interactivity.</li>
<li>Conducted testing tasks to ensure website functionality and quality.</li>
<li>Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS,</li>
        </ul>
       </div>
  )
}


    </div>

    </>
  )
}

export default Job