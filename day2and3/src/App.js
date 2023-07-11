import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Components/Login";
import SignupPage from "./Assets/Components/signup";

import Navbar from "./Assets/Components/Navbar/Navbar";
import Home from "./Assets/Components/Home/Home";



function App()
{
  return(
    <div className="App">
   <BrowserRouter>
    <Routes>
    
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/REG" element={<SignupPage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        
      
  
    </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App