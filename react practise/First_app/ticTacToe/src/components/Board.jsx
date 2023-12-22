import React from 'react';
import Square from './Square';
import { useState } from 'react';

const Board = () => {
    const [Squares, setSquares] = useState(Array(9).fill(null));

    return(
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}> 
            <Square value={Squares[0]} OnSquareClick= {handleClick}/>
            <Square value={Squares[1]} OnSquareClick= {handleClick}/> 
            <Square value={Squares[2]} OnSquareClick= {handleClick}/>
         </div> 
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Square value={Squares[3]} OnSquareClick= {handleClick}/>
            <Square value={Squares[4]} OnSquareClick= {handleClick}/>
            <Square value={Squares[5]} OnSquareClick= {handleClick}/>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <Square value={Squares[6]} OnSquareClick= {handleClick}/>
            <Square value={Squares[7]} OnSquareClick= {handleClick}/>
            <Square value={Squares[8]} OnSquareClick= {handleClick}/>
         </div>
        </>
    );
}
export default Board;