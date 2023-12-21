import React from 'react';
import Square from './Square';
import { useState } from 'react';

const Board = () => {
    const [Squares, setSquares] = useState(Array(9).fill(null));

    return(
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}> 
            <Square value={Squares[0]}/>
            <Square value={Squares[1]}/> 
            <Square value={Squares[2]}/>
         </div> 
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Square value={Squares[3]}/>
            <Square value={Squares[4]}/>
            <Square value={Squares[5]}/>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <Square value={Squares[6]}/>
            <Square value={Squares[7]}/>
            <Square value={Squares[8]}/>
         </div>
        </>
    );
}
export default Board;