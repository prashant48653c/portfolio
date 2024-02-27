import { useState } from 'react'
import About from './components/About'
import Description from './components/Description'
import Skill from './components/Skill'
import Contact from './components/Contact'
 
 

function App() {
 

  return (
    <>
    <main className="main">
      <section className="about-section">
<About/>
      </section>

      <section className="description">
        <Description/>
        <Skill/>
        <Contact/>
      </section>
    </main>
    </>
  )
}

export default App
