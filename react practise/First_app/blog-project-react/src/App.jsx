import { useState } from 'react'
import './App.css'  
import Counter from './Counter'
import RandomImage from './RandomImage';
function sayHello(){
  console.log("hello world");
}
sayHello()

function App() {
  sayHello()

  const now = new Date().toString()

  return (
    <div className='App'>
      <h1>Hello</h1>
      <p>{6+9}</p>
      <p>{now}</p>
      <Counter/>
      <RandomImage/>
      <RandomImage/>
      <RandomImage/>
    </div>
  )
}

export default App
