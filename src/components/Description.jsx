const Description = () => {
  let projects = [
    {
      name: "GufSuff 💬",
      desc: "GuffSuff is a real-time messaging website built with the MERN stack and Socket io.",
      img: "/s.jpg",
      link: "https://gufsuff.netlify.app/",
      time: "Aug-Sep",
    },
    {
      name: "Streamzone 🎬",
      desc: "A video streaming application built with React utilizing YouTube API",
      img: "/c.jpg",
      link: "https://streamzone25.netlify.app/",
      time: "Jan-Feb",
    },
    {
      name: "DexGame 🎮",
      desc: "Built under React, a game distribution application powered by RAWG API",
      img: "/dex.png",
      link: "https://dexgame.netlify.app/",
      time: "March-April",
    },
    {
      name: "Bloggy 💡",
      desc: "A full stack blog application utiliizing NestJs that enables to write and connect your blogs",
      img: "/day.png",
      time: "May-June",
      link: "https://www.youtube.com/watch?v=3dmpM0AWbuY",
    },
  ];
  return (
    <div className="d-boxs">
      <h4>🎯 Projects</h4>

      <div className="d-box-container">
        {projects.map((project, i) => {
          return (
            <div key={i} className="d-box">
              <em style={{ fontSize: ".8rem", color: "grey" }}>
                {project.time}
              </em>
              <h6> {project.name} </h6>
              <p>{project.desc}</p>
              <a target="_blank" href={project.link}>
                <img style={{ objectFit: "cover" }} src={project.img} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
