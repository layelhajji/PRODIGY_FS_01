import { Route, Routes } from "react-router-dom"

import Signup from "./components/auth/signup/Signup.jsx"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Navbar from "./components/navbar/Navbar"
import Login from "./components/auth/login/Login.jsx"
import Dashboard from "./components/dashboard/Dashboard.jsx"



function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      
      
      <Route path="/"  exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services></Services>}/>
      <Route path="/register" element={<Signup></Signup>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/dashboard"  element={<Dashboard/>}/>
      
    </Routes>
    </>
  )
}

export default App
