import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Foter from './component/Foter'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Product  from './component/Product'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
   <Route path='/' element={ <Home></Home>}></Route> 
    <Route path='home' element={ <Home></Home>}></Route>  
    <Route path='product' element={ <Product></Product>}></Route>             
   </Routes>
   <Foter></Foter>
 
   </>
  )
}

export default App