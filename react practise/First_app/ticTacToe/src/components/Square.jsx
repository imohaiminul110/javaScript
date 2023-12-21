import React from 'react';
import { useState } from 'react';

const Square = ({value}) => {
    // const [value, setValue] = useState(null);

    // const handleClick = () => {
    //     setValue('X')
        
    //     console.log("clicked")
    // }

    return (
    <>
    <div>
        <button >
            {value}
        </button>
    </div>
    </>
    )
}
export default Square;