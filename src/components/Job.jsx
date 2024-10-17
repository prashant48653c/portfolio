import React, { useState } from 'react';

const Job = () => {
  const [currentJob, setCurrentJob] = useState('Froker');

  return (
    <>
      <h4 className='heading'>💼 Experience</h4>
      <div className="d-boxs job-boxs">
        <ul className="job-list">
          <li 
            onClick={() => setCurrentJob("Froker")} 
            className={currentJob === 'Froker' ? 'active' : ''}>
            Froker
          </li>
          <li 
            onClick={() => setCurrentJob("reyansh")} 
            className={currentJob === 'reyansh' ? 'active' : ''}>
            Reyansh Infosys
          </li>
          <li 
            onClick={() => setCurrentJob("shrig")} 
            className={currentJob === 'shrig' ? 'active' : ''}>
            Shrig Solutions
          </li>
        </ul>

        {currentJob === 'Froker' && (
          <div className="job-desc">
            <div className="job-profile">
              <h3>🌐 Web Developer 
                <span> 
                  <a style={{ fontSize: "1rem", color: "grey" }} href="https://www.froker.in/" target='_blank' rel="noopener noreferrer">
                    @Froker
                  </a>
                </span>
              </h3>
              <p className="date">2023 Nov - Dec</p>
            </div>
            <ul className="job-desc-list">
              <li>Explored CSS framework and UI libraries</li>
              <li>Implemented website design and Figma</li>
              <li>Conducted testing tasks using Jest</li>
              <li>Created and implemented API calls</li>
            </ul>
          </div>
        )}

        {currentJob === 'reyansh' && (
          <div className="job-desc">
            <div className="job-profile">
              <h3>🌍 Frontend Engineer</h3>
              <p className="date">2023 May - September</p>
            </div>
            <ul className="job-desc-list">
              <li>Utilized Tailwind and Bootstrap for styling</li>
              <li>Enhanced the UI while working with designers</li>
              <li>Organized and learnt SEO optimization</li>
              <li>Implemented multiple frameworks for CSS</li>
            </ul>
          </div>
        )}

        {currentJob === 'shrig' && (
          <div className="job-desc">
            <div className="job-profile">
              <h3>🌍 Full Stack Developer</h3>
              <p className="date">2024 Jan - June</p>
            </div>
            <ul className="job-desc-list">  
              <li>Utilized Nest Js for structured backend</li>
              <li>Implemented access and refresh token for authentication</li>
              <li>Used Cloudinary for image upload and optimization</li>
              <li>Optimized database with aggregation pipeline</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Job;
