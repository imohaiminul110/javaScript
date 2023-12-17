import React from 'react';
import Card from './component/card'
import Data from './data.json'

function App(){

  // let items = [];
  // for(let x=0; x<Data.length; x++){
  //   items.push(<Card titleText = {Data[x].title} descTest = {Data[x].desc}/>)
  // }


  // let items = [];
  // items = Data.map((items) => <Card titleText={items.title} descTest={items.desc} /> )


  return(
    <div>
      <h1 className='headingStyle'>Todo App</h1>

      {Data.map((items, index) => <Card key={index} titleText={items.title} descTest={items.desc} /> )}

      {/* {items} */}

    </div>
  )
}
 export default App;