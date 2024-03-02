 
import React, { useState, useEffect } from 'react';
 import axios from 'axios'

const About = () => {

  const [isActive, setIsActive] = useState(false);
  const [isStudy, setIsStudy] = useState(false);
  const [isSleep, setIsSleep] = useState(false);
  const [isClient, setIsClient] = useState(false)
  const [hour, setHour] = useState(false)
  const [realImg,setRealImg]=useState(false)
  useEffect(() => {
     // Fetch the current time in Nepal from WorldTimeAPI
     axios.get('https://worldtimeapi.org/api/timezone/Asia/Kathmandu')
     .then(response => {
       const currentHour = parseInt(response.data.datetime.slice(11, 13));
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
 

 console.log(hour)
 
  return (
    <div className='myself'>
      {/* <div className="mode-btns">
        <button className='mode-btn' >🔥 Recruiter</button>

        <button  onClick={handleClient} className='mode-btn' >🌙 Client</button>



      </div> */}
      <div className='profile-img'  onMouseEnter={()=>setRealImg(true)} onMouseLeave={()=>setRealImg(false)} >
      

      {
       realImg && <img className='p-image' style={{minWidth:"100%",objectFit:"cover" }} src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-6/386207742_1375566223034219_6874647668499209372_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=HOV_QuZE-SgAX_2EnIV&_nc_oc=AQl6nfJtRkkkE9BJ6MOK2Jhtr8crX00c_1Yg2KsM8O0YbRCp0PWRhfLVfoxHoGJCO0pGNBh3ms5922OxaDLPQguB&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfDxra2CujsEPHn2z0dE0xIUnq1TdKz-3VOoQfaL5K2FKg&oe=65E6DEB3" alt="" />

        }
        {

       
         ( isSleep && realImg ==false) && <img className='p-image' src='https://media.tenor.com/ecfWy7xK3PsAAAAM/sleep-zzz.gif' alt='sleep mode' />
        }
        {
       (isActive && realImg == false) && <img  className='p-image' src="https://i.pinimg.com/originals/38/a0/ef/38a0eff19955310e41a4d54dc1dd1838.gif" alt="" />

        }
        {
         ( isStudy && realImg ==false) && <img  className='p-image' src='https://i.pinimg.com/originals/b6/39/25/b63925166998c85d8b06f190c47c0e02.gif' />
        }

        <div style={{
          backgroundColor: isActive ? "#0dff00" : (isStudy ? "#191970" : (isSleep ? "#ccc" : "transparent")),
        }} className="badge"></div>

      </div>

      <div className="name">

        <h1>Prashant </h1>
        <ul>

          <li>💻 Web developer</li>

          <li>📱 Mobile app developer</li>
          <li>🧑 Coding Teacher</li>
          <li>👉 Available for projects</li>



        </ul>

        <div>
          <button className="btn"><a style={{textDecoration:"none",color:"white"}} href="mailto:acharyaprashant227@gmail.com">Hire me</a></button>
          <button className="btn-resume"><a style={{color:"white"}}  href="https://drive.google.com/file/d/1v7x5Vmk5Lq0Ar0t8DPrQyi0j6ArksS_W/view" target='_blank' >Resume</a></button>

        </div>
      </div>
    </div>

  )
 

}

export default About