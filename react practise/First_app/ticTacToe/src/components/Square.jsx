import React from 'react';
import { useState } from 'react';

const Square = ({value, OnSquareClick}) => {
    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue('X')
        
    //     console.log("clicked")
    // }

    return (
    <>
    <div>
        <button onClick={OnSquareClick} >
            {value}
        </button>
    </div>
    </>
    )
}
export default Square;