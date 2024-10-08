import { Route, Routes } from "react-router-dom"

import Signup from "./components/auth/signup/Signup.jsx"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Navbar from "./components/navbar/Navbar"
import Login from "./components/auth/login/Login.jsx"



function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      
    <Route path="/register" element={<Signup></Signup>}/>
      <Route path="/"  exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services></Services>}/>
      
      <Route path="/login" element={<Login></Login>}/>
      
      
    </Routes>
    </>
  )
}

export default App
