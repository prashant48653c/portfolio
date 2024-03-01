 
import React, { useState, useEffect } from 'react';
 

const About = () => {

  const [isActive, setIsActive] = useState(false);
  const [isStudy, setIsStudy] = useState(false);
  const [isSleep, setIsSleep] = useState(false);
  const [isClient, setIsClient] = useState(false)
  const [hour, setHour] = useState(false)

  useEffect(() => {
    // Fetch the current hour in Nepal
    fetch('http://worldtimeapi.org/api/timezone/Asia/Kathmandu')
      .then(response => response.json())
      .then(data => {
        // Extract current hour from datetime string
        const currentHour = parseInt(data.datetime.slice(11, 13));
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
 
 const [realImg,setRealImg]=useState(false)
 
 
  return (
    <div className='myself'>
      {/* <div className="mode-btns">
        <button className='mode-btn' >🔥 Recruiter</button>

        <button  onClick={handleClient} className='mode-btn' >🌙 Client</button>



      </div> */}
      <div className='profile-img' onMouseEnter={()=>setRealImg(true)} onMouseLeave={()=>setRealImg(false)} >
        {
           realImg &&  <img className='p-image' src='https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-1/386207742_1375566223034219_6874647668499209372_n.jpg?stp=c0.33.160.160a_dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_ohc=E0YgrQx-s8sAX_yB_96&_nc_oc=AQmPdEvruqZTAYq4jAVNaLrRMCBEz5a3jpXSHmAkmIOVPwNh9YxGdW2_PjS69OCal-U0sVBZEDlVqZIK9lMWuajY&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfB9qAg8fkeTysZrPV1WIn3lmrgLIxoVDxFF7r-Q4pZ6hg&oe=65E66231' alt='sleep mode' />
        }
        {

       
          isSleep && <img style={{ display: realImg ? "none" : "block" }}   className='p-image' src='https://media.tenor.com/ecfWy7xK3PsAAAAM/sleep-zzz.gif' alt='sleep mode' />
        }
        {
       isActive && <img style={{ display: realImg ? "none" : "block" }} className='p-image' src="https://i.pinimg.com/originals/38/a0/ef/38a0eff19955310e41a4d54dc1dd1838.gif" alt="" />

        }
        {
          isStudy && <img style={{ display: realImg ? "none" : "block" }}  className='p-image' src='https://i.pinimg.com/originals/b6/39/25/b63925166998c85d8b06f190c47c0e02.gif' />
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
          <li>👉Available for projects</li>



        </ul>

        <div>
          <button className="btn">Hire me</button>
          <button className="btn-resume"><a style={{color:"white"}}  href="https://drive.google.com/file/d/1v7x5Vmk5Lq0Ar0t8DPrQyi0j6ArksS_W/view" target='_blank' >Resume</a></button>

        </div>
      </div>
    </div>

  )
 

}

export default About