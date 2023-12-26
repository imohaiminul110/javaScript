import React from "react";
import {BrowserRouter,  Route, Routes } from "react-router-dom"
import Home from "../component/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import Profile from "../component/Profile";

const index = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/profile" element={<Profile />} ></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default index
