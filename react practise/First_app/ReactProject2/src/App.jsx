import React , { useState } from "react"
import MyButton from "./components/FunctComp"
import ClassComp from "./components/ClassComp"
import StateCmpExp from "./components/StateCmpExp"


const App = () =>{
  const [ccount,  setCount] = useState(0);

  const handleClick = () => {
    setCount(ccount + 2);
    console.log(ccount) 
}
  return(
  <>
  <StateCmpExp onClickk={handleClick} countt = {ccount} > </StateCmpExp> 
  <MyButton/>
  <ClassComp/>
  </>
  )
}
export default App