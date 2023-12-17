import './App.css'
import Joke from './joke'
//import Fun from './fun'

function App() {

  const  fun = "I love fun"
  const dadjoke2 = "I am again a programmer"


  return (   
    <>
      <h1>Vite + React</h1>
      
      <p>{dadjoke2}</p>
      <p>****</p>
      <Joke joke= "i am a programmer" rating= {1}/>

      {/* <Fun> {Fun} </Fun> */}
<p> {fun} </p>

    </>
  )
}

export default App