import React from 'react'
import Navegador from './Navegador'
import './Home.css'



function Home() {
  return (
    <body style={{backgroundColor:"white"}}>
      <Navegador/>
      <h1 style={{fontFamily:"fantasy", textAlign: "center"}}>
      Un enfoque interdisciplinario del conocimiento para un mundo en evolución sostenible
        
      </h1>
      <br></br>
      <div style={{margin:"1px", padding:"2rem"}}>
          <p>Invitamos a participar en el Simposio Internacional "Un enfoque interdisciplinario del conocimiento para un mundo en evolución sostenible", que se llevará a cabo del 2 al 4 de agosto de 2023 en el municipio de Floridablanca. <br></br><br></br>

El simposio se centrará en la importancia de un enfoque interdisciplinario del conocimiento para abordar los desafíos del mundo actual. En un mundo en constante cambio, es necesario que los profesionales de diferentes áreas trabajen juntos para encontrar soluciones innovadoras.<br></br><br></br>

El simposio contará con una amplia gama de presentaciones y paneles de discusión, que abordarán temas como:</p>
<br></br>
<ol>
  <li>La interdisciplina en la ciencia, la tecnología, la ingeniería y las matemáticas (STEM)</li>
  <li>La interdisciplina en las ciencias sociales y las humanidades</li>
  <li>La interdisciplina en la gestión y la política pública</li>
  <li>La interdisciplina en la educación y la comunicación</li>
</ol>
        </div>
    </body>
  )
  
}

export default Home
