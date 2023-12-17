import React from 'react';
import Card from './component/card'
import Data from './data.json'
import ReactBootstrap from './component/reactBootstrap';
// import Card2 from './component/card2';

function App(){

  // let items = [];
  // for(let x=0; x<Data.length; x++){
  //   items.push(<Card titleText = {Data[x].title} descTest = {Data[x].desc}/>)
  // }


  // let items = [];
  // items = Data.map((items) => <Card titleText={items.title} descTest={items.desc} /> )


  return(
    <div>

      <ReactBootstrap />

      {/* class component */}
      {/* <Card2 name="Card 2"/> */}
      <h1 className='headingStyle'>Todo App</h1>
      

      {/* functional component */}

      {Data.map((items, index) => <Card key={index} titleText={items.title} descTest={items.desc} /> )}

      {/* nested mapping -- call object inside object */}


      {/* {items} */}

    </div>
  )
}
 export default App;


 //rfc -> react functional component
//rcc -> react class component 