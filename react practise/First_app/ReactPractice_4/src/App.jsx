import {BrowserRouter, Route, Routes} from "react-router-dom"
// import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Blog from "./pages/Blog"

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/contact" element= {<Contact/>}></Route>
        <Route path="/blogs" element= {<Blog/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
