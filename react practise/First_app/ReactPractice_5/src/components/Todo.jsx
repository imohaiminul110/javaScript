import React, { useEffect, useRef, useState } from 'react'



let count = 0;

const Todo = () => {
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)
    const add = () => {
        setTodos([...todos, {no:count++, text:inputRef.current.value, display: ""}])
        inputRef.current.value = ""
}
    useEffect(() => {
        console.log(todos)
    },[todos])

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' />
      <div onClick={() => {add}}>add</div>
    </div>
  )
}

export default Todo
