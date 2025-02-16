 
import About from './components/About'
import Description from './components/Description'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Job from './components/Job'
import { Helmet } from 'react-helmet'



function App() {


  return (
    <>
      <Helmet>
        <title>Prashant Acharya - MERN Stack Developer Portfolio</title>
        <meta name="description" content="Prashant Acharya is a JavaScript Developer with expertise in the MERN stack, based in Nepal. Explore his portfolio showcasing skills, projects, and achievements." />
        <meta name="keywords" content="Prashant Acharya, MERN stack developer, JavaScript developer, Nepal web developer, React developer, Node.js, MongoDB, Express.js, full stack developer,Prashant,prashant,prashant acharya,prashant developer, prashant acharya developer,butwal,nepal,prashant nepali,shirg solutions,technergy,froker" />
        <meta property="og:title" content="Prashant Acharya - MERN Stack Developer Portfolio" />
        <meta property="og:description" content="Prashant Acharya is a JavaScript Developer specializing in the MERN stack, with a focus on building dynamic web applications. Based in Nepal." />
        <meta property="og:image" content="/pp.png" />
<meta name="twitter:image" content="/pp.png" />
        <meta property="og:url" content="https://prashant1.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Prashant Acharya - MERN Stack Developer Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Prashant Acharya, a MERN stack developer from Nepal showcasing his JavaScript, React, Node.js, and web development expertise." />
       
      </Helmet>
      <main className="main">
        <section className="about-section">
          <About />
        </section>

        <section className="description">
          <Description />
          <Job />
          <Skill />
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
