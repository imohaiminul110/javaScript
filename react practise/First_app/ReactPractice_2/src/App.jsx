import React from 'react';
import Card from './component/card'


function App(){
  return(
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card titleText = "call mother" descTest = "this is desc 1 this is desc 1 this is desc 1 this is desc 1 " />
      <Card titleText = "call father" descTest = "this is desc 2 this is desc 1 this is desc 1 this is desc 1 " />
      <Card titleText = "call brother" descTest = "this is desc 3 this is desc 1 this is desc 1 this is desc 1 " />
      <Card titleText = "call sister" descTest = "this is desc 4 this is desc 1 this is desc 1 this is desc 1 " />
     
    </div>
  )
}
 export default App;