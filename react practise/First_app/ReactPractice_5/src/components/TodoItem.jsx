import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import cross from '../assets/cross.png'

const TodoItem = ({no, display, text}) => {
  return (
    <>
    <div>
      <img src={tick} />
      <img src={not_tick} />
      <div>{text}</div>
    </div>
    <div>
        <img src={cross}/>
    </div>
    </>
    
    
  )
}

export default TodoItem
