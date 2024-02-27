 
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const About = () => {

  const [isActive, setIsActive] = useState(false);
  const [isStudy, setIsStudy] = useState(false);
  const [isSleep, setIsSleep] = useState(false);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const checkTime = () => {
      const nepalTime = moment().tz('Asia/Kathmandu');
      const hour = nepalTime.hour();

      if ((hour >= 6 && hour < 9) || (hour >= 18 && hour < 22)) {
        setIsActive(true);
        setIsStudy(false);
        setIsSleep(false);
      } else if (hour >= 9 && hour < 18) {
        setIsActive(false);
        setIsStudy(true);
        setIsSleep(false);
      } else {
        setIsActive(false);
        setIsStudy(false);
        setIsSleep(true);
      }
    };

    checkTime(); // Initial check

    // Update every minute
    const interval = setInterval(checkTime, 60000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);


  const handleClient = () => {
    if (isClient) {
      setIsClient(false)

    } else {
      setIsClient(true)
    }
  }



  return (
    <div className='myself'>
      {/* <div className="mode-btns">
        <button className='mode-btn' >🔥 Recruiter</button>

        <button  onClick={handleClient} className='mode-btn' >🌙 Client</button>



      </div> */}
      <div className='profile-img' >
        {
          isSleep && <img className='p-image' src='https://media.tenor.com/ecfWy7xK3PsAAAAM/sleep-zzz.gif' alt='sleep mode' />
        }
        {
          isActive && <img className='p-image' src="https://i.pinimg.com/originals/38/a0/ef/38a0eff19955310e41a4d54dc1dd1838.gif" alt="" />
        }
        {
          isStudy && <img className='p-image' src='https://i.pinimg.com/originals/b6/39/25/b63925166998c85d8b06f190c47c0e02.gif' />
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