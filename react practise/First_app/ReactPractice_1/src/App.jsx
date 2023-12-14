import './App.css'
import Joke from './joke'

function App() {

  
  const dadjoke2 = "I am again a programmer"


  return (
    <>
      <h1>Vite + React</h1>
      
      <p>{dadjoke2}</p>
      <p>****</p>
      <Joke joke= "i am a programmer" rating= {1}/>

    </>
  )
}

export default App