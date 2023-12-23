import React from 'react'
// import EventHandling from './eventHandling'

const FirstComponent = ({data, fn}) => {
  return (
    <div>
      <h1>this is first comp</h1>
      {data}
      <button onClick={() => {fn(10)}}>set 10</button>

      {/* <EventHandling /> */}
    </div>
  )
}

export default FirstComponent
