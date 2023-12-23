import React, { useState } from 'react';
import FirstComponent from './FirstComponent';
// let x = 0;


const EventHandling = (props) => {
    const [x, setx] = useState(0) 
    const btnClicked = () => {
        console.log(`clicked ${x} times`)
        setx(x+1)
        console.log(setx)
        
    }
    return (
    <div>       
        <h1>this is event handler</h1>
        {/* {x} */}
        <button onClick={btnClicked} > Button </button>
        <FirstComponent data= {x} fn = {setx} />
    </div>
    )
}

export default EventHandling;