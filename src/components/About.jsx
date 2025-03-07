 
import  { useState, useEffect } from 'react';
 import axios from 'axios'

const About = () => {

  const [isActive, setIsActive] = useState(false);
  const [isStudy, setIsStudy] = useState(false);
  const [isSleep, setIsSleep] = useState(false);
  
  const [hour, setHour] = useState(false)
  const [realImg,setRealImg]=useState(false)
  useEffect(() => {
     // Fetch the current time in Nepal from WorldTimeAPI
     axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kathmandu')
     .then(response => {
       const currentHour = parseInt(response.data.dateTime.slice(11, 13));
       setHour(currentHour);

       // Determine the activity based on the current hour
       if ((currentHour >= 6 && currentHour < 9) || (currentHour >= 18 && currentHour < 22)) {
         setIsActive(true);
         setIsStudy(false);
         setIsSleep(false);
       } else if (currentHour >= 9 && currentHour < 18) {
         setIsActive(false);
         setIsStudy(true);
         setIsSleep(false);
       } else {
         setIsActive(false);
         setIsStudy(false);
         setIsSleep(true);
       }
     })
     .catch(error => {
       console.error('Error fetching Nepal time:', error);
     });
  }, []);
 
 
 
  return (
    <div className='myself'>
      {/* <div className="mode-btns">
        <button className='mode-btn' >🔥 Recruiter</button>

        <button  onClick={handleClient} className='mode-btn' >🌙 Client</button>



      </div> */}
      <div className='profile-img'   onMouseEnter={()=>setRealImg(true)} onMouseLeave={()=>setRealImg(false)} >
      

      {
       realImg && <img   className='p-image' style={{minWidth:"100%",objectFit:"cover" }} src="/pp.png" alt="" />

        }
        {

       
         ( isSleep && realImg ==false) && <img  className='p-image' src='https://media.tenor.com/ecfWy7xK3PsAAAAM/sleep-zzz.gif' alt='sleep mode' />
        }
        {
       (isActive && realImg == false) && <img className='p-image' src="https://i.pinimg.com/originals/38/a0/ef/38a0eff19955310e41a4d54dc1dd1838.gif" alt="Ready to work" />

        }
        {
         ( isStudy && realImg ==false) && <img alt='Studing'  className='p-image' src='https://i.pinimg.com/originals/b6/39/25/b63925166998c85d8b06f190c47c0e02.gif' />
        }

        <div style={{
          backgroundColor: isActive ? "#0dff00" : (isStudy ? "#191970" : (isSleep ? "#ccc" : "transparent")),
        }} className="badge"></div>

      </div>

      <div className="name">

        <h1   >Prashant </h1>
        <ul>

          <li>💻 Web developer</li>

          <li>📱 Mobile app developer</li>
          <li>🧑 Coding Tutor</li>
          <li>👉 Available for projects</li>



        </ul>

        <div>
          <button className="btn"><a style={{textDecoration:"none",color:"white"}} target='_blank' href='https://sincere-meadow-26a.notion.site/More-Projects-11290e2109ac8078ba28d170667fcffd'>More</a></button>

          <button className="btn-resume"><a style={{color:"white"}}  href="https://drive.google.com/file/d/1v7x5Vmk5Lq0Ar0t8DPrQyi0j6ArksS_W/view" target='_blank' >Resume</a></button>

         
        </div>
      </div>
    </div>

  )
 

}

export default About