import React from 'react';
import Square from './Square';
import { useState } from 'react';

const Board = () => {
    const handleClick =(i)=>{
        const nextSquares = Squares.slice();
        if(xIsNext) {
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = "O"
        }
        setSquares(nextSquares)
        setxIsNext(!xIsNext)
        console.log(nextSquares)
    }
    const [xIsNext, setxIsNext] = useState(true);
    const [Squares, setSquares] = useState(Array(9).fill(null));

    return(
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}> 
            <Square value={Squares[0]} OnSquareClick= { () => handleClick(0)}/>
            <Square value={Squares[1]} OnSquareClick= { () => handleClick(1)}/> 
            <Square value={Squares[2]} OnSquareClick= { () => handleClick(2)}/>
         </div> 
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Square value={Squares[3]} OnSquareClick= { () => handleClick(3)}/>
            <Square value={Squares[4]} OnSquareClick= { () => handleClick(4)}/>
            <Square value={Squares[5]} OnSquareClick= { () => handleClick(5)}/>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <Square value={Squares[6]} OnSquareClick= { () => handleClick(6)}/>
            <Square value={Squares[7]} OnSquareClick= { () => handleClick(7)}/>
            <Square value={Squares[8]} OnSquareClick= { () => handleClick(8)}/>
         </div>
        </>
    );
}
export default Board;


