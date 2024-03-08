 
const Contact = () => {
    let contacts=[
        {
            name:"www.linkedin.com",
            link:"https://www.linkedin.com/in/prashant-acharya1/",
            btn:"Connect",
            img:"https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
            col:"#e8f6fc",

        },
        {
            name:"www.github.com",
            link:"https://github.com/prashant48653c",
            btn:"Watch",
            img:"https://www.svgrepo.com/show/303615/github-icon-1-logo.svg",
            col:"#EEEDEB",

        },

        {
            name:"www.instagram.com",
            link:"https://www.instagram.com/praxant28/",
            btn:"Follow",
            img:"https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg",
            col:"#f2deda",

        },
        {
            name:"www.fiverr.com",
            link:" https://www.fiverr.com/prashantacha455",
            btn:"Hire me",
            img:"https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
            col:"#CDFADB",

        },
        {
          name:"www.leetcode.com",
          link:" https://leetcode.com/acharyaprashant227/",
          btn:"Check out",
          img:"https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg",
          col:"#fffdd1",

      },



    ]
  return (
    <div className='d-boxs'>
    <h4>🚀 Get in touch</h4>


<div className="contact-grid">
  {
    contacts.map((con,i)=>{
      return(
<div key={i} style={{background:`${con.col}`}} className="contact-box">
        <img src={con.img} alt="" />
        <p>{con.name}</p>
        <a target='_blank' href={con.link}>
        <button>{con.btn}</button></a>
      </div>
      )
    })
  }

</div>
    
    </div>
  )
}

export default Contact