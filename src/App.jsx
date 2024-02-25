import { useState } from 'react'
import About from './components/About'
import Description from './components/Description'
 
 

function App() {
 

  return (
    <>
    <main className="main">
      <section className="about-section">
<About/>
      </section>

      <section className="description">
        <Description/>
      </section>
    </main>
    </>
  )
}

export default App
