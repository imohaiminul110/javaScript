import React, { useRef, useState } from 'react'


const USerRef = () => {

    const [data, setData] = useState([])
    const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} type='text'/>
      <button onClick={() => {setData([...data, inputRef.current.value])}} >submit</button>
      {data.map((item, index)=> {return <h2 key = {index}>{item}</h2>})}
    </div>
  )
}

export default USerRef