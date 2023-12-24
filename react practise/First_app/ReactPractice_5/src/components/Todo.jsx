import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem';


let count = 0;

const Todo = () => {


    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)
    const add = () => {
        setTodos([...todos, {no:count++, text:inputRef.current.value, display: ""}])
        inputRef.current.value = "";
}

// useEffect(()=> {
//   setTodos(localStorage)
// })

    useEffect(() => {
        console.log(todos)
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])

  return (
    <div>  
      {/* <TodoItem />  */}
      <h1>Todo List</h1>
      <input type='text' ref={inputRef} />
      <button onClick = {()=>{add()}}>Add</button>
      <div>
        {todos.map((item, index) => {return <TodoItem key={index} no={item.no} display = {item.display} text= {item.text} />})}
      </div>
    </div>
  )
}

export default Todo

